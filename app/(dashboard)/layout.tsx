import TopNavigation from "@/components/dashboard/TopNavigation";
import Footer from "@/components/dashboard/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />

      <main className="min-h-screen bg-slate-50">
        {children}
      </main>

      <Footer />
    </>
  );
}