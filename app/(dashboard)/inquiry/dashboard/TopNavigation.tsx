"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Users, MessageCircle, FileText, Calendar, CreditCard, 
  ClipboardCheck, Bell, ChevronDown, BarChart3, Settings
} from "lucide-react";

export default function TopNavigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navGroups = [
    { name: "문의", icon: Users, sub: [{ n: "상담", h: "/inquiry" }, { n: "예약", h: "/reservation" }] },
    { name: "진행", icon: ClipboardCheck, sub: [{ n: "진행", h: "/progress" },] },
    { name: "문서", icon: FileText, sub: [{ n: "견적", h: "/quote" }, { n: "계약", h: "/contract" }] },
    { name: "결제", icon: CreditCard, sub: [{ n: "결제", h: "/quote" }, { n: "매출", h: "/payment" }] },
    { name: "관리", icon: Settings, sub: [{ n: "고객", h: "/customer" }, { n: "서비스", h: "/service" }] },
    { name: "홍보", icon: BarChart3, sub: [{ n: "블로그", h: "/blog" }, { n: "SNS", h: "/instagram" }] },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#2f3349] border-b border-[#434968]">
      <div className="h-20 px-4 md:px-8 flex items-center justify-between">
        
        {/* 로고 (모바일 영역 확보용) */}
        <Link href="/dashboard" className="font-bold text-xl text-white w-20">IVIVE</Link>

        {/* 센터 정렬 메뉴 */}
        <nav className="flex-1 flex justify-center items-center gap-1 md:gap-2">
          {navGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.name} className="relative group">
                <button
                  onClick={() => setOpenMenu(openMenu === group.name ? null : group.name)}
                  className={`flex items-center gap-1.5 px-2 md:px-4 py-2 rounded-lg text-[#cfcde4] hover:text-white hover:bg-white/10 transition ${openMenu === group.name ? "bg-white/10 text-white" : ""}`}
                >
                  <Icon size={20} />
                  {/* 모바일에서는 숨기고 md 이상에서만 텍스트 노출 */}
                  <span className="hidden md:inline font-medium">{group.name}</span>
                  <ChevronDown size={12} className="hidden md:block" />
                </button>

                {openMenu === group.name && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-2 z-50 text-sm border border-zinc-100">
                    {group.sub.map((item) => (
                      <Link
                        key={item.h}
                        href={item.h}
                        className="block px-4 py-2.5 text-zinc-600 hover:bg-zinc-50 hover:text-[#6c60e1]"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.n}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 우측 프로필 영역 */}
        <div className="flex items-center justify-end gap-3 w-20">
          <Bell size={20} className="text-[#cfcde4]" />
          <img src="https://i.pravatar.cc/100" className="w-8 h-8 rounded-full border border-[#434968]" alt="프로필" />
        </div>
      </div>
    </header>
  );
}