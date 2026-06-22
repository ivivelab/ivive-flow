"use client";

import { useState } from "react";
import { PenTool, CheckCircle, Clock, Trash2, ExternalLink } from "lucide-react";

// 기존 발행된 블로그 리스트
const pastBlogs = [
  { id: 1, title: "여름철 에어컨 효율적으로 관리하는 방법", date: "2026-06-20", status: "발행 완료" },
  { id: 2, title: "우리 사무실 청소 루틴 소개", date: "2026-06-15", status: "발행 완료" },
];

export default function BlogManagementPage() {
  const [aiDraft, setAiDraft] = useState({
    title: "에어컨 이전 설치, 지금 준비해야 하는 이유",
    content: "곧 다가올 본격적인 여름 시즌을 앞두고 에어컨 이전 설치 문의가 급증하고 있습니다. 미리 예약하시면 원하는 날짜에 설치가 가능합니다..."
  });

  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10 space-y-10">
      
      {/* 1. 상단: AI 추천 콘텐츠 (인간의 승인 대기) */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><PenTool size={20} /></div>
          <h2 className="text-xl font-black text-zinc-950">오늘의 AI 추천 블로그</h2>
        </div>
        
        <div className="bg-white border-2 border-indigo-100 p-6 rounded-2xl shadow-sm">
          <input 
            value={aiDraft.title}
            onChange={(e) => setAiDraft({...aiDraft, title: e.target.value})}
            className="w-full text-lg font-black text-zinc-900 bg-transparent border-none focus:ring-0 mb-4"
          />
          <textarea 
            value={aiDraft.content}
            onChange={(e) => setAiDraft({...aiDraft, content: e.target.value})}
            className="w-full h-32 text-sm text-zinc-600 bg-zinc-50 p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500/20"
          />
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-5 py-2.5 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition">다시 생성</button>
            <button className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 flex items-center gap-2 shadow-lg shadow-indigo-200">
              <CheckCircle size={16} /> 게시하기
            </button>
          </div>
        </div>
      </section>

      {/* 2. 하단: 발행된 블로그 리스트 */}
      <section>
        <h2 className="text-xl font-black text-zinc-950 mb-4">발행 내역</h2>
        <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-zinc-100">
            {pastBlogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between p-6 hover:bg-zinc-50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-100 rounded-xl text-zinc-500"><Clock size={20} /></div>
                  <div>
                    <p className="font-bold text-zinc-900">{blog.title}</p>
                    <p className="text-xs font-bold text-zinc-400 mt-0.5">{blog.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-lg">{blog.status}</span>
                  <button className="p-2 hover:bg-zinc-200 rounded-lg text-zinc-400"><ExternalLink size={16} /></button>
                  <button className="p-2 hover:bg-red-50 rounded-lg text-zinc-400 hover:text-red-500"><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}