"use client";

import { useState } from "react";
import {
  Plus,
  Calendar,
  Clock,
  User,
  FileSignature,
} from "lucide-react";

const reservations = [
  {
    id: 1,
    customer: "김철수",
    service: "에어컨 설치",
    date: "2026-06-18",
    time: "09:00",
    status: "예정",
  },
  {
    id: 2,
    customer: "박영희",
    service: "사무실 청소",
    date: "2026-06-18",
    time: "14:00",
    status: "예정",
  },
  {
    id: 3,
    customer: "이민수",
    service: "인테리어 상담",
    date: "2026-06-18",
    time: "16:00",
    status: "완료",
  },
];

export default function ReservationPage() {
  const [search, setSearch] = useState("");

  const filtered = reservations.filter(
    (item) =>
      item.customer.includes(search) ||
      item.service.includes(search)
  );

  return (
    <div className="w-[90%] mx-auto py-6">

      {/* 헤더 */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            예약
          </h1>

          <p className="text-slate-500 mt-2">
            예약 일정을 관리합니다.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-indigo-600
            text-white
            px-5 py-3
            rounded-xl
          "
        >
          <Plus size={18} />
          예약 생성
        </button>

      </div>

      {/* 통계 */}

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            전체 예약
          </p>

          <h2 className="text-3xl font-bold mt-2">
            24
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            오늘 예약
          </p>

          <h2 className="text-3xl font-bold mt-2">
            8
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            방문 예정
          </p>

          <h2 className="text-3xl font-bold mt-2">
            5
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            완료
          </p>

          <h2 className="text-3xl font-bold mt-2">
            19
          </h2>
        </div>

      </div>

      {/* 검색 */}

      <input
        type="text"
        placeholder="고객명 또는 서비스 검색"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          bg-white
          mb-6
        "
      />

      {/* 예약 목록 */}

      <div className="space-y-4">

        {filtered.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border
              rounded-2xl
              p-5
            "
          >

            <div className="flex justify-between">

              <div>

                <div className="flex items-center gap-2 text-indigo-600">

                  <Clock size={18} />

                  <span className="font-semibold">
                    {item.time}
                  </span>

                </div>

                <h3 className="text-xl font-bold mt-3">
                  {item.customer}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.service}
                </p>

                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">

                  <Calendar size={16} />
                  {item.date}

                </div>

              </div>

              <div>

                <span
                  className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      item.status === "완료"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }
                  `}
                >
                  {item.status}
                </span>

              </div>

            </div>

            <div className="flex gap-3 mt-5">

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <FileSignature size={16} />
                계약 전환
              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-slate-100
                "
              >
                <User size={16} />
                고객 보기
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}