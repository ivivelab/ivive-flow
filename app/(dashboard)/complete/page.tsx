"use client";

import {
  Star,
  Eye,
  RotateCcw,
  MessageSquare,
} from "lucide-react";

const completedProjects = [
  {
    id: 1,
    customer: "김철수",
    service: "에어컨 설치",
    amount: "1,500,000",
    completedAt: "2026-06-18",
    rating: 5,
  },
  {
    id: 2,
    customer: "박영희",
    service: "사무실 청소",
    amount: "850,000",
    completedAt: "2026-06-17",
    rating: 4,
  },
  {
    id: 3,
    customer: "이민수",
    service: "인테리어 공사",
    amount: "12,000,000",
    completedAt: "2026-06-15",
    rating: 5,
  },
];

export default function CompletePage() {
  return (
    <div className="w-[90%] mx-auto py-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          완료
        </h1>

        <p className="text-slate-500 mt-2">
          완료된 프로젝트를 관리합니다.
        </p>

      </div>

      {/* 통계 */}

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            전체 완료
          </p>

          <h2 className="text-3xl font-bold mt-2">
            124
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            이번달 완료
          </p>

          <h2 className="text-3xl font-bold mt-2">
            12
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-slate-500">
            고객 만족도
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4.8
          </h2>
        </div>

      </div>

      {/* 완료 목록 */}

      <div className="space-y-4">

        {completedProjects.map((item) => (

          <div
            key={item.id}
            className="bg-white border rounded-2xl p-6"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="text-xl font-bold">
                  {item.customer}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.service}
                </p>

                <p className="mt-3 font-semibold text-indigo-600">
                  ₩{item.amount}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  완료일 : {item.completedAt}
                </p>

              </div>

              <div className="flex">

                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                ))}

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
                후기 요청
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
                <RotateCcw size={16} />
                재문의 등록
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