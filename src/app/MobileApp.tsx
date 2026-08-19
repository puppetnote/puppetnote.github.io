import { useState, useEffect, useRef, useCallback } from "react";
import type { Page } from "./types";
import type { HistoryState, Navigate } from "./useHistoryRouter";
import { sendInquiry } from "./emailjsConfig";

// ── Slide images for home banner ────────────────────────────────────────────
import imgSlide1 from "../imports/HomeScreen/c2610f0d812a39e8023eda099011bbbc529b3ff6.png";
import imgSlide2 from "../imports/main_slide2.jpg";
import imgSlide3 from "../imports/main_slide3.jpg";
import imgSlide4 from "../imports/main_slide4.jpg";
import imgSlide5 from "../imports/main_slide5.jpg";

// ── Broadcast carousel images ───────────────────────────────────────────────
import imgBroadcast1 from "../imports/broadcast1.jpg";
import imgBroadcast2 from "../imports/broadcast2.jpg";
import imgBroadcast3 from "../imports/broadcast3.jpg";
import imgBroadcast4 from "../imports/broadcast4.jpg";
import imgBroadcast5 from "../imports/broadcast5.jpg";
import imgBroadcast6 from "../imports/broadcast6.jpg";

// ── Puppetcity images (all 10) ─────────────────────────────────────────────
import imgPuppetcity1 from "../imports/puppetcity1.jpg";
import imgPuppetcity2 from "../imports/puppetcity2.jpg";
import imgPuppetcity3 from "../imports/puppetcity3.jpg";
import imgPuppetcity4 from "../imports/puppetcity4.jpg";
import imgPuppetcity5 from "../imports/puppetcity5.jpg";
import imgPuppetcity6 from "../imports/puppetcity6.jpg";
import imgPuppetcity7 from "../imports/puppetcity7.jpg";
import imgPuppetcity8 from "../imports/puppetcity8.jpg";
import imgPuppetcity9 from "../imports/puppetcity9.jpg";
import imgPuppetcity10 from "../imports/puppetcity10.jpg";

// ── Ddkt images ─────────────────────────────────────────────────────────────
import imgDdkt1 from "../imports/ddkt1.jpg";
import imgDdkt2 from "../imports/ddkt2.jpg";
import imgDdkt3 from "../imports/ddkt3.jpg";
import imgDdkt4 from "../imports/ddkt4.jpg";
import imgDdkt5 from "../imports/ddkt5.jpg";
import imgDdkt6 from "../imports/ddkt6.jpg";
import imgDdkt7 from "../imports/ddkt7.jpg";
import imgDdkt8 from "../imports/ddkt8.jpg";

const img = (name: string) => `/images/${name}.jpg`;
const imgs = (prefix: string, count: number) => Array.from({ length: count }, (_, i) => img(`${prefix}${i + 1}`));
const imgsList = (names: string[]) => names.map(n => img(n));

const HOME_SLIDES = [imgSlide1, imgSlide2, imgSlide3, imgSlide4, imgSlide5];
const BROADCAST_SLIDES = [imgBroadcast1, imgBroadcast2, imgBroadcast3, imgBroadcast4, imgBroadcast5, imgBroadcast6];
const PUPPETCITY_SLIDES = [imgPuppetcity1, imgPuppetcity2, imgPuppetcity3, imgPuppetcity4, imgPuppetcity5, imgPuppetcity6, imgPuppetcity7, imgPuppetcity8, imgPuppetcity9, imgPuppetcity10];
const DDKT_SLIDES = [imgDdkt1, imgDdkt2, imgDdkt3, imgDdkt4, imgDdkt5, imgDdkt6, imgDdkt7, imgDdkt8, img("ddkt9"), img("ddkt10")];
const CAMP_SLIDES = imgs("camp", 10);
const ACADEMY_SLIDES = imgs("academy", 12);
const CUSTOM_SLIDES = imgsList(["custom1", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9"]);
const UK_SLIDES = imgs("uk", 14);
const NZ_SLIDES = imgs("nz", 12);
const TURKEY_SLIDES = imgs("turkey", 5);
const TAIWAN_SLIDES = imgs("taiwan", 2);
const MOSCOW_SLIDES = imgs("moscow", 9);
const LEBANON_SLIDES = imgs("lebanon", 13);
const BULGARIA_SLIDES = imgs("bulgaria", 8);
const XINSHANGHAI_SLIDES = imgs("xinshanghai", 12);
const POLAND_SLIDES = imgs("poland", 4);
const SHANGHAI_SLIDES = imgs("shanghai", 5);
const HONGKONG_SLIDES = imgs("hongkong", 1);
const CZECH_SLIDES = imgs("czech", 2);
const BANGLADESH_SLIDES = imgs("bangladesh", 2);
const HARBIN_SLIDES = imgs("harbin", 5);

// ── Figma page imports (read-only) ──────────────────────────────────────────
import HomeScreen from "../imports/HomeScreen";
import About from "../imports/About";
import About1 from "../imports/About-1";
import History from "../imports/History";
import Awards from "../imports/Awards";
import Broadcast from "../imports/Broadcast";
import Press from "../imports/Press";
import Press1 from "../imports/Press-1";
import Puppetcity from "../imports/Puppetcity";
import Ddkt from "../imports/Ddkt";
import Camp from "../imports/Camp";
import PerformanceCareer from "../imports/PerformanceCareer";
import imgPerformanceBack from "../imports/PerformanceCareer/back.svg";
import OverseasCareer, {
  OVERSEAS_PAGES,
  type OverseasPage,
} from "../imports/OverseasCareer";
import Program from "../imports/Program";
import AcademyCareer from "../imports/AcademyCareer";
import AcademyCareerNew from "../imports/AcademyCareer-2";
import AcademyCareer1 from "../imports/AcademyCareer1";
import AcademyCareer2 from "../imports/AcademyCareer2";
import AcademyGallery from "../imports/AcademyGallery";
import GalleryCustom from "../imports/GalleryCustom";
import GalleryOld, { GALLERY_OLD_GRID, GALLERY_OLD_PHOTOS } from "../imports/GalleryOld";
import GalleryOldViewer from "./GalleryOldViewer";
import UkPage from "../imports/Uk";
import NzPage from "../imports/Nz";
import Taiwan from "../imports/Taiwan";
import Moscow from "../imports/Moscow";
import Lebanon from "../imports/Lebanon";
import Bulgaria from "../imports/Bulgaria";
import Xinshanghai from "../imports/Xinshanghai";
import Poland from "../imports/Poland";
import Shanghai from "../imports/Shanghai";
import Hongkong from "../imports/Hongkong";
import Turkey from "../imports/Turkey";
import Czech from "../imports/Czech";
import Bangladesh from "../imports/Bangladesh";
import Harbin from "../imports/Harbin";
import Books from "../imports/Books";
import News from "../imports/News";
import MapPage from "../imports/Map";
import Contact1 from "../imports/Contact-1";

// ── Figma menu imports ──────────────────────────────────────────────────────
import Menuscreen from "../imports/Menuscreen";
import MenuscreenIntro1 from "../imports/MenuscreenIntro-1";
import MenuscreenPerform from "../imports/MenuscreenPerform";
import MenuscreenAcademy from "../imports/MenuscreenAcademy";
import MenuscreenGallery1 from "../imports/MenuscreenGallery1";
import MenuscreenGallery2 from "../imports/MenuscreenGallery2";
import MenuscreenBooks from "../imports/MenuscreenBooks";
import MenuscreenMap from "../imports/MenuscreenMap";
import MenuscreenNews from "../imports/MenuscreenNews";

// ── Types ───────────────────────────────────────────────────────────────────
type MenuView =
  | "closed" | "main" | "intro" | "perform"
  | "academy" | "gallery1" | "gallery2"
  | "books" | "map" | "news";

// ── Page heights (total content height) ────────────────────────────────────
// Pages at 812 = single-screen Figma frame, no scroll needed
const PAGE_HEIGHTS: Record<Page, number> = {
  home: 1540, about: 1460, history: 6500, awards: 2200,
  broadcast: 812, press: 1120, performance: 812,
  puppetcity: 1450, ddkt: 1340, camp: 2200,
  program: 960, career: 960, career1: 2400, career2: 1650,
  // galleryold: 마지막 썸네일이 1836px에서 끝난다 (아래 여백 64px)
  academygallery: 812, gallerycustom: 812, galleryold: 1900, overseas: 1360,
  uk: 812, nz: 812, taiwan: 812, moscow: 812, lebanon: 812,
  bulgaria: 812, xinshanghai: 812, poland: 812, shanghai: 812,
  hongkong: 812, turkey: 812, czech: 812, bangladesh: 812, harbin: 812,
  books: 1100, news: 812, map: 960,
  contact: 900,
};

// Menu content heights — gallery2 is taller than one screen
const MENU_HEIGHTS: Partial<Record<MenuView, number>> = {
  main: 520,
  intro: 650,
  perform: 600,
  academy: 600,
  gallery1: 590,
  gallery2: 1000,
};

// ── Carousel config for sub-pages ──────────────────────────────────────────
interface CarouselConfig { top: number; left: number; width: number; height: number; images: string[]; }
const OB = { top: 146, left: 16, width: 342, height: 236 };
const CAROUSEL_CONFIGS: Partial<Record<Page, CarouselConfig>> = {
  broadcast:      { top: 146, left: 16, width: 342, height: 236, images: BROADCAST_SLIDES },
  puppetcity:     { top: 101, left: 16, width: 342, height: 207, images: PUPPETCITY_SLIDES },
  ddkt:           { top: 101, left: 16, width: 342, height: 207, images: DDKT_SLIDES },
  camp:           { top: 101, left: 16, width: 342, height: 207, images: CAMP_SLIDES },
  gallerycustom:  { ...OB, images: CUSTOM_SLIDES },
  academygallery: { ...OB, images: ACADEMY_SLIDES },
  uk:             { ...OB, images: UK_SLIDES },
  nz:             { ...OB, images: NZ_SLIDES },
  taiwan:         { ...OB, images: TAIWAN_SLIDES },
  moscow:         { ...OB, images: MOSCOW_SLIDES },
  lebanon:        { ...OB, images: LEBANON_SLIDES },
  bulgaria:       { ...OB, images: BULGARIA_SLIDES },
  xinshanghai:    { ...OB, images: XINSHANGHAI_SLIDES },
  poland:         { ...OB, images: POLAND_SLIDES },
  shanghai:       { ...OB, images: SHANGHAI_SLIDES },
  hongkong:       { ...OB, images: HONGKONG_SLIDES },
  turkey:         { ...OB, images: TURKEY_SLIDES },
  czech:          { ...OB, images: CZECH_SLIDES },
  bangladesh:     { ...OB, images: BANGLADESH_SLIDES },
  harbin:         { ...OB, images: HARBIN_SLIDES },
};

// ── Home banner carousel ────────────────────────────────────────────────────
// Banner at top=89 left=16 w=342 h=352. Auto-advance 4s. Swipe to navigate.
function HomeBannerCarousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);
  const n = HOME_SLIDES.length;

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(c => (c + 1) % n), 4000);
  }, [n]);

  useEffect(() => { restart(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [restart]);

  return (
    <div
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) < 30) return;
        setIdx(c => dx < 0 ? (c + 1) % n : (c - 1 + n) % n);
        restart();
      }}
      style={{ position: "absolute", top: 89, left: 16, width: 342, height: 352, borderRadius: 30, overflow: "hidden", zIndex: 10 }}
    >
      <img src={HOME_SLIDES[idx]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

// ── Sub-page dot carousel — swipe + dots ────────────────────────────────────
function ImageCarousel({ config, pageKey }: { config: CarouselConfig; pageKey: string }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);
  const n = config.images.length;

  const restart = useCallback((count: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (count <= 1) return;
    timerRef.current = setInterval(() => setIdx(c => (c + 1) % count), 4000);
  }, []);

  useEffect(() => {
    setIdx(0); restart(n);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [pageKey, n, restart]);

  const goTo = (i: number) => { setIdx(i); restart(n); };

  return (
    <div
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) < 30) return;
        goTo(dx < 0 ? (idx + 1) % n : (idx - 1 + n) % n);
      }}
      style={{ position: "absolute", top: config.top, left: config.left, width: config.width, height: config.height, borderRadius: 30, overflow: "hidden", zIndex: 10, background: "#e2f0ff" }}
    >
      <img src={config.images[idx]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
      {n > 1 && (
        <div style={{ position: "absolute", bottom: 8, left: 0, width: "100%", display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
          {config.images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: 8, height: 8, borderRadius: "50%", background: i === idx ? "#8AA7FC" : "rgba(255,255,255,0.85)", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Shared input style ───────────────────────────────────────────────────────
const BASE_INPUT: React.CSSProperties = {
  position: "absolute", background: "white", border: "none", outline: "none",
  fontSize: 11, fontFamily: "'Noto Sans KR', sans-serif",
  color: "#333", paddingLeft: 12, boxSizing: "border-box", zIndex: 22,
  borderRadius: 10,
};

// ── Main App ────────────────────────────────────────────────────────────────
interface MobileAppProps {
  page?: Page;
  setPage?: Navigate;
}

export default function MobileApp({ page: pageProp, setPage: setPageProp }: MobileAppProps) {
  const [pageInternal, setPageInternal] = useState<Page>("home");
  const page = pageProp ?? pageInternal;
  const setPage = setPageProp ?? setPageInternal;
  const [menuView, setMenuView] = useState<MenuView>("closed");
  const scrollRef = useRef<HTMLDivElement>(null);
  // 우리가 push한 "메뉴 열림" 히스토리 엔트리를 들고 있는지 여부
  const menuEntryRef = useRef(false);
  // 과거 인형들 확대 보기
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const photoEntryRef = useRef(false);

  // Contact form
  const [cName, setCName] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cMsg, setCMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 375,
  );
  const [vh, setVh] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 812,
  );

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = vw / 375;

  const navigate = useCallback((p: Page) => {
    // 메뉴에서 진입할 때는 메뉴 엔트리를 상세페이지 엔트리로 교체한다.
    // 그래야 상세페이지에서 뒤로가기를 눌렀을 때 메뉴가 아니라 직전 페이지로 돌아간다.
    const replace = menuEntryRef.current || photoEntryRef.current;
    menuEntryRef.current = false;
    photoEntryRef.current = false;
    setPhotoIndex(null);
    setPage(p, { replace });
    setMenuView("closed");
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [setPage]);

  const openPerformanceDetailFromMenu = useCallback((
    detail: "puppetcity" | "ddkt" | "camp",
  ) => {
    // 메뉴 엔트리를 공연 선택 화면으로 교체한 뒤 상세 엔트리를 push한다.
    // 상세에서 브라우저 뒤로가기를 누르면 공연 선택 화면이 나타난다.
    menuEntryRef.current = false;
    setMenuView("closed");
    setPage("performance", { replace: true });
    setPage(detail);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [setPage]);

  const backToPerformance = useCallback(() => {
    const state = window.history.state as HistoryState | null;
    if (state?.from === "performance") {
      window.history.back();
      return;
    }
    // 공유 링크 등 선택 화면을 거치지 않은 상세 진입도 안전하게 선택 화면으로 보낸다.
    setPage("performance", { replace: true });
  }, [setPage]);

  const openOverseasDetailFromMenu = useCallback((detail: OverseasPage) => {
    // 메뉴 엔트리를 해외공연 선택 화면으로 교체한 뒤 상세 엔트리를 쌓는다.
    // 상세에서 브라우저 뒤로가기를 누르면 국가 선택 화면이 나타난다.
    menuEntryRef.current = false;
    setMenuView("closed");
    setPage("overseas", { replace: true });
    setPage(detail);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [setPage]);

  const backToOverseas = useCallback(() => {
    const state = window.history.state as HistoryState | null;
    if (state?.from === "overseas") {
      window.history.back();
      return;
    }
    // 공유 링크 등 선택 화면을 거치지 않은 상세 진입도 국가 선택 화면으로 보낸다.
    setPage("overseas", { replace: true });
  }, [setPage]);

  const openMenu = useCallback(() => {
    // 메뉴 열림도 히스토리 엔트리로 만들어 두면 뒤로가기가 사이트를 벗어나지 않고 메뉴만 닫는다.
    if (!menuEntryRef.current) {
      window.history.pushState(
        { page, menu: "main" } as HistoryState,
        "",
        window.location.href,
      );
      menuEntryRef.current = true;
    }
    setMenuView("main");
  }, [page]);

  // 메뉴 안에서의 화면 전환은 엔트리를 쌓지 않고 교체 → 뒤로가기 한 번에 메뉴가 닫힌다.
  const mv = useCallback((view: MenuView) => {
    if (menuEntryRef.current) {
      window.history.replaceState(
        { page, menu: view } as HistoryState,
        "",
        window.location.href,
      );
    }
    setMenuView(view);
  }, [page]);

  const closeMenu = useCallback(() => {
    if (menuEntryRef.current) {
      menuEntryRef.current = false;
      // 엔트리를 소비해야 히스토리에 죽은 메뉴 엔트리가 남지 않는다. popstate에서 메뉴가 닫힌다.
      window.history.back();
      return;
    }
    setMenuView("closed");
  }, []);

  // 확대 보기도 히스토리 엔트리로 만들어 두면 뒤로가기가 페이지를 벗어나지 않고 사진만 닫는다.
  // 화살표로 사진을 넘길 때는 엔트리를 쌓지 않고 교체한다.
  const showPhoto = useCallback((index: number) => {
    const state: HistoryState = { page, photo: index };
    if (photoEntryRef.current) {
      window.history.replaceState(state, "", window.location.href);
    } else {
      window.history.pushState(state, "", window.location.href);
      photoEntryRef.current = true;
    }
    setPhotoIndex(index);
  }, [page]);

  const closePhoto = useCallback(() => {
    if (photoEntryRef.current) {
      // photoEntryRef / photoIndex는 popstate에서 정리한다.
      window.history.back();
      return;
    }
    setPhotoIndex(null);
  }, []);

  const go = navigate;

  // 뒤로/앞으로 이동 시 메뉴·확대 보기 오버레이 상태를 히스토리 엔트리에 맞춰 되돌린다.
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const state = e.state as HistoryState | null;
      const menu = state?.menu as MenuView | undefined;
      menuEntryRef.current = Boolean(menu);
      setMenuView(menu ?? "closed");

      const photo = typeof state?.photo === "number" ? state.photo : null;
      photoEntryRef.current = photo !== null;
      setPhotoIndex(photo);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // 뒤로가기로 페이지가 바뀐 경우에도 스크롤을 위로 되돌린다.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    // 다른 페이지로 이동하면 확대 보기는 무조건 닫는다.
    if (page !== "galleryold") {
      photoEntryRef.current = false;
      setPhotoIndex(null);
    }
  }, [page]);

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

  // ── Pages ─────────────────────────────────────────────────────────────────
  const renderPage = () => {
    switch (page) {
      case "home":           return <HomeScreen />;
      case "about":          return <About1 />;
      case "history":        return <History />;
      case "awards":         return <Awards />;
      case "broadcast":      return <Broadcast />;
      case "press":          return <Press1 />;
      case "performance":    return (
        <PerformanceCareer
          onBack={() => setPage("home", { replace: true })}
          onSelect={(detail) => navigate(detail)}
        />
      );
      case "overseas":       return (
        <OverseasCareer
          onBack={() => setPage("home", { replace: true })}
          onSelect={(detail) => navigate(detail)}
        />
      );
      case "puppetcity":     return <Puppetcity />;
      case "ddkt":           return <Ddkt />;
      case "camp":           return <Camp />;
      case "program":        return <Program />;
      case "career":         return <AcademyCareerNew />;
      case "career1":        return <AcademyCareer1 />;
      case "career2":        return <AcademyCareer2 />;
      case "academygallery": return <AcademyGallery />;
      case "gallerycustom":  return <GalleryCustom />;
      case "galleryold":     return <GalleryOld />;
      case "uk":             return <UkPage />;
      case "nz":             return <NzPage />;
      case "taiwan":         return <Taiwan />;
      case "moscow":         return <Moscow />;
      case "lebanon":        return <Lebanon />;
      case "bulgaria":       return <Bulgaria />;
      case "xinshanghai":    return <Xinshanghai />;
      case "poland":         return <Poland />;
      case "shanghai":       return <Shanghai />;
      case "hongkong":       return <Hongkong />;
      case "turkey":         return <Turkey />;
      case "czech":          return <Czech />;
      case "bangladesh":     return <Bangladesh />;
      case "harbin":         return <Harbin />;
      case "books":          return <Books />;
      case "news":           return <News />;
      case "map":            return <MapPage />;
      case "contact":        return <Contact1 />;
      default:               return <HomeScreen />;
    }
  };

  // ── Menu screen ───────────────────────────────────────────────────────────
  const renderMenuScreen = () => {
    switch (menuView) {
      case "main":     return <Menuscreen />;
      case "intro":    return <MenuscreenIntro1 />;
      case "perform":  return <MenuscreenPerform />;
      case "academy":  return <MenuscreenAcademy />;
      case "gallery1": return <MenuscreenGallery1 />;
      case "gallery2": return <MenuscreenGallery2 />;
      case "books":    return <MenuscreenBooks />;
      case "map":      return <MenuscreenMap />;
      case "news":     return <MenuscreenNews />;
      default:         return null;
    }
  };

  // ── Menu button overlays ──────────────────────────────────────────────────
  const B = (t: number, l: number, w: number, h: number, fn: () => void, k?: string) => (
    <button key={k ?? `${t}-${l}`} onClick={fn} style={{ position: "absolute", top: t, left: l, width: w, height: h, opacity: 0, cursor: "pointer", zIndex: 110, border: "none", background: "transparent", padding: 0 }} />
  );

  const renderMenuOverlays = () => {
    const closeBtn = B(9, 9, 60, 80, closeMenu, "close");
    switch (menuView) {
      case "main": return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"m1")} {B(153,24,325,47,()=>mv("perform"),"m2")}
        {B(200,24,325,47,()=>mv("academy"),"m3")} {B(247,24,325,47,()=>mv("gallery1"),"m4")}
        {B(294,24,325,47,()=>go("books"),"m5")} {B(341,24,325,47,()=>go("news"),"m6")}
        {B(388,24,325,47,()=>go("map"),"m7")} {B(435,24,325,47,()=>go("contact"),"m8")}
      </>);

      case "intro": return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"i0")}
        {B(164,24,325,25,()=>go("about"),"i1")} {B(189,24,325,25,()=>go("history"),"i2")}
        {B(214,24,325,25,()=>go("awards"),"i3")} {B(239,24,325,25,()=>go("broadcast"),"i4")}
        {B(264,24,325,25,()=>go("press"),"i5")}
        {B(292,24,325,47,()=>mv("perform"),"i6")} {B(339,24,325,47,()=>mv("academy"),"i7")}
        {B(386,24,325,47,()=>mv("gallery1"),"i8")} {B(433,24,325,47,()=>go("books"),"i9")}
        {B(480,24,325,47,()=>go("news"),"i10")} {B(527,24,325,47,()=>go("map"),"i11")}
        {B(574,24,325,47,()=>go("contact"),"i12")}
      </>);

      case "perform": return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"p0")} {B(153,24,325,47,()=>mv("perform"),"p1")}
        {B(211,24,325,25,()=>openPerformanceDetailFromMenu("puppetcity"),"p2")}
        {B(236,24,325,25,()=>openPerformanceDetailFromMenu("ddkt"),"p3")}
        {B(261,24,325,25,()=>openPerformanceDetailFromMenu("camp"),"p4")}
        {B(294,24,325,47,()=>mv("academy"),"p5")} {B(341,24,325,47,()=>mv("gallery1"),"p6")}
        {B(388,24,325,47,()=>go("books"),"p7")} {B(435,24,325,47,()=>go("news"),"p8")}
        {B(482,24,325,47,()=>go("map"),"p9")} {B(529,24,325,47,()=>go("contact"),"p10")}
      </>);

      case "academy": return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"a0")} {B(153,24,325,47,()=>mv("perform"),"a1")}
        {B(200,24,325,47,()=>mv("academy"),"a2")}
        {B(258,24,325,25,()=>go("program"),"a3")} {B(283,24,325,25,()=>go("career"),"a4")}
        {B(308,24,325,25,()=>go("academygallery"),"a5")}
        {B(341,24,325,47,()=>mv("gallery1"),"a6")} {B(388,24,325,47,()=>go("books"),"a7")}
        {B(435,24,325,47,()=>go("news"),"a8")} {B(482,24,325,47,()=>go("map"),"a9")}
        {B(529,24,325,47,()=>go("contact"),"a10")}
      </>);

      case "gallery1": return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"g0")} {B(153,24,325,47,()=>mv("perform"),"g1")}
        {B(200,24,325,47,()=>mv("academy"),"g2")} {B(247,25,325,47,()=>mv("gallery1"),"g3")}
        {B(305,25,325,25,()=>go("gallerycustom"),"g4")} {B(330,25,325,25,()=>go("galleryold"),"g5")}
        {B(355,25,325,25,()=>mv("gallery2"),"g6")}
        {B(379,24,325,47,()=>go("books"),"g7")} {B(426,24,325,47,()=>go("news"),"g8")}
        {B(473,24,325,47,()=>go("map"),"g9")} {B(520,24,325,47,()=>go("contact"),"g10")}
      </>);

      case "gallery2": { const Bs = 379; return (<>{closeBtn}
        {B(106,24,325,47,()=>mv("intro"),"h0")} {B(153,24,325,47,()=>mv("perform"),"h1")}
        {B(200,24,325,47,()=>mv("academy"),"h2")} {B(247,25,325,47,()=>mv("gallery1"),"h3")}
        {B(305,25,325,25,()=>go("gallerycustom"),"h4")} {B(330,25,325,25,()=>go("galleryold"),"h5")}
        {/* 해외공연 재클릭 → gallery1로 복귀 */}
        {B(355,25,325,25,()=>mv("gallery1"),"h6")}
        {B(Bs+11,25,325,25,()=>openOverseasDetailFromMenu("uk"),"h7")} {B(Bs+36,25,325,25,()=>openOverseasDetailFromMenu("nz"),"h8")}
        {B(Bs+61,25,325,25,()=>openOverseasDetailFromMenu("taiwan"),"h9")} {B(Bs+86,25,325,25,()=>openOverseasDetailFromMenu("moscow"),"h10")}
        {B(Bs+111,25,325,25,()=>openOverseasDetailFromMenu("lebanon"),"h11")} {B(Bs+136,25,325,25,()=>openOverseasDetailFromMenu("bulgaria"),"h12")}
        {B(Bs+161,25,325,25,()=>openOverseasDetailFromMenu("xinshanghai"),"h13")} {B(Bs+186,25,325,25,()=>openOverseasDetailFromMenu("poland"),"h14")}
        {B(Bs+211,25,325,25,()=>openOverseasDetailFromMenu("shanghai"),"h15")} {B(Bs+236,25,325,25,()=>openOverseasDetailFromMenu("hongkong"),"h16")}
        {B(Bs+261,25,325,25,()=>openOverseasDetailFromMenu("turkey"),"h17")} {B(Bs+286,25,325,25,()=>openOverseasDetailFromMenu("bangladesh"),"h18")}
        {B(Bs+311,25,325,25,()=>openOverseasDetailFromMenu("czech"),"h19")} {B(Bs+336,25,325,25,()=>openOverseasDetailFromMenu("harbin"),"h20")}
        {B(768,25,325,47,()=>go("books"),"h22")} {B(815,25,325,47,()=>go("news"),"h23")}
        {B(862,25,325,47,()=>go("map"),"h24")} {B(909,25,325,47,()=>go("contact"),"h25")}
      </>); }

      default: return <>{closeBtn}</>;
    }
  };

  // ── Page overlays ─────────────────────────────────────────────────────────
  const renderPageOverlays = () => {
    const btn = (t: number, l: number | undefined, w: number, h: number, fn: () => void, r?: number) => (
      <button onClick={fn} style={{ position: "absolute", top: t, left: l, right: r, width: r !== undefined ? undefined : w, height: h, opacity: 0, cursor: "pointer", zIndex: 40, border: "none", background: "transparent", padding: 0 }} />
    );

    if (page === "home") return (
      <>
        {/* Hamburger — left=16 top=29 in Figma */}
        {btn(20, 10, 36, 36, openMenu)}
        {/* Logo → home */}
        {btn(18, 110, 160, 40, () => go("home"))}
        {/* 소개 보기 pill (+0.5cm / 19px from overlap fix) */}
        {btn(802, 17, 119, 27, () => go("about"))}
        {/* 출판서적 section */}
        {btn(889, 16, 355, 200, () => go("books"))}
        {/* 오시는길 title area */}
        {btn(1129, 16, 200, 50, () => go("map"))}
        {/* 길찾기 pill */}
        {btn(1238, 17, 119, 36, () => window.open("https://map.naver.com/p/directions/-/14106319.378079282,4534598.78464235,%ED%98%84%EB%8C%80%EC%9D%B8%ED%98%95%EA%B7%B9%ED%9A%8C,,/-/transit?", "_blank"))}
        {/* 지도에서 보기 pill */}
        {btn(1238, 156, 119, 36, () => window.open("https://naver.me/FgEoAAF5", "_blank"))}
        {/* 문의 section */}
        {btn(1349, 16, 355, 80, () => go("contact"))}
      </>
    );

    if (page === "performance" || page === "overseas") {
      return (
        <>
          {/* Figma 화면의 화살표는 PerformanceCareer 컴포넌트가 직접 처리한다. */}
          {btn(18, 110, 160, 40, () => go("home"))}
        </>
      );
    }

    if (page === "puppetcity" || page === "ddkt" || page === "camp") {
      return (
        <>
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 18,
              left: 6,
              width: 40,
              height: 36,
              background: "#fff",
              zIndex: 39,
            }}
          />
          <button
            type="button"
            onClick={backToPerformance}
            aria-label="공연 목록으로 돌아가기"
            style={{
              position: "absolute",
              top: 8,
              left: 0,
              width: 48,
              height: 48,
              zIndex: 40,
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              alt=""
              src={imgPerformanceBack}
              style={{
                position: "absolute",
                top: 15,
                left: 14,
                width: 15.574,
                height: 15.164,
              }}
            />
          </button>
          {btn(18, 110, 160, 40, () => go("home"))}
        </>
      );
    }

    if ((OVERSEAS_PAGES as readonly Page[]).includes(page)) {
      return (
        <>
          {/* Figma 페이지에 그려진 장식용 화살표를 가리고, 동작하는 화살표만 남긴다. */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 18,
              left: 6,
              width: 40,
              height: 36,
              background: "#fff",
              zIndex: 39,
            }}
          />
          <button
            type="button"
            onClick={backToOverseas}
            aria-label="해외공연 목록으로 돌아가기"
            style={{
              position: "absolute",
              top: 8,
              left: 0,
              width: 48,
              height: 48,
              zIndex: 40,
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              alt=""
              src={imgPerformanceBack}
              style={{
                position: "absolute",
                top: 15,
                left: 14,
                width: 15.574,
                height: 15.164,
              }}
            />
          </button>
          {btn(18, 110, 160, 40, () => go("home"))}
        </>
      );
    }

    return (
      <>
        {/* Cover Figma back-arrow + show same hamburger as home */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 18,
            left: 6,
            width: 40,
            height: 36,
            background: "#fff",
            zIndex: 39,
          }}
        />
        <button
          type="button"
          onClick={openMenu}
          aria-label="메뉴"
          style={{
            position: "absolute",
            top: 20,
            left: 10,
            width: 36,
            height: 36,
            zIndex: 40,
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
            <line x1="1" y1="1" x2="21" y2="1" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="8" x2="21" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="15" x2="21" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {/* Logo → home */}
        {btn(18, 110, 160, 40, () => go("home"))}
        {/* AcademyCareer-2 card click areas: first card top=186, second top=576 */}
        {page === "career" && <>{btn(186,55,266,340,()=>go("career1"))}{btn(576,55,266,340,()=>go("career2"))}</>}
        {/* Books purchase link buttons (positions from Figma) */}
        {page === "books" && <>
          {btn(333, 47, 109, 19, () => window.open("https://product.kyobobook.co.kr/detail/S000000661978", "_blank"))}
          {btn(333, 226, 109, 19, () => window.open("https://product.kyobobook.co.kr/detail/S000000661979", "_blank"))}
          {btn(583, 50, 109, 19, () => window.open("https://product.kyobobook.co.kr/detail/S000000661977", "_blank"))}
          {btn(583, 229, 109, 19, () => window.open("https://product.kyobobook.co.kr/detail/S000000660954", "_blank"))}
          {btn(829, 49, 109, 23, () => window.open("https://product.kyobobook.co.kr/detail/S000000660967", "_blank"))}
          {btn(829, 228, 109, 19, () => window.open("https://product.kyobobook.co.kr/detail/S000001155666", "_blank"))}
        </>}
        {/* 과거 인형들 썸네일 — 누르면 확대 보기가 열린다 */}
        {page === "galleryold" && GALLERY_OLD_PHOTOS.map((_, i) => (
          <button
            key={`doll-${i}`}
            type="button"
            onClick={() => showPhoto(i)}
            aria-label={`과거 인형 사진 ${i + 1} 크게 보기`}
            style={{
              position: "absolute",
              top: GALLERY_OLD_GRID.top + Math.floor(i / GALLERY_OLD_GRID.columns) * GALLERY_OLD_GRID.stepY,
              left: GALLERY_OLD_GRID.left + (i % GALLERY_OLD_GRID.columns) * GALLERY_OLD_GRID.stepX,
              width: GALLERY_OLD_GRID.width,
              height: GALLERY_OLD_GRID.height,
              opacity: 0,
              zIndex: 40,
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
        {/* Map page navigation buttons */}
        {page === "map" && <>
          {btn(392, 58, 119, 36, () => window.open("https://map.naver.com/p/directions/-/14106319.378079282,4534598.78464235,%ED%98%84%EB%8C%80%EC%9D%B8%ED%98%95%EA%B7%B9%ED%9A%8C,,/-/transit?", "_blank"))}
          {btn(392, 197, 119, 36, () => window.open("https://naver.me/FgEoAAF5", "_blank"))}
        </>}
      </>
    );
  };

  // ── Contact form overlay (on top of Contact-1 Figma design) ──────────────
  // Contact-1 Frame: left=30 top=208 w=304 h=482
  // Fields (page-absolute positions):
  //   성함      top=258 left=48 w=267 h=43
  //   휴대폰   top=315 left=48 w=267 h=43
  //   이메일   top=369 left=48 w=267 h=43
  //   내용작성  top=423 left=48 w=267 h=189
  //   보내기   top=631 left=172 w=143 h=43
  const renderContactForm = () => {
    if (page !== "contact") return null;
    return (
      <form onSubmit={sendEmail} style={{ position: "absolute", top: 0, left: 0, zIndex: 22, pointerEvents: "none" }}>
        {formStatus === "error" && (
          <div style={{ position: "absolute", top: 210, left: 30, width: 304, background: "#ffe6e6", borderRadius: 10, padding: "10px 16px", textAlign: "center", color: "#c91818", fontSize: 12, fontWeight: 600, pointerEvents: "none", zIndex: 25 }}>
            전송에 실패했습니다. 다시 시도해주세요.
          </div>
        )}
        <input
          name="from_name"
          value={cName}
          onChange={(e) => setCName(e.target.value)}
          placeholder="성함"
          required
          style={{ ...BASE_INPUT, top: 258, left: 48, width: 267, height: 43, pointerEvents: "auto" }}
        />
        <input
          name="phone"
          value={cPhone}
          onChange={(e) => setCPhone(e.target.value)}
          placeholder="휴대폰 번호"
          style={{ ...BASE_INPUT, top: 315, left: 48, width: 267, height: 43, pointerEvents: "auto" }}
        />
        <input
          name="reply_to"
          value={cEmail}
          onChange={(e) => setCEmail(e.target.value)}
          placeholder="이메일"
          type="email"
          required
          style={{ ...BASE_INPUT, top: 369, left: 48, width: 267, height: 43, pointerEvents: "auto" }}
        />
        <textarea
          name="message"
          value={cMsg}
          onChange={(e) => setCMsg(e.target.value)}
          placeholder="내용작성"
          required
          style={{ ...BASE_INPUT, top: 423, left: 48, width: 267, height: 189, padding: "10px 12px", resize: "none", pointerEvents: "auto" } as React.CSSProperties}
        />
        <button
          type="submit"
          disabled={sending}
          style={{
            position: "absolute",
            top: 631,
            left: 172,
            width: 143,
            height: 43,
            background: sending ? "rgba(57, 93, 199, 0.95)" : "transparent",
            border: "none",
            borderRadius: 30,
            cursor: sending ? "not-allowed" : "pointer",
            zIndex: 23,
            pointerEvents: "auto",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {sending ? "전송 중..." : ""}
        </button>
      </form>
    );
  };

  const pageHeight = PAGE_HEIGHTS[page];
  const carouselConfig = CAROUSEL_CONFIGS[page];
  const menuH = MENU_HEIGHTS[menuView] ?? 812;
  const photoOpen = page === "galleryold" && photoIndex !== null;
  // 화면이 낮으면 260px 프레임이 잘리므로 Figma의 145px 대신 세로 중앙에 놓는다.
  const photoTop = Math.max(8, Math.min(GALLERY_OLD_GRID.top, (vh / scale - 260) / 2));

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        html, body, #root { height: 100%; margin: 0; overflow: hidden; background: #fff; }
        #scroll-inner::-webkit-scrollbar { display: none; }
        /* 전체화면 페이지 프레임만 모서리 제거 — 배너/썸네일 둥글기는 유지 */
        .mobile-shell [class*="size-full"][class*="rounded-[30px]"] {
          border-radius: 0 !important;
        }
        .mobile-shell [class*="size-full"][class*="border-[#e6e6e6]"] {
          border-color: transparent !important;
        }
        .mobile-shell [data-name="Banner Container"] {
          overflow: hidden !important;
        }
        /* 확대 보기 중에는 뒤쪽 썸네일만 흐리게 — 제목/헤더는 그대로 둔다 */
        .mobile-shell.photo-open [data-name="Banner Container"] {
          opacity: 0.6;
        }
        /* 오버레이 화살표를 쓰는 상세 페이지에서는 Figma 원본 화살표를 숨긴다 */
        .mobile-shell.overlay-back [data-name="Vector"] {
          visibility: hidden !important;
        }
      `}</style>

      <div
        className={[
          "mobile-shell",
          photoOpen ? "photo-open" : "",
          (
            page === "puppetcity" ||
            page === "ddkt" ||
            page === "camp" ||
            (OVERSEAS_PAGES as readonly Page[]).includes(page)
          ) ? "overlay-back" : "",
        ].filter(Boolean).join(" ")}
        style={{
          width: "100vw",
          height: "100dvh",
          overflow: "hidden",
          background: "#fff",
          position: "relative",
        }}
      >
        <div
          id="scroll-inner"
          ref={scrollRef}
          style={{
            width: "100%",
            height: "100%",
            overflowY: photoOpen ? "hidden" : "auto",
            overflowX: "hidden",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          <div style={{ width: "100%", height: pageHeight * scale, position: "relative" }}>
            <div
              style={{
                width: 375,
                height: pageHeight,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                {renderPage()}
              </div>
              {page === "home" && <HomeBannerCarousel />}
              {carouselConfig && (
                <>
                  <div style={{ position: "absolute", top: carouselConfig.top, left: carouselConfig.left, width: carouselConfig.width, height: carouselConfig.height, borderRadius: 30, background: "white", zIndex: 9 }} />
                  <ImageCarousel config={carouselConfig} pageKey={page} />
                </>
              )}
              {renderPageOverlays()}
              {renderContactForm()}
            </div>
          </div>
        </div>

        {/* 확대 보기 — 스크롤 위치와 무관하게 화면 안에 머물도록 뷰포트에 띄운다 */}
        {photoOpen && photoIndex !== null && (
          <div style={{ position: "absolute", inset: 0, zIndex: 60 }}>
            <div
              style={{
                width: 375,
                height: vh / scale,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <GalleryOldViewer
                photos={GALLERY_OLD_PHOTOS}
                index={photoIndex}
                top={photoTop}
                onSelect={showPhoto}
                onClose={closePhoto}
              />
            </div>
          </div>
        )}

        {menuView !== "closed" && (
          <div
            style={{ position: "absolute", inset: 0, zIndex: 100, overflowY: "auto", background: "#fff" }}
            onClick={closeMenu}
          >
            <div style={{ width: "100%", height: menuH * scale, position: "relative" }} onClick={(e) => e.stopPropagation()}>
              <div
                style={{
                  width: 375,
                  height: menuH,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                {renderMenuScreen()}
                {renderMenuOverlays()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
