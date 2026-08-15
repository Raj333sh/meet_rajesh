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
      className="sticky top-0 z-50 w-full"
    >
      <div
        className="
          mx-auto
          flex
          max-w-full
          items-center
          justify-between
          rounded-none
          border
          border-white/10
          bg-[#0A1323]/70
          backdrop-blur-xl

          mt-3
          px-5
          py-3

          sm:mt-4
          sm:px-6
          sm:py-3.5

          md:px-8

          lg:mt-6
          lg:px-12
          lg:py-4

          xl:px-16
        "
      >
        <NavLogo />

        <NavMenu />

        <NavResumeButton />
      </div>
    </motion.header>
  );
};

export default Navbar;
