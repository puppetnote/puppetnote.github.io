import svgPaths from "./svg-fmxf7ivo4l";
import imgBannerContainer from "./4d850e62d29911a9401b73c211d8e04e80a27642.png";

function Group() {
  return (
    <div className="absolute h-[8px] left-[101px] top-[217px] w-[140px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 8">
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
          <circle cx="114" cy="4" fill="var(--fill-0, white)" id="Ellipse 345_2" r="4" />
          <circle cx="125" cy="4" fill="var(--fill-0, white)" id="Ellipse 346_2" r="4" />
          <circle cx="136" cy="4" fill="var(--fill-0, white)" id="Ellipse 347" r="4" />
        </g>
      </svg>
    </div>
  );
}

function BannerContainer() {
  return (
    <div className="absolute h-[236px] left-[16px] rounded-[30px] top-[146px] w-[342px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgBannerContainer} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

export default function Lebanon() {
  return (
    <div className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full" data-name="lebanon">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] left-[131px] not-italic text-[#334d99] text-[20px] top-[24px] whitespace-nowrap">현대인형극회</p>
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
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Merriweather:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[186.5px] text-[15px] text-black text-center top-[105.5px] tracking-[-0.15px] uppercase w-[117px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">레바논</p>
      </div>
      <div className="absolute h-[15.164px] left-[14px] top-[31px] w-[15.574px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
          <path d={svgPaths.p8d01e00} fill="var(--fill-0, #395DC7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}