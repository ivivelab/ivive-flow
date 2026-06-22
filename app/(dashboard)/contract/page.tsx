"use client";
import { useState } from "react";
import { Search, Plus, SlidersHorizontal, Bot, UserRound, CalendarCheck, Clock3, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const inquiryData = [
  { id: 1, name: "홍길동", category: "예약 자동화", content: "병원 예약 연동이랑 카카오 알림톡 자동화 시스템 견적 받아볼 수 있을까요?", price: "₩1,200,000", time: "2026.06.18 10:24" },
  { id: 2, name: "이영희", category: "홈페이지 제작", content: "중소기업 소개용 5페이지 내외 반응형 웹사이트 구축 비용과 기간 문의합니다.", price: "₩2,500,000", time: "2026.06.18 09:50" },
  { id: 3, name: "김철수", category: "랜딩페이지", content: "신규 분양 광고 집행용 단방향 랜딩페이지 제작 급하게 가능한지 확인 부탁드립니다.", price: "₩600,000", time: "2026.06.18 08:15" },
  { id: 4, name: "박민수", category: "예약 자동화", content: "필라테스 스튜디오 회원권 마감 및 자동 예약 대기 시스템 구축 견적 요청합니다.", price: "확인 대기", time: "2026.06.17 18:30" },
  { id: 5, name: "최수지", category: "홈페이지 제작", content: "쇼핑몰 결제 기능이 포함된 워드프레스 기반 자사몰 제작 단가가 어떻게 되나요?", price: "₩3,800,000", time: "2026.06.17 16:42" },
];

export default function SimpleDayReservationPage() {
  const [selectedDate, setSelectedDate] = useState("2026-06-18");

  // 오류 해결: 함수 정의 추가
  const handleCreateQuote = () => {
    console.log("견적 생성 버튼 클릭됨");
  };


  return (

    <div className="w-full lg:w-[98%] mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* 헤더 및 컨트롤 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">계약 관리</h2>
          <p className="text-zinc-400 mt-1.5 text-sm font-medium">계약 내역을 안전하고 투명하게 관리합니다.</p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input type="text" placeholder="고객명, 내용 검색..." className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20" />
          </div>
          <button className="p-2 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 transition"><SlidersHorizontal size={18} /></button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl transition">
            <Plus size={16} /> <span>계약 생성</span>
          </button>
        </div>
      </div>
      
      {/* KPI 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "전체", value: "12", icon: UserRound, color: "text-orange-600", bgColor: "bg-orange-50" },
          { title: "AI", value: "9", icon: Bot, color: "text-blue-600", bgColor: "bg-blue-50" },
          { title: "직접", value: "3", icon: CalendarCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
          { title: "대기", value: "6", icon: Clock3, color: "text-rose-600", bgColor: "bg-rose-50" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-3`}>
              <item.icon size={20} className={item.color} />
            </div>
            <p className="text-xs text-zinc-500 font-bold">{item.title}</p>
            <h3 className="text-xl font-black mt-0.5">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* ✨ 3. 검색창 대신 들어간 [어제 / 오늘 / 내일] 실전 전환 탭 컨트롤 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-100 p-1.5 rounded-xl  rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.08)]">
        
        {/* 3대 핵심 날짜 이동 버튼군 */}
        <div className="grid grid-cols-3 gap-1 flex-1 sm:flex-initial">
          <button
            onClick={() => setSelectedDate("2026-06-17")}
            className={`py-2 px-4 text-sm font-bold rounded-xl transition-all duration-150 ${
              selectedDate === "2026-06-17"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            어제 (17일)
          </button>
          <button
            onClick={() => setSelectedDate("2026-06-18")}
            className={`py-2 px-4 text-sm font-bold rounded-xl transition-all duration-150 ${
              selectedDate === "2026-06-18"
                ? "bg-[#6c60e1] text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            오늘 (18일)
          </button>
          <button
            onClick={() => setSelectedDate("2026-06-19")}
            className={`py-2 px-4 text-sm font-bold rounded-xl transition-all duration-150 ${
              selectedDate === "2026-06-19"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            내일 (19일)
          </button>
        </div>

        {/* 현재 보고 있는 날짜 인디케이터 & 달력 넘기기 확장 버튼 */}
        <div className="flex items-center justify-between sm:justify-end gap-3 px-2 py-1 bg-white sm:bg-transparent rounded-xl sm:rounded-none">
          <div className="flex items-center gap-1.5 text-sm font-black text-zinc-800">
            <Calendar size={15} className="text-zinc-400" />
            <span>{selectedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-zinc-200 rounded-lg bg-white hover:bg-zinc-50 text-zinc-600 transition">
              <ChevronLeft size={14} />
            </button>
            <button className="p-1.5 border border-zinc-200 rounded-lg bg-white hover:bg-zinc-50 text-zinc-600 transition">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 게시판 영역 */}
      <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
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
      </div>
    </div>
  );
}