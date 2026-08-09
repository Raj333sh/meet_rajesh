import { motion } from "framer-motion";

const OrbitDots = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative w-[520px] h-[520px]">

        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_#28D7FF]" />

        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_#28D7FF]" />

        <div className="absolute left-1/2 bottom-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_#28D7FF]" />

        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_#28D7FF]" />

      </div>
    </motion.div>
  );
};

export default OrbitDots;