export default function ConsultingPage() {
  const pains = [
    "반복 상담",
    "예약 누락",
    "문서 정리",
    "고객 응대",
    "수작업 입력",
    "보고서 작성",
  ];

  const process = [
    {
      step: "01",
      title: "현황 분석",
      desc: "현재 업무 흐름과 운영 구조를 파악합니다.",
    },
    {
      step: "02",
      title: "병목 진단",
      desc: "시간과 비용이 낭비되는 구간을 찾습니다.",
    },
    {
      step: "03",
      title: "자동화 설계",
      desc: "우선순위와 개선 방안을 정의합니다.",
    },
    {
      step: "04",
      title: "구축 로드맵",
      desc: "실행 가능한 계획을 제공합니다.",
    },
  ];

  return (
    <main>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center">

          <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-400">
            Consulting
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            운영의 병목을 찾고
            <br />
            자동화를 설계합니다
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            AI를 도입하기 전에 무엇을 자동화해야 하는지부터 정의합니다.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            이런 문제가 있다면
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {pains.map((item) => (
            <div
              key={item}
              className="rounded-3xl border p-8 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      <section className="bg-zinc-50 py-32">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            문제는 AI가 아닙니다
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
            대부분의 비효율은 정리되지 않은 업무 흐름에서 발생합니다.
          </p>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">

            <div className="rounded-full border px-5 py-3">
              고객 문의
            </div>

            <span>→</span>

            <div className="rounded-full border px-5 py-3">
              직원 전달
            </div>

            <span>→</span>

            <div className="rounded-full border px-5 py-3">
              엑셀 입력
            </div>

            <span>→</span>

            <div className="rounded-full border px-5 py-3">
              카톡 전송
            </div>

            <span>→</span>

            <div className="rounded-full border px-5 py-3">
              전화 확인
            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            컨설팅 진행 방식
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border p-8"
            >
              <div className="text-4xl font-bold text-blue-600">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="bg-black py-32 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold md:text-6xl">
            자동화는 도구가 아니라
            <br />
            운영 전략입니다
          </h2>

          <p className="mt-8 text-zinc-400">
            무료 상담을 통해 자동화 가능 영역을 확인해보세요.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black">
            무료 진단 신청
          </button>

        </div>

      </section>

    </main>
  );
}