import svgPaths from "./svg-a9xc4df3u6";
import imgBannerContainer from "./61aa345b64adcd07029cde4c24e995e2b9ef92e6.png";

function BannerContainer() {
  return (
    <div className="absolute h-[236px] left-[16px] pointer-events-none rounded-[30px] top-[146px] w-[342px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[30px] size-full" src={imgBannerContainer} />
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 rounded-[30px]" />
    </div>
  );
}

export default function Hongkong() {
  return (
    <div className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full" data-name="hongkong">
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
        <p className="leading-[1.5]">홍콩</p>
      </div>
      <div className="absolute h-[15.164px] left-[14px] top-[31px] w-[15.574px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
          <path d={svgPaths.p8d01e00} fill="var(--fill-0, #395DC7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}