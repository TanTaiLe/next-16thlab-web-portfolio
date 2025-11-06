import { useEffect, useRef, useState } from "react";

type SectionScrollState = {
  activeIndex: number;       // 0 hoặc 1
  progress: number;          // 0 -> 1 trong section hiện tại
  scrollY: number;           // px
};

export function useSectionScroll(sectionHeight: number, sectionCount = 2) {
  const [state, setState] = useState<SectionScrollState>({
    activeIndex: 0,
    progress: 0,
    scrollY: 0,
  });
  const rafId = useRef<number | null>(null);
  const lastY = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      // gom lại bằng rAF để mượt & hạn chế re-render
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        lastY.current = y;

        // tính index section đang đứng
        const rawIndex = Math.floor(y / sectionHeight);
        const clampedIndex = Math.max(0, Math.min(sectionCount - 1, rawIndex));

        // tính progress trong section
        const startOfSection = clampedIndex * sectionHeight;
        const p = (y - startOfSection) / sectionHeight;
        const progress = Math.max(0, Math.min(1, p));

        setState({
          activeIndex: clampedIndex,
          progress,
          scrollY: y,
        });
      });
    };

    // gọi 1 lần khi mount
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionHeight, sectionCount]);

  return state;
}
