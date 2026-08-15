import { Download } from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}Rajesh-Mishra-Resume.pdf`;

const ResumeButton = () => {
  return (
    <a
      href={resumeUrl}
      download="Rajesh-Mishra-Resume.pdf"
      className="
        group
        inline-flex
        shrink-0
        items-center
        justify-center
        gap-2
        rounded-md
        border
        border-white/15
        bg-transparent

        min-h-[44px]
        px-7
        py-3

        sm:min-h-[46px]
        sm:px-8
        sm:py-3.5

        md:min-h-[48px]
        md:px-9
        md:py-4

        lg:min-h-[50px]
        lg:px-10
        lg:py-4

        xl:px-11
        xl:py-4.5

        text-[15px]
        font-medium
        leading-none
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
