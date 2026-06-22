"use client";

import { useState } from "react";
import { Users, Star, Gift, MessageSquareText, Phone, MessageCircle, Ticket, Search } from "lucide-react";

const initialCustomers = [
  { id: 1, name: "김철수", phone: "010-1234-5678", totalSales: 4500000, visitCount: 3, lastVisit: "2026-06-18", grade: "VIP" },
  { id: 2, name: "박영희", phone: "010-9876-5432", totalSales: 1850000, visitCount: 2, lastVisit: "2026-05-11", grade: "일반" },
  { id: 3, name: "이민수", phone: "010-5555-7777", totalSales: 12000000, visitCount: 5, lastVisit: "2026-06-01", grade: "VIP" },
];

export default function CustomerManagementPage() {
  const [customers] = useState(initialCustomers);

  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10">
      {/* 1. 상단 요약 카드 */}
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

      {/* 3. 고객 테이블 리스트 */}
      <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-zinc-50 border-b border-zinc-100 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
          <div className="col-span-2">고객 정보</div>
          <div className="col-span-2">연락처</div>
          <div className="col-span-2 text-right">총 매출</div>
          <div className="col-span-1 text-center">방문</div>
          <div className="col-span-2 text-center">최근 방문</div>
          <div className="col-span-3 text-right">액션</div>
        </div>

        {/* 테이블 데이터 */}
        <div className="divide-y divide-zinc-100">
          {customers.map((c) => (
            <div key={c.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center text-sm hover:bg-zinc-50/50">
              <div className="col-span-2 flex items-center gap-2">
                <span className="font-bold text-zinc-900">{c.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${c.grade === 'VIP' ? 'bg-amber-100 text-amber-700' : 'bg-zinc-100 text-zinc-600'}`}>
                  {c.grade}
                </span>
              </div>
              <div className="col-span-2 text-zinc-600">{c.phone}</div>
              <div className="col-span-2 text-right font-bold text-zinc-900">₩{c.totalSales.toLocaleString()}</div>
              <div className="col-span-1 text-center font-medium text-zinc-600">{c.visitCount}회</div>
              <div className="col-span-2 text-center text-zinc-500">{c.lastVisit}</div>
              <div className="col-span-3 flex justify-end gap-2">
                <button className="p-2 border border-zinc-200 rounded-lg text-zinc-500 hover:bg-zinc-100"><MessageCircle size={16}/></button>
                <button className="p-2 border border-zinc-200 rounded-lg text-zinc-500 hover:bg-zinc-100"><Ticket size={16}/></button>
                <button className="px-3 py-2 bg-zinc-900 text-white rounded-lg text-xs font-bold hover:bg-zinc-800">연락하기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}