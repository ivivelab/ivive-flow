"use client";

import {
  CheckCircle2,
  Clock,
  Eye,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    customer: "김철수",
    service: "에어컨 설치",
    progress: 70,
    task: "실외기 설치",
  },
  {
    id: 2,
    customer: "박영희",
    service: "사무실 청소",
    progress: 40,
    task: "바닥 청소 진행중",
  },
  {
    id: 3,
    customer: "이민수",
    service: "인테리어 공사",
    progress: 85,
    task: "마감 작업",
  },
];

const todayTasks = [
  "김철수 고객 방문",
  "에어컨 자재 주문",
  "작업 완료 사진 업로드",
  "잔금 요청 문자 발송",
];

export default function ProgressPage() {
  return (
    <div className="w-[90%] mx-auto py-6 space-y-6">

      {/* 헤더 */}

      <div>

        <h1 className="text-3xl font-bold">
          진행
        </h1>

        <p className="text-slate-500 mt-2">
          현재 진행중인 업무를 관리합니다.
        </p>

      </div>

      {/* 오늘 해야 할 일 */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <Clock
            size={22}
            className="text-indigo-600"
          />

          <h2 className="text-xl font-bold">
            오늘 해야 할 일
          </h2>

        </div>

        <div className="space-y-4">

          {todayTasks.map((task) => (
            <div
              key={task}
              className="
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                bg-slate-50
              "
            >
              <input
                type="checkbox"
                className="w-5 h-5"
              />

              <span>{task}</span>

            </div>
          ))}

        </div>

      </div>

      {/* 진행중 프로젝트 */}

      <div className="space-y-4">

        {projects.map((item) => (

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
                  {item.service}
                </p>

                <p className="mt-3 text-sm text-slate-600">
                  현재 작업 :
                  <span className="font-medium ml-1">
                    {item.task}
                  </span>
                </p>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-500">
                  진행률
                </p>

                <p className="text-2xl font-bold text-indigo-600">
                  {item.progress}%
                </p>

              </div>

            </div>

            {/* Progress Bar */}

            <div className="mt-4">

              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-indigo-600"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />

              </div>

            </div>

            {/* 버튼 */}

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
                <CheckCircle2 size={16} />
                완료 처리
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
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <ArrowRight size={16} />
                다음 단계
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}