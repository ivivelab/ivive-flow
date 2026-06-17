"use client";

import {
  MessageCircle,
  FileText,
  CalendarCheck,
  Handshake,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "신규 문의",
    value: "12건",
    sub: "오늘 접수",
    change: "+3",
    icon: MessageCircle,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },

  {
    title: "견적 발송",
    value: "8건",
    sub: "대기 2건",
    change: "+1",
    icon: FileText,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },

  {
    title: "예약 확정",
    value: "6건",
    sub: "내일 방문 예정",
    change: "+2",
    icon: CalendarCheck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },

  {
    title: "계약 진행",
    value: "4건",
    sub: "검토 단계",
    change: "+1",
    icon: Handshake,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },

  {
    title: "매출 (오늘)",
    value: "2,480,000원",
    sub: "전일 대비 증가",
    change: "+320,000",
    icon: Wallet,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function ProjectProgress() {
  return (
    <div
      className="
        bg-white
        border
        border-zinc-200
        rounded-3xl
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            진행 현황
          </h2>

          <p className="text-slate-500 mt-1">
            우리 매장의 실시간 현황
          </p>
        </div>

        <button
          className="
            text-sm
            font-medium
            text-slate-600
            hover:text-slate-900
          "
        >
          전체 보기 →
        </button>
      </div>

      {/* KPI Cards */}
      <div className="space-y-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                border
                border-zinc-200
                rounded-2xl
                p-4
                hover:bg-slate-50
                transition
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${item.iconBg}
                  `}
                >
                  <Icon
                    size={24}
                    className={item.iconColor}
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <p className="font-semibold text-slate-700">
                      {item.title}
                    </p>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-green-600
                        bg-green-50
                        px-2
                        py-1
                        rounded-lg
                      "
                    >
                      ▲ {item.change}
                    </span>

                  </div>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      mt-1
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-slate-500
                      mt-1
                    "
                  >
                    {item.sub}
                  </p>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}