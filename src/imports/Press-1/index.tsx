import svgPaths from "./svg-p6lcgr7ci6";
import imgBannerContainer from "./a11e1a07fef5891d3414a894140a1627485528b5.png";
import imgBannerContainer1 from "./74854fb423f8f09dedaae9714f92ef2f00dee28c.png";
import imgBannerContainer2 from "./503b3136a3902442e297f1a79a39318c52ed9239.png";

function BannerContainer() {
  return (
    <div className="absolute h-[223px] left-[50px] pointer-events-none top-[147px] w-[262px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgBannerContainer} />
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0" />
    </div>
  );
}

function BannerContainer1() {
  return (
    <div className="absolute h-[223px] left-[89px] pointer-events-none top-[491px] w-[262px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgBannerContainer1} />
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0" />
    </div>
  );
}

function BannerContainer2() {
  return (
    <div className="absolute h-[223px] left-[30px] pointer-events-none top-[850px] w-[262px]" data-name="Banner Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgBannerContainer2} />
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0" />
    </div>
  );
}

export default function Press() {
  return (
    <div className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full" data-name="press">
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
      <BannerContainer1 />
      <BannerContainer2 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Merriweather:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[180.5px] text-[15px] text-black text-center top-[113.5px] tracking-[-0.15px] uppercase w-[57px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">보도자료</p>
      </div>
      <div className="absolute h-[15.164px] left-[14px] top-[31px] w-[15.574px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
          <path d={svgPaths.p8d01e00} fill="var(--fill-0, #395DC7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}