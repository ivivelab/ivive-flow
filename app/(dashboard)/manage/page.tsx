"use client";

import { useState } from "react";
import { Users, Star, Gift, MessageSquareText, Phone, MessageCircle, Ticket } from "lucide-react";

// 예약/결제에서 생성된 데이터를 합산해서 보여주는 구조
const initialCustomers = [
  { id: 1, name: "김철수", phone: "010-1234-5678", totalSales: 4500000, visitCount: 3, lastVisit: "2026-06-18", grade: "VIP" },
  { id: 2, name: "박영희", phone: "010-9876-5432", totalSales: 1850000, visitCount: 2, lastVisit: "2026-05-11", grade: "일반" },
  { id: 3, name: "이민수", phone: "010-5555-7777", totalSales: 12000000, visitCount: 5, lastVisit: "2026-06-01", grade: "VIP" },
];

export default function CustomerManagementPage() {
  const [customers] = useState(initialCustomers);

  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10">
      {/* 1. 상단 요약 카드 (image_43e8e7.png 기반) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: "전체 고객", value: 152, icon: Users },
          { title: "VIP 고객", value: 18, icon: Star },
          { title: "이벤트 대상", value: 46, icon: Gift },
          { title: "후기 요청", value: 23, icon: MessageSquareText },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 border border-zinc-200 rounded-2xl shadow-sm">
            <p className="text-xs font-bold text-zinc-400 uppercase">{item.title}</p>
            <h2 className="text-3xl font-black mt-1">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* 2. 빠른 액션 버튼 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button className="bg-indigo-600 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-indigo-700">재방문 이벤트 안내</button>
        <button className="bg-emerald-600 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700">만족도 조사 발송</button>
        <button className="bg-orange-500 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-orange-600">VIP 혜택 발송</button>
      </div>

      {/* 3. 고객 리스트 */}
      <div className="space-y-4">
        {customers.map((c) => (
          <div key={c.id} className="bg-white p-6 border border-zinc-200 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black">{c.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${c.grade === 'VIP' ? 'bg-amber-100 text-amber-700' : 'bg-zinc-100 text-zinc-600'}`}>
                  {c.grade}
                </span>
              </div>
              <p className="text-xs font-bold text-zinc-400 mt-1">총 매출 : ₩{c.totalSales.toLocaleString()} | 방문 횟수 : {c.visitCount}회 | 최근 방문 : {c.lastVisit}</p>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 border border-zinc-200 rounded-xl text-xs font-bold hover:bg-zinc-50 flex items-center gap-1.5"><MessageCircle size={14}/>문자발송</button>
              <button className="px-4 py-2 border border-zinc-200 rounded-xl text-xs font-bold hover:bg-zinc-50 flex items-center gap-1.5"><Ticket size={14}/>쿠폰발송</button>
              <button className="px-4 py-2 bg-zinc-900 text-white rounded-xl text-xs font-bold hover:bg-zinc-800 flex items-center gap-1.5"><Phone size={14}/>연락하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}