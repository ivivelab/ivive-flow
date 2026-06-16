"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  FileSignature,
  Briefcase,
  ArrowRight,
  Eye,
} from "lucide-react";

const contracts = [
  {
    id: 1,
    customer: "김철수",
    service: "에어컨 설치",
    amount: "1,500,000",
    date: "2026-06-18",
    status: "계약완료",
  },
  {
    id: 2,
    customer: "박영희",
    service: "사무실 청소",
    amount: "850,000",
    date: "2026-06-19",
    status: "진행대기",
  },
  {
    id: 3,
    customer: "이민수",
    service: "인테리어 공사",
    amount: "12,000,000",
    date: "2026-06-20",
    status: "진행중",
  },
];

export default function ContractPage() {
  const [search, setSearch] = useState("");

  const filtered = contracts.filter(
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
            계약
          </h1>

          <p className="text-slate-500 mt-2">
            계약 내역을 관리합니다.
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
          계약 등록
        </button>

      </div>

      {/* 통계 */}

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            전체 계약
          </p>

          <h2 className="text-3xl font-bold mt-2">
            32
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            진행 대기
          </p>

          <h2 className="text-3xl font-bold mt-2">
            5
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            진행중
          </p>

          <h2 className="text-3xl font-bold mt-2">
            11
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            계약금액
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4.2억
          </h2>
        </div>

      </div>

      {/* 검색 */}

      <input
        type="text"
        placeholder="고객명 또는 서비스 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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

      {/* 목록 */}

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

                <h3 className="text-xl font-bold">
                  {item.customer}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.service}
                </p>

                <p className="mt-3 text-2xl font-bold text-indigo-600">
                  ₩{item.amount}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  계약일 : {item.date}
                </p>

              </div>

              <div>

                <span
                  className={`
                    px-3 py-1
                    rounded-full
                    text-sm

                    ${
                      item.status === "계약완료"
                        ? "bg-green-100 text-green-600"
                        : item.status === "진행중"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-orange-100 text-orange-600"
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
                <ArrowRight size={16} />
                진행 전환
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

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-green-50
                  text-green-600
                "
              >
                <FileSignature size={16} />
                계약서
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}