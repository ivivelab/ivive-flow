import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "예약 자동화",
      desc: "예약 접수부터 알림까지 자동화",
      href: "#",
    },
    {
      title: "상담 자동화",
      desc: "문의 접수와 상담 프로세스 자동화",
      href: "#",
    },
    {
      title: "고객관리",
      desc: "고객 데이터를 체계적으로 관리",
      href: "#",
    },
    {
      title: "견적 · 계약",
      desc: "견적서와 계약서 업무 자동화",
      href: "#",
    },
    {
      title: "결제 자동화",
      desc: "결제 및 정산 프로세스 자동화",
      href: "#",
    },
    {
      title: "통합 구축",
      desc: "업무 흐름 전체를 하나로 연결",
      href: "#",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-center justify-center px-6 text-center">
          <div>
            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">
              Cases
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              구축 사례
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
              실제 구축 사례로 증명하는
              <br />
              업무 자동화 성과를 확인하세요.
            </p>
          </div>
        </div>
      </section>

{/* Case Studies */}
<section className="mx-auto max-w-7xl px-6 py-32">

  <div className="text-center">

    <h2 className="text-4xl md:text-6xl font-bold">
      구축 사례
    </h2>

    <p className="mt-6 text-lg text-zinc-600">
      실제 현장에서 검증된 업무 자동화 사례
    </p>

  </div>

  {/* Stats */}
  <div className="mt-20 grid gap-6 md:grid-cols-4">

    <div className="rounded-3xl border p-8 text-center">
      <div className="text-5xl font-bold">
        300+
      </div>
      <p className="mt-3 text-zinc-500">
        자동화 구축
      </p>
    </div>

    <div className="rounded-3xl border p-8 text-center">
      <div className="text-5xl font-bold">
        15+
      </div>
      <p className="mt-3 text-zinc-500">
        산업 분야
      </p>
    </div>

    <div className="rounded-3xl border p-8 text-center">
      <div className="text-5xl font-bold">
        70%
      </div>
      <p className="mt-3 text-zinc-500">
        업무 감소
      </p>
    </div>

    <div className="rounded-3xl border p-8 text-center">
      <div className="text-5xl font-bold">
        24H
      </div>
      <p className="mt-3 text-zinc-500">
        자동 운영
      </p>
    </div>

  </div>

  {/* Cases */}
  <div className="mt-20 space-y-8">

<div className="overflow-hidden rounded-[40px] border bg-white">

  <div className="grid lg:grid-cols-2">

    <div className="relative min-h-[420px]">

      <img
        src="/cases/tax.jpg"
        alt="세무사 자동화"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute bottom-6 left-6 rounded-3xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
        <div className="text-4xl font-bold">
          70%
        </div>

        <div className="text-sm text-zinc-500">
          업무 시간 감소
        </div>
      </div>

    </div>

    <div className="flex flex-col justify-center px-10 py-12 lg:px-16">

      <div className="flex flex-wrap gap-3">

        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          세무사 사무소
        </span>

        <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
          상담 자동화
        </span>

        <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
          전자계약
        </span>

      </div>

      <h3 className="mt-6 text-3xl md:text-4xl font-bold">
        상담과 서류 업무를
        하나의 워크플로우로
      </h3>

      <div className="mt-10 space-y-8">

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            문제
          </h4>

          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>• 반복 상담 증가</li>
            <li>• 서류 요청 수작업</li>
            <li>• 계약 진행 지연</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            구축
          </h4>

          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>• AI 상담 자동화</li>
            <li>• 문서 수집 자동화</li>
            <li>• 전자계약 연동</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            결과
          </h4>

          <ul className="mt-3 space-y-2 font-medium">
            <li>• 업무 시간 70% 감소</li>
            <li>• 24시간 상담 가능</li>
            <li>• 계약 처리 속도 향상</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

</div>


    {/* Tax */}
<div className="overflow-hidden rounded-[40px] border bg-white">

  <div className="grid lg:grid-cols-2">

    <div className="relative min-h-[420px]">

      <img
        src="/cases/tax.jpg"
        alt="세무사 자동화"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute bottom-6 left-6 rounded-3xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
        <div className="text-4xl font-bold">
          70%
        </div>

        <div className="text-sm text-zinc-500">
          업무 시간 감소
        </div>
      </div>

    </div>

    <div className="flex flex-col justify-center px-10 py-12 lg:px-16">

      <div className="flex flex-wrap gap-3">

        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          세무사 사무소
        </span>

        <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
          상담 자동화
        </span>

        <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
          전자계약
        </span>

      </div>

      <h3 className="mt-6 text-3xl md:text-4xl font-bold">
        상담과 서류 업무를
        하나의 워크플로우로
      </h3>

      <div className="mt-10 space-y-8">

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            문제
          </h4>

          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>• 반복 상담 증가</li>
            <li>• 서류 요청 수작업</li>
            <li>• 계약 진행 지연</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            구축
          </h4>

          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>• AI 상담 자동화</li>
            <li>• 문서 수집 자동화</li>
            <li>• 전자계약 연동</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            결과
          </h4>

          <ul className="mt-3 space-y-2 font-medium">
            <li>• 업무 시간 70% 감소</li>
            <li>• 24시간 상담 가능</li>
            <li>• 계약 처리 속도 향상</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

</div>

  </div>
<section className="mt-32 bg-black py-32 text-white">

  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2 className="text-4xl font-bold md:text-6xl">
      다음 구축 사례는
      당신의 비즈니스일 수 있습니다.
    </h2>

    <p className="mt-8 text-lg text-zinc-400">
      반복 업무를 줄이고
      성장에 집중할 수 있는 자동화를 설계합니다.
    </p>

    <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
      무료 상담 신청
    </button>

  </div>

</section>
</section>
    </main>
  );
}