import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({
  title,
  subtitle,
  category,
  description,
  image,
  accent,
}) => {
  const isOrange = accent === "orange";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        min-w-0
        overflow-hidden
        rounded-[3px]
        border
        border-white/[0.13]
        bg-[#08131E]
        transition-all
        duration-300
        hover:border-cyan-400/40
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[1.42/1] overflow-hidden">
        <img
          src={image}
          alt={`${title} ${subtitle}`}
          loading="lazy"
           decoding="async"
           fetchPriority="low"
           width="800"
           height="560"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* image darkening */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07111B]
            via-[#07111B]/10
            to-transparent
            opacity-70
          "
        />

        {/* technical scan line */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-px
            bg-cyan-400/30
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative px-3.5 pb-3.5 pt-3">
        {/* TITLE */}
        <h3
          className="
            text-[15px]
            font-semibold
            leading-[18px]
            text-white
          "
        >
          {title}
        </h3>

        <h4
          className="
            text-[15px]
            font-medium
            leading-[18px]
            text-white
          "
        >
          {subtitle}
        </h4>

        {/* CATEGORY */}
        <div className="mt-2">
          <span
            className={`
              inline-flex
              rounded-[2px]
              border
              px-1.5
              py-[2px]
              text-[15px]
              font-medium
              leading-none
              ${
                isOrange
                  ? "border-orange-400/30 text-orange-300"
                  : "border-cyan-400/30 text-cyan-300"
              }
            `}
          >
            {category}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mt-2
            line-clamp-3
            min-h-[39px]
            text-[15px]
            leading-[16px]
            text-slate-400
          "
        >
          {description}
        </p>

        {/* ARROW */}
        <div
          className="
            absolute
            bottom-3
            right-3
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-slate-400
            transition-all
            duration-300
            group-hover:border-cyan-400/40
            group-hover:text-cyan-300
          "
        >
          <ArrowRight
            size={13}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;