"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Calendar, Clock, User, Phone, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase"; // 네 경로에 맞게 수정

export default function ReservationWritePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !form.customer_name ||
      !form.phone ||
      !form.appointment_date ||
      !form.appointment_time
    ) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("appointments")
        .insert([
          {
            customer_name: form.customer_name,
            phone: form.phone,
            appointment_date: form.appointment_date,
            appointment_time: form.appointment_time,
            status: "confirmed",
            notes: form.notes,
          },
        ]);

      if (error) throw error;

      alert("예약이 등록되었습니다.");

      router.push("/reservation");
    } catch (err) {
      console.error(err);
      alert("예약 등록 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">

      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black">예약 생성</h1>
          <p className="text-sm text-zinc-500 mt-1">
            새로운 예약 일정을 등록합니다.
          </p>
        </div>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-zinc-50"
        >
          <ArrowLeft size={16} />
          돌아가기
        </button>
      </div>

      {/* 입력폼 */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)] space-y-6">

        {/* 고객명 */}
        <div>
          <label className="text-sm font-bold mb-2 flex items-center gap-2">
            <User size={16} />
            고객명
          </label>

          <input
            name="customer_name"
            value={form.customer_name}
            onChange={handleChange}
            placeholder="고객명을 입력하세요"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* 전화번호 */}
        <div>
          <label className="text-sm font-bold mb-2 flex items-center gap-2">
            <Phone size={16} />
            전화번호
          </label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-1234-5678"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* 날짜 */}
        <div>
          <label className="text-sm font-bold mb-2 flex items-center gap-2">
            <Calendar size={16} />
            예약 날짜
          </label>

          <input
            type="date"
            name="appointment_date"
            value={form.appointment_date}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* 시간 */}
        <div>
          <label className="text-sm font-bold mb-2 flex items-center gap-2">
            <Clock size={16} />
            예약 시간
          </label>

          <select
            name="appointment_time"
            value={form.appointment_time}
            onChange={(e) =>
              setForm({
                ...form,
                appointment_time: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="">시간 선택</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>

        {/* 메모 */}
        <div>
          <label className="text-sm font-bold mb-2 flex items-center gap-2">
            <FileText size={16} />
            상담 내용
          </label>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={5}
            placeholder="상담 내용 또는 요청사항"
            className="w-full border rounded-xl px-4 py-3 resize-none"
          />
        </div>

        {/* 저장 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#6c60e1] hover:bg-[#564bc4] text-white font-bold py-3 rounded-xl transition"
        >
          <Save size={18} />
          {loading ? "저장 중..." : "예약 저장"}
        </button>
      </div>
    </div>
  );
}