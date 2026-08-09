import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, highlight, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-8 max-w-3xl text-center"
    >
      <p className="text-[15px] uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-[26px] font-black text-white leading-tight">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-cyan-400">{highlight}</span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-[15px] leading-[1.55] text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;