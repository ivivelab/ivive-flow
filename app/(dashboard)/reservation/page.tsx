"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Bot,
  Plus,
  Calendar,
  Clock3,
  CalendarCheck,
  Clock,
  User,
  UserRound,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { supabase } from "@/lib/supabase"; // Supabase 클라이언트 임포트

export default function SimpleDayReservationPage() {
  const [selectedDate, setSelectedDate] = useState("2026-06-25"); // 기본 날짜 설정
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Supabase에서 데이터 가져오기
  const fetchReservations = async (date: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("appointment_date", date)
      .order("appointment_time", { ascending: true });

    if (error) {
      console.error("데이터 로드 실패:", error);
    } else {
      setReservations(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations(selectedDate);
  }, [selectedDate]);

  const handleCreateQuote = () => {
    router.push("/reservation/write");
  };

  return (
    <div className="w-full lg:w-[98%] mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* 헤더 및 컨트롤 영역 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">예약 일정</h2>
          <p className="text-zinc-400 mt-1.5 text-sm font-medium">DB에 저장된 실시간 예약 내역입니다.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button 
            onClick={handleCreateQuote}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white text-sm font-bold rounded-xl shadow-sm transition"
          >
            <Plus size={16} />
            <span>견적 생성</span>
          </button>
        </div>
      </div>


      {/* KPI 카드 영역 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {[
          { title: "전체 만남", value: "24", icon: Bot, color: "text-blue-600", bgColor: "bg-blue-50" },
          { title: "오늘 약속", value: "4", icon: UserRound, color: "text-orange-600", bgColor: "bg-orange-50" },
          { title: "대기 에정", value: "3", icon: CalendarCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
          { title: "완료된 약속", value: "19", icon: Clock3, color: "text-rose-600", bgColor: "bg-rose-50" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 h-full shadow-[0_0_15px_rgba(0,0,0,0.08)]">
            <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
              <item.icon size={20} className={item.color} />
            </div>
            <p className="text-xs text-zinc-500 font-medium">{item.title}</p>
            <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* 날짜 선택 탭 */}
      <div className="flex bg-zinc-100 p-1.5 rounded-xl">
        <button
          onClick={() => setSelectedDate("2026-06-24")}
          className={`flex-1 py-2 text-sm font-bold rounded-lg ${selectedDate === "2026-06-24" ? "bg-white shadow-sm" : ""}`}
        >
          24일
        </button>
        <button
          onClick={() => setSelectedDate("2026-06-25")}
          className={`flex-1 py-2 text-sm font-bold rounded-lg ${selectedDate === "2026-06-25" ? "bg-[#6c60e1] text-white shadow-sm" : ""}`}
        >
          25일
        </button>
      </div>

      {/* 타임라인 리스트 */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-12">로딩 중...</div>
        ) : reservations.length > 0 ? (
          reservations.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-50 px-4 py-2 rounded-xl text-center">
                  <div className="text-[#6c60e1] font-extrabold">{item.appointment_time.slice(0, 5)}</div>
                  <span className="text-[10px] text-zinc-400">{item.registration_source}</span>
                </div>
                <div>
                  <div className="font-black text-zinc-900">{item.customer_name}</div>
                  <div className="text-sm text-zinc-600">{item.notes || "상담 내용 없음"}</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-indigo-50 text-[#6c60e1]">
                {item.status}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-zinc-400">예약 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
}




