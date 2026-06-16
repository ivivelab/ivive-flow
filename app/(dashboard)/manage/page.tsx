"use client";

import {
  Users,
  Gift,
  MessageSquare,
  Star,
  Phone,
  Search,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "김철수",
    totalAmount: "4,500,000",
    visits: 3,
    lastVisit: "2026-06-18",
    grade: "VIP",
  },
  {
    id: 2,
    name: "박영희",
    totalAmount: "1,850,000",
    visits: 2,
    lastVisit: "2026-05-11",
    grade: "일반",
  },
  {
    id: 3,
    name: "이민수",
    totalAmount: "12,000,000",
    visits: 5,
    lastVisit: "2026-06-01",
    grade: "VIP",
  },
];

export default function ManagePage() {
  return (
    <div className="w-[90%] mx-auto py-6 space-y-6">

      {/* 헤더 */}

      <div>

        <h1 className="text-3xl font-bold">
          고객관리
        </h1>

        <p className="text-slate-500 mt-2">
          재방문, 이벤트, VIP 고객을 관리합니다.
        </p>

      </div>

      {/* 요약 카드 */}

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white border rounded-2xl p-5">
          <Users className="mb-3" />
          <p className="text-sm text-slate-500">
            전체 고객
          </p>
          <h2 className="text-3xl font-bold mt-2">
            152
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <Star className="mb-3" />
          <p className="text-sm text-slate-500">
            VIP 고객
          </p>
          <h2 className="text-3xl font-bold mt-2">
            18
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <Gift className="mb-3" />
          <p className="text-sm text-slate-500">
            이벤트 대상
          </p>
          <h2 className="text-3xl font-bold mt-2">
            46
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <MessageSquare className="mb-3" />
          <p className="text-sm text-slate-500">
            후기 요청
          </p>
          <h2 className="text-3xl font-bold mt-2">
            23
          </h2>
        </div>

      </div>

      {/* 액션 영역 */}

      <div className="grid lg:grid-cols-3 gap-4">

        <button
          className="
            bg-indigo-600
            text-white
            rounded-2xl
            p-6
            text-left
          "
        >
          <h3 className="font-bold text-lg">
            재방문 이벤트
          </h3>

          <p className="mt-2 text-indigo-100">
            6개월 이상 미방문 고객
          </p>
        </button>

        <button
          className="
            bg-green-600
            text-white
            rounded-2xl
            p-6
            text-left
          "
        >
          <h3 className="font-bold text-lg">
            후기 요청 발송
          </h3>

          <p className="mt-2 text-green-100">
            완료 고객 대상
          </p>
        </button>

        <button
          className="
            bg-orange-500
            text-white
            rounded-2xl
            p-6
            text-left
          "
        >
          <h3 className="font-bold text-lg">
            VIP 혜택 발송
          </h3>

          <p className="mt-2 text-orange-100">
            우수 고객 관리
          </p>
        </button>

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
          placeholder="고객 검색"
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

      {/* 고객 목록 */}

      <div className="space-y-4">

        {customers.map((customer) => (

          <div
            key={customer.id}
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
                  {customer.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  총 매출 :
                  <span className="font-semibold ml-2">
                    ₩{customer.totalAmount}
                  </span>
                </p>

                <p className="text-slate-500">
                  방문횟수 :
                  <span className="font-semibold ml-2">
                    {customer.visits}회
                  </span>
                </p>

                <p className="text-slate-500">
                  최근 방문 :
                  <span className="font-semibold ml-2">
                    {customer.lastVisit}
                  </span>
                </p>

              </div>

              <div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm

                    ${
                      customer.grade === "VIP"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-100 text-slate-600"
                    }
                  `}
                >
                  {customer.grade}
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
                <MessageSquare size={16} />
                문자발송
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
                <Gift size={16} />
                쿠폰발송
              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-slate-100
                "
              >
                <Phone size={16} />
                연락하기
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}