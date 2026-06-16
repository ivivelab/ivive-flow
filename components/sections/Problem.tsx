export default function Problem() {
  const problems = [
    {
      title: "예약은 카카오톡",
      desc: "예약 내역이 흩어져 관리가 어렵습니다.",
    },
    {
      title: "상담기록은 수첩",
      desc: "담당자가 바뀌면 정보가 사라집니다.",
    },
    {
      title: "고객관리는 엑셀",
      desc: "누가 어떤 고객인지 한눈에 보기 어렵습니다.",
    },
    {
      title: "매출은 감으로 추측",
      desc: "정확한 데이터 없이 운영하게 됩니다.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-medium text-zinc-500">
            BUSINESS PROBLEM
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            왜 아직도 따로 관리하시나요?
          </h2>

          <p className="mt-5 text-zinc-500">
            대부분의 사업장은 아직도 여러 도구를 따로 사용합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {problems.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-zinc-200
                p-8
                text-center
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="mb-4 text-4xl">
                ❌
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        <div className="flex justify-center py-12">
          <div className="text-5xl">
            ↓
          </div>
        </div>

        <div
          className="
            rounded-[32px]
            bg-black
            px-8
            py-14
            text-center
            text-white
          "
        >
          <h3 className="text-3xl font-bold">
            IVIVE 하나로 통합
          </h3>

          <p className="mt-4 text-zinc-300">
            예약 · 상담 · 고객관리 · 결제 · 분석
          </p>
        </div>

      </div>
    </section>
  );
}