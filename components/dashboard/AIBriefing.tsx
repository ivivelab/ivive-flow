import {
  Brain,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function AIBriefing() {
  return (
    <div className="bg-white border rounded-2xl p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-indigo-100
            flex
            items-center
            justify-center
          "
        >
          <Brain
            size={24}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h2 className="font-bold text-xl">
            AI 브리핑
          </h2>

          <p className="text-sm text-slate-500">
            오늘의 비즈니스 요약
          </p>

        </div>

      </div>

      {/* 요약 */}

      <div className="space-y-3">

        <div className="flex items-start gap-3">

          <TrendingUp
            size={18}
            className="text-green-500 mt-1"
          />

          <p className="text-sm">
            이번 주 문의량이
            <span className="font-semibold text-green-600">
              {" "}18%
            </span>
            증가했습니다.
          </p>

        </div>

        <div className="flex items-start gap-3">

          <AlertCircle
            size={18}
            className="text-orange-500 mt-1"
          />

          <p className="text-sm">
            미수금 고객이
            <span className="font-semibold">
              {" "}1명
            </span>
            있습니다.
          </p>

        </div>

        <div className="flex items-start gap-3">

          <CheckCircle
            size={18}
            className="text-blue-500 mt-1"
          />

          <p className="text-sm">
            계약 가능성이 높은 고객
            <span className="font-semibold text-blue-600">
              {" "}3명
            </span>
            이 있습니다.
          </p>

        </div>

      </div>

      {/* 추천 액션 */}

      <div className="mt-8">

        <h3 className="font-semibold mb-4">
          AI 추천 액션
        </h3>

        <div className="space-y-2">

          <button
            className="
              w-full
              text-left
              p-3
              rounded-xl
              bg-slate-50
              hover:bg-slate-100
            "
          >
            📞 A고객 추적 연락하기
          </button>

          <button
            className="
              w-full
              text-left
              p-3
              rounded-xl
              bg-slate-50
              hover:bg-slate-100
            "
          >
            📄 B고객 견적 재발송
          </button>

          <button
            className="
              w-full
              text-left
              p-3
              rounded-xl
              bg-slate-50
              hover:bg-slate-100
            "
          >
            💰 세금계산서 발행하기
          </button>

        </div>

      </div>

    </div>
  );
}