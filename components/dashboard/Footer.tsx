"use client";

import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 pt-2 pb-8 bg-transparent">
      
      {/* 레퍼런스(image_518f8d.png) 스타일 반영 박스 */}
      <div className="bg-[#f5f6ff] border border-[#e8ebff] rounded-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* 왼쪽: 아이콘 + 텍스트 설명 구역 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#e8ebff] flex items-center justify-center shrink-0">
              <ShieldCheck
                size={24}
                className="text-[#5145e5]" 
              />
            </div>

            <div>
              <h3 className="font-bold text-zinc-900 text-sm sm:text-base">
                AI가 안전하게 고객 정보를 보호하고 있습니다
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                개인정보는 암호화되어 안전하게 관리되며, AI는 학습에 사용되지 않습니다.
              </p>
            </div>
          </div>

          {/* 우측: 클릭 가능한 보안 설정 액션 버튼 */}
          <button className="text-xs sm:text-sm font-semibold text-[#5145e5] hover:text-[#3b31b6] transition whitespace-nowrap self-end sm:self-auto flex items-center gap-1">
            보안 설정 보기 →
          </button>
          
        </div>
      </div>
    </footer>
  );
}