import { motion } from "framer-motion";

const SkillColumn = ({ title, items, accent = "cyan" }) => {
  const accentClass = {
    cyan: "text-cyan-400",
    orange: "text-orange-400",
    green: "text-emerald-400",
  };

  const dotClass = {
    cyan: "bg-cyan-400",
    orange: "bg-orange-400",
    green: "bg-emerald-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="
        flex
        h-full
        min-w-0
        flex-col
        border-l
        border-white/[0.08]
        px-3
        sm:px-4
      "
    >
      {/* CATEGORY */}
      <h3
        className={`
          text-[15px]
          font-medium
          leading-6
          ${accentClass[accent]}
        `}
      >
        {title}
      </h3>

      {/* SKILLS */}
      <div
        className="
          mt-5
          flex
          flex-1
          flex-col
          gap-4
        "
      >
        {items.map((skill) => (
          <div
            key={skill.name}
            className="
              flex
              min-h-[28px]
              items-center
              justify-between
              gap-0.5
            "
          >
            {/* SKILL NAME */}
            <span
              className="
                min-w-0
                truncate
                text-[15px]
                leading-6
                text-slate-300
              "
            >
              {skill.name}
            </span>

            {/* SKILL LEVEL DOTS */}
            <div
              className="
                flex
                shrink-0
                items-center
                gap-[3px]
              "
            >
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`
                    h-[5px]
                    w-[5px]
                    rounded-full
                    ${
                      dot <= skill.level
                        ? dotClass[accent]
                        : "bg-white/10"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillColumn;