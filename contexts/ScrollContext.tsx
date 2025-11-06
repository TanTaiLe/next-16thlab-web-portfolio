"use client"

import { createContext, useContext, ReactNode } from "react";
import { useSectionScroll } from "../hooks/useSectionScroll";

type ScrollCtx = {
  activeIndex: number;
  progress: number;
  scrollY: number;
  scrollToSection: (i: number) => void;
};

const Ctx = createContext<ScrollCtx | null>(null);

export function ScrollProvider({
  children,
  viewportHeight,
  sectionCount = 2,
}: {
  children: ReactNode;
  viewportHeight: number; // lấy từ useVisibleViewport().height
  sectionCount?: number;
}) {
  const { activeIndex, progress, scrollY } = useSectionScroll(
    viewportHeight,
    sectionCount
  );

  const scrollToSection = (i: number) => {
    const y = i * viewportHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Ctx.Provider value={{ activeIndex, progress, scrollY, scrollToSection }}>
      {children}
    </Ctx.Provider>
  );
}

export const useScrollState = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useScrollState must be used inside <ScrollProvider>");
  return v;
};
