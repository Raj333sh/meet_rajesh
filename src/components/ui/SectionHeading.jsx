import { motion } from "framer-motion";

const SectionHeading = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <p className="mb-3 text-[15px] uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-[26px] font-black text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-3xl text-[15px] leading-[1.55] text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;