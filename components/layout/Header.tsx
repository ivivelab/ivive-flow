"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    {
      name: "솔루션",
      href: "/solutions",
    },
    {
      name: "업종별 템플릿",
      href: "/templates",
    },
    {
      name: "구축사례",
      href: "/cases",
    },
    {
      name: "창업패키지",
      href: "/startup",
    },
    {
      name: "고객지원",
      href: "/support",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-16 w-full bg-white/95 backdrop-blur border-b border-zinc-100">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">

          {/* Logo */}
          <Link href="/">
            <h1 className="cursor-pointer text-xl font-bold tracking-tight">
              IVIVE
            </h1>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="
                  transition-colors
                  hover:text-zinc-500
                "
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/consult"
              className="
                rounded-full
                bg-black
                px-5
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:opacity-90
              "
            >
              무료 상담
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-sm font-medium tracking-widest"
          >
            MENU
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col">

          {/* Top */}
          <div className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-bold">
              IVIVE
            </h1>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium tracking-widest"
            >
              CLOSE
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-10 text-3xl font-medium">

            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setMenuOpen(false)}
              >
                {menu.name}
              </Link>
            ))}

            <Link
              href="/consult"
              onClick={() => setMenuOpen(false)}
              className="
                mt-6
                rounded-full
                bg-black
                px-8
                py-3
                text-lg
                text-white
              "
            >
              무료 상담
            </Link>

          </nav>
        </div>
      </div>
    </>
  );
}