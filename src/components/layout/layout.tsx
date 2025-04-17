import { Outlet } from "react-router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 px-4 sm:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
