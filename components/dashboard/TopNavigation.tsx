"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Users,
  MessageCircle,
  FileText,
  Calendar,
  CreditCard,
  ClipboardCheck,
  ShieldCheck,
  Receipt,
  Bell,
} from "lucide-react";

export default function TopNavigation() {
  const pathname = usePathname();

  const menus = [
    {
      name: "문의",
      href: "/inquiry",
      icon: Users,
    },
    {
      name: "견적",
      href: "/quote",
      icon: MessageCircle,
    },
    {
      name: "예약",
      href: "/reservation",
      icon: FileText,
    },
    {
      name: "계약",
      href: "/contract",
      icon: Calendar,
    },
    {
      name: "결제",
      href: "/payment",
      icon: CreditCard,
    },
    {
      name: "진행",
      href: "/progress",
      icon: ClipboardCheck,
    },
    {
      name: "완료",
      href: "/complete",
      icon: ShieldCheck,
    },
    {
      name: "관리",
      href: "/manage",
      icon: Receipt,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f4f4f5] border-b border-slate-200">
      <div className="h-20 px-4 md:px-8 flex items-center">

        {/* 로고 */}
        <div className="flex-shrink-0">
          <Link
            href="/dashboard"
            className="font-bold text-xl text-slate-900"
          >
            IVIVE
          </Link>
        </div>

        {/* 메뉴 */}
        <nav className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
            {menus.map((menu) => {
              const Icon = menu.icon;

              const isActive = pathname === menu.href;

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`
                    flex
                    items-center
                    gap-2
                    px-2
                    py-2
                    rounded-lg
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-indigo-600

                    ${
                      isActive
                        ? "text-indigo-600 font-semibold bg-white"
                        : "text-slate-600"
                    }
                  `}
                >
                  <Icon size={18} />

                  <span className="hidden lg:inline">
                    {menu.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* 우측 영역 */}
        <div className="flex-shrink-0 flex items-center gap-4 md:gap-6">

          <button className="relative">
            <Bell size={22} />

            <div
              className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-red-500
                text-white
                text-xs
                flex
                items-center
                justify-center
              "
            >
              3
            </div>
          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt="프로필"
            className="w-10 h-10 rounded-full"
          />

        </div>

      </div>
    </header>
  );
}