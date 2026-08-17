import { useState, useEffect } from "react";
import MobileApp from "./MobileApp";
import DesktopApp from "./desktop/DesktopApp";
import { useHistoryRouter } from "./useHistoryRouter";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(`(min-width: ${breakpoint}px)`).matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isDesktop;
}

export default function App() {
  const isDesktop = useIsDesktop(1024);
  const { page, navigate } = useHistoryRouter();

  if (isDesktop) {
    return <DesktopApp page={page} setPage={navigate} />;
  }

  return <MobileApp page={page} setPage={navigate} />;
}
