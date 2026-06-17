import WelcomeSection from "@/components/dashboard/WelcomeSection";
import PipelineFlow from "@/components/dashboard/PipelineFlow";
import Briefing from "@/components/dashboard/Briefing";
import ScheduleWidget from "@/components/dashboard/ScheduleWidget";
import ProjectProgress from "@/components/dashboard/ProjectProgress";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="w-[90%] mx-auto p-6 space-y-6">

      <WelcomeSection />

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <PipelineFlow />
        </div>

        <Briefing />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <ScheduleWidget />

        <RecentActivity />

      </div>

    </div>
  );
}