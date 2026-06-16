import Link from "next/link";

export default function SupportPage() {
  const faq = [
    {
      q: "구축 기간은 얼마나 걸리나요?",
      a: "프로젝트 규모에 따라 평균 1~4주 정도 소요됩니다.",
    },
    {
      q: "비용은 어떻게 산정되나요?",
      a: "업무 범위와 연동 시스템에 따라 맞춤 견적으로 안내드립니다.",
    },
    {
      q: "기존 홈페이지와 연동 가능한가요?",
      a: "대부분의 홈페이지 및 플랫폼과 연동 가능합니다.",
    },
    {
      q: "유지보수도 제공하나요?",
      a: "운영 이후 유지보수 및 기능 개선도 지원합니다.",
    },
    {
      q: "계약은 어떻게 진행되나요?",
      a: "상담 → 기획 → 견적 → 계약 → 구축 순으로 진행됩니다.",
    },
    {
      q: "정부지원사업 연계도 가능한가요?",
      a: "가능합니다. 사업계획서 및 자동화 구축 컨설팅을 지원합니다.",
    },
    {
      q: "구축 후 수정도 가능한가요?",
      a: "추가 기능 개발 및 운영 개선을 지속적으로 지원합니다.",
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-32">

        <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
            F
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            지원센터
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600">
            서비스 이용 방법부터 구축 문의까지
            <br />
            필요한 정보를 빠르게 찾아보세요.
          </p>

        </div>

      </section>

      <div className="mx-auto max-w-7xl px-6">

        {/* Quick Menu */}
        <section>

          <div className="grid gap-6 md:grid-cols-4">

            <Link
              href="/services"
              className="rounded-[32px] border p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm text-blue-600">
                Services
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                서비스 소개
              </h3>

              <p className="mt-3 text-zinc-500">
                자동화 구축 서비스 안내
              </p>
            </Link>

            <Link
              href="/cases"
              className="rounded-[32px] border p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm text-blue-600">
                Cases
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                구축 사례
              </h3>

              <p className="mt-3 text-zinc-500">
                실제 구축 사례 보기
              </p>
            </Link>

            <Link
              href="/consulting"
              className="rounded-[32px] border p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm text-blue-600">
                Consulting
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                구축 프로세스
              </h3>

              <p className="mt-3 text-zinc-500">
                상담부터 구축까지
              </p>
            </Link>

            <Link
              href="/contact"
              className="rounded-[32px] border p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm text-blue-600">
                Contact
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                문의하기
              </h3>

              <p className="mt-3 text-zinc-500">
                전문가 상담 신청
              </p>
            </Link>

          </div>

        </section>

        {/* Search */}
        <section className="py-32">

          <h2 className="text-center text-4xl font-bold md:text-6xl">
            무엇을 찾고 계신가요?
          </h2>

          <div className="mx-auto mt-12 max-w-3xl">

            <input
              type="text"
              placeholder="예: 구축 기간, 비용, 유지보수"
              className="
                h-16
                w-full
                rounded-full
                border
                border-zinc-300
                px-8
                text-lg
                outline-none
                transition
                focus:border-black
              "
            />

          </div>

        </section>

        {/* Bento */}
        <section className="pb-32">

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-[40px] bg-zinc-100 p-10">

              <div className="text-sm text-blue-600">
                Getting Started
              </div>

              <h3 className="mt-4 text-4xl font-bold">
                서비스 시작하기
              </h3>

              <p className="mt-6 text-zinc-600">
                상담 신청부터 첫 자동화 구축까지
                진행 과정을 확인하세요.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-block font-semibold"
              >
                자세히 보기 →
              </Link>

            </div>

            <div className="rounded-[40px] bg-black p-10 text-white">

              <div className="text-sm text-blue-400">
                Process
              </div>

              <h3 className="mt-4 text-4xl font-bold">
                구축 프로세스
              </h3>

              <p className="mt-6 text-zinc-400">
                상담, 기획, 구축, 운영까지
                전체 진행 방식을 확인하세요.
              </p>

              <Link
                href="/consulting"
                className="mt-10 inline-block font-semibold"
              >
                자세히 보기 →
              </Link>

            </div>

            <div className="rounded-[40px] border p-10">

              <div className="text-sm text-blue-600">
                FAQ
              </div>

              <h3 className="mt-4 text-4xl font-bold">
                자주 묻는 질문
              </h3>

              <p className="mt-6 text-zinc-600">
                구축 기간, 비용, 유지보수 등
                가장 많이 문의하는 내용.
              </p>

            </div>

            <div className="rounded-[40px] border p-10">

              <div className="text-sm text-blue-600">
                Contact
              </div>

              <h3 className="mt-4 text-4xl font-bold">
                전문가 상담
              </h3>

              <p className="mt-6 text-zinc-600">
                프로젝트 상담 및 견적 문의.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-block font-semibold"
              >
                문의하기 →
              </Link>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="pb-32">

          <div className="text-center">

            <h2 className="text-4xl font-bold md:text-6xl">
              자주 묻는 질문
            </h2>

            <p className="mt-6 text-zinc-600">
              고객들이 가장 많이 질문하는 내용
            </p>

          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-4">

            {faq.map((item) => (
              <details
                key={item.q}
                className="rounded-3xl border p-6"
              >
                <summary className="cursor-pointer font-semibold">
                  {item.q}
                </summary>

                <p className="mt-4 text-zinc-600">
                  {item.a}
                </p>
              </details>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="pb-32">

          <div className="rounded-[48px] bg-black p-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-6xl">
              원하는 답변을
              <br />
              찾지 못하셨나요?
            </h2>

            <p className="mt-8 text-lg text-zinc-400">
              전문가와 직접 상담하고
              최적의 구축 방안을 확인해보세요.
            </p>

            <Link
              href="/contact"
              className="
                mt-10
                inline-flex
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              무료 상담 예약
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}