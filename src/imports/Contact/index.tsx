import svgPaths from "./svg-tysmv9eled";

function Group() {
  return (
    <div className="absolute contents left-[18px] top-[50px]">
      <div className="absolute bg-white h-[43px] left-[18px] rounded-[10px] top-[50px] w-[267px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[30px] not-italic text-[#626262] text-[11px] top-[58px] w-[203px]">성함</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[18px] top-[107px]">
      <div className="absolute bg-white h-[43px] left-[18px] rounded-[10px] top-[107px] w-[267px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[30px] not-italic text-[#626262] text-[11px] top-[115px] w-[203px]">휴대폰 번호</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[18px] top-[161px]">
      <div className="absolute bg-white h-[43px] left-[18px] rounded-[10px] top-[161px] w-[267px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[30px] not-italic text-[#626262] text-[11px] top-[169px] w-[203px]">이메일</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[18px] top-[215px]">
      <div className="absolute bg-white h-[189px] left-[18px] rounded-[10px] top-[215px] w-[267px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-[30px] not-italic text-[#626262] text-[11px] top-[226px] w-[203px]">내용작성</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[142px] top-[423px]">
      <div className="absolute bg-[#9eb5ff] h-[43px] left-[142px] rounded-[20px] top-[423px] w-[143px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[27px] left-[189px] not-italic text-[16px] text-white top-[431px] w-[60px]">보내기</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#e6ecff] h-[482px] left-[30px] overflow-clip rounded-[10px] top-[208px] w-[304px]">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Merriweather:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[151.5px] text-[15px] text-black text-center top-[24.5px] tracking-[-0.15px] uppercase w-[57px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">문의하기</p>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-white border border-[#e6e6e6] border-solid overflow-clip relative rounded-[30px] size-full" data-name="contact">
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
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Merriweather:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[180.5px] text-[15px] text-black text-center top-[113.5px] tracking-[-0.15px] uppercase w-[57px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5]">문의</p>
      </div>
      <div className="absolute h-[15.164px] left-[14px] top-[31px] w-[15.574px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 15.1635">
          <path d={svgPaths.p8d01e00} fill="var(--fill-0, #395DC7)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium h-[92px] leading-[0] left-[30px] not-italic text-[#626262] text-[11px] top-[764px] w-[313px] whitespace-pre-wrap">
        <p className="leading-[27px] mb-0">잦은 강의 출강으로 통화가 어려울 수 있습니다.</p>
        <p className="leading-[27px] mb-0">{`홈페이지의 <문의하기>로  문의 주시면 신속하게 답변 드리겠습니다.`}</p>
        <p className="leading-[27px]">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium h-[126px] leading-[0] left-[32px] not-italic text-[#626262] text-[0px] top-[132px] w-[313px] whitespace-pre-wrap">
        <p className="leading-[27px] mb-0 text-[11px]">{`홈페이지의 <문의하기>로  문의 주시면 신속하게 답변 드리겠습니다.`}</p>
        <p className="leading-[27px] text-[10px]">{`(작성하신 이메일로 답변이 전송될 예정입니다) `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-[30px] not-italic text-[#626262] text-[15px] top-[730px] w-[203px]">전화문의 - 010-4783-5237</p>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-[30px] not-italic text-[#626262] text-[15px] top-[846px] w-[290px]">이메일 문의 - puppetnote@naver.com</p>
      <Frame />
    </div>
  );
}