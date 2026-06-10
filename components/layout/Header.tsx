"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-16 w-full bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
          
          <Link href="/">
            <h1 className="text-xl font-semibold cursor-pointer">
               IVIVE
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services">서비스</Link>
            <Link href="/cases">사례</Link>
            <Link href="/consulting">컨설팅</Link>
            <Link href="/startup">창업</Link>
            <Link href="/support">고객센터</Link>
            <Link href="/company">회사소개</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-sm font-medium tracking-widest"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col">
          
          {/* Top */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <h1 className="text-xl font-semibold">
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
            <a href="#" onClick={() => setMenuOpen(false)}>
              서비스
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              사례
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              컨설팅
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              고객센터
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              회사소개
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}