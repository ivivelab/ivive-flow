export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <img
        src="/images/index/d-hero.webp"
        alt="IVIVE Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6

            text-center
            md:text-left

            flex
            flex-col

            items-center
            md:items-start
          "
        >
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              drop-shadow-2xl
            "
          >
            IVIVE
          </h1>

          <p
            className="
              mt-6
              text-lg
              md:text-2xl
              text-white
              drop-shadow-lg
              leading-relaxed
            "
          >
            당신이 쉬는 동안에도,
            <br />
            비즈니스는 성장합니다.
          </p>

          <button
            className="
              mt-8
              rounded-full
              bg-white
              px-8
              py-3
              text-sm
              font-medium
              text-black

              transition-all
              duration-300

              hover:scale-105
              hover:bg-zinc-100
            "
          >
            무료 진단 받기
          </button>
        </div>
      </div>
    </section>
  );
}