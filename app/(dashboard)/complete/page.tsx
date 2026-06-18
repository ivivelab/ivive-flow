"use client";

import { useState } from "react";
import { ClipboardList, Star, MessageSquareText, RotateCcw } from "lucide-react";

const completedTasks = [
  { id: 1, title: "에어컨 설치", customer: "김철수", date: "2026-06-18", satisfaction: 5 },
  { id: 2, title: "사무실 청소", customer: "박영희", date: "2026-06-17", satisfaction: 4 },
];

export default function CompletedManagementPage() {
  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-zinc-950">완료된 프로젝트</h1>
        <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-medium">종료된 프로젝트의 핵심 데이터를 관리하고 다음 영업을 준비합니다.</p>
      </div>

      <div className="space-y-4">
        {completedTasks.map((task) => (
          <div key={task.id} className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* 기본 정보 */}
            <div>
              <p className="font-black text-lg text-zinc-900">{task.title}</p>
              <p className="text-xs font-bold text-zinc-400 mt-0.5">고객: {task.customer} | 완료일: {task.date}</p>
            </div>

            {/* 만족도 데이터 & 액션 */}
            <div className="flex items-center gap-4">
              {/* 선배님 기획: 후기 대신 내부 CS 만족도 점수 확인 */}
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg text-amber-600">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span className="font-bold text-sm">만족도 {task.satisfaction}.0</span>
              </div>

              {/* 액션 버튼 */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold rounded-lg transition">
                <MessageSquareText size={14} />
                <span>CS 메모</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#6c60e1]/10 hover:bg-[#6c60e1] hover:text-white text-[#6c60e1] text-xs font-bold rounded-lg transition">
                <RotateCcw size={14} />
                <span>재문의 등록</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}