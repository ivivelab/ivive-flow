"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Calendar,
  FileText,
  Briefcase,
  Eye,
  ArrowRight
} from "lucide-react";

// 데이터 구조 (에이전시, 인테리어 등 B2B 대형 프로젝트 전용 데이터)
const contractList = [
  { id: 1, customer: "김철수", service: "에어컨 설치", price: "₩1,500,000", date: "2026-06-18", status: "계약완료", statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: 2, customer: "박영희", service: "사무실 청소", price: "₩850,000", date: "2026-06-19", status: "진행대기", statusColor: "bg-amber-50 text-amber-600 border-amber-200" },
  { id: 3, customer: "이민수", service: "인테리어 공사", price: "₩12,000,000", date: "2026-06-20", status: "진행중", statusColor: "bg-indigo-50 text-[#6c60e1] border-indigo-100" },
];

export default function FinalContractPage() {
  // ⚡ 실제 유저 상태 혹은 DB 세팅값 정보 (기본값: 에이전시 모드 활성화)
  // 나중에 Supabase 회원 정보 테이블과 연동하여 자동으로 true/false가 주입됩니다.
  const [isAgencyMode, setIsAgencyMode] = useState(true); 

  // 로컬 숍(미용실, 네일숍) 사장님이 주소창에 직접 /contract를 치고 들어오는 예외 케이스 차단
  if (!isAgencyMode) {
    return (
      <div className="w-full text-center py-24">
        <Briefcase size={44} className="mx-auto text-zinc-300 mb-3" />
        <h3 className="text-zinc-700 font-bold text-base">접근할 수 없는 메뉴입니다.</h3>
        <p className="text-zinc-400 text-xs mt-1">현재 사용 중인 솔루션(로컬 뷰티숍 모드)에서는 제공되지 않는 기능입니다.</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-6">

      {/* 1. 헤더 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">계약</h1>
          <p className="text-zinc-400 mt-1 text-xs sm:text-sm font-medium">계약 내역을 안전하고 투명하게 관리합니다.</p>
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-sm shrink-0 transition">
          <Plus size={16} />
          <span>계약 등록</span>
        </button>
      </div>

      {/* 2. 대시보드 요약 스탯 카드 블록 (기존 디자인 핏 100% 매핑) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">전체 계약</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1.5">32</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">진행 대기</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1.5">5</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">진행중</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#6c60e1] mt-1.5">11</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">계약금액</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mt-1.5">4.2억</h2>
        </div>
      </div>

      {/* 3. 검색 영역 */}
      <div className="relative">
        <input
          type="text"
          placeholder="고객명 또는 계약 서비스 항목 검색..."
          className="w-full pl-4 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1] transition shadow-sm"
        />
      </div>

      {/* 4. 계약 내역 리스트 리포트 */}
      <div className="space-y-4">
        {contractList.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 shadow-sm transition-all duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* 프로필 섹션 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
              <div className="space-y-1.5 flex-1">
                <div>
                  <span className="text-base font-black text-zinc-900">{item.customer}</span>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">{item.service}</p>
                </div>

                {/* 메인 총 계약 대금 단가 */}
                <div className="text-lg font-black text-[#6c60e1] tracking-tight pt-1">
                  {item.price}
                </div>

                {/* 날짜 인디케이터 */}
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold pt-0.5">
                  <Calendar size={13} />
                  <span>계약일 : {item.date}</span>
                </div>
              </div>
            </div>

            {/* 상태 뱃지 및 실무 액션 핸들러 */}
            <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100">
              
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${item.statusColor}`}>
                {item.status}
              </span>

              {/* 3대 운영 핵심 인터랙션 단추 */}
              <div className="flex items-center gap-1.5">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#6c60e1]/10 text-[#6c60e1] hover:bg-[#6c60e1] hover:text-white text-xs font-bold transition">
                  <ArrowRight size={14} />
                  <span>진행 전환</span>
                </button>
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition">
                  <Eye size={14} />
                  <span>상세보기</span>
                </button>
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 text-xs font-bold transition border border-emerald-100">
                  <FileText size={14} />
                  <span>계약서</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}