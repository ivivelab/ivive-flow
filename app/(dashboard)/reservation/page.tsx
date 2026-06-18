"use client";

import { useState } from "react";
import {
  Plus,
  Calendar,
  Clock,
  User,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// '만남(약속)' 데이터 (실전 테스트용 데이터셋)
const initialReservations = [
  // 어제 데이터 (2026-06-17)
  { id: 1, date: "2026-06-17", time: "15:00", customer: "홍길동", content: "광고 집행용 랜딩페이지 기획안 최종 점검 완료건", status: "완료", type: "전화 등록" },
  
  // 오늘 데이터 (2026-06-18)
  { id: 2, date: "2026-06-18", time: "09:00", customer: "김철수", content: "회사 자동화 시스템 구축 오프라인 미팅", status: "확정", type: "전화 등록" },
  { id: 3, date: "2026-06-18", time: "11:30", customer: "이영희", content: "반응형 홈페이지 제작 범위 조율 (Zoom 미팅)", status: "확정", type: "AI 자동 등록" },
  { id: 4, date: "2026-06-18", time: "14:00", customer: "박민수", content: "피부 시술 및 패키지 프로그램 상담 방문", status: "확정", type: "AI 자동 등록" },
  { id: 5, date: "2026-06-18", time: "16:30", customer: "최수지", content: "디자인 컷 및 헤어 클리닉 시술 예약", status: "완료", type: "전화 등록" },
  
  // 내일 데이터 (2026-06-19)
  { id: 6, date: "2026-06-19", time: "10:00", customer: "정민재", content: "네일아트 이달의 아트 시술 예약", status: "확정", type: "AI 자동 등록" },
  { id: 7, date: "2026-06-19", time: "13:00", customer: "한소희", content: "병원 확장 이전 마케팅 자동화 컨설팅 1차 미팅", status: "확정", type: "전화 등록" },
];

export default function SimpleDayReservationPage() {
  // 기본 선택 날짜를 '오늘(2026-06-18)'로 고정
  const [selectedDate, setSelectedDate] = useState("2026-06-18");

  // 선택된 날짜에 해당하는 만남 약속만 필터링 (정렬 순서는 시간순)
  const filteredData = initialReservations
    .filter((item) => item.date === selectedDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-6">

      {/* 1. 헤더 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">예약 일정 관리</h1>
          <p className="text-zinc-400 mt-1 text-xs sm:text-sm font-medium">복잡한 검색 없이 날짜별 약속을 직관적으로 확인합니다.</p>
        </div>

        {/* 수동 예약 등록 버튼 */}
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-sm shrink-0 transition">
          <Plus size={16} />
          <span>예약 등록</span>
        </button>
      </div>

      {/* 2. 대시보드 요약 스탯 (오늘 기준 카운트 고정) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">전체 만남</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1.5">24<span className="text-sm font-medium text-zinc-400 ml-0.5">건</span></h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">오늘 약속</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1.5">4<span className="text-sm font-medium text-zinc-400 ml-0.5">건</span></h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">대기/예정</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#6c60e1] mt-1.5">3<span className="text-sm font-medium text-zinc-400 ml-0.5">건</span></h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">완료된 약속</p>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1.5">19<span className="text-sm font-medium text-zinc-400 ml-0.5">건</span></h2>
        </div>
      </div>

      {/* ✨ 3. 검색창 대신 들어간 [어제 / 오늘 / 내일] 실전 전환 탭 컨트롤 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200/60">
        
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

      {/* 4. 선택된 날짜 기준 타임라인 리스트 보드 */}
      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 shadow-sm transition-all duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* 좌측: 시간 및 약속의 실질 알맹이 정보 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 flex-1">
                
                {/* 큼직한 타임 슬롯 블록 */}
                <div className="flex sm:flex-col items-center justify-start sm:justify-center gap-2 sm:gap-0.5 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-2.5 sm:w-24 text-center shrink-0">
                  <div className="flex items-center gap-1 text-[#6c60e1] font-extrabold text-sm sm:text-lg tracking-tight">
                    <Clock size={15} className="sm:hidden" />
                    {item.time}
                  </div>
                  {/* 등록 경로 태그 (전화 등록 vs AI 자동 등록) */}
                  <span className={`text-[9px] font-black px-1 py-0.5 rounded border ${
                    item.type === "전화 등록" 
                      ? "bg-amber-50 text-amber-600 border-amber-100" 
                      : "bg-indigo-50 text-[#6c60e1] border-indigo-100"
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* 만남 대상자 및 내용 요약 */}
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black text-zinc-900">{item.customer}</span>
                    <span className="text-[11px] font-bold text-zinc-400">고객님</span>
                  </div>
                  <p className="text-sm text-zinc-600 font-normal leading-relaxed tracking-tight">
                    {item.content}
                  </p>
                </div>
              </div>

              {/* 우측: 확정 상태 및 상담창 즉시가기 액션 */}
              <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100">
                
                {/* 진행 상태 플래그 */}
                <span
                  className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                    item.status === "완료"
                      ? "bg-zinc-100 text-zinc-400 line-through"
                      : "bg-indigo-50 text-[#6c60e1]"
                  }`}
                >
                  {item.status}
                </span>

                {/* 코어 액션 버튼 조합 */}
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition">
                    <User size={14} />
                    <span>차트</span>
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#6c60e1]/10 text-[#6c60e1] hover:bg-[#6c60e1] hover:text-white text-xs font-bold transition">
                    <MessageSquare size={14} />
                    <span>상담창</span>
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          /* 예약 약속이 비어있을 때의 기본 예외 상태 피드백 */
          <div className="text-center py-12 bg-white border border-dashed border-zinc-200 rounded-2xl">
            <Calendar size={32} className="mx-auto text-zinc-300 mb-2" />
            <p className="text-sm font-medium text-zinc-400">해당 날짜에는 예정된 만남 약속이 없습니다.</p>
          </div>
        )}
      </div>

    </div>
  );
}