"use client";

import {
  Bot,
  CalendarCheck,
  Clock3,
  UserRound,
  MessageSquare,
  Search,
  Camera,
  Smartphone,
  SlidersHorizontal,
  Plus
} from "lucide-react";

// 데이터는 기존과 동일하게 유지
const recentConversations = [
  { id: 1, category: "가격 문의", status: "AI 해결", createdAt: "10분 전", icon: MessageSquare, iconColor: "text-emerald-600", bgColor: "bg-emerald-50", statusColor: "text-emerald-600" },
  { id: 2, category: "서비스 문의", status: "사람 연결", createdAt: "25분 전", icon: Search, iconColor: "text-blue-600", bgColor: "bg-blue-50", statusColor: "text-amber-500" },
  { id: 3, category: "예약 요청", status: "예약 전환", createdAt: "1시간 전", icon: Camera, iconColor: "text-pink-600", bgColor: "bg-pink-50", statusColor: "text-indigo-600" },
  { id: 4, category: "가능 여부", status: "AI 해결", createdAt: "2시간 전", icon: Smartphone, iconColor: "text-amber-600", bgColor: "bg-amber-50", statusColor: "text-emerald-600" },
];

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
  // 견적 생성 핸들러 예시
  const handleCreateQuote = () => {
    console.log("견적 생성 모달 오픈");
  };

  return (
    <div className="w-full lg:w-[98%] mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* 헤더 및 컨트롤 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-2xl sm:text-2xl font-bold text-zinc-950 tracking-tight">문의 현황</h2>
          <p className="text-zinc-400 mt-1.5 text-xs sm:text-sm font-medium">AI가 고객 문의를 분석하고 자동으로 응대합니다.</p>
        </div>
      </div>
    
      {/* KPI 카드 영역 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {[
          { title: "AI 자동 처리", value: "842", icon: Bot, color: "text-blue-600", bgColor: "bg-blue-50" },
          { title: "사람 연결", value: "184", icon: UserRound, color: "text-orange-600", bgColor: "bg-orange-50" },
          { title: "예약 전환", value: "91", icon: CalendarCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
          { title: "예약 대기", value: "23", icon: Clock3, color: "text-rose-600", bgColor: "bg-rose-50" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 h-full shadow-[0_0.1875rem_0.75rem_0_rgba(47,43,61,0.14)]">
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
              <item.icon size={20} className={item.color} />
            </div>
            <p className="text-xs text-zinc-500 font-medium">{item.title}</p>
            <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* AI 성과 배너 */}
      <div className="bg-[#6c60e1] rounded-xl p-8 shadow-[0_10px_20px_-5px_rgba(108,96,225,0.4)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "절감된 상담 시간", val: "140시간" },
            { label: "운영 비용 최적화", val: "₩2,100,000" },
            { label: "예약 유도", val: "91건" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              <div className="mt-2 inline-block rounded-xl bg-white/15 px-4 py-2">
                <span className="text-xl font-bold text-white">{stat.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 그리드 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 최근 문의 */}
        <div className="bg-white rounded-xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
          <h2 className="font-bold text-lg text-zinc-900 mb-6">최근 문의</h2>
          <div className="space-y-4">
            {recentConversations.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                    <item.icon size={18} className={item.iconColor} />
                  </div>
                  <span className="font-semibold text-zinc-800 text-sm">{item.category}</span>
                </div>
                <span className={`text-xs font-bold ${item.statusColor}`}>{item.createdAt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 요일별 문의 추이 */}
        <div className="bg-white rounded-xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-lg text-zinc-900">요일별 문의 추이</h2>
              <p className="text-zinc-400 text-xs mt-1">이번 주 채널별 유입 요약</p>
            </div>
            <button className="text-zinc-400 hover:text-zinc-600 font-bold p-1">⋮</button>
          </div>
          
          <div className="flex items-end justify-between h-32 mt-4">
            {weeklyInquiries.map((item) => (
              <div key={item.day} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-6 bg-zinc-100 rounded-md relative h-full flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-md transition-all ${item.isHighlight ? "bg-[#6c60e1]" : "bg-[#6c60e1]/20"}`}
                    style={{ height: `${item.value}%` }}
                  />
                </div>
                <span className="text-[10px] font-medium text-zinc-400">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}