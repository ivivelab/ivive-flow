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
      <section className="relative flex h-[50vh] items-center justify-center bg-black text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            About Us
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-300">
            기술과 경험으로,
            <br />
            비즈니스의 성장을 설계합니다.
          </p>
        </div>
      </section>

{/* Consulting Service */}
<section className="py-40">

  <div className="mx-auto max-w-5xl text-center">

    <p className="text-blue-600 font-medium">
      About FlowOS
    </p>

    <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
      운영을 이해하는 사람이
      <br />
      자동화를 설계합니다.
    </h1>

    <p className="mt-8 text-xl text-zinc-600 max-w-3xl mx-auto">
      FlowOS는 단순한 챗봇이나 웹사이트가 아닙니다.
      실제 현장에서 발생하는 운영 문제를 분석하고
      업무 프로세스를 자동화하는 운영 플랫폼입니다.
    </p>

  </div>

</section>

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="rounded-[40px] bg-zinc-100 p-12 md:p-20">

    <span className="text-blue-600">
      Mission
    </span>

    <h2 className="mt-4 text-4xl md:text-6xl font-bold">
      반복 업무를 줄이고
      본질적인 성장에 집중하도록.
    </h2>

    <p className="mt-8 text-lg text-zinc-600 max-w-3xl">
      상담, 예약, 고객관리, 문서업무.
      기업이 매일 반복하는 업무를 자동화하여
      더 중요한 일에 집중할 수 있도록 돕습니다.
    </p>

  </div>

</section>

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="grid gap-6 lg:grid-cols-2">

    <div className="rounded-[32px] bg-zinc-100 p-10">
      <h3 className="text-3xl font-bold">
        운영 중심
      </h3>

      <p className="mt-4 text-zinc-600">
        기술보다 운영 문제 해결을 우선합니다.
      </p>
    </div>

    <div className="rounded-[32px] bg-zinc-100 p-10">
      <h3 className="text-3xl font-bold">
        데이터 기반
      </h3>

      <p className="mt-4 text-zinc-600">
        감이 아닌 데이터로 의사결정을 지원합니다.
      </p>
    </div>

    <div className="rounded-[32px] bg-zinc-100 p-10">
      <h3 className="text-3xl font-bold">
        자동화 우선
      </h3>

      <p className="mt-4 text-zinc-600">
        반복 업무를 최소화하고 생산성을 높입니다.
      </p>
    </div>

    <div className="rounded-[32px] bg-zinc-100 p-10">
      <h3 className="text-3xl font-bold">
        지속적인 개선
      </h3>

      <p className="mt-4 text-zinc-600">
        운영 데이터가 쌓일수록 더 똑똑해집니다.
      </p>
    </div>

  </div>

</section>

<section className="py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="/images/about-founder.jpg"
          alt="Founder"
          className="rounded-[40px]"
        />
      </div>

      <div>

        <span className="text-blue-600">
          Experience
        </span>

        <h2 className="mt-4 text-5xl font-bold">
          16년의 현장 경험을
          자동화에 담았습니다.
        </h2>

        <p className="mt-8 text-lg text-zinc-600">
          공공기관, 의료, 보안,
          플랫폼 구축 프로젝트를 수행하며
          실제 운영 환경에서 발생하는 문제를
          데이터 기반으로 분석해 왔습니다.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12">

          <div>
            <p className="text-5xl font-bold">16+</p>
            <p>Years Experience</p>
          </div>

          <div>
            <p className="text-5xl font-bold">100+</p>
            <p>Projects</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-32">

  <div className="mx-auto max-w-5xl text-center">

    <h2 className="text-5xl font-bold">
      비즈니스 운영을
      다시 설계해보세요.
    </h2>

    <p className="mt-6 text-xl text-zinc-600">
      상담부터 예약, 고객관리까지.
      운영 전반을 분석하고 자동화를 설계합니다.
    </p>

    <Link
      href="/contact"
      className="inline-flex mt-10 rounded-full bg-black text-white px-8 py-4"
    >
      상담 신청하기
    </Link>

  </div>

</section>
    </main>
  );
}