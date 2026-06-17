"use client";

const tasks = [
  {
    rank: 1,
    category: "계약",
    customer: "박영희 계약 확인",
    score: "계약 가능성 87%",
    description:
      "지금 연락하면 가장 효과적이에요.",
    recommendedAt: "10분 전 추천",
    categoryColor:
      "bg-orange-100 text-orange-600",
  },

  {
    rank: 2,
    category: "견적",
    customer: "김철수 견적 재발송",
    score: "3일째 미응답",
    description:
      "재발송 시 응답 확률이 높아져요.",
    recommendedAt: "25분 전 추천",
    categoryColor:
      "bg-green-100 text-green-600",
  },

  {
    rank: 3,
    category: "예약",
    customer: "이민수 방문 예약 확정",
    score: "내일 오전 10시 방문 예정",
    description:
      "사전 안내 메시지를 보내주세요.",
    recommendedAt: "1시간 전 추천",
    categoryColor:
      "bg-amber-100 text-amber-600",
  },
];

export default function TaskWidget() {
  return (
    <div
      className="
        bg-white
        border
        border-zinc-200
        rounded-3xl
        p-6
      "
    >
      {/* 헤더 */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            오늘 해야 할 일 TOP 3
          </h2>

          <p className="text-slate-500 mt-1">
            AI가 우선순위를 추천했어요
          </p>
        </div>

        <button
          className="
            text-sm
            font-medium
            text-slate-600
            hover:text-slate-900
          "
        >
          전체 보기 →
        </button>
      </div>

      {/* 리스트 */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.rank}
            className="
              border
              border-zinc-200
              rounded-2xl
              p-5
              flex
              justify-between
              items-start
              hover:border-violet-200
              hover:bg-slate-50
              transition
            "
          >
            {/* 좌측 */}
            <div className="flex gap-4">
              {/* 번호 */}
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-violet-600
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  shrink-0
                "
              >
                {task.rank}
              </div>

              <div>
                {/* 상태 */}
                <span
                  className={`
                    inline-flex
                    px-2.5
                    py-1
                    rounded-lg
                    text-xs
                    font-medium
                    mb-3
                    ${task.categoryColor}
                  `}
                >
                  {task.category}
                </span>

                {/* 제목 */}
                <h3 className="font-bold text-xl">
                  {task.customer}
                </h3>

                {/* 강조문구 */}
                <p className="text-green-600 font-semibold mt-2">
                  {task.score}
                </p>

                {/* 설명 */}
                <p className="text-slate-600 mt-1">
                  {task.description}
                </p>
              </div>
            </div>

            {/* 우측 */}
            <div className="text-right">
              <button
                className="
                  border
                  border-zinc-200
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  hover:bg-white
                "
              >
                고객 보기
              </button>

              <p
                className="
                  text-xs
                  text-slate-400
                  mt-3
                "
              >
                {task.recommendedAt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 문구 */}
      <div
        className="
          mt-5
          pt-4
          border-t
          border-zinc-100
          text-sm
          text-slate-500
        "
      >
        💡 우선순위는 예약 모델과 고객 반응
        데이터를 기반으로 매일 업데이트됩니다.
      </div>
    </div>
  );
}