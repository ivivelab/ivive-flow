import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
} from "lucide-react";

export default function FinanceWidget() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="
          w-12 h-12
          rounded-xl
          bg-green-100
          flex items-center justify-center
        ">
          <Wallet
            size={24}
            className="text-green-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            재무 현황
          </h2>

          <p className="text-sm text-slate-500">
            이번 달 기준
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {/* 매출 */}

        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-500">
              총 매출
            </p>

            <p className="text-xl font-bold">
              ₩14,500,000
            </p>
          </div>

          <span className="
            flex items-center gap-1
            text-green-600
            text-sm
            font-medium
          ">
            <ArrowUpRight size={16} />
            12%
          </span>

        </div>

        {/* 입금 예정 */}

        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-500">
              입금 예정
            </p>

            <p className="text-lg font-semibold text-blue-600">
              ₩3,200,000
            </p>
          </div>

        </div>

        {/* 미수금 */}

        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-500">
              미수금
            </p>

            <p className="text-lg font-semibold text-orange-600">
              ₩800,000
            </p>
          </div>

          <AlertCircle
            size={18}
            className="text-orange-500"
          />

        </div>

        {/* 지출 */}

        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-500">
              지출
            </p>

            <p className="text-lg font-semibold text-red-600">
              ₩2,450,000
            </p>
          </div>

          <span className="
            flex items-center gap-1
            text-red-600
            text-sm
          ">
            <ArrowDownRight size={16} />
            3%
          </span>

        </div>

      </div>

      {/* 순이익 */}

      <div className="
        mt-6
        p-4
        rounded-xl
        bg-slate-50
        border
      ">

        <p className="text-sm text-slate-500">
          예상 순이익
        </p>

        <p className="text-3xl font-bold text-indigo-600 mt-1">
          ₩11,250,000
        </p>

      </div>

    </div>
  );
}