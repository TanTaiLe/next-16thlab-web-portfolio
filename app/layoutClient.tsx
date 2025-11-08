"use client";

import { ScrollProvider } from "@/contexts/ScrollContext";
import { useVisibleViewport } from "@/hooks/useVisibleViewport";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { width, height } = useVisibleViewport();

  return (
    <ScrollProvider viewportHeight={height} sectionCount={2}>
      <div className="grid pt-52 gap-40">
        {children}
      </div>
    </ScrollProvider>
  );
}
