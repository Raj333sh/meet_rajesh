import { motion } from "framer-motion";

const HeroHUD = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">

      {/* Top Left */}
      <motion.div
        className="absolute left-24 top-24 h-24 w-24 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-[1px] -translate-x-1/2 bg-cyan-400/60" />
        <div className="absolute left-1/2 bottom-0 h-3 w-[1px] -translate-x-1/2 bg-cyan-400/60" />
        <div className="absolute top-1/2 left-0 w-3 h-[1px] -translate-y-1/2 bg-cyan-400/60" />
        <div className="absolute top-1/2 right-0 w-3 h-[1px] -translate-y-1/2 bg-cyan-400/60" />
      </motion.div>

      {/* Right Scanner */}
      <motion.div
        className="absolute right-12 top-40"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-36 h-[1px] bg-cyan-400/40" />
        <div className="mt-3 w-28 h-[1px] bg-cyan-400/30" />
        <div className="mt-3 w-20 h-[1px] bg-cyan-400/20" />
      </motion.div>

      {/* Bottom Arc */}
      <svg
        className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-25"
        width="500"
        height="120"
      >
        <path
          d="M20 100 Q250 10 480 100"
          stroke="#28D7FF"
          strokeWidth="1"
          fill="none"
        />
      </svg>

    </div>
  );
};

export default HeroHUD;