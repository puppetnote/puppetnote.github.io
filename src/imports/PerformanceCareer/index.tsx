import imgPuppetCity from "./puppetcity.png";
import imgDdkt from "./ddkt.png";
import imgCamp from "./camp.png";
import imgBack from "./back.svg";
import imgDivider from "./divider.svg";
import type { Page } from "../../app/types";

interface Props {
  onBack: () => void;
  onSelect: (page: Page) => void;
}

const performances: Array<{
  page: "puppetcity" | "ddkt" | "camp";
  title: string;
  image: string;
  top: number;
}> = [
  { page: "puppetcity", title: "PUPPET CITY", image: imgPuppetCity, top: 183 },
  { page: "ddkt", title: "덩덩쿵따쿵", image: imgDdkt, top: 392 },
  { page: "camp", title: "띠용이와 떠나는 환경캠프", image: imgCamp, top: 601 },
];

export default function PerformanceCareer({ onBack, onSelect }: Props) {
  return (
    <div
      className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full"
      data-name="performance_career"
    >
      <button
        type="button"
        onClick={onBack}
        aria-label="이전 화면"
        className="absolute bg-transparent border-0 cursor-pointer h-[48px] left-0 p-0 top-[8px] w-[48px] z-10"
      >
        <img
          alt=""
          className="absolute h-[15.164px] left-[14px] top-[15px] w-[15.574px]"
          src={imgBack}
        />
      </button>

      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] left-[131px] not-italic text-[#334d99] text-[20px] top-[24px] whitespace-nowrap">
        현대인형극회
      </p>

      <div className="absolute h-px left-[-1px] top-[65px] w-[375px]">
        <img alt="" className="block max-w-none size-full" src={imgDivider} />
      </div>

      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[180.5px] not-italic text-[15px] text-black text-center top-[113.5px] tracking-[-0.15px] uppercase w-[57px]">
        <p className="leading-[1.5]">공연</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[186.5px] not-italic text-[#626262] text-[11px] text-center top-[125px] w-[260px] whitespace-nowrap">
        사진을 클릭하시면 공연 확인이 가능합니다
      </p>

      {performances.map((performance) => (
        <button
          key={performance.page}
          type="button"
          onClick={() => onSelect(performance.page)}
          aria-label={`${performance.title} 상세 보기`}
          className="absolute bg-transparent border-0 cursor-pointer h-[173px] left-[55px] overflow-hidden p-0 rounded-[20px] w-[266px]"
          style={{ top: performance.top }}
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
            src={performance.image}
          />
          <span className="absolute bg-[rgba(255,255,255,0.6)] bottom-[14px] h-[31px] left-[26px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[215px]" />
          <span className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[1.5] left-1/2 not-italic text-[15px] text-black text-center top-[145px] tracking-[-0.15px] uppercase whitespace-nowrap">
            {performance.title}
          </span>
        </button>
      ))}
    </div>
  );
}
