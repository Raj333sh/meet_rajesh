import { Outlet } from "react-router-dom";

import BackgroundManager from "../components/background/BackgroundManager";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050B14] text-white">
      {/* Global background */}
      <BackgroundManager />

      {/* Navigation */}
      <Navbar />

      {/* Main website content */}
      <main className="relative z-30">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-30">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;