"use client";

import { useState } from "react";
import { 
  Search, Plus, SlidersHorizontal, Bot, UserRound, CalendarCheck, 
  Clock3, ChevronLeft, ChevronRight, Calendar, ChevronsLeft, ChevronsRight 
} from "lucide-react";

const inquiryData = [
  { id: 1, name: "홍길동", category: "예약 자동화", content: "병원 예약 연동이랑 카카오 알림톡 자동화 시스템 견적 받아볼 수 있을까요?", price: "₩1,200,000", time: "2026.06.18 10:24" },
  { id: 2, name: "이영희", category: "홈페이지 제작", content: "중소기업 소개용 5페이지 내외 반응형 웹사이트 구축 비용과 기간 문의합니다.", price: "₩2,500,000", time: "2026.06.18 09:50" },
  { id: 3, name: "김철수", category: "랜딩페이지", content: "신규 분양 광고 집행용 단방향 랜딩페이지 제작 급하게 가능한지 확인 부탁드립니다.", price: "₩600,000", time: "2026.06.18 08:15" },
  { id: 4, name: "박민수", category: "예약 자동화", content: "필라테스 스튜디오 회원권 마감 및 자동 예약 대기 시스템 구축 견적 요청합니다.", price: "확인 대기", time: "2026.06.17 18:30" },
  { id: 5, name: "최수지", category: "홈페이지 제작", content: "쇼핑몰 결제 기능이 포함된 워드프레스 기반 자사몰 제작 단가가 어떻게 되나요?", price: "₩3,800,000", time: "2026.06.17 16:42" },
];

export default function SimpleDayReservationPage() {
  const [selectedDate, setSelectedDate] = useState("2026-06-18");

  return (
    <div className="w-full lg:w-[98%] mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">견적 관리</h2>
          <p className="text-zinc-400 mt-1.5 text-sm font-medium">접수된 모든 요청을 확인하고 견적을 생성하세요.</p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input type="text" placeholder="고객명, 내용 검색..." className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20" />
          </div>
          <button className="p-2 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 transition"><SlidersHorizontal size={18} /></button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl transition">
            <Plus size={16} /> <span>견적 생성</span>
          </button>
        </div>
      </div>
      
      {/* 상단 KPI 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Clients", value: "24", icon: UserRound, color: "text-zinc-600", bgColor: "bg-zinc-50" },
          { title: "Invoices", value: "165", icon: Bot, color: "text-zinc-600", bgColor: "bg-zinc-50" },
          { title: "Paid", value: "$2.46k", icon: CalendarCheck, color: "text-zinc-600", bgColor: "bg-zinc-50" },
          { title: "Unpaid", value: "$876", icon: Clock3, color: "text-zinc-600", bgColor: "bg-zinc-50" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 shadow-[0_0.1875rem_0.75rem_0_rgba(47,43,61,0.14)] flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-500 font-bold">{item.title}</p>
              <h3 className="text-xl font-black mt-0.5">{item.value}</h3>
            </div>
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center`}>
              <item.icon size={20} className={item.color} />
            </div>
          </div>
        ))}
      </div>

      {/* 날짜 필터 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-100 p-1.5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-1 flex-1 sm:flex-initial">
          {["어제 (17일)", "오늘 (18일)", "내일 (19일)"].map((label, idx) => (
            <button key={idx} className={`py-2 px-4 text-sm font-bold rounded-xl ${idx === 1 ? "bg-[#6c60e1] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 px-4 font-black text-zinc-800 text-sm">
          <Calendar size={15} className="text-zinc-400" /> {selectedDate}
        </div>
      </div>

      {/* 게시판 영역 */}
      <div className="bg-white rounded-xl p-6 shadow-[0_0.1875rem_0.75rem_0_rgba(47,43,61,0.14)] overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-zinc-50 text-[11px] font-bold text-zinc-500 uppercase">
          <div className="col-span-2">성명</div>
          <div className="col-span-2">카테고리</div>
          <div className="col-span-5">문의 내용</div>
          <div className="col-span-2 text-center">금액</div>
          <div className="col-span-1 text-right">날짜</div>
        </div>

        <div className="divide-y divide-zinc-100">
          {inquiryData.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-zinc-50 text-sm">
              <div className="col-span-2 font-bold text-zinc-900">{item.name}</div>
              <div className="col-span-2 text-indigo-600 font-medium">{item.category}</div>
              <div className="col-span-5 text-zinc-600 truncate">{item.content}</div>
              <div className="col-span-2 text-center font-bold text-zinc-900">{item.price}</div>
              <div className="col-span-1 text-right text-zinc-400 text-xs">{item.time.slice(5, 10).replace('.', '-')}</div>
            </div>
          ))}
        </div>

        {/* 페이징 하단 */}
        <div className="px-6 py-4 border-t border-zinc-100 flex justify-between items-center">
          <div className="text-sm text-zinc-500 font-medium">
            Showing 1 to 5 of 5 entries
          </div>
          <div className="flex items-center gap-1">
            {[
              { val: <ChevronsLeft size={16}/>, id: 'first' },
              { val: <ChevronLeft size={16}/>, id: 'prev' },
              { val: 1, id: 1 },
              { val: 2, id: 2 },
              { val: 3, id: 3 },
              { val: 4, id: 4 },
              { val: 5, id: 5 },
              { val: <ChevronRight size={16}/>, id: 'next' },
              { val: <ChevronsRight size={16}/>, id: 'last' },
            ].map((btn) => (
              <button 
                key={btn.id} 
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold border transition ${
                  btn.id === 1 ? "bg-[#6c60e1] text-white border-[#6c60e1]" : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {btn.val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}