"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
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
      name: "대시보드",
      href: "/dashboard",
      icon: Home,
    },
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
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="h-20 px-8 flex items-center justify-between">

        {/* 로고 */}

        <div className="flex items-center gap-10">

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600" />

            <span className="font-bold text-lg">
              IVIVE
            </span>
          </Link>

          {/* 메뉴 */}

          <nav className="flex items-center gap-8">

            {menus.map((menu) => {
              const Icon = menu.icon;

              const isActive =
                pathname === menu.href;

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`
                    flex
                    items-center
                    gap-2
                    transition
                    hover:text-indigo-600

                    ${
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-slate-600"
                    }
                  `}
                >
                  <Icon size={18} />

                  {menu.name}
                </Link>
              );
            })}

          </nav>

        </div>

        {/* 오른쪽 */}

        <div className="flex items-center gap-6">

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