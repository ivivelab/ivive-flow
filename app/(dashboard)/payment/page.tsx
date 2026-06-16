"use client";

import {
  CreditCard,
  Search,
  Eye,
  Receipt,
} from "lucide-react";

const payments = [
  {
    id: 1,
    customer: "김철수",
    project: "에어컨 설치",
    amount: "1,500,000",
    status: "결제완료",
    paidAt: "2026-06-20",
  },
  {
    id: 2,
    customer: "박영희",
    project: "사무실 청소",
    amount: "850,000",
    status: "결제대기",
    paidAt: "-",
  },
  {
    id: 3,
    customer: "이민수",
    project: "인테리어 공사",
    amount: "12,000,000",
    status: "부분결제",
    paidAt: "2026-06-18",
  },
];

export default function PaymentPage() {
  return (
    <div className="w-[90%] mx-auto py-6 space-y-6">

      {/* 헤더 */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            결제관리
          </h1>

          <p className="text-slate-500 mt-2">
            프로젝트 결제 현황을 관리합니다.
          </p>
        </div>

      </div>

      {/* 통계 */}

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            전체 결제
          </p>
          <h2 className="text-3xl font-bold mt-2">
            124
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            결제완료
          </p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            98
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            결제대기
          </p>
          <h2 className="text-3xl font-bold mt-2 text-orange-500">
            18
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            이번달 매출
          </p>
          <h2 className="text-3xl font-bold mt-2 text-indigo-600">
            ₩42M
          </h2>
        </div>

      </div>

      {/* 검색 */}

      <div className="relative">

        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          placeholder="고객명 또는 프로젝트 검색"
          className="
            w-full
            bg-white
            border
            rounded-xl
            py-3
            pl-12
            pr-4
          "
        />

      </div>

      {/* 결제 목록 */}

      <div className="space-y-4">

        {payments.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border
              rounded-2xl
              p-6
            "
          >

            <div className="flex justify-between">

              <div>

                <h3 className="text-xl font-bold">
                  {item.customer}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.project}
                </p>

                <p className="font-semibold text-indigo-600 mt-3">
                  ₩{item.amount}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  결제일 : {item.paidAt}
                </p>

              </div>

              <div>

                <span
                  className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      item.status === "결제완료"
                        ? "bg-green-100 text-green-700"
                        : item.status === "결제대기"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
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
                <CreditCard size={16} />
                결제등록
              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-slate-100
                "
              >
                <Receipt size={16} />
                영수증
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}