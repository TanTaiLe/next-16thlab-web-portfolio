import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Paytone_One, Geologica } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layoutClient";

const contentFont = Geologica({
  weight: ["300", "400", "600"],
  variable: "--font-content",
  subsets: ["latin", "vietnamese"],
});

const titleFont = Paytone_One({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "16thLab",
  description: "16thLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`pt-24 ${titleFont.variable} ${contentFont.variable}`}>
        <Navbar />
        {/* {children} */}
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
