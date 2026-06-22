"use client";

import { useState } from "react";
import { Plus, Trash2, Tag, Edit2 } from "lucide-react";

export default function ServiceManagementPage() {
  const [services, setServices] = useState([
    { id: 1, name: "남자 커트", price: "25,000", desc: "스타일 상담 포함 기본 커트" },
    { id: 2, name: "볼륨 펌", price: "80,000", desc: "자연스러운 볼륨을 살리는 펌" },
  ]);

  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10 space-y-10">
      
      {/* 1. 서비스 등록 영역 */}
      <section className="bg-white p-8 border border-zinc-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-black mb-6">새 서비스 등록</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input className="p-3 border border-zinc-200 rounded-xl text-sm" placeholder="서비스명 (예: 남자 펌)" />
          <input className="p-3 border border-zinc-200 rounded-xl text-sm" placeholder="가격 (예: 80,000)" />
          <input className="p-3 border border-zinc-200 rounded-xl text-sm" placeholder="짧은 설명" />
        </div>
        <button className="mt-4 px-6 py-3 bg-zinc-900 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-800">
          <Plus size={18} /> 서비스 추가하기
        </button>
      </section>

      {/* 2. 서비스 리스트 */}
      <section>
        <h2 className="text-xl font-black mb-6">등록된 서비스 관리</h2>
        <div className="grid gap-4">
          {services.map((s) => (
            <div key={s.id} className="bg-white p-6 border border-zinc-200 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Tag size={20} /></div>
                <div>
                  <h3 className="font-black">{s.name}</h3>
                  <p className="text-xs text-zinc-500">{s.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-black text-lg">₩{s.price}</span>
                <div className="flex gap-2">
                  <button className="p-2 text-zinc-400 hover:text-indigo-600"><Edit2 size={18}/></button>
                  <button className="p-2 text-zinc-400 hover:text-red-600"><Trash2 size={18}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}