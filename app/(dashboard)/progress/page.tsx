"use client";
import {
  Bot,
  CalendarCheck,
  Clock3,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import { 
  Search, SlidersHorizontal, Plus, Star, 
  MessageSquareText, RotateCcw, ClipboardCheck 
} from "lucide-react";

// 샘플 데이터 (진행 중 + 완료 혼합)
const allProjects = [
  { id: 1, title: "에어컨 설치", customer: "김철수", date: "2026-06-18", status: "완료", satisfaction: 5 },
  { id: 2, title: "사무실 청소", customer: "박영희", date: "2026-06-17", status: "완료", satisfaction: 4 },
  { id: 3, title: "서울시청 웹사이트 제작", customer: "홍길동", date: "2026-06-20", status: "진행", satisfaction: null },
  { id: 4, title: "강남 아파트 인테리어", customer: "최수지", date: "2026-06-21", status: "진행", satisfaction: null },
];

export default function IntegratedManagementPage() {
  const [filter, setFilter] = useState("전체"); // 전체, 진행, 완료
  const [search, setSearch] = useState("");

  const filteredData = allProjects
    .filter(item => filter === "전체" ? true : item.status === filter)
    .filter(item => item.title.includes(search) || item.customer.includes(search));

  return (
    <div className="w-full lg:w-[98%] mx-auto px-6 py-10 space-y-6">
      {/* 헤더 영역 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-zinc-950">프로젝트 관리</h1>
          <p className="text-zinc-400 mt-1 text-sm font-medium">진행 중인 업무와 완료된 프로젝트를 한눈에 관리합니다.</p>
        </div>

        {/* 필터 및 검색 컨트롤 */}
        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-100 p-1 rounded-xl">
            {["전체", "진행", "완료"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition ${filter === tab ? "bg-white text-[#6c60e1] shadow-sm" : "text-zinc-500"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색..." 
              className="pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm w-40 focus:ring-2 focus:ring-[#6c60e1]/20"
            />
          </div>
        </div>
      </div>

      {/* KPI 카드 영역 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {[
          { title: "전체", value: "92", icon: Bot, color: "text-blue-600", bgColor: "bg-blue-50" },
          { title: "수정요청", value: "2", icon: UserRound, color: "text-orange-600", bgColor: "bg-orange-50" },
          { title: "완료", value: "89", icon: CalendarCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
          { title: "취소", value: "1", icon: Clock3, color: "text-rose-600", bgColor: "bg-rose-50" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 h-full shadow-[0_0_15px_rgba(0,0,0,0.08)]">
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
              <item.icon size={20} className={item.color} />
            </div>
            <p className="text-xs text-zinc-500 font-medium">{item.title}</p>
            <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* 리스트 영역 */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-5 border border-zinc-100 rounded-xl shadow-sm flex items-center justify-between hover:border-zinc-200 transition">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${item.status === "진행" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
                <ClipboardCheck size={20} />
              </div>
              <div>
                <p className="font-bold text-zinc-900">{item.title}</p>
                <p className="text-xs font-bold text-zinc-400">고객: {item.customer} | {item.date} ({item.status})</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {item.satisfaction && (
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg text-amber-600">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-xs">{item.satisfaction}.0</span>
                </div>
              )}
              <button className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold rounded-lg transition">CS 메모</button>
              {item.status === "완료" && (
                <button className="px-3 py-1.5 bg-[#6c60e1]/10 text-[#6c60e1] text-xs font-bold rounded-lg hover:bg-[#6c60e1] hover:text-white transition">재문의</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}