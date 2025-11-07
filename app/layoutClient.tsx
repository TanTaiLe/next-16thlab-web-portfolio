"use client";

import { Navbar } from "@/components/layout/Navbar";
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
      <Navbar />
      <div className="grid pt-20">
        {children}
      </div>
    </ScrollProvider>
  );
}
