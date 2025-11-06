"use client"

import { useEffect, useState } from "react";

type Viewport = {
  width: number;
  height: number;
  scale: number;
  offsetTop: number;
  offsetLeft: number;
};

const getVV = (): Viewport => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, scale: 1, offsetTop: 0, offsetLeft: 0 };
  }
  const vv = (window!).visualViewport as VisualViewport | undefined;
  if (vv) {
    return {
      width: Math.floor(vv.width),
      height: Math.floor(vv.height),
      scale: vv.scale ?? 1,
      offsetTop: Math.floor(vv.offsetTop ?? 0),
      offsetLeft: Math.floor(vv.offsetLeft ?? 0),
    };
  }
  // Fallback cho trình duyệt không có visualViewport
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 1,
    offsetTop: 0,
    offsetLeft: 0,
  };
};

export function useVisibleViewport() {
  const [vp, setVp] = useState<Viewport>(getVV());

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVp(getVV()));
    };

    const vv = (window!).visualViewport as VisualViewport | undefined;

    // Lắng nghe đủ loại sự kiện có thể thay đổi viewport
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    vv?.addEventListener("resize", update, { passive: true }!);
    vv?.addEventListener("scroll", update, { passive: true }!);

    // chạy 1 lần
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("scroll", update);
      vv?.removeEventListener("resize", update!);
      vv?.removeEventListener("scroll", update!);
    };
  }, []);

  return vp;
}
