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

      <main className="bg-[#f8f7fa]">
      {children}
      </main>

      <Footer />
    </>
  );
}