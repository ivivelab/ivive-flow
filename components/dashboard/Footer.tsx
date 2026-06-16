import {
  Mail,
  Phone,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* 회사 정보 */}

          <div>

            <h3 className="font-bold text-lg">
              IVIVE FlowOS
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              고객관리부터 견적, 예약, 계약까지
              하나의 흐름으로 연결하는 CRM
            </p>

          </div>

          {/* 연락처 */}

          <div className="space-y-2 text-sm text-slate-500">

            <div className="flex items-center gap-2">
              <Mail size={14} />
              contact@ivive.kr
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} />
              02-1234-5678
            </div>

            <div className="flex items-center gap-2">
              <Globe size={14} />
              www.ivive.kr
            </div>

          </div>

        </div>

        <div className="mt-8 pt-6 border-t">

          <div className="flex flex-col lg:flex-row justify-between gap-4">

            <p className="text-xs text-slate-400">
              © 2026 IVIVE. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs text-slate-400">

              <button>
                개인정보처리방침
              </button>

              <button>
                이용약관
              </button>

              <button>
                고객지원
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}