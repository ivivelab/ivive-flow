import Link from "next/link";

export default function AboutPage() {
  const principles = [
    {
      title: "AI보다 프로세스",
      desc: "좋은 AI보다 좋은 업무 흐름이 먼저입니다.",
    },
    {
      title: "기능보다 결과",
      desc: "기능 수보다 실제 업무 감소가 중요합니다.",
    },
    {
      title: "데이터 기반",
      desc: "감이 아닌 데이터로 의사결정을 지원합니다.",
    },
    {
      title: "지속 가능한 자동화",
      desc: "운영할수록 더 효율적인 시스템을 만듭니다.",
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-6 text-center">

          <div>

            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">
              About FlowOS
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              우리는 AI를 판매하지 않습니다.
              <br />
              운영의 낭비를 줄입니다.
            </h1>

            <p className="mx-auto mt-10 max-w-3xl text-lg text-zinc-400 md:text-xl">
              기업이 성장하지 못하는 이유는
              기술 부족이 아니라
              반복 업무와 복잡한 의사결정 때문입니다.
            </p>

          </div>

        </div>

      </section>

      {/* Philosophy */}
      <section className="py-40">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-blue-600 font-medium">
            Philosophy
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-7xl">
            문제는 기술이 아닙니다
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-zinc-600">
            대부분의 기업은 새로운 도구가 부족한 것이 아닙니다.
            <br />
            같은 정보를 찾고,
            같은 질문에 답하고,
            같은 문서를 반복 작성하는 구조가 문제입니다.
            <br />
            <br />
            우리는 기술을 추가하는 것이 아니라
            운영을 단순하게 만드는 데 집중합니다.
          </p>

        </div>

      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 pb-32">

        <div className="rounded-[48px] bg-zinc-100 p-12 md:p-20">

          <span className="text-blue-600 font-medium">
            Mission
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            반복 업무를 줄이고
            <br />
            본질적인 성장에 집중하도록
          </h2>

          <p className="mt-8 max-w-3xl text-lg text-zinc-600">
            상담, 예약, 고객관리, 문서작성.
            기업이 매일 반복하는 업무를 자동화하여
            더 중요한 의사결정과 성장에 집중할 수 있도록 돕습니다.
          </p>

        </div>

      </section>

      {/* Founder Story */}
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div>

              <span className="text-blue-600">
                Why FlowOS
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                왜 FlowOS를
                만들었는가
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-zinc-600">
                16년 동안 공공기관, 의료, 보안,
                플랫폼 구축 프로젝트를 수행하며
                한 가지 공통점을 발견했습니다.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                대부분의 기업은 사람이 부족한 것이 아니라
                시스템이 부족했습니다.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                직원들은 반복 업무에 시간을 사용했고,
                고객은 기다렸으며,
                중요한 의사결정은 늦어졌습니다.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                우리는 그 문제를 자동화와 데이터로
                해결하기 위해 FlowOS를 만들었습니다.
              </p>

            </div>

            <div>

              <div className="overflow-hidden rounded-[40px] bg-zinc-100">

                <img
                  src="/images/about-founder.jpg"
                  alt="Founder"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Principles */}
      <section className="bg-zinc-50 py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-blue-600">
              Principles
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              우리가 믿는 원칙
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">

            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-10"
              >
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-[32px] border p-10 text-center">
              <div className="text-5xl font-bold">
                16+
              </div>

              <p className="mt-4 text-zinc-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-[32px] border p-10 text-center">
              <div className="text-5xl font-bold">
                100+
              </div>

              <p className="mt-4 text-zinc-500">
                Projects
              </p>
            </div>

            <div className="rounded-[32px] border p-10 text-center">
              <div className="text-5xl font-bold">
                15+
              </div>

              <p className="mt-4 text-zinc-500">
                Industries
              </p>
            </div>

            <div className="rounded-[32px] border p-10 text-center">
              <div className="text-5xl font-bold">
                24H
              </div>

              <p className="mt-4 text-zinc-500">
                Automation
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Quote */}
      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold md:text-6xl leading-tight">
            성장은 더 열심히 하는 것이 아니라
            <br />
            더 적게 반복하는 것에서 시작됩니다.
          </h2>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-32">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-[48px] bg-black p-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-6xl">
              운영을 다시 설계해보세요
            </h2>

            <p className="mt-8 text-lg text-zinc-400">
              상담부터 예약, 고객관리까지.
              운영 전반을 분석하고 자동화를 설계합니다.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              무료 상담 신청
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}