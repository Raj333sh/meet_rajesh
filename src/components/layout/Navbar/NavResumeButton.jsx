import { Download } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/Rajesh-Mishra-Resume.pdf"
      download="Rajesh-Mishra-Resume.pdf"
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-md
        border
        border-white/15
        bg-transparent
        px-4
        py-2
        text-[15px]
        font-medium
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/5
        hover:text-cyan-300
        hover:shadow-[0_0_25px_rgba(40,215,255,.15)]
      "
    >
      <span>Download Resume</span>
      <Download
        size={12}
        className="transition-transform group-hover:translate-y-[1px]"
      />
    </a>
  );
};

export default ResumeButton;
