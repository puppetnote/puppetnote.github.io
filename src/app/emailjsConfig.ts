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

/** Sends inquiry mail via EmailJS CDN (template To: puppetnote@naver.com). */
export async function sendInquiry(payload: InquiryPayload): Promise<void> {
  const params: Record<string, string> = {
    from_name: payload.from_name,
    reply_to: payload.reply_to,
    message: payload.message,
  };
  if (payload.phone) params.phone = payload.phone;

  await getEmailJs().send(EMAILJS.serviceId, EMAILJS.templateId, params);
}
