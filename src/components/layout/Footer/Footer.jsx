import { ArrowUp, Settings } from "lucide-react";
import RMLogo from "./FooterLogo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#040A12]/80
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          gap-5
          px-5
          py-3
          sm:px-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
          xl:px-16
        "
      >
        {/* BRAND */}
        <div className="flex items-center gap-3">
          
            <RMLogo />
          
          <div>
            <p className="text-[15px] font-semibold text-white">
              RAJESH MISHRA
            </p>

            <p className="mt-0.5 text-[15px] text-white/50">
              Engineer • Planner • Problem Solver • Explorer
            </p>
          </div>
        </div>

        {/* CENTER TAGLINE */}
        <div className="flex items-center gap-3 text-center">
          <Settings
            size={17}
            className="text-cyan-400"
          />

          <span className="text-[15px] text-white/70">
            "Engineering curiosity never stops."
          </span>
        </div>

        {/* COPYRIGHT */}
        <div className="flex items-center gap-4">
          <p className="text-[15px] text-white/40">
            © 2026 Rajesh Mishra. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-sm
              border
              border-white/15
              text-white/50
              transition
              hover:border-cyan-400/50
              hover:text-cyan-400
            "
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;