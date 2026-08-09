import { motion } from "framer-motion";
import AboutText from "./AboutText";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <section
  id="about"
  className="site-section overflow-hidden border-y border-white/[0.06] bg-white/[0.025] backdrop-blur-[6px]"
>
  <div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-[radial-gradient(circle_at_20%_40%,rgba(40,215,255,0.055),transparent_38%)]
  "
/>
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-16">

          {/* LEFT INTRO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AboutText />
          </motion.div>

          {/* RIGHT MILESTONES */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <AboutCards />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;