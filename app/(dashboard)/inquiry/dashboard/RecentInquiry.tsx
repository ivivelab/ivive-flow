"use client";

import {
  MessageSquare,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "AI",
    value: 68,
  },
  {
    name: "기타",
    value: 32,
  },
];

const COLORS = [
  "#6366f1",
  "#e5e7eb",
];

export default function InquiryFlowWidget() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12 h-12
            rounded-xl
            bg-purple-100
            flex items-center justify-center
          "
        >
          <MessageSquare
            size={24}
            className="text-purple-600"
          />
        </div>

        <div>
          <h2 className="font-bold text-xl">
            문의 현황
          </h2>

          <p className="text-sm text-slate-500">
            오늘 문의 처리 흐름
          </p>
        </div>

      </div>

      <div className="flex justify-center">

        <div className="relative w-44 h-44">

          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={75}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div
            className="
              absolute inset-0
              flex flex-col
              items-center
              justify-center
            "
          >
            <p className="text-3xl font-bold">
              68%
            </p>

            <p className="text-xs text-slate-500">
              AI 처리율
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            전체 문의
          </p>

          <p className="text-2xl font-bold">
            25
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            AI 해결
          </p>

          <p className="text-2xl font-bold text-green-600">
            17
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            사람 연결
          </p>

          <p className="text-2xl font-bold text-blue-600">
            5
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            예약 전환
          </p>

          <p className="text-2xl font-bold text-orange-600">
            3
          </p>
        </div>

      </div>

    </div>
  );
}