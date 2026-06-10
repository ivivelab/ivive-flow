export default function StorySection() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-6">
      {/* Banner Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src="/images/index/c-hero.webp"
          alt="How It Works"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="text-center mt-12">
        <h2 className="text-5xl font-bold">
          HOW IT WORKS
        </h2>

        <p className="mt-6 text-zinc-500">
          상담부터 고객 관리까지,
          <br />
          하나의 흐름으로 연결합니다.
        </p>

        <button className="mt-8 border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100">
          자세히 보기
        </button>
      </div>
    </section>
  );
}