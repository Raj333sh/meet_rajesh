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

    pt-6
    sm:pt-8
      "
    >
      {/* DESKTOP SOCIAL BAR */}
      <HeroSocial />

      {/* CONTACT INFORMATION */}
      <FloatingContactBar />

      <div
        className="
          mx-auto
          flex
          min-h-[80vh]
          w-full
          max-w-[1600px]
          flex-col

          px-5
          sm:px-6
          md:px-8

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
          xl:px-16
        "
      >
        {/* HERO CONTENT */}
        <div
          className="
            relative
    z-30
    order-1
    w-full

    lg:w-[44%]
    lg:translate-x-[60px]

    xl:translate-x-[80px]
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>
        </div>

        {/* DESKTOP HERO IMAGE */}
        <div
          className="
            relative
            z-10
            order-2
            hidden
            w-full
            justify-center

            lg:flex
            lg:w-[56%]
            lg:-translate-x-[35px]

            xl:-translate-x-[50px]
          "
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* MOBILE HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            relative
            z-10
            order-2
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