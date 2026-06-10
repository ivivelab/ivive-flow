export default function NoticeSection() {
  return (
    <section className="max-w-5xl mx-auto py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        NOTICE
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-4">
          <span>신제품 출시 안내</span>
          <span>2026.06.01</span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <span>서비스 점검 안내</span>
          <span>2026.05.20</span>
        </div>
      </div>
    </section>
  );
}