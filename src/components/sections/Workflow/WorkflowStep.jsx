import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WorkflowStep = ({
  title,
  subtitle,
  icon: Icon,
  color,
  isLast,
}) => {
  return (
    <div className="flex min-w-0 flex-1 items-start">
      {/* STEP */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -4 }}
        className="group flex min-w-0 flex-1 flex-col items-center"
      >
        {/* ICON BOX */}
        <div
          className="
            relative
            flex
            h-[46px]
            w-[46px]
            items-center
            justify-center
            rounded-[4px]
            border
            bg-[#07131F]/80
            transition-all
            duration-300
            group-hover:bg-[#0B1D2B]
          "
          style={{
            borderColor: `${color}66`,
            boxShadow: `0 0 0 1px ${color}12, 0 0 18px ${color}12`,
          }}
        >
          {/* blueprint corner */}
          <span
            className="absolute left-0 top-0 h-[7px] w-[7px] border-l border-t"
            style={{ borderColor: color }}
          />

          <span
            className="absolute bottom-0 right-0 h-[7px] w-[7px] border-b border-r"
            style={{ borderColor: color }}
          />

          <Icon
            size={23}
            strokeWidth={1.5}
            style={{ color }}
          />
        </div>

        {/* TITLE */}
        <div
          className="
            mt-3
            min-h-[34px]
            text-center
            text-[15px]
            font-medium
            leading-[16px]
            text-white
            sm:text-[15px]
          "
        >
          <div>{title}</div>

          {subtitle && (
            <div className="text-white">
              {subtitle}
            </div>
          )}
        </div>
      </motion.div>

      {/* ARROW */}
      {!isLast && (
        <div
          className="
            mt-[13px]
            flex
            w-[28px]
            shrink-0
            items-center
            justify-center
            sm:w-[34px]
            lg:w-[42px]
          "
        >
          <ArrowRight
            size={18}
            strokeWidth={1.4}
            className="text-cyan-400/70"
          />
        </div>
      )}
    </div>
  );
};

export default WorkflowStep;