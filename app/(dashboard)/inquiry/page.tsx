"use client";

import {
  Bot,
  UserRound,
  CalendarCheck,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    source: "네이버",
    category: "가격 문의",
    status: "AI 해결",
    createdAt: "10분 전",
  },
  {
    id: 2,
    source: "구글",
    category: "서비스 문의",
    status: "사람 연결",
    createdAt: "25분 전",
  },
  {
    id: 3,
    source: "인스타그램",
    category: "예약 요청",
    status: "예약 전환",
    createdAt: "1시간 전",
  },
];

export default function InquiryPage() {
  return (
    <div className="w-[90%] mx-auto py-6 space-y-6">

      <div className="p-6 border-b border-zinc-200">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            최근 상담
          </h2>

          <div className="flex items-center gap-2">

            <button
              className="
                px-3 py-1.5
                rounded-lg
                bg-indigo-600
                text-white
                text-sm
              "
            >
              오늘
            </button>

            <button
              className="
                px-3 py-1.5
                rounded-lg
                border
                text-sm
              "
            >
              7일
            </button>

            <button
              className="
                px-3 py-1.5
                rounded-lg
                border
                text-sm
              "
            >
              30일
            </button>

            <button
              className="
                px-3 py-1.5
                rounded-lg
                border
                text-sm
              "
            >
              전체
            </button>

          </div>

        </div>

      </div>
      {/* KPI */}

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
          <MessageCircle className="mb-3" />
          <p className="text-sm text-slate-500">
            전체 상담
          </p>
          <h2 className="text-3xl font-bold mt-2">
            1,254
          </h2>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
          <Bot className="mb-3" />
          <p className="text-sm text-slate-500">
            AI 해결
          </p>
          <h2 className="text-3xl font-bold mt-2">
            842
          </h2>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
          <UserRound className="mb-3" />
          <p className="text-sm text-slate-500">
            사람 연결
          </p>
          <h2 className="text-3xl font-bold mt-2">
            184
          </h2>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
          <CalendarCheck className="mb-3" />
          <p className="text-sm text-slate-500">
            예약 전환
          </p>
          <h2 className="text-3xl font-bold mt-2">
            91
          </h2>
        </div>

      </div>

      {/* 성과 카드 */}

      <div className="grid lg:grid-cols-3 gap-4">

        <div className="bg-white border border-zinc-200 rounded-2xl p-6">

          <h3 className="font-bold text-lg">
            AI 처리율
          </h3>

          <p className="text-5xl font-bold text-indigo-600 mt-4">
            67%
          </p>

          <p className="text-slate-500 mt-2">
            전체 상담 중 AI가 직접 해결
          </p>

        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6">

          <h3 className="font-bold text-lg">
            절감된 상담
          </h3>

          <p className="text-5xl font-bold text-green-600 mt-4">
            842
          </p>

          <p className="text-slate-500 mt-2">
            직원이 대응하지 않은 상담
          </p>

        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6">

          <h3 className="font-bold text-lg">
            예약 전환율
          </h3>

          <p className="text-5xl font-bold text-orange-500 mt-4">
            7.2%
          </p>

          <p className="text-slate-500 mt-2">
            상담 → 예약 전환
          </p>

        </div>

      </div>

      {/* 최근 상담 */}

      <div className="bg-white border border-zinc-200 rounded-2xl">

        <div className="p-6 border-b border-zinc-200">

          <h2 className="text-xl font-bold">
            최근 상담
          </h2>

        </div>

        <div>

          {conversations.map((item) => (

            <div
              key={item.id}
              className="
                px-6 py-4
                border-b
                border-zinc-200
                flex
                justify-between
                items-center
              "
            >

              <div>

                <h3 className="font-semibold">
                  {item.category}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.source}
                </p>

              </div>

              <div className="text-right">

                <span
                  className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      item.status === "AI 해결"
                        ? "bg-green-100 text-green-700"
                        : item.status === "사람 연결"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }
                  `}
                >
                  {item.status}
                </span>

                <p className="text-xs text-slate-400 mt-2">
                  {item.createdAt}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* 운영자동화 성과 */}

      <div className="bg-indigo-600 text-white rounded-2xl p-6">

        <div className="flex items-center gap-3">

          <TrendingUp />

          <h2 className="text-xl font-bold">
            이번달 운영자동화 성과
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div>
            <p className="text-indigo-200">
              절감된 상담 시간
            </p>

            <h3 className="text-3xl font-bold mt-2">
              140시간
            </h3>
          </div>

          <div>
            <p className="text-indigo-200">
              예상 인건비 절감
            </p>

            <h3 className="text-3xl font-bold mt-2">
              ₩2,100,000
            </h3>
          </div>

          <div>
            <p className="text-indigo-200">
              예약 유도
            </p>

            <h3 className="text-3xl font-bold mt-2">
              91건
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}