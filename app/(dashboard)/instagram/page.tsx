"use client";

import { useState } from "react";
import { Camera, Image as ImageIcon, Heart, MessageCircle, Send } from "lucide-react";

export default function InstagramManagementPage() {
  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10 space-y-10">
      
      {/* 1. 상단: 오늘 올릴 게시물 AI 생성 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-pink-100 rounded-lg text-pink-600"><Camera size={20} /></div>
          <h2 className="text-xl font-black text-zinc-950">AI 인스타 피드 생성</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 bg-white p-6 border border-zinc-200 rounded-2xl shadow-sm">
          {/* 사진 업로드 영역 */}
          <div className="border-2 border-dashed border-zinc-200 rounded-xl flex flex-col items-center justify-center h-64 hover:border-pink-300 transition cursor-pointer">
            <ImageIcon size={40} className="text-zinc-300 mb-2" />
            <p className="text-sm font-bold text-zinc-400">작업 사진을 업로드하세요</p>
          </div>
          
          {/* 캡션/해시태그 영역 */}
          <div className="flex flex-col gap-4">
            <textarea 
              className="w-full h-40 p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-sm"
              placeholder="AI가 생성한 홍보 문구가 여기에 들어옵니다..."
            />
            <button className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 flex items-center justify-center gap-2">
              <Send size={16} /> 인스타에 게시하기
            </button>
          </div>
        </div>
      </section>

      {/* 2. 하단: 기존 피드 리스트 (반응 측정) */}
      <section>
        <h2 className="text-xl font-black text-zinc-950 mb-4">게시된 피드 반응</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="aspect-square bg-zinc-100"></div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex gap-3 text-xs font-bold text-zinc-500">
                  <span className="flex items-center gap-1"><Heart size={14} /> 120</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} /> 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}