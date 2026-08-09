import { motion } from "framer-motion";

const HeroGear = () => {
  return (
    <motion.svg
      className="absolute left-10 top-20 opacity-10"
      width="170"
      height="170"
      viewBox="0 0 200 200"
      animate={{ rotate: 360 }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle
        cx="100"
        cy="100"
        r="60"
        stroke="#28D7FF"
        strokeWidth="2"
        fill="none"
      />

      <circle
        cx="100"
        cy="100"
        r="35"
        stroke="#28D7FF"
        strokeWidth="2"
        fill="none"
      />

      {[...Array(16)].map((_, i) => {
        const angle = (360 / 16) * i;

        return (
          <rect
            key={i}
            x="96"
            y="12"
            width="8"
            height="18"
            fill="#28D7FF"
            opacity=".7"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </motion.svg>
  );
};

export default HeroGear;