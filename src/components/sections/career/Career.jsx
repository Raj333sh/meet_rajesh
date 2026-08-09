import { motion } from "framer-motion";
import CareerTimeline from "./CareerTimeline";
import CareerStats from "./CareerStats";

const Career = () => {
  return (
    <section
  id="career"
  className="site-section 
    relative
    overflow-hidden
    border-y border-white/[0.06]
    bg-white/[0.025]
    backdrop-blur-[6px]
  "
>
  <div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-[radial-gradient(circle_at_80%_45%,rgba(94,169,255,0.05),transparent_38%)]
  "
/>
      <div
        className="site-container"
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-10
            xl:grid-cols-[240px_minmax(0,1fr)]
            xl:gap-14
          "
        >
          {/* LEFT INTRO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Career Journey
            </p>

            <h2 className="mt-2 max-w-[220px] text-[24px] font-bold leading-tight text-white">
              Milestones that shaped my professional path
            </h2>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]
              lg:gap-10
              xl:gap-14
            "
          >
            {/* TIMELINE */}
            <CareerTimeline />

            {/* STATS */}
            <CareerStats />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;