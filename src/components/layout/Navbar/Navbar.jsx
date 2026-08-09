import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavResumeButton from "./NavResumeButton";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -120,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-6 flex max-w-full items-center justify-between rounded-none border border-white/10 bg-[#0A1323]/70 px-8 py-4 backdrop-blur-xl">
        <NavLogo />

        <NavMenu />

        <NavResumeButton />
      </div>
    </motion.header>
  );
};

export default Navbar;