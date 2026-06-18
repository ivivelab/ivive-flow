"use client";

import { Search, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";

// 1. 사장님 비즈니스(자동화/웹제작)에 맞춘 실전 데이터 배열
const inquiryData = [
  { id: 1, name: "홍길동", category: "예약 자동화", content: "병원 예약 연동이랑 카카오 알림톡 자동화 시스템 견적 받아볼 수 있을까요?", price: "₩1,200,000", priceColor: "text-zinc-900 font-bold", time: "2026.06.18 10:24" },
  { id: 2, name: "이영희", category: "홈페이지 제작", content: "중소기업 소개용 5페이지 내외 반응형 웹사이트 구축 비용과 기간 문의합니다.", price: "₩2,500,000", priceColor: "text-zinc-900 font-bold", time: "2026.06.18 09:50" },
  { id: 3, name: "김철수", category: "랜딩페이지", content: "신규 분양 광고 집행용 단방향 랜딩페이지 제작 급하게 가능한지 확인 부탁드립니다.", price: "₩600,000", priceColor: "text-zinc-900 font-bold", time: "2026.06.18 08:15" },
  { id: 4, name: "박민수", category: "예약 자동화", content: "필라테스 스튜디오 회원권 마감 및 자동 예약 대기 시스템 구축 견적 요청합니다.", price: "확인 대기", priceColor: "text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-md text-xs", time: "2026.06.17 18:30" },
  { id: 5, name: "최수지", category: "홈페이지 제작", content: "쇼핑몰 결제 기능이 포함된 워드프레스 기반 자사몰 제작 단가가 어떻게 되나요?", price: "₩3,800,000", priceColor: "text-zinc-900 font-bold", time: "2026.06.17 16:42" },
];

export default function InquiryListPage() {
  
  // 리스트 행(Row) 클릭 시 상세 뷰(보기)로 이동하는 핸들러
  const handleRowClick = (id: number) => {
    alert(`ID: ${id}번 문의의 상세 보기 및 계약 진행 화면으로 이동합니다.`);
    // router.push(`/inquiry/${id}`);
  };

  // 상단 메인 견적 생성 버튼 핸들러
  const handleCreateQuote = () => {
    alert("새로운 견적서 생성(작성) 화면으로 이동합니다.");
    // router.push('/quotes/new');
  };

  return (
    <div className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col gap-6">
      
      {/* 1. 헤더 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">상세 문의 내역</h1>
          <p className="text-zinc-400 mt-1 text-xs sm:text-sm font-medium">접수된 모든 문의를 통합 관리합니다.</p>
        </div>
        
        {/* 우측 컨트롤 영역 (검색 + 필터 + 견적 생성 버튼) */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
          {/* 검색창 */}
          <div className="relative flex-1 sm:w-60 min-w-[160px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="고객명, 내용 검색..." 
              className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1]"
            />
          </div>
          
          {/* 필터 설정 버튼 */}
          <button className="p-2 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 text-zinc-600 shrink-0 transition">
            <SlidersHorizontal size={18} />
          </button>

          {/* 메인 견적 생성 버튼 */}
          <button 
            onClick={handleCreateQuote}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-sm shrink-0 transition"
          >
            <Plus size={16} />
            <span>견적 생성</span>
          </button>
        </div>
      </div>

      {/* 2. 메인 리스트 보드 영역 (12열 반응형 그리드 구조) */}
      <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
        
        {/* 리스트 테이블 헤더 */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3.5 bg-zinc-50/70 border-b border-zinc-200 text-xs font-semibold text-zinc-500">
          <div className="col-span-3 sm:col-span-2 flex items-center gap-1 cursor-pointer hover:text-zinc-900 select-none">
            성명 <ArrowUpDown size={12} />
          </div>
          <div className="col-span-4 sm:col-span-2">카테고리</div>
          <div className="hidden sm:block sm:col-span-5">문의 내용 요약</div>
          <div className="col-span-5 sm:col-span-2 text-center">견적 금액</div>
          <div className="hidden sm:flex sm:col-span-1 justify-end items-center gap-1 cursor-pointer hover:text-zinc-900 select-none">
            일시 <ArrowUpDown size={12} />
          </div>
        </div>

        {/* 리스트 바디 아이템 행 */}
        <div className="divide-y divide-zinc-100">
          {inquiryData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleRowClick(item.id)}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer hover:bg-zinc-50 transition-all duration-150"
            >
              
              {/* [수정] 성명 */}
              <div className="col-span-3 sm:col-span-2 text-sm font-bold text-zinc-900 truncate">
                {item.name}
              </div>

              {/* [수정] 사업용 카테고리 (예약자동화, 홈페이지제작 등) */}
              <div className="col-span-4 sm:col-span-2 text-xs sm:text-sm text-indigo-600 sm:text-zinc-600 font-semibold sm:font-medium truncate">
                {item.category}
              </div>

              {/* 문의 내용 요약 (PC 버전 중심 노출) */}
              <div className="hidden sm:block sm:col-span-5 text-sm text-zinc-900 truncate font-normal">
                {item.content}
              </div>

              {/* [수정] 처리상태 대신 들어간 실전 견적 금액 */}
              <div className="col-span-5 sm:col-span-2 text-center text-xs sm:text-sm font-medium tracking-tight">
                <span className={item.priceColor}>
                  {item.price}
                </span>
              </div>

              {/* 일시 (MM.DD 포맷으로 깔끔하게 우측 정렬) */}
              <div className="hidden sm:block sm:col-span-1 text-right text-xs text-zinc-400 font-medium whitespace-nowrap">
                {item.time.split(" ")[0].slice(5)}
              </div>
            </div>
          ))}
        </div>

        {/* 3. 하단 페이지네이션 바 */}
        <div className="border-t border-zinc-100 px-6 py-4 flex items-center justify-center bg-zinc-50/30">
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 bg-white hover:bg-zinc-100 text-xs font-semibold transition">«</button>
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 bg-white hover:bg-zinc-100 text-xs font-semibold transition">‹</button>
            
            <button className="w-8 h-8 rounded-lg bg-[#6c60e1] border border-[#6c60e1] flex items-center justify-center text-white text-xs font-bold shadow-sm transition">1</button>
            
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 bg-white hover:bg-zinc-100 text-xs font-bold transition">2</button>
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 bg-white hover:bg-zinc-100 text-xs font-bold transition">3</button>
            
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 bg-white hover:bg-zinc-100 text-xs font-semibold transition">›</button>
            <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-400 bg-white hover:bg-zinc-100 text-xs font-semibold transition">»</button>
          </div>
        </div>

      </div>

    </div>
  );
}