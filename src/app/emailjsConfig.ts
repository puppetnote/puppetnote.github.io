/** EmailJS (CDN: @emailjs/browser@3) — keys from dashboard */

declare global {
  interface Window {
    emailjs?: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, string>,
      ) => Promise<unknown>;
    };
  }
}

export const EMAILJS = {
  serviceId: "service_4od141g",
  templateId: "template_4wztoq8",
  publicKey: "RmY1GW6XjllauEmJp",
} as const;

export type InquiryPayload = {
  from_name: string;
  reply_to: string;
  message: string;
  phone?: string;
};

function getEmailJs() {
  const api = window.emailjs;
  if (!api?.send) {
    throw new Error("EmailJS CDN이 로드되지 않았습니다.");
  }
  return api;
}

/**
 * Sends inquiry mail via EmailJS.
 * Template variables used: from_name, phone, reply_to, email, message
 * (email === reply_to for templates that use {{email}})
 *
 * Also embeds phone/email into `message` so they appear even if the
 * EmailJS dashboard template only shows {{from_name}} / {{message}}.
 */
export async function sendInquiry(payload: InquiryPayload): Promise<void> {
  const phone = (payload.phone ?? "").trim();
  const email = payload.reply_to.trim();
  const name = payload.from_name.trim();
  const body = payload.message.trim();

  const messageWithContact = [
    body,
    "",
    "----------",
    `성함: ${name}`,
    `전화번호: ${phone || "(미입력)"}`,
    `이메일: ${email}`,
  ].join("\n");

  await getEmailJs().send(EMAILJS.serviceId, EMAILJS.templateId, {
    from_name: name,
    phone: phone || "(미입력)",
    reply_to: email,
    email,
    message: messageWithContact,
  });
}
