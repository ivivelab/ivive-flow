"use client";

import { Brain, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const briefings = [
  { icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-50", text: "미응답 문의", count: "4건" },
  { icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", text: "문의 증가율", count: "12%" },
  { icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50", text: "잠재 계약 고객", count: "3명" },
  { icon: Brain, color: "text-indigo-600", bg: "bg-indigo-50", text: "AI 처리 효율", count: "68%" },
];

export default function Briefing() {
  return (
    <div className="bg-white rounded-xl p-10 h-full shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      {/* 헤더 부분 통일: 다른 위젯과 동일한 구조 */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-lg font-black text-zinc-900">인사이트 요약</h2>
          <p className="text-xs font-bold text-zinc-400 mt-1">데이터 분석 결과</p>
        </div>
        {/* 필요시 인사이트도 전체 보기 버튼을 추가 가능합니다 */}
      </div>
      
      <div className="space-y-4">
        {briefings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-colors">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                <Icon size={16} />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-xs font-bold text-zinc-500">{item.text}</p>
                <p className={`text-sm font-black ${item.color}`}>{item.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}