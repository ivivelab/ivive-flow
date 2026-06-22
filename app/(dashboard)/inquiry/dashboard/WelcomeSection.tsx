export default function WelcomeSection() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });

  return (
    <div className="bg-white rounded-xl p-10 mt-4 shadow-[0_0_15px_rgba(0,0,0,0.08)]">

      <div className="flex justify-between items-start">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            안녕하세요, 대표님! 👋
          </h1>

          <p className="mt-3 text-slate-500 text-lg">
            오늘도 비즈니스 성장을 응원합니다.
          </p>

        </div>

        <div className="text-right">

          <p className="text-slate-400 text-sm">
            오늘 날짜
          </p>

          <p className="mt-1 text-xl font-semibold text-slate-700">
            {formattedDate}
          </p>

        </div>

      </div>

    </div>
  );
}