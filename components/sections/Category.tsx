import {
  BarChart3,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "업무 자동화",
    desc: "반복적인 업무를 자동화하여 더 중요한 일에 집중하세요.",
  },
  {
    icon: BarChart3,
    title: "실시간 대시보드",
    desc: "업무 데이터를 실시간으로 확인하고 빠르게 의사결정하세요.",
  },
  {
    icon: Users,
    title: "팀 협업 도구",
    desc: "상담부터 관리까지 하나의 워크플로우로 연결합니다.",
  },
  {
    icon: ShieldCheck,
    title: "보안 & 안정성",
    desc: "안전한 데이터 관리와 안정적인 운영 환경을 제공합니다.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-6">
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          bg-gradient-to-br
          from-indigo-50
          to-slate-50
          p-8
          md:p-14
        "
      >
        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-white
                text-indigo-600
                text-sm
                font-medium
                shadow-sm
              "
            >
              FlowOS 핵심 기능
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              일을 더 쉽게,
              <br />
              성과는 더 크게
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              FlowOS는 반복 업무를 줄이고
              상담, 예약, 고객관리, 운영 데이터를
              하나의 시스템으로 연결합니다.
            </p>

            <button
              className="
                mt-8
                px-6
                py-3
                rounded-xl
                border
                border-zinc-300
                bg-white
                hover:shadow-md
                transition
              "
            >
              모든 기능 보기
            </button>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 gap-4">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      bg-white
                      rounded-3xl
                      p-8
                      border
                      border-zinc-100
                      hover:shadow-lg
                      transition
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        bg-indigo-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={28}
                        className="text-indigo-600"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}