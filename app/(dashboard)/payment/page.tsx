"use client";

import { useState } from "react";
import {
  Plus,
  Calendar,
  Search,
  CreditCard,
  DollarSign,
  Receipt,
  Eye,
  CheckCircle2
} from "lucide-react";

// 실전 결제 데이터셋 (카드사 자동 연동 데이터 + 현금 수동 입력 데이터 예시)
const initialPayments = [
  { id: 1, customer: "김철수", service: "에어컨 설치", price: 1500000, date: "2026-06-20", status: "결제완료", method: "신용카드 (자동)" },
  { id: 2, customer: "박영희", service: "사무실 청소", price: 850000, date: "-", status: "결제대기", method: "미결제" },
  { id: 3, customer: "이민수", service: "인테리어 공사", price: 12000000, date: "2026-06-18", status: "부분결제", method: "계좌이체 (수동)" },
];

export default function PaymentManagementPage() {
  const [search, setSearch] = useState("");
  const [payments, setPayments] = useState(initialPayments);
  
  // 현금/수동 결제 입력 모달 상태 제어
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 수동 결제 입력 폼 상태
  const [newPayment, setNewPayment] = useState({
    customer: "",
    service: "",
    price: "",
    method: "현금 (수동)",
  });

  // 수동 결제 등록 처리 핸들러
  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPayment.customer || !newPayment.price) return;

    const data = {
      id: payments.length + 1,
      customer: newPayment.customer,
      service: newPayment.service || "일반 판매/시술",
      price: Number(newPayment.price),
      date: new Date().toISOString().split('T')[0], // 오늘 날짜 자동 주입
      status: "결제완료",
      method: newPayment.method
    };

    setPayments([data, ...payments]);
    setIsModalOpen(false); // 모달 닫기
    setNewPayment({ customer: "", service: "", price: "", method: "현금 (수동)" }); // 폼 초기화
  };

  const filteredPayments = payments.filter(
    (item) => item.customer.includes(search) || item.service.includes(search)
  );

  return (
    <div className="w-full lg:w-[96%] mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-6 relative">

      {/* 1. 헤더 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">결제관리</h1>
          <p className="text-zinc-400 mt-1 text-xs sm:text-sm font-medium">프로젝트 및 매장 매출 현황을 실시간 관리합니다.</p>
        </div>

        {/* 수동 결제등록 버튼 */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-sm shrink-0 transition"
        >
          <Plus size={16} />
          <span>결제등록</span>
        </button>
      </div>

      {/* 2. 요약 스탯 (image_44d188.png 비율 핏 완벽 계승) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">전체 결제</p>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1.5">124</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">결제완료</p>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1.5">98</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider">결제대기</p>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-600 mt-1.5">18</h2>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-semibold text-[#6c60e1] uppercase tracking-wider">이번달 매출</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#6c60e1] mt-1.5">₩42M</h2>
        </div>
      </div>

      {/* 3. 검색 조건 필드 */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="고객명 또는 프로젝트 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1] transition shadow-sm"
        />
      </div>

      {/* 4. 결제 리스트 보드 */}
      <div className="space-y-4">
        {filteredPayments.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 shadow-sm transition-all duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* 좌측: 결제 정보 프로필 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
              <div className="space-y-1">
                <div>
                  <span className="text-base font-black text-zinc-900">{item.customer}</span>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">{item.service}</p>
                </div>
                {/* 포맷팅된 금액 출력 */}
                <div className="text-lg font-black text-[#6c60e1] tracking-tight pt-0.5">
                  ₩{item.price.toLocaleString()}
                </div>
                {/* 결제 수단 및 날짜 */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-bold pt-1">
                  <span className="bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded text-[10px]">{item.method}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> 결제일 : {item.date}</span>
                </div>
              </div>
            </div>

            {/* 우측: 상태 뱃지 및 액션 컨트롤 (image_44d188.png 버튼 구조 싱크) */}
            <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                item.status === "결제완료" ? "bg-emerald-50 text-emerald-600" :
                item.status === "부분결제" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
              }`}>
                {item.status}
              </span>

              <div className="flex items-center gap-1.5">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition">
                  <Eye size={14} />
                  <span>상세보기</span>
                </button>
                {item.status === "결제대기" && (
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white text-xs font-bold transition border border-emerald-100">
                    <CheckCircle2 size={14} />
                    <span>결제등록</span>
                  </button>
                )}
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition">
                  <Receipt size={14} />
                  <span>영수증</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🟩 5. [수동 결제 입력] 팝업 모달창 컴포넌트 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 border border-zinc-200 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-black text-zinc-900 tracking-tight">수동 결제 등록</h3>
            <p className="text-xs text-zinc-400 mt-1 font-medium">현금, 계좌이체 등 오프라인 결제 내역을 직접 기록합니다.</p>
            
            <form onSubmit={handleAddPayment} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-bold text-zinc-500 mb-1">고객명 *</label>
                <input 
                  type="text" 
                  required
                  value={newPayment.customer}
                  onChange={(e) => setNewPayment({...newPayment, customer: e.target.value})}
                  placeholder="예: 홍길동"
                  className="w-full border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 mb-1">서비스 내용</label>
                <input 
                  type="text" 
                  value={newPayment.service}
                  onChange={(e) => setNewPayment({...newPayment, service: e.target.value})}
                  placeholder="예: 인테리어 잔금, 다운펌 시술 등"
                  className="w-full border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 mb-1">결제 금액 *</label>
                <input 
                  type="number" 
                  required
                  value={newPayment.price}
                  onChange={(e) => setNewPayment({...newPayment, price: e.target.value})}
                  placeholder="숫자만 입력 (예: 50000)"
                  className="w-full border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 mb-1">결제 수단</label>
                <select 
                  value={newPayment.method}
                  onChange={(e) => setNewPayment({...newPayment, method: e.target.value})}
                  className="w-full border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6c60e1]/20 focus:border-[#6c60e1]"
                >
                  <option value="현금 (수동)">💰 현금 결제</option>
                  <option value="계좌이체 (수동)">🏦 계좌 이체</option>
                  <option value="카드수동입력 (포스)">💳 포스기 대면 카드결제</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-bold rounded-xl transition"
                >
                  취소
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-md transition"
                >
                  장부 등록 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}