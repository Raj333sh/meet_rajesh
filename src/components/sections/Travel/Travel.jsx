import { motion } from "framer-motion";

import TravelMap from "./TravelMap";
import TravelGallery from "./TravelGallery";
import { travelStats } from "./travel.data";

const Travel = () => {
  return (
    <section
      id="travel"
      className="
        site-section
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-[#06111B]
      "
    >
      {/* Engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.10]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40,215,255,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40,215,255,0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Subtle center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/3
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[100px]
        "
      />

      <div className="relative mx-auto site-container py-0">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
          "
        >
          {/* =====================================================
              LEFT — TRAVEL + MAP
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              min-w-0
              border-b
              border-white/[0.08]
              pb-8
              lg:border-b-0
              lg:border-r
              lg:border-white/[0.08]
              lg:pr-8
              lg:pb-0
            "
          >
            <p
              className="
                text-[15px]
                font-medium
                uppercase
                tracking-[2.5px]
                text-cyan-400
              "
            >
              Travel & Exploration
            </p>

            <h2
              className="
                mt-2
                text-[28px]
                font-semibold
                leading-tight
                text-white
              "
            >
              Places I've Visited
            </h2>

            <TravelMap />

            {/* Stats */}
            <div
              className="
                mt-4
                grid
                grid-cols-3
                border-t
                border-white/[0.08]
                pt-5
              "
            >
              {travelStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    ${
                      index !== 0
                        ? "border-l border-white/[0.08]"
                        : ""
                    }
                    pl-4
                    first:pl-0
                  `}
                >
                  <div
                    className="
                      text-[30px]
                      font-medium
                      leading-none
                      text-cyan-400
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[13px]
                      text-white/55
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — GALLERY
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              min-w-0
              pt-8
              lg:pl-8
              lg:pt-0
            "
          >
            <TravelGallery />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
