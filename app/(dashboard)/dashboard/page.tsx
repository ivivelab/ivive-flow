import WelcomeSection from "@/components/dashboard/WelcomeSection";
import PipelineFlow from "@/components/dashboard/PipelineFlow";
import FinanceWidget from "@/components/dashboard/FinanceWidget";
import ScheduleWidget from "@/components/dashboard/ScheduleWidget";
import RecentActivity from "@/components/dashboard/RecentActivity";
import Briefing from "@/components/dashboard/Briefing";

export default function DashboardPage() {
  return (
    <div className="w-[96%] mx-auto p-6 space-y-6">
      <WelcomeSection />

      {/* 상단 섹션: 파이프라인과 재무현황을 같은 높이로 정렬 */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-9">
          <PipelineFlow /> 
        </div>
        <div className="lg:col-span-3">
          <FinanceWidget />
        </div>
      </div>

      {/* 하단 메인 섹션 */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5">
          <ScheduleWidget /> 
        </div>
        <div className="lg:col-span-4">
          <RecentActivity />
        </div>
        <div className="lg:col-span-3">
          <Briefing />
        </div>
      </div>
    </div>
  );
}
