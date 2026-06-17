export default function WelcomeSection() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-8">

      <div className="flex justify-between items-start">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
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