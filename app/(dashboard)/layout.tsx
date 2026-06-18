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

      <main className="bg-white">
      {children}
      </main>

      <Footer />
    </>
  );
}