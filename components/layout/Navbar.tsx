"use client";

import { Container } from "@/components/base/Container";
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";

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
        <a href="#">
          <Image
            src="/logo.png"
            alt="Next.js logo"
            width={43}
            height={60}
            priority
          />
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl
              //text-gray-600 
              //dark:text-gray-300 
              //hover:text-gray-900 
              //dark:hover:text-white 
              transition-colors px-8 py-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
        >
          {open ? "X" : "O"}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
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
      </div>
    </header>
  );
};
