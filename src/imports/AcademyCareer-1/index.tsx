import svgPaths from "./svg-4sfxgll914";
import imgYeyoungsook1 from "./6c1e4515edb1f78c3034e94316a446f7b97a7b43.png";
import imgRectangle423 from "./b5dfa36a6e4cd6b283a11f3c8cedc693da6ed10a.png";

function Group() {
  return (
    <div className="absolute contents left-[63px] top-[180px]">
      <div className="absolute h-[285.545px] left-[63px] top-[180px] w-[257.629px]" data-name="yeyoungsook 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115%] left-[-1.26%] max-w-none top-[-4.93%] w-[101.97%]" src={imgYeyoungsook1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[63px] top-[180px]">
      <Group />
      <div className="absolute bg-[#ffe38e] h-[39px] left-[81px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[448px] w-[215px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[189px] not-italic text-[15px] text-black text-center top-[468px] tracking-[-0.15px] uppercase w-[104px]">
        <p className="leading-[1.5]">여영숙 원장</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[54px] top-[179px]">
      <div className="absolute bg-[#fff7de] h-[328px] left-[55px] rounded-[20px] top-[186px] w-[266px]" />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[54px] top-[575px]">
      <div className="absolute h-[328px] left-[55px] rounded-[20px] top-[576px] w-[266px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[108.36%] left-[-0.14%] max-w-none top-[0.05%] w-full" src={imgRectangle423} />
        </div>
      </div>
      <div className="absolute bg-white h-[39px] left-[83px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[833px] w-[215px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[191px] not-italic text-[15px] text-black text-center top-[853px] tracking-[-0.15px] uppercase w-[104px]">
        <p className="leading-[1.5]">조윤진 대표</p>
      </div>
    </div>
  );
}

export default function AcademyCareer() {
  return (
    <div className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full" data-name="academy_career">
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
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[180.5px] not-italic text-[15px] text-black text-center top-[113.5px] tracking-[-0.15px] uppercase w-[57px]">
        <p className="leading-[1.5]">강의경력</p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[186.5px] not-italic text-[#626262] text-[11px] text-center top-[125px] w-[203px]">사진을 클릭하시면 경력 확인이 가능합니다</p>
      <div className="absolute h-[15.164px] left-[14px] top-[31px] w-[15.574px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
          <path d={svgPaths.p8d01e00} fill="var(--fill-0, #395DC7)" id="Vector" />
        </svg>
      </div>
      <Group2 />
      <Group3 />
    </div>
  );
}