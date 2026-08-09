import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

const HeroSocial = () => {
  return (
    <div
      className="
        absolute
        left-6
        top-80
        z-40
        hidden
        -translate-y-1/2
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[#07111d]/75
        backdrop-blur-xl
        lg:flex
      "
    >
      <a
        href="https://www.linkedin.com/in/rajesh-mishra-112a02230/"
        aria-label="LinkedIn"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaLinkedin size={17} />
      </a>

      <a
        href="https://github.com/Raj333sh"
        aria-label="GitHub"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaGithub size={17} />
      </a>

      <a
        href="https://www.instagram.com/raj333sh_/"
        aria-label="Instagram"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaInstagram size={17} />
      </a>

      <a
        href="https://www.youtube.com/@raj333sh"
        aria-label="YouTube"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaYoutube size={17} />
      </a>

      <a
        href="mailto:raj333sh@gmail.com"
        aria-label="Email"
        className="flex h-12 w-12 items-center justify-center
        text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <Mail size={17} />
      </a>

      <span className="h-px w-12 bg-white/10" />
      
      <a
        href="https://www.facebook.com/profile.php?id=100009592891393"
        aria-label="Facebook"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaFacebook size={17} />
      </a>

      <span className="h-px w-12 bg-white/10" />
      
      <a
        href="https://x.com/raj333sh_"
        aria-label="X"
        className="flex h-12 w-12 items-center justify-center
        border-b border-white/10 text-white/80
        transition-all duration-300
        hover:bg-cyan-400/10 hover:text-cyan-400"
      >
        <FaTwitter size={17} />
      </a>

    </div>
  );
};

export default HeroSocial;