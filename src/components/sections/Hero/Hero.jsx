import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";
import FloatingContactBar from "../../../layouts/FloatingContactBar";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        pt-16
        lg:pt-20
      "
    >
      {/* LEFT SOCIAL BAR */}
      <HeroSocial />

      {/* RIGHT CONTACT CARD */}
      <FloatingContactBar />

      {/* MAIN HERO */}
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-112px)]
          max-w-[1600px]
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* HERO CONTENT */}
       <div
          className="
            relative
            z-30
            w-[44%]
            lg:translate-x-[60px]
            xl:translate-x-[80px]
          "
        >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <HeroContent />
        </motion.div>
        </div>
        
        {/* HERO IMAGE */}

        <div
          className="
            relative
            flex
            w-[56%]
            justify-center
            lg:-translate-x-[35px]
            xl:-translate-x-[50px]
          "
        >
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <HeroImage />
        </motion.div>
        </div>
        
        {/* MOBILE IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            relative
            flex
            w-full
            justify-center
            lg:hidden
          "
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;