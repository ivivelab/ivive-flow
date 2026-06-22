"use client";

import Link from "next/link";

const tasks = [
  { rank: 1, category: "계약", customer: "박영희 계약 확인", score: "계약 가능성 87%", description: "지금 연락하면 가장 효과적이에요.", recommendedAt: "10분 전", categoryColor: "bg-orange-100 text-orange-700" },
  { rank: 2, category: "견적", customer: "김철수 견적 재발송", score: "3일째 미응답", description: "재발송 시 응답 확률이 높아져요.", recommendedAt: "25분 전", categoryColor: "bg-emerald-100 text-emerald-700" },
  { rank: 3, category: "예약", customer: "이민수 방문 예약 확정", score: "내일 오전 10시 방문", description: "사전 안내 메시지를 보내주세요.", recommendedAt: "1시간 전", categoryColor: "bg-amber-100 text-amber-700" },
];

export default function TaskWidget() {
  return (
    <div className="bg-white rounded-xl p-10 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-zinc-900">오늘의 우선 작업</h2>
          <p className="text-xs font-bold text-zinc-400 mt-1">데이터 기반 추천 우선순위</p>
        </div>
        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">전체 보기 →</button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.rank} className="border border-zinc-200 rounded-xl p-4 flex justify-between items-center hover:border-indigo-300 transition-colors">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black text-sm">
                {task.rank}
              </div>
              <div>
                <span className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${task.categoryColor}`}>
                  {task.category}
                </span>
                <h3 className="font-bold text-sm text-zinc-900 mt-0.5">{task.customer}</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5 font-medium">{task.description}</p>
              </div>
            </div>

            <div className="text-right">
              {/* 고객 관리 페이지로 바로 연결되는 링크 */}
              <Link href="/manage" className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[11px] font-bold text-zinc-700 hover:bg-zinc-100">
                고객 보기
              </Link>
              <p className="text-[10px] text-zinc-400 mt-2 font-bold">{task.recommendedAt} 추천</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}