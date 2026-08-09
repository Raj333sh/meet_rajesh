import { motion } from "framer-motion";
import {
  Plane,
  BrainCircuit,
  Cog,
  Factory,
  BriefcaseBusiness,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const interests = [
  {
    label: "Travel",
    icon: Plane,
    position: "left-[25%] top-[20%]",
    color: "purple",
  },
  {
    label: "AI & Tech",
    icon: BrainCircuit,
    position: "right-[10%] top-[25%]",
    color: "cyan",
  },
  {
    label: "Engineering",
    icon: Cog,
    position: "right-[-10%] top-[40%]",
    color: "orange",
  },
  {
  label: "Manufacturing",
  icon: Factory,
  position: "right-[-1%] bottom-[18%]",
  color: "green",
},
{
  label: "Business",
  icon: BriefcaseBusiness,
  position: "left-1/2 bottom-[-1%]",
  color: "orange",
},
  {
    label: "Reading",
    icon: BookOpen,
    position: "left-[16%] bottom-[8%]",
    color: "orange",
  },
  {
    label: "Innovation",
    icon: Lightbulb,
    position: "left-[15%] top-[50%]",
    color: "purple",
  },
];

const colorMap = {
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-400/50",
    glow: "shadow-[0_0_12px_rgba(40,215,255,0.18)]",
  },

  orange: {
    text: "text-orange-400",
    border: "border-orange-400/50",
    glow: "shadow-[0_0_12px_rgba(210,138,66,0.16)]",
  },

  green: {
    text: "text-emerald-400",
    border: "border-emerald-400/50",
    glow: "shadow-[0_0_12px_rgba(52,211,153,0.16)]",
  },

  purple: {
    text: "text-purple-400",
    border: "border-purple-400/50",
    glow: "shadow-[0_0_12px_rgba(168,85,247,0.16)]",
  },
};

const Interests = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        min-w-0
        border-l
        border-white/[0.08]
        px-4
        sm:px-5
        lg:px-6
      "
    >
      {/* HEADER */}
      <div>
        <p
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-cyan-400
          "
        >
          INTERESTS
        </p>

        <h2
          className="
            mt-1
            text-[24px]
            font-semibold
            leading-tight
            text-white
            sm:text-[26px]
          "
        >
          What Drives Me
        </h2>
      </div>

      {/* RADIAL AREA */}
      <div
        className="
          relative
          mx-auto
          mt-4
          h-[225px]
          w-full
          max-w-[225px]
        "
      >
        {/* ================================
            OUTER ORBIT
        ================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[170px]
            w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.07]
          "
        />

        {/* ================================
            INNER ORBIT
        ================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[112px]
            w-[112px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/20
          "
        />

        {/* ================================
            CONNECTOR 1
        ================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-px
            w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-[18deg]
            bg-cyan-400/10
          "
        />

        {/* ================================
            CONNECTOR 2
        ================================= */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-px
            w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[32deg]
            bg-cyan-400/10
          "
        />

        {/* ================================
            CENTER
        ================================= */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 12px rgba(40,215,255,0.08)",
              "0 0 25px rgba(40,215,255,0.20)",
              "0 0 12px rgba(40,215,255,0.08)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-[60px]
            w-[60px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-[#091722]/95
            text-center
          "
        >
          <span
            className="
              text-[12px]
              font-semibold
              leading-[12px]
              text-white
            "
          >
            RAJESH
            <br />
            MISHRA
          </span>
        </motion.div>

        {/* ================================
            INTEREST NODES
        ================================= */}
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          const colors = colorMap[interest.color];

          return (
            <motion.div
              key={interest.label}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
              }}
              className={`
                absolute
                ${interest.position}
                z-20
                flex
                w-[68px]
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
                text-center
              `}
            >
              {/* ICON */}
              <div
                className={`
                  flex
                  h-[28px]
                  w-[28px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-[#08131D]
                  ${colors.border}
                  ${colors.glow}
                `}
              >
                <Icon
                  size={13}
                  strokeWidth={1.5}
                  className={colors.text}
                />
              </div>

              {/* LABEL */}
              <span
                className={`
                  mt-1
                  block
                  whitespace-nowrap
                  text-[14px]
                  font-medium
                  leading-5
                  ${colors.text}
                `}
              >
                {interest.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Interests;