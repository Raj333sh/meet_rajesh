import { motion } from "framer-motion";

const Ring = ({
  size,
  border,
  duration,
  reverse = false,
  dashed = false,
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      border: `${border}px ${
        dashed ? "dashed" : "solid"
      } rgba(40,215,255,.12)`,

      boxShadow:
        "0 0 35px rgba(40,215,255,.12)",
    }}
    animate={{
      rotate: reverse ? -360 : 360,
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const HeroRings = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">

      <Ring
        size={620}
        border={1}
        duration={120}
      />

      <Ring
        size={540}
        border={1}
        duration={90}
        reverse
        dashed
      />

      <Ring
        size={450}
        border={1}
        duration={70}
      />

      <Ring
        size={360}
        border={1}
        duration={50}
        reverse
        dashed
      />

      <Ring
        size={280}
        border={1}
        duration={35}
      />

    </div>
  );
};

export default HeroRings;