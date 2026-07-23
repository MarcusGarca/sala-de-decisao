"use client";

import { useEffect } from "react";

const HIDE_DELAY = 3000;

export default function ScrollbarActivity() {
  useEffect(() => {
    const root = document.documentElement;
    let hideTimer: ReturnType<typeof setTimeout>;

    const scheduleFade = () => {
      clearTimeout(hideTimer);
      root.dataset.scrollbarActive = "true";
      hideTimer = setTimeout(() => {
        root.dataset.scrollbarActive = "false";
      }, HIDE_DELAY);
    };

    scheduleFade();
    window.addEventListener("scroll", scheduleFade, { passive: true });

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", scheduleFade);
      delete root.dataset.scrollbarActive;
    };
  }, []);

  return null;
}
