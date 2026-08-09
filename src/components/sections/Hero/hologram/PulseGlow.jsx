import { motion } from "framer-motion";

const PulseGlow = () => {
  return (
    <>
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [0.96, 1.02, 0.96],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(40,215,255,.22) 0%, rgba(40,215,255,.10) 35%, rgba(40,215,255,.04) 60%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1.05, 1.12, 1.05],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,169,255,.15) 0%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />
    </>
  );
};

export default PulseGlow;