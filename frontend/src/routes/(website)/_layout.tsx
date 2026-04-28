import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/website/footer";
import Navbar from "@/components/website/navbar";

export const Route = createFileRoute("/(website)/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
