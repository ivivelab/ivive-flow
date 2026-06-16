import {
  ClipboardCheck,
  LayoutTemplate,
  Workflow,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "상담 및 진단",
    description:
      "현재 업무 프로세스를 분석하고 개선 방향을 도출합니다.",
    icon: ClipboardCheck,
  },
  {
    number: "2",
    title: "업무 설계",
    description:
      "업종에 맞는 Workflow와 화면 구조를 설계합니다.",
    icon: LayoutTemplate,
  },
  {
    number: "3",
    title: "자동화 구축",
    description:
      "상담 · 예약 · CRM 프로세스를 연결합니다.",
    icon: Workflow,
  },
  {
    number: "4",
    title: "운영 및 개선",
    description:
      "실제 운영 데이터를 기반으로 지속 개선합니다.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* 제목 */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            FlowOS는 이렇게 구축됩니다
          </h2>

          <p className="mt-4 text-zinc-500">
            상담부터 구축, 운영까지 함께 진행합니다.
          </p>
        </div>

        {/* 프로세스 */}
        <div className="mt-20">

          <div className="grid lg:grid-cols-4 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative"
                >

                  {/* 화살표 */}
                  {index !== steps.length - 1 && (
                    <div
                      className="
                        hidden
                        lg:flex
                        absolute
                        top-1/2
                        -right-6
                        z-10
                        -translate-y-1/2
                      "
                    >
                      <ArrowRight
                        size={20}
                        className="text-zinc-400"
                      />
                    </div>
                  )}

                  {/* 카드 */}
                  <div
                    className="
                      h-full
                      rounded-3xl
                      border
                      border-zinc-200
                      bg-white
                      p-8
                      text-center
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >

                    {/* 번호 */}
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-indigo-600
                        text-white
                        text-sm
                        font-semibold
                        flex
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      {step.number}
                    </div>

                    {/* 아이콘 */}
                    <div className="mt-5 flex justify-center">
                      <Icon
                        size={28}
                        className="text-indigo-600"
                      />
                    </div>

                    {/* 제목 */}
                    <h3 className="mt-5 text-lg font-semibold">
                      {step.title}
                    </h3>

                    {/* 설명 */}
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {step.description}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}