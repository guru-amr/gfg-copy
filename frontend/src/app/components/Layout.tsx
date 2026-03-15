import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { PageTransition } from "./PageTransition";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageTransition />
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-1 animate-page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
