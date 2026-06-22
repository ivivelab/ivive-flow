"use client";

import { Wallet, ArrowUpRight, ArrowDownRight, AlertCircle } from "lucide-react";

export default function FinanceWidget() {
  return (
    <div className="bg-white rounded-xl p-10 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      {/* 헤더 부분 통일 */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs font-bold text-zinc-400 mt-1">이번 달 기준 실시간 집계</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-green-100/60 flex items-center justify-center">
          <Wallet size={18} className="text-green-600" />
        </div>
      </div>

      {/* 순이익 강조 */}
      <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-100">
        <p className="text-[11px] font-bold text-indigo-400 uppercase">예상 순이익</p>
        <p className="text-2xl font-black text-indigo-600 mt-1">₩11,250,000</p>
      </div>
    </div>
  );
}