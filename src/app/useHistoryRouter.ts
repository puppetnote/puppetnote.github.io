import { useCallback, useEffect, useRef, useState } from "react";
import { PAGES, type Page } from "./types";

const HOME: Page = "home";

export interface HistoryState {
  page: Page;
  /** 이 엔트리로 이동하기 직전 페이지 */
  from?: Page;
  /** 모바일 메뉴 오버레이가 열린 엔트리임을 표시 (MobileApp에서 사용) */
  menu?: string;
  /** 과거 인형들 확대 보기가 열린 엔트리임을 표시 (MobileApp에서 사용) */
  photo?: number;
}

export interface NavigateOptions {
  /** 현재 엔트리를 덮어써서 히스토리 깊이를 늘리지 않는다 */
  replace?: boolean;
}

export type Navigate = (page: Page, options?: NavigateOptions) => void;

const isPage = (value: unknown): value is Page =>
  typeof value === "string" && (PAGES as readonly string[]).includes(value);

/** `#/camp` → `"camp"`. 알 수 없는 값이면 홈으로 떨어진다. */
export function pageFromHash(): Page {
  const raw = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
  return isPage(raw) ? raw : HOME;
}

/**
 * 해시 기반 URL을 쓰는 이유: GitHub Pages는 SPA 폴백(404.html)이 없어서
 * `/camp` 같은 경로로 새로고침하면 404가 난다.
 */
export function urlForPage(page: Page): string {
  const { pathname, search } = window.location;
  return page === HOME ? `${pathname}${search}` : `${pathname}${search}#/${page}`;
}

function currentPage(): Page {
  const state = window.history.state as HistoryState | null;
  return isPage(state?.page) ? state.page : pageFromHash();
}

/**
 * 페이지 전환을 브라우저 히스토리와 동기화한다.
 *
 * 이전에는 페이지가 React state로만 관리되어 히스토리 엔트리가 1개뿐이었고,
 * 네이버 인앱 브라우저처럼 뒤로가기가 곧 "앱 종료"로 이어지는 환경에서는
 * 상세페이지에서 뒤로가기를 누르면 사이트를 벗어나 검색창으로 빠져나갔다.
 */
export function useHistoryRouter() {
  const [page, setPage] = useState<Page>(() =>
    typeof window === "undefined" ? HOME : pageFromHash(),
  );
  const pageRef = useRef(page);
  pageRef.current = page;

  // 최초 진입 엔트리에도 state를 심어 두어야 뒤로/앞으로 이동 시 복원할 수 있다.
  useEffect(() => {
    const state = window.history.state as HistoryState | null;
    if (!isPage(state?.page)) {
      const initial = pageFromHash();
      window.history.replaceState({ page: initial } as HistoryState, "", urlForPage(initial));
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      const next = currentPage();

      // 해시만 바뀐 엔트리는 state가 비어 있으므로 채워 넣어 이후 복원을 안정화한다.
      const state = window.history.state as HistoryState | null;
      if (!isPage(state?.page)) {
        window.history.replaceState({ page: next } as HistoryState, "", urlForPage(next));
      }

      pageRef.current = next;
      setPage(next);
    };

    // 일부 인앱 브라우저는 해시 이동에서 hashchange만 발생시키는 경우가 있어 함께 구독한다.
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  const navigate = useCallback<Navigate>((next, options) => {
    const state: HistoryState = { page: next, from: pageRef.current };

    if (options?.replace) {
      window.history.replaceState(state, "", urlForPage(next));
    } else if (next !== pageRef.current) {
      window.history.pushState(state, "", urlForPage(next));
    }

    pageRef.current = next;
    setPage(next);
  }, []);

  return { page, navigate };
}
