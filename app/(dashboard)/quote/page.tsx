"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Send,
  Calendar,
  Eye,
} from "lucide-react";

const sampleQuotes = [
  {
    id: 1,
    customer: "김철수",
    service: "에어컨 설치",
    amount: "1,500,000",
    status: "발송전",
  },
  {
    id: 2,
    customer: "박영희",
    service: "사무실 청소",
    amount: "850,000",
    status: "발송완료",
  },
  {
    id: 3,
    customer: "이민수",
    service: "인테리어 공사",
    amount: "12,000,000",
    status: "검토중",
  },
];

export default function QuotePage() {
  const [search, setSearch] = useState("");

  const filtered = sampleQuotes.filter(
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
            견적
          </h1>

          <p className="text-slate-500 mt-2">
            고객 견적을 관리합니다.
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
          견적 생성
        </button>

      </div>

      {/* 통계 */}

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            전체 견적
          </p>

          <h2 className="text-3xl font-bold mt-2">
            18
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            발송 대기
          </p>

          <h2 className="text-3xl font-bold mt-2">
            5
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            검토중
          </p>

          <h2 className="text-3xl font-bold mt-2">
            7
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            승인
          </p>

          <h2 className="text-3xl font-bold mt-2">
            6
          </h2>
        </div>

      </div>

      {/* 검색 */}

      <div className="mb-6">

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
            px-4 py-3
            bg-white
          "
        />

      </div>

      {/* 견적 목록 */}

      <div className="space-y-4">

        {filtered.map((quote) => (

          <div
            key={quote.id}
            className="
              bg-white
              border
              rounded-2xl
              p-5
            "
          >

            <div className="flex justify-between">

              <div>

                <h3 className="font-bold text-lg">
                  {quote.customer}
                </h3>

                <p className="text-slate-500 mt-1">
                  {quote.service}
                </p>

                <p className="mt-3 text-2xl font-bold text-indigo-600">
                  ₩{quote.amount}
                </p>

              </div>

              <div>

                <span
                  className="
                    px-3 py-1
                    rounded-full
                    bg-indigo-50
                    text-indigo-600
                    text-sm
                  "
                >
                  {quote.status}
                </span>

              </div>

            </div>

            <div className="flex gap-3 mt-5">

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-green-50
                  text-green-600
                "
              >
                <Send size={16} />
                발송
              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                "
              >
                <Calendar size={16} />
                예약 전환
              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-slate-100
                "
              >
                <Eye size={16} />
                상세보기
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}