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
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center">
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
      className="group text-xl font-semibold transition-colors px-8 py-4"
    >
      <span className="relative z-10
                after:content-['']
                after:absolute
                after:top-[-8px]
                after:left-0
                after:right-0
                after:h-1
                after:rounded
                after:bg-[#1F252C]
                after:scale-x-0
                after:origin-center
                after:transition-transform
                after:duration-300
                group-hover:after:scale-x-100">{label}</span>
    </Link>)
}