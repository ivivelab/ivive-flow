import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          overflow-hidden
          bg-gradient-to-r
          from-slate-900
          via-slate-950
          to-blue-950
          text-white
        "
      >
        <div className="grid lg:grid-cols-2">

          {/* 후기 영역 */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">

            <div className="text-5xl text-indigo-400 font-bold">
              “
            </div>

            <p className="mt-4 text-lg leading-relaxed text-zinc-200">
              FlowOS 덕분에 상담부터 예약,
              고객관리까지 하나로 연결되었습니다.
              반복 업무가 줄어들면서 운영 효율이
              크게 향상되었습니다.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-700" />

              <div>
                <div className="font-semibold">
                  김○○ 대표
                </div>

                <div className="text-sm text-zinc-400">
                  피부과 운영
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              <button
                className="
                  w-9 h-9
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                "
              >
                <ChevronLeft size={16} />
              </button>

              <button
                className="
                  w-9 h-9
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                "
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="p-10 md:p-16 flex flex-col justify-center">

            <h2 className="text-4xl font-bold">
              지금 FlowOS를 시작하세요
            </h2>

            <p className="mt-4 text-zinc-300">
              상담부터 운영까지,
              여러분의 업무 프로세스를
              자동화해드립니다.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-indigo-400"
                />
                <span>
                  업종별 맞춤 Workflow 설계
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-indigo-400"
                />
                <span>
                  상담 · 예약 · CRM 자동화
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-indigo-400"
                />
                <span>
                  구축 후 운영 지원
                </span>
              </div>

            </div>

            <button
              className="
                mt-10
                w-fit
                px-8
                py-4
                rounded-xl
                bg-indigo-600
                hover:bg-indigo-500
                transition
                flex
                items-center
                gap-2
                font-medium
              "
            >
              무료 상담 신청하기
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}