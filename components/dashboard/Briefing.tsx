import {
  Brain,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function AIBriefing() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 h-full">

      <div className="space-y-4">

        <div className="flex items-start gap-3">
          <AlertCircle
            size={18}
            className="text-orange-500 mt-1 shrink-0"
          />

          <p className="text-sm text-slate-700">
            미응답 문의가
            <span className="font-semibold text-orange-600">
              {" "}4건
            </span>
            있습니다.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <TrendingUp
            size={18}
            className="text-green-500 mt-1 shrink-0"
          />

          <p className="text-sm text-slate-700">
            이번 달 문의가
            <span className="font-semibold text-green-600">
              {" "}12%
            </span>
            증가했습니다.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle
            size={18}
            className="text-blue-500 mt-1 shrink-0"
          />

          <p className="text-sm text-slate-700">
            계약 가능성이 높은 고객
            <span className="font-semibold text-blue-600">
              {" "}3명
            </span>
            이 있습니다.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Brain
            size={18}
            className="text-indigo-500 mt-1 shrink-0"
          />

          <p className="text-sm text-slate-700">
            AI 처리율이
            <span className="font-semibold text-indigo-600">
              {" "}68%
            </span>
            로 유지되고 있습니다.
          </p>
        </div>

      </div>
    </div>
  );
}