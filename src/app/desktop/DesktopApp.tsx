import { useState, useEffect, useRef, type ReactNode } from "react";
import type { Page, NavSection } from "../types";
import { sendInquiry } from "../emailjsConfig";
import { HISTORY_PC, AWARDS_PC, CAREER1_PC, CAREER2_PC } from "./contentData";
import imgYeo from "../../imports/AcademyCareer-2/6c1e4515edb1f78c3034e94316a446f7b97a7b43.png";
import imgCho from "../../imports/AcademyCareer-2/b5dfa36a6e4cd6b283a11f3c8cedc693da6ed10a.png";
import "./desktop.css";

const img = (name: string) => `/images/${name}.jpg`;
const imgs = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => img(`${prefix}${i + 1}`));
const imgsList = (names: string[]) => names.map((n) => img(n));

const HOME_SLIDES = [
  img("main_slide1"),
  img("main_slide2"),
  img("main_slide3"),
  img("main_slide4"),
  img("main_slide5"),
];
const BOOK_COVERS = imgs("books", 6);
const CAMP_SLIDES = imgs("camp", 10);
const ACADEMY_SLIDES = imgs("academy", 12);
const CUSTOM_SLIDES = imgsList([
  "custom1", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9",
]);
const DOLL_SLIDES = imgs("doll", 40);
const BROADCAST_SLIDES = imgs("broadcast", 6);
const PRESS_SLIDES = imgs("press", 3);
const PUPPETCITY_SLIDES = imgs("puppetcity", 10);
const DDKT_SLIDES = imgs("ddkt", 10);

const OVERSEAS: Record<string, { title: string; images: string[] }> = {
  uk: { title: "영국", images: imgs("uk", 7) },
  nz: { title: "뉴질랜드", images: [] },
  taiwan: { title: "대만", images: imgs("taiwan", 2) },
  moscow: { title: "모스크바", images: imgs("moscow", 9) },
  lebanon: { title: "레바논", images: imgs("lebanon", 13) },
  bulgaria: { title: "불가리아", images: imgs("bulgaria", 8) },
  xinshanghai: { title: "중국 신천지", images: imgs("xinshanghai", 12) },
  poland: { title: "폴란드", images: imgs("poland", 4) },
  shanghai: { title: "상하이", images: imgs("shanghai", 5) },
  hongkong: { title: "홍콩", images: imgs("hongkong", 1) },
  turkey: { title: "터키", images: [] },
  bangladesh: { title: "방글라데시", images: imgs("bangladesh", 2) },
  czech: { title: "체코", images: imgs("czech", 2) },
  harbin: { title: "하얼빈", images: imgs("harbin", 5) },
};

const NAV_DIRS =
  "https://map.naver.com/p/directions/-/14106319.378079282,4534598.78464235,%ED%98%84%EB%8C%80%EC%9D%B8%ED%98%95%EA%B7%B9%ED%9A%8C,,/-/transit?";
const NAV_MAP = "https://naver.me/FgEoAAF5";

const BOOK_LINKS = [
  { title: "탈인형 제작법과 연기론", desc: "탈인형 제작 방법과 탈인형을 이용한 연기론", img: BOOK_COVERS[0], url: "https://product.kyobobook.co.kr/detail/S000000661978" },
  { title: "손인형 제작법과 연기론", desc: "손인형 제작법과 연기론을 다룬 이론서", img: BOOK_COVERS[1], url: "https://product.kyobobook.co.kr/detail/S000000661979" },
  { title: "장대인형 제작법과 연기론", desc: "장대인형 제작과 연기에 대한 입문서", img: BOOK_COVERS[4], url: "https://product.kyobobook.co.kr/detail/S000000660967" },
  { title: "그림자 인형 제작법과 표현론", desc: "그림자 인형극을 제작하면서 필요한 배경이나 인물의 예시가 포함되어 있음", img: BOOK_COVERS[5], url: "https://product.kyobobook.co.kr/detail/S000001155666" },
  { title: "내일 수업을 위한 오늘 인형만들기", desc: "스토리텔링 교수매체로써의 인형 활용서를 담아낸 책", img: BOOK_COVERS[2], url: "https://product.kyobobook.co.kr/detail/S000000661977" },
  { title: "여영숙 창작 극본집", desc: "여영숙 창작 극본집 (인형극 역할극 연극대본)", img: BOOK_COVERS[3], url: "https://product.kyobobook.co.kr/detail/S000000660954" },
];

const ACTIVE_SECTION: Partial<Record<Page, NavSection>> = {
  about: "intro", history: "intro", awards: "intro", broadcast: "intro", press: "intro",
  puppetcity: "perform", ddkt: "perform", camp: "perform",
  program: "academy", career: "academy", career1: "academy", career2: "academy", academygallery: "academy",
  gallerycustom: "gallery", galleryold: "gallery",
  uk: "gallery", nz: "gallery", taiwan: "gallery", moscow: "gallery", lebanon: "gallery",
  bulgaria: "gallery", xinshanghai: "gallery", poland: "gallery", shanghai: "gallery",
  hongkong: "gallery", turkey: "gallery", czech: "gallery", bangladesh: "gallery",
  harbin: "gallery",
  books: "books", contact: "contact", news: "news", map: "map",
};

function Carousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const n = images.length;

  useEffect(() => {
    setIdx(0);
  }, [images]);

  useEffect(() => {
    if (n <= 1) return;
    const id = setInterval(() => setIdx((c) => (c + 1) % n), 4000);
    return () => clearInterval(id);
  }, [images, n, idx]);

  if (!n) {
    return <div className="desktop-placeholder">이미지 준비 중</div>;
  }

  return (
    <div className="desktop-carousel">
      <img src={images[idx]} alt="" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      {n > 1 && (
        <div className="desktop-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={i === idx ? "on" : ""}
              onClick={() => setIdx(i)}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TitlePage({
  title, images, children, active,
}: { title: string; images?: string[]; children?: ReactNode; active?: NavSection }) {
  return (
    <div className="desktop-page" data-active={active ?? ""}>
      <h1 className="desktop-title">{title}</h1>
      {images && <Carousel images={images} />}
      {children}
    </div>
  );
}

const CAMP_TEXT = `특수 조명을 이용하여 
손과 발 머리만 보여지는 성훈이의 등장으로 막을 연다. 
이 장면은 학원생활에 지친 요즘 우리의 아이들을 대변하는 인물로서 
바쁘고 지친 모습을 음악적인 요소와 함께 재미있게 펼쳐나간다. 

이때 엄마의 신나는 제안! 
환경캠프에 참여하게 된 성훈이는 캠프에서 띠용이를 만나게 되는데... 

띠용이의 사회로 진행되는 캠프는 블랙라이트와 FOLLOW 라이트의 
흑백효과를 살려 인형들의 움직임과 연기에 신비감을 준다. 
이것은 어린이들의 호기심을 유발시켜 
상상력 개발에 도움을 주고자 했다.

세계적으로도 환경이라는 주제는 
우리에게는 앞으로의 당면 과제로 풀어야 할 숙제라는 
인식을 가지고 있다. 
자라나는 아이들에게 이런 문제에 대한 가르침을 
학교 수업에서 받아들여지는 거부감 대신에 
공연 문화 속에서 느껴지는 즐거움으로 승화시켜 제공한다. 

쓰레기를 함부로 버려 자신이 버린 쓰레기들로 이루어져 
몸이 점점 커지는 쓰레기 괴물에게 당하는 띠용이. 
하지만 곧 꿈속이라는 사실을 알게 되고 띠용이는 다시는 쓰레기를 함부로 버려서는 안된다는 생각을 하게 된다. 
이에 아이들은 주위에서 간과하였던 사물들의 존재들을 
하나하나 인형친구로 인식 하게 되고 거부감 없이 그냥 버렸던 물건들도 재활용하게 된다. 

인형들의 움직임도 정교하고 재미 있지만 재활용으로 만들어진 인형들의 모습은 우리에게 아주 낯익은 친근감을 안겨 준다. 

또한 공연으로만 끝나 시각적으로의 즐거움만 주는 것이 아닌 배움의 장도 마련한다. 신문지로 만든 춤추는 인형, 트럼펫을 부는 우유팩 인형, 다 쓴 휴지로 만든 휴지관 인형, 깡통 로봇 등 다양한 재활용 인형들이 등장하고 재활용을 통한 인형의 창조물을 본 아이들은 우리 자원을 아껴 쓰고 다시 이용해야 한다는 것을 배우게 된다. 

띠용이는 아이들에게 공연 문화로 맛볼 수 있는 
환상과 상상의 나래를 펼칠 수 있도록 도와주며 더 나아가 부모들과 함께 할 수 있게 하는 공연 문화의 문화 캐릭터로 자리잡을 것이다. 

신기하고 재미난 인형들의 연기로 어린이들은 악기와 친숙해져 가고 
어린이들의 음악적인 감수성을 개발시키는데 예술적인 방법을 연출하는 것은 독특하다 못해 독창적이다. 

멋진 환경캠프의 열기는 더해지고 어린이들은 점점 환경캠프의 주인공으로 동화되면서 인형이 연주하는 악기에서 흘러나오는 음악은 
어느새 어린이들을 훌륭한 연주자로 만들어 버린다.`;

const PUPPETCITY_TEXT = `SBS 스타킹 출연!!
체코 프라하 국제인형극 축제 최고 연기상 수상!!
2010 고양 호수 축제 최우수상 수상!!
영국 프린지 페스티발 한달 기획공연!!
2011-2013,2014,2016 전국문예회관 우수 공연 선정!!

2000년도 정동극장에서 출발한 이 공연은 연이은 매진으로 
신선한 충격을 주었으며 아이들보다는 어른이 더 만족하는 새로운 개념의 가족문화로 그 시작을 알리게 되었습니다.

특히 넌버벌로 진행 되는 인형들의 콘서트는 한국인 뿐만 아니라 
해외 외국인들에게도 큰 반향을 일으켰습니다.
2006년 영국의 에딘버러 프린지 페스티발에서 "a korean fantasy"로 한달간의 기획공연을 통해 그 세계화를 입증하였으며 훈련된 연기자들은 한국을 넘어 인형의 나라 체코, 폴란드, 뉴질랜드, 불가리아, 그리스, 방글라데시, 일본, 중국 등 수많은 해외 공연으로 거듭났습니다.

이러한 새로운 도전에 걸맞게 인형들 대부분을 특허로 관리하여 독자적이면서도 기술적인 능력을 공식 인정 받았습니다.
콘서트 형식의 진행으로 어른들과 아이 가족 모두가 즐길 수 있는 무대를 만들었으며 57년된 본 극회만의 노하우로 탄생된 인형 기술은 한국과 해외 관객으로 하여금 기립 박수와 감탄을 자아 내게 했습니다.

여러 가지 인형들이 쉴새없이 등장 하는 공연 특징과 누구나 볼 수 있다는 강점으로 2010년 고양 호수 축제에서 야외 공연으로 당당히 연극, 뮤지컬, 국악, 넌버벌 퍼포먼스, 클래식 등 60여개의 다양한 장르 중 최고의 관객 평가로 최우수상을 거머쥐고 
일반 관객들에게 공식적인 인정을 받았습니다.

어린이의 전유물에서 탈피하여 어른과 아이가 함께 공유 할 수 있는 무대, 그리고 한국인 뿐만 아니라 세계시장에서도 손색이 없는 무대를 위해 현대인형극회와 "줄 인형 콘서트"는 계속 될것입니다.`;

const DDKT_TEXT = `2011년 SBS 스타킹 출연!
한국 최초 특허 받은 국악인형극!
2010 고양 호수 예술 축제 61개 타 장르 공연 중 최우수상 수상!
체코 세계인형극제 – 최고 연기상 수상!

엿장수가 극을 이끌어 가는 춤과 노래의 이야기로 아이들과 함께 
우리나라의 전통 소리와 악기를 소개 해주는 공연입니다.
처음부터 전통 음악과 악기소개라는 교육적 목표를 앞세우지 말고 자연스럽게 극을 이끌어 가면서 아이들이 접할 수 있도록 하였으며 악기소리와 명칭, 그리고 음악 소리가 전해주는 이미지를 아이들이 
스스로 느낄 수 있도록 하면서도 동시에 짧고 코믹한 드라마의 구성으로 
아이들이 재미있게 감상 할 수 있도록 하였습니다.

엿장수 라는 인물은 극의 흐름을 이끌어 가지만 아이들과 함께 
반응을 유도 하면서 호흡 하는 것이 목적이며 자칫 감상만으로 그쳤을 때 집중도가 짧은 아이들의 산만함을 방지 하기 위하여 반복적이면서도 
아이들의 반응을 유도 할 수 있는 
여러가지 슬래스틱 코믹 액션을 집어 넣어 함께 하는 공연으로의 
완성도를 높여주었습니다.

또한 엿장수는 인형극 전문 성우이자 각종 미디어 방송매체에서 활발하게 활동 하고 있는 김영진 성우의 목소리이고 
국악 음악은 경기도립국악단이, 음악은 박병오 씨가 작곡하였습니다.`;

const ABOUT_TEXT = `1961년 KBSTV개국과 함께 창단되어 
63년간 장인의 사명감을 가지고 어린이들을 위한 상상력과 
창의력 향상을 위한 교육 콘텐츠를 개발·적용하며 한길로만 걸어온 
현대인형극회는 한국 방송 인형극계를 이끌어 온 산 증인이다. 

KBS 인형극 '부리부리박사'를 비롯해 '짱구박사', 'TV 유치원', '혼자서도 잘해요' 등 인형극을 통해 모든 이들에게 꿈과 희망을 심어주었으며, 
MBC, EBS, SBS TV 등에서도 많은 프로그램을 진행해 오면서 
인형극의 명맥을 이어왔다. 

60여년의 기술과 경험을 토대로 무대공연에 주력해서 아동의 전유물로 여겨지던 인형극을 모든 연령층이 누릴 수 있는 가족문화로서의 
자리매김하고자 노력하고 있다. 

현대인형극회만이 가지고 있는 독특한 구성의 대표작으로
 "띠용이와 떠나는 환경캠프", "코리아 환타지", "조용석 줄 인형 콘서트", "사계", "크리스마스의 꿈", "부르노의 그림일기", "돌아온 부리부리 박사", "PUPPET CITY" 등이 있다. 

2008년도를 시작으로 2010년도까지 경기도 국악당의 인형극팀으로 
국악인형극 "덩덩쿵따쿵"으로 1년간 수요 상설 공연을 진행해
6개월간의 매진 기록을 세웠으며

연이어 "피리인형 떼루떼루"라는 상설인형극을 진행 했다. 
이를 바탕으로 2011년 까지 국립 국악원에서 
"덩덩쿵따쿵", "피리인형 떼루떼루"를 공연하여 
국악인형극이라는 새로운 장르를 정착시켰다. 

2010 고양 호수 예술 축제 61개 공연 중 최우수상을 수상 하면서 많은 사랑을 받았고
2011년과 2012년은 2년간 전국 문예회관  우수공연에 선정되었다.
2012년엔 여수 세계 박람회에 인형극으론 유일하게 공식 초청되었다.

한국뿐 아니라 체코, 터키, 불가리아, 영국 등 해외 공연에서 
최고의 연기자 상을 타는 등 해외 공연에서의 
한국 인형극의 저력을 보여 주고 있다.`;

const HOME_ABOUT = `현대인형극회는 1961년 KBS TV 개국과 함께 창단되어 
63년간 어린이들에게 꿈과 희망을 전해온 
한국 방송 인형극계의 산증인입니다. 
'부리부리박사' 등 다수의 방송 인형극과 
"덩덩쿵따쿵" 등 국악인형극으로 
새로운 장르를 개척했으며
체코, 터키, 불가리아, 영국 등 해외 공연에서 최고 연기자상을 수상하며 
한국 인형극의 저력을 세계에 알려왔습니다.`;

const PROGRAM_STEPS = [
  { title: "사전 미팅", desc: "사전에 일정, 대본, 인형제작, 공연에 대해 조율" },
  { title: "대본", desc: "원하는 주제에 맞게 대본을 제작, 여러번의 협의를 거쳐 최종 대본을 완성" },
  { title: "녹음", desc: "완성된 대본으로 전문 성우와 스튜디오에서 녹음 작업, 의뢰자도 같이 참석하여 협의" },
  { title: "인형제작", desc: "대본 내용에 맞게 인형 제작, 경우에 따라 무대, 조명도 같이 제작" },
  { title: "연출 연기 연습", desc: "대본, 녹음된 자료로 연기 지도" },
  { title: "공연 마무리 리허설", desc: "최종 공연 마무리로 리허설 준비" },
];

function Timeline({
  title,
  entries,
}: {
  title: string;
  entries: { year: string; items: string[] }[];
}) {
  return (
    <TitlePage title={title}>
      <div className="desktop-timeline">
        {entries.map((row) => (
          <div className="desktop-timeline-row" key={`${row.year}-${row.items[0]?.slice(0, 12) ?? ""}`}>
            <div className="desktop-timeline-year">{row.year}</div>
            <ul className="desktop-timeline-items">
              {row.items.map((item, i) => (
                <li key={`${row.year}-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TitlePage>
  );
}

function CareerDetail({
  name,
  photo,
  yeo,
  items,
}: {
  name: string;
  photo: string;
  yeo?: boolean;
  items: string[];
}) {
  return (
    <TitlePage title="강의 경력">
      <p className="desktop-subtitle">
        출강 문의는 홈페이지의 &lt;문의&gt; 창에서 문의하실 수 있습니다.
      </p>
      <div className="desktop-career-detail">
        <div className="desktop-career-profile">
          <div className={`avatar${yeo ? " yeo" : ""}`}>
            <img src={photo} alt={name} />
          </div>
          <span className={`name-pill${yeo ? "" : " alt"}`}>{name}</span>
        </div>
        <ul className="desktop-career-list">
          {items.map((item, i) => (
            <li key={`${i}-${item.slice(0, 24)}`}>{item}</li>
          ))}
        </ul>
      </div>
    </TitlePage>
  );
}

interface Props {
  page: Page;
  setPage: (p: Page) => void;
}

export default function DesktopApp({ page, setPage }: Props) {
  const [mega, setMega] = useState(false);
  const [abroadOpen, setAbroadOpen] = useState(false);
  const [bookStart, setBookStart] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  const [cName, setCName] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cMsg, setCMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const go = (p: Page) => {
    setPage(p);
    setMega(false);
    setAbroadOpen(false);
    window.scrollTo(0, 0);
  };

  const active = ACTIVE_SECTION[page] ?? null;

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFormStatus("idle");
    try {
      await sendInquiry({
        from_name: cName,
        phone: cPhone,
        reply_to: cEmail,
        message: cMsg,
      });
      setFormStatus("success");
      setCName("");
      setCPhone("");
      setCEmail("");
      setCMsg("");
      alert("문의가 성공적으로 전달되었습니다!");
    } catch {
      setFormStatus("error");
      alert("전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("puppetnote@naver.com");
      alert("이메일 주소가 복사되었습니다.");
    } catch {
      alert("puppetnote@naver.com");
    }
  };

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMega(false);
        setAbroadOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const navItems: { key: NavSection; label: string; action: () => void }[] = [
    { key: "intro", label: "소개", action: () => setMega(true) },
    { key: "perform", label: "공연", action: () => setMega(true) },
    { key: "academy", label: "아카데미", action: () => setMega(true) },
    { key: "gallery", label: "갤러리", action: () => setMega(true) },
    { key: "books", label: "출판서적", action: () => go("books") },
    { key: "contact", label: "문의", action: () => go("contact") },
    { key: "news", label: "공연소식", action: () => go("news") },
    { key: "map", label: "오시는길", action: () => go("map") },
  ];

  const renderHome = () => {
    const visibleBooks = BOOK_COVERS.slice(bookStart, bookStart + 4);
    return (
      <div className="desktop-page">
        <div style={{ marginTop: 18 }}>
          <Carousel images={HOME_SLIDES} />
        </div>
        <h2 className="desktop-section-title" style={{ marginTop: 56, cursor: "default" }}>현대인형극회는</h2>
        <p className="desktop-body left">{HOME_ABOUT}</p>
        <div style={{ margin: "28px 0 0 27px" }}>
          <button className="desktop-pill" onClick={() => go("about")}>소개 보기</button>
        </div>

        <h2 className="desktop-section-title" onClick={() => go("books")}>출판서적</h2>
        <div className="desktop-books-row">
          {visibleBooks.map((src, i) => (
            <button key={src} className="desktop-book-card" onClick={() => go("books")} style={{ border: "none", padding: 0, cursor: "pointer" }}>
              <img src={src} alt={`book ${bookStart + i + 1}`} />
            </button>
          ))}
          <button
            className="desktop-chevron-btn"
            onClick={() => setBookStart((s) => (s + 1) % Math.max(1, BOOK_COVERS.length - 3))}
            aria-label="next books"
          >
            ›
          </button>
        </div>

        <button className="desktop-section-title" onClick={() => go("map")}>
          오시는길 <span aria-hidden>›</span>
        </button>
        <div className="desktop-address">
          <span className="desktop-pin" aria-hidden />
          주소: 경기도 고양시 일산서구 송포로197번길 61
        </div>
        <div className="desktop-map-actions">
          <button className="desktop-pill lg" onClick={() => window.open(NAV_DIRS, "_blank")}>길찾기</button>
          <button className="desktop-pill lg dark" onClick={() => window.open(NAV_MAP, "_blank")}>지도에서 보기</button>
        </div>

        <button className="desktop-section-title" onClick={() => go("contact")}>
          문의 <span aria-hidden>›</span>
        </button>
      </div>
    );
  };

  const renderPage = () => {
    if (page === "home") return renderHome();

    if (page === "about") {
      return (
        <TitlePage title="현대인형극회는" images={[img("main_slide1")]}>
          <p className="desktop-body left" style={{ marginTop: 48 }}>{ABOUT_TEXT}</p>
        </TitlePage>
      );
    }

    if (page === "history") {
      return <Timeline title="현대인형극회 걸어온 자취" entries={HISTORY_PC} />;
    }

    if (page === "awards") {
      return <Timeline title="수상내역" entries={AWARDS_PC} />;
    }

    if (page === "broadcast") {
      return <TitlePage title="방송출연" images={BROADCAST_SLIDES} />;
    }

    if (page === "press") {
      return <TitlePage title="보도자료" images={PRESS_SLIDES} />;
    }

    if (page === "puppetcity") {
      return (
        <TitlePage title="Puppet City" images={PUPPETCITY_SLIDES}>
          <p className="desktop-body center">{PUPPETCITY_TEXT}</p>
        </TitlePage>
      );
    }

    if (page === "ddkt") {
      return (
        <TitlePage title="덩덩쿵따쿵" images={DDKT_SLIDES}>
          <p className="desktop-body center">{DDKT_TEXT}</p>
        </TitlePage>
      );
    }

    if (page === "camp") {
      return (
        <TitlePage title="띠용이와 떠나는 환경캠프" images={CAMP_SLIDES}>
          <p className="desktop-body center">{CAMP_TEXT}</p>
        </TitlePage>
      );
    }

    if (page === "program") {
      return (
        <TitlePage title="프로그램 제작">
          <div className="desktop-program">
            {PROGRAM_STEPS.map((s, i) => (
              <div key={s.title} className="desktop-step">
                <div className="num">{i + 1}</div>
                <div className="step-body">
                  <h4>{s.title}</h4>
                  <div className="rule" />
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </TitlePage>
      );
    }

    if (page === "career") {
      return (
        <TitlePage title="강의 경력">
          <p className="desktop-body center" style={{ fontSize: 16, marginTop: -8 }}>
            사진을 클릭하시면 경력 확인이 가능합니다
          </p>
          <div className="desktop-career-grid">
            <button className="desktop-career-card" onClick={() => go("career1")}>
              <div className="photo yeo">
                <img src={imgYeo} alt="여영숙 원장" />
              </div>
              <span className="label">여영숙 원장</span>
            </button>
            <button className="desktop-career-card alt" onClick={() => go("career2")}>
              <div className="photo">
                <img src={imgCho} alt="조윤진 대표" />
              </div>
              <span className="label">조윤진 대표</span>
            </button>
          </div>
        </TitlePage>
      );
    }

    if (page === "career1") {
      return (
        <CareerDetail name="여영숙 원장" photo={imgYeo} yeo items={CAREER1_PC} />
      );
    }

    if (page === "career2") {
      return (
        <CareerDetail name="조윤진 대표" photo={imgCho} items={CAREER2_PC} />
      );
    }

    if (page === "academygallery") {
      return <TitlePage title="아카데미 갤러리" images={ACADEMY_SLIDES} />;
    }

    if (page === "gallerycustom") {
      return <TitlePage title="주문제작" images={CUSTOM_SLIDES} />;
    }

    if (page === "galleryold") {
      return (
        <TitlePage title="과거인형들">
          <div className="desktop-gallery-grid">
            {DOLL_SLIDES.map((src) => (
              <figure key={src}>
                <img src={src} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
        </TitlePage>
      );
    }

    if (page in OVERSEAS) {
      const o = OVERSEAS[page as keyof typeof OVERSEAS];
      return <TitlePage title={o.title} images={o.images} />;
    }

    if (page === "books") {
      return (
        <TitlePage title="출판서적">
          <div className="desktop-books-grid">
            {BOOK_LINKS.map((b) => (
              <div key={b.title} className="desktop-book-item">
                <img src={b.img} alt={b.title} />
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
                <button className="desktop-pill outline" onClick={() => window.open(b.url, "_blank")}>
                  {b.title} 구입링크
                </button>
              </div>
            ))}
          </div>
        </TitlePage>
      );
    }

    if (page === "news") {
      return (
        <TitlePage title="공연소식">
          <p className="desktop-body center">
            최신 공연 소식은 문의 또는 이메일로 안내드립니다.{"\n"}
            puppetnote@naver.com
          </p>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button className="desktop-pill" onClick={copyEmail}>이메일 주소 복사</button>
          </div>
        </TitlePage>
      );
    }

    if (page === "map") {
      return (
        <TitlePage title="오시는길" images={[img("logo2")]}>
          <div className="desktop-address" style={{ justifyContent: "center", fontSize: 28, marginTop: 40 }}>
            <span className="desktop-pin" aria-hidden />
            주소: 경기도 고양시 일산서구 송포로197번길 61
          </div>
          <div className="desktop-map-actions" style={{ justifyContent: "center" }}>
            <button className="desktop-pill lg" onClick={() => window.open(NAV_DIRS, "_blank")}>길찾기</button>
            <button className="desktop-pill lg dark" onClick={() => window.open(NAV_MAP, "_blank")}>지도에서 보기</button>
          </div>
          <div className="desktop-body center" style={{ marginTop: 64, color: "#1a334d" }}>
            <strong style={{ fontSize: 28 }}>오시는길</strong>{"\n\n"}
            3호선 대화역 출구로 나온후 관리자와 연락{"\n"}
            방문시 사전 시간예약 필수{"\n\n"}
            <strong>주차정보</strong>{"\n"}
            대중교통이용. 3호선 대화역에서 내린뒤 버스이용{"\n\n"}
            <strong>전화번호</strong>{"\n"}
            02-2690-4890{"\n\n"}
            <strong>사업자정보</strong>{"\n"}
            상호명 현대인형극회{"\n\n"}
            <strong>이메일</strong>{"\n"}
            puppetnote@naver.com
          </div>
        </TitlePage>
      );
    }

    if (page === "contact") {
      return (
        <TitlePage title="문의">
          <p className="desktop-body center" style={{ fontSize: 15, maxWidth: 440, marginTop: -8 }}>
            홈페이지의 &lt;문의하기&gt;로 문의 주시면 신속하게 답변 드리겠습니다.{"\n"}
            (작성하신 이메일로 답변이 전송될 예정입니다)
          </p>
          <form className="desktop-contact-form" onSubmit={sendEmail}>
            <h3>문의하기</h3>
            {formStatus === "error" && (
              <p style={{ color: "#c91818", textAlign: "center", marginBottom: 12 }}>
                전송에 실패했습니다. 다시 시도해주세요.
              </p>
            )}
            <div className="desktop-field short">
              <input
                name="from_name"
                value={cName}
                onChange={(e) => setCName(e.target.value)}
                placeholder="성함"
                required
              />
            </div>
            <div className="desktop-field short">
              <input
                name="phone"
                value={cPhone}
                onChange={(e) => setCPhone(e.target.value)}
                placeholder="휴대폰 번호"
              />
            </div>
            <div className="desktop-field short">
              <input
                name="reply_to"
                value={cEmail}
                onChange={(e) => setCEmail(e.target.value)}
                placeholder="이메일"
                type="email"
                required
              />
            </div>
            <div className="desktop-field tall">
              <textarea
                name="message"
                value={cMsg}
                onChange={(e) => setCMsg(e.target.value)}
                placeholder="내용작성"
                required
              />
            </div>
            <div className="submit-row">
              <button type="submit" disabled={sending}>
                {sending ? "전송 중..." : "보내기"}
              </button>
            </div>
          </form>
          <p className="desktop-body center" style={{ fontSize: 24 }}>
            잦은 강의 출강으로 통화가 어려울 수 있습니다.{"\n"}
            홈페이지의 &lt;문의하기&gt;로 문의 주시면 신속하게 답변 드리겠습니다.
          </p>
          <p className="desktop-body center" style={{ fontWeight: 600, fontSize: 32, marginTop: 16 }}>
            전화문의 - 010-4783-5237
          </p>
          <p className="desktop-body center" style={{ fontWeight: 600, fontSize: 32, marginTop: 24 }}>
            <button
              onClick={copyEmail}
              style={{ background: "none", border: "none", font: "inherit", fontWeight: 600, cursor: "pointer", color: "inherit" }}
            >
              이메일 문의 - puppetnote@naver.com
            </button>
          </p>
        </TitlePage>
      );
    }

    return renderHome();
  };

  return (
    <div className="desktop-root">
      <header className="desktop-nav" ref={navRef} style={{ position: "sticky" }}>
        <button className="desktop-logo" onClick={() => go("home")}>현대인형극회</button>
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`desktop-nav-item${active === item.key ? " active" : ""}`}
            onClick={item.action}
            onMouseEnter={() => {
              if (item.key === "intro" || item.key === "perform" || item.key === "academy" || item.key === "gallery") {
                setMega(true);
              }
            }}
          >
            {item.label}
          </button>
        ))}

        {mega && (
          <div className="desktop-mega">
            <div className="desktop-mega-tabs">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className={active === item.key ? "active" : ""}
                  style={active === item.key ? { fontWeight: 800 } : undefined}
                  onClick={() => {
                    if (item.key === "books" || item.key === "contact" || item.key === "news" || item.key === "map") {
                      item.action();
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="desktop-mega-body">
              <div className="desktop-mega-col">
                <button className="desktop-mega-link" onClick={() => go("about")}>소개</button>
                <button className="desktop-mega-link" onClick={() => go("history")}>연혁</button>
                <button className="desktop-mega-link" onClick={() => go("awards")}>수상내역</button>
                <button className="desktop-mega-link" onClick={() => go("broadcast")}>방송출연</button>
                <button className="desktop-mega-link" onClick={() => go("press")}>보도자료</button>
              </div>
              <div className="desktop-mega-col">
                <button className="desktop-mega-link" onClick={() => go("puppetcity")}>Puppet City</button>
                <button className="desktop-mega-link" onClick={() => go("ddkt")}>덩덩쿵따쿵</button>
                <button className="desktop-mega-link" onClick={() => go("camp")}>띠용이와 떠나는 환경캠프</button>
              </div>
              <div className="desktop-mega-col">
                <button className="desktop-mega-link" onClick={() => go("program")}>프로그램</button>
                <button className="desktop-mega-link" onClick={() => go("career")}>강의경력</button>
                <button className="desktop-mega-link" onClick={() => go("academygallery")}>아카데미</button>
              </div>
              <div className="desktop-mega-col">
                <button className="desktop-mega-link" onClick={() => go("gallerycustom")}>주문제작</button>
                <button className="desktop-mega-link" onClick={() => go("galleryold")}>과거인형들</button>
                <button className="desktop-mega-link expand" onClick={() => setAbroadOpen((v) => !v)}>
                  해외공연 <span style={{ transform: abroadOpen ? "rotate(90deg)" : undefined, display: "inline-block" }}>›</span>
                </button>
                {abroadOpen && (
                  <div className="desktop-abroad">
                    {(Object.keys(OVERSEAS) as (keyof typeof OVERSEAS)[]).map((key) => (
                      <button key={key} onClick={() => go(key as Page)}>{OVERSEAS[key].title}</button>
                    ))}
                  </div>
                )}
              </div>
              <div className="desktop-mega-col" />
              <div className="desktop-mega-col" />
              <div className="desktop-mega-col" />
              <div className="desktop-mega-col" />
            </div>
          </div>
        )}
      </header>
      {renderPage()}
    </div>
  );
}
