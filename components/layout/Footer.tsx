export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* 공지사항 */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              공지사항
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>FlowOS 서비스 리뉴얼 안내</span>
                <span className="text-zinc-400">
                  2026.06.01
                </span>
              </div>

              <div className="flex justify-between">
                <span>AI 상담 기능 업데이트</span>
                <span className="text-zinc-400">
                  2026.05.28
                </span>
              </div>

              <div className="flex justify-between">
                <span>개인정보처리방침 변경 안내</span>
                <span className="text-zinc-400">
                  2026.05.20
                </span>
              </div>

              <button className="text-zinc-500">
                더보기 →
              </button>
            </div>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              고객지원
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="border rounded-2xl p-6 text-center">
                <div className="text-3xl">📞</div>

                <h4 className="mt-4 font-medium">
                  전화문의
                </h4>

                <p className="mt-2 text-xs text-zinc-500">
                  평일 09:00 ~ 18:00
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <div className="text-3xl">💬</div>

                <h4 className="mt-4 font-medium">
                  FAQ
                </h4>

                <p className="mt-2 text-xs text-zinc-500">
                  자주 묻는 질문
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <div className="text-3xl">🎧</div>

                <h4 className="mt-4 font-medium">
                  상담지원
                </h4>

                <p className="mt-2 text-xs text-zinc-500">
                  실시간 상담
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-8
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            gap-6
          "
        >
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold">
              FlowOS
            </div>

            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#">회사소개</a>
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
              <a href="#">제휴문의</a>
            </div>
          </div>

          <div className="text-sm text-zinc-400">
            © 2026 FlowOS. All rights reserved.
          </div>

          <div className="flex gap-4 text-xl">
            <span>▶️</span>
            <span>💬</span>
            <span>📞</span>
          </div>
        </div>
      </div>

    </footer>
  );
}