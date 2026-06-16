import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsCards from "@/components/dashboard/StatsCards";
import PipelineFlow from "@/components/dashboard/PipelineFlow";
import AIBriefing from "@/components/dashboard/AIBriefing";
import ScheduleWidget from "@/components/dashboard/ScheduleWidget";
import FinanceWidget from "@/components/dashboard/FinanceWidget";
import RecentInquiry from "@/components/dashboard/RecentInquiry";
import ProjectProgress from "@/components/dashboard/ProjectProgress";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="w-[90%] mx-auto p-6 space-y-6">

      <WelcomeSection />

      <StatsCards />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PipelineFlow />
        </div>

        <AIBriefing />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <ScheduleWidget />
        <FinanceWidget />
        <RecentInquiry />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ProjectProgress />
        <QuickActions />
      </div>

    </div>
  );
}