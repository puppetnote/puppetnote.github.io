import imgUk from "./uk.png";
import imgTaiwan from "./taiwan.png";
import imgMoscow from "./moscow.png";
import imgLebanon from "./lebanon.png";
import imgBulgaria from "./bulgaria.png";
import imgXinshanghai from "./xinshanghai.png";
import imgPoland from "./poland.png";
import imgShanghai from "./shanghai.png";
import imgHongkong from "./hongkong.png";
import imgBangladesh from "./bangladesh.png";
import imgCzech from "./czech.png";
import imgHarbin from "./harbin.png";
import imgBack from "../PerformanceCareer/back.svg";
import imgDivider from "../PerformanceCareer/divider.svg";
import type { Page } from "../../app/types";

export type OverseasPage =
  | "uk"
  | "nz"
  | "taiwan"
  | "moscow"
  | "lebanon"
  | "bulgaria"
  | "xinshanghai"
  | "poland"
  | "shanghai"
  | "hongkong"
  | "turkey"
  | "bangladesh"
  | "czech"
  | "harbin";

interface Props {
  onBack: () => void;
  onSelect: (page: OverseasPage) => void;
}

export const OVERSEAS_PAGES: readonly OverseasPage[] = [
  "uk",
  "nz",
  "taiwan",
  "moscow",
  "lebanon",
  "bulgaria",
  "xinshanghai",
  "poland",
  "shanghai",
  "hongkong",
  "turkey",
  "bangladesh",
  "czech",
  "harbin",
];

export const OVERSEAS_TITLES: Record<OverseasPage, string> = {
  uk: "영국 프린지 페스티벌",
  nz: "뉴질랜드",
  taiwan: "대만",
  moscow: "모스크바",
  lebanon: "레바논",
  bulgaria: "불가리아",
  xinshanghai: "중국 신천지",
  poland: "폴란드",
  shanghai: "상하이",
  hongkong: "홍콩",
  turkey: "터키",
  bangladesh: "방글라데시",
  czech: "체코",
  harbin: "하얼빈",
};

const CARD_IMAGES: Partial<Record<OverseasPage, string>> = {
  uk: imgUk,
  nz: "/images/nz1.jpg",
  taiwan: imgTaiwan,
  moscow: imgMoscow,
  lebanon: imgLebanon,
  bulgaria: imgBulgaria,
  xinshanghai: imgXinshanghai,
  poland: imgPoland,
  shanghai: imgShanghai,
  hongkong: imgHongkong,
  turkey: "/images/turkey1.jpg",
  bangladesh: imgBangladesh,
  czech: imgCzech,
  harbin: imgHarbin,
};

const CARD_WIDTH = 151.488;
const CARD_HEIGHT = 140;
const CARD_LEFT = [31, 204];
const FIRST_ROW_TOP = 181;
const ROW_GAP = 27;

export default function OverseasCareer({ onBack, onSelect }: Props) {
  return (
    <div
      className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full"
      data-name="overseas_career"
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

      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[185.5px] text-[15px] text-black text-center top-[109.5px] tracking-[-0.15px] uppercase w-[57px]">
        <p className="leading-[1.5]">해외공연</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[191.5px] text-[#626262] text-[11px] text-center top-[121px] w-[260px] whitespace-nowrap">
        사진을 클릭하시면 공연 확인이 가능합니다
      </p>

      {OVERSEAS_PAGES.map((page, index) => {
        const image = CARD_IMAGES[page];
        const row = Math.floor(index / 2);
        const column = index % 2;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onSelect(page)}
            aria-label={`${OVERSEAS_TITLES[page]} 공연 상세 보기`}
            className="absolute border-0 cursor-pointer overflow-hidden p-0 rounded-[20px]"
            style={{
              top: FIRST_ROW_TOP + row * (CARD_HEIGHT + ROW_GAP),
              left: CARD_LEFT[column],
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              background: image ? "#fff" : "#ffecec",
            }}
          >
            {image && (
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                src={image}
              />
            )}
            <span className="absolute bg-[rgba(255,255,255,0.6)] bottom-[6px] left-[8px] min-h-[25.145px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[135px]" />
            <span className="-translate-x-1/2 absolute flex items-center justify-center font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.2] left-1/2 text-[10px] text-black text-center bottom-[10px] tracking-[-0.12px] uppercase w-[127px]">
              {OVERSEAS_TITLES[page]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Page 타입과 목록이 어긋나면 빌드에서 잡히도록 유지한다.
const _typeCheck: readonly Page[] = OVERSEAS_PAGES;
void _typeCheck;
