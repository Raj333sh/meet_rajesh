import { motion } from "framer-motion";

const CareerTimelineItem = ({
  year,
  company,
  role,
  description,
  color,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="career-timeline-item relative pl-20 sm:pl-24"
    >
      {/* Timeline node */}
      <div
        className="absolute left-[14px] top-1 flex h-5 w-5 items-center justify-center rounded-full border"
        style={{
          borderColor: `${color}99`,
          backgroundColor: "#07111c",
          boxShadow: `0 0 12px ${color}35`,
        }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div
          className="font-mono text-[14px] font-semibold uppercase tracking-[0.12em] sm:text-[14px]"
          style={{ color }}
        >
          {year}
        </div>

        <h3 className="mt-1 text-[14px] font-semibold leading-tight text-white">
          {company}
        </h3>

        <p className="mt-0.5 text-[14px] font-medium text-cyan-400 sm:text-[14px]">
          {role}
        </p>

        <p className="mt-2 max-w-[330px] text-[14px] leading-6 text-slate-400 sm:text-[14px] sm:leading-[1.45]">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default CareerTimelineItem;