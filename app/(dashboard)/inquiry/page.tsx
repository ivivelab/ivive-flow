"use client";

import {
  Bot,
  CalendarCheck,
  Clock3,
  ShieldCheck,
  UserRound,
  // 최근 문의 리스트용 아이콘 추가
  MessageSquare,
  Search,
  Camera,
  Smartphone
} from "lucide-react";

// 1. 최근 문의 더미 데이터 (image_51a62f.png 양식 전용 구조로 업데이트)
const recentConversations = [
  {
    id: 1,
    category: "가격 문의",
    status: "AI 해결",
    createdAt: "10분 전",
    icon: MessageSquare,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    statusColor: "text-emerald-600",
  },
  {
    id: 2,
    category: "서비스 문의",
    status: "사람 연결",
    createdAt: "25분 전",
    icon: Search,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    statusColor: "text-amber-500",
  },
  {
    id: 3,
    category: "예약 요청",
    status: "예약 전환",
    createdAt: "1시간 전",
    icon: Camera, // 👈 Instagram 대신 Camera로 변경!
    iconColor: "text-pink-600", // 핑크색 배경이라 카메라와도 잘 어울려요!
    bgColor: "bg-pink-50",
    statusColor: "text-indigo-600",
  },
  {
    id: 4,
    category: "가능 여부",
    status: "AI 해결",
    createdAt: "2시간 전",
    icon: Smartphone,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    statusColor: "text-emerald-600",
  },
];

// 2. 유입 채널별 주간 추이 데이터
const weeklyInquiries = [
  { day: "카카오", value: 35, isHighlight: false },
  { day: "네이버", value: 65, isHighlight: false },
  { day: "인스타", value: 48, isHighlight: false },
  { day: "유튜브", value: 42, isHighlight: false },
  { day: "틱톡", value: 92, isHighlight: true },
  { day: "구글", value: 55, isHighlight: false },
  { day: "기타", value: 70, isHighlight: false },
];

export default function InquiryPage() {
  return (
    <div className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* 헤더 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            문의 현황
          </h2>
          <p className="text-zinc-400 mt-1.5 text-xs sm:text-sm font-medium">
            AI가 고객 문의를 분석하고 자동으로 응대합니다.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-zinc-100/80 p-1 rounded-xl self-end sm:self-auto">
          <button className="px-3.5 py-1.5 rounded-lg bg-[#6c60e1] text-white text-xs sm:text-sm font-semibold shadow-sm transition">
            오늘
          </button>
          <button className="px-3.5 py-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm font-medium transition">
            7일
          </button>
          <button className="px-3.5 py-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm font-medium transition">
            30일
          </button>
        </div>
      </div>

      {/* KPI 카드 4장 */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {[
          {
            title: "AI 자동 처리",
            value: "842",
            icon: Bot,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
          },
          {
            title: "사람 연결",
            value: "184",
            icon: UserRound,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
          },
          {
            title: "예약 전환",
            value: "91",
            icon: CalendarCheck,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
          },
          {
            title: "예약 대기",
            value: "23",
            icon: Clock3,
            color: "text-rose-600",
            bgColor: "bg-rose-50",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white border border-zinc-200 rounded-xl p-3 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left">

            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-2 sm:mb-4`}>
              <item.icon
                size={20}
                className={item.color}
              />
            </div>

            <p className="text-[10px] sm:text-sm text-zinc-500 font-medium leading-tight">
              {item.title}
            </p>

            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mt-1">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* AI 성과 보라색 배너 영역 */}
      <div className="rounded-xl border border-indigo-100/50 bg-[#6c60e1] p-6 sm:p-8">

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 z-10">
            <div>
              <p className="text-white text-sm sm:text-base font-medium">
                절감된 상담 시간
              </p>
            <div className="mt-2 inline-flex items-center rounded-xl bg-white/15 backdrop-blur-sm px-4 py-2">
              <span className="text-1xl sm:text-2xl font-bold text-white">
                140시간
              </span>
            </div>
          </div>

          <div>
            <p className="text-white text-sm sm:text-base font-medium">
              운영 비용 최적화
            </p>
            <div className="mt-2 inline-flex items-center rounded-xl bg-white/15 backdrop-blur-sm px-4 py-2">
              <span className="text-1xl sm:text-2xl font-bold text-white">
                ₩2,100,000
              </span>
            </div>            
          </div>

          <div>
            <p className="text-white text-sm sm:text-base font-medium">
              예약 유도
            </p>
            <div className="mt-2 inline-flex items-center rounded-xl bg-white/15 backdrop-blur-sm px-4 py-2">
              <span className="text-1xl sm:text-2xl font-bold text-white">
                91건
              </span>
            </div> 
          </div>
        </div>
      </div>

      {/* 하단 그리드: 최근 문의와 유입 경로 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white border border-zinc-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-xl text-zinc-900">최근 문의</h2>
              <p className="text-zinc-400 text-sm mt-1">실시간으로 접수된 문의 내역</p>
            </div>
            <button className="text-zinc-400 hover:text-zinc-600 text-xl font-bold p-1">⋮</button>
          </div>

          <div className="space-y-5">
            {recentConversations.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between"
              >
                {/* 왼쪽: 채널 아이콘 + 카테고리 타이틀 */}
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                    <item.icon
                      size={20}
                      className={item.iconColor}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-800 text-sm sm:text-base">
                      {item.category}
                    </h3>
                  </div>
                </div>

                {/* 오른쪽: 상태 설명 텍스트 + 우측 정렬 실시간 시간 표시 */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-zinc-500 text-sm font-medium">
                    {item.status}
                  </span>
                  <span className={`text-sm font-bold whitespace-nowrap ${item.statusColor}`}>
                    {item.createdAt}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 고객 유입 경로 그래프 (수정 불필요, 유지) */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-bold text-xl text-zinc-900">요일별 문의 추이</h2>
                <p className="text-zinc-400 text-sm mt-1">이번 주 요일별 문의 요약</p>
              </div>
              <button className="text-zinc-400 hover:text-zinc-600 text-xl font-bold p-1">⋮</button>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-zinc-950 tracking-tight">542건</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold">
                +12.4%
              </span>
            </div>
            <p className="text-zinc-500 text-xs mt-2">
              지난주 동기 대비 문의량이 증가했습니다.
            </p>
          </div>

          <div className="mt-8 flex items-end justify-between px-2 h-32">
            {weeklyInquiries.map((item) => (
              <div key={item.day} className="flex flex-col items-center gap-3 flex-1">
                <div className="w-7 sm:w-8 bg-zinc-100 rounded-lg relative h-24 flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-lg transition-all duration-500 ease-out ${
                      item.isHighlight ? "bg-[#6c60e1]" : "bg-[#6c60e1]/15"
                    }`}
                    style={{ height: `${item.value}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-400">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}