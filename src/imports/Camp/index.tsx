import imgBannerContainer from "./e2c3d16d5216f62b6f5472c12354ca46bf86436c.png";
import { CAMP_BODY_LINES, CAMP_PAGE_TITLE, CAMP_SHOW_TITLE } from "../../app/campCopy";

function Group() {
  return (
    <div className="absolute h-[8px] left-[117px] top-[190px] w-[107px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 8">
        <g id="Group 123550">
          <circle cx="4" cy="4" fill="var(--fill-0, #8AA7FC)" id="Ellipse 341" r="4" />
          <circle cx="15" cy="4" fill="var(--fill-0, white)" id="Ellipse 342" r="4" />
          <circle cx="26" cy="4" fill="var(--fill-0, white)" id="Ellipse 343" r="4" />
          <circle cx="37" cy="4" fill="var(--fill-0, white)" id="Ellipse 344" r="4" />
          <circle cx="48" cy="4" fill="var(--fill-0, white)" id="Ellipse 345" r="4" />
          <circle cx="59" cy="4" fill="var(--fill-0, white)" id="Ellipse 346" r="4" />
          <circle cx="70" cy="4" fill="var(--fill-0, white)" id="Ellipse 341_2" r="4" />
          <circle cx="81" cy="4" fill="var(--fill-0, white)" id="Ellipse 342_2" r="4" />
          <circle cx="92" cy="4" fill="var(--fill-0, white)" id="Ellipse 343_2" r="4" />
          <circle cx="103" cy="4" fill="var(--fill-0, white)" id="Ellipse 344_2" r="4" />
        </g>
      </svg>
    </div>
  );
}

function BannerContainer() {
  return (
    <div className="absolute h-[207px] left-[16px] overflow-hidden rounded-[30px] top-[101px] w-[342px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgBannerContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

export default function Camp() {
  return (
    <div className="bg-white relative size-full" data-name="camp">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] left-[131px] not-italic text-[#334d99] text-[20px] top-[24px] whitespace-nowrap">
        {CAMP_PAGE_TITLE}
      </p>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Merriweather:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[186.5px] text-[15px] text-black text-center top-[347.5px] tracking-[-0.15px] uppercase w-[280px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[1.5]">{CAMP_SHOW_TITLE}</p>
      </div>
      <div className="absolute flex h-px items-center justify-center left-[-1px] top-[65px] w-[375px]">
        <div className="flex-none rotate-[-0.15deg]">
          <div className="h-0 relative w-[375.001px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375.001 0.5">
                <line id="Line 158" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="375.001" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <BannerContainer />
      <div className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-[30px] not-italic text-[#626262] text-[11px] top-[396px] w-[327px] whitespace-pre-wrap">
        {CAMP_BODY_LINES.map((line, i, arr) => (
          <p key={i} className={i === arr.length - 1 ? "leading-[27px]" : "leading-[27px] mb-0"}>
            {line === "" ? "\u00A0" : line}
          </p>
        ))}
      </div>
    </div>
  );
}
