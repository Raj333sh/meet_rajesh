import { motion } from "framer-motion";

const circles = [
  { size: 640, opacity: 0.08 },
  { size: 520, opacity: 0.06 },
  { size: 420, opacity: 0.05 },
];

const BlueprintOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[9] flex items-center justify-center">

      {/* Construction Circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.size}
          className="absolute rounded-full border border-cyan-400"
          style={{
            width: circle.size,
            height: circle.size,
            opacity: circle.opacity,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 220,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical Construction Line */}
      <div
        className="absolute h-[680px] w-px bg-cyan-400/10"
      />

      {/* Horizontal Construction Line */}
      <div
        className="absolute w-[720px] h-px bg-cyan-400/10"
      />

      {/* Center Marker */}
      <motion.div
        className="absolute w-4 h-4 rounded-full border border-cyan-400/40"
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

    </div>
  );
};

export default BlueprintOverlay;