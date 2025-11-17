"use client";

import { Container } from "@/components/base/Container";
import cn from "classnames";
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react";
import Link from "next/link";

type NavbarItemProps = {
  label: string;
  href?: string;
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dịch vụ", href: "#" },
    { label: "Dự án", href: "#about" },
    { label: "Giới thiệu", href: "#projects" },
    { label: "Liên hệ", href: "#contact" },
  ];
  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavbarItem key={item.label} {...item} />
          ))}
        </nav>

        {/* Mobile toggle */}
        {/* <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
        >
          {open ? "X" : "O"}
        </button> */}
        <button>CTA</button>
      </Container>

      {/* Mobile menu */}
      {/* <div
        className={cn(
          "md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <Container className="flex flex-col py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div> */}
    </header>
  );
};

const Logo = () => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
    setDotLottie(dotLottie);
  };

  return (
    <Link href="/">
      <DotLottieReact
        dotLottieRefCallback={dotLottieRefCallback}
        src="/logo/chitlab-logo.lottie"
        onMouseOver={() => dotLottie && dotLottie.play()}
        onMouseOut={() => dotLottie && dotLottie.stop()}
        style={{ width: 80, height: 80 }}
      />
    </Link>
  );
}

const NavbarItem = ({ label, href = "#" }: NavbarItemProps) => {

  return (
    <Link
      href={href}
      className="relative text-xl flex group overflow-hidden p-[1px]"
    >
      <span className="px-6 py-3 rounded-lg border border-[#171A1F]
                      transition-transform duration-300
                      origin-bottom
                      group-hover:scale-0
                      ">{label}</span>
      <span className="absolute top-0 left-0 z-20 
                      px-6 py-3 rounded-lg border border-[#171A1F] bg-[#171A1F] text-white
                      transition-transform duration-300
                      origin-bottom-left rotate-12 translate-y-14
                      group-hover:rotate-0 group-hover:translate-y-0
                      ">{label}</span>
    </Link>)
}