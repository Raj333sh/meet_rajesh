import { motion } from "framer-motion";

const AboutCard = ({
  icon: Icon,
  title,
  description,
  year,
  color,
}) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group
  relative
  flex
  min-h-[175px]
  flex-col
  items-center
  px-2
  py-5
  text-center

  sm:min-h-[185px]
  sm:px-3

  lg:min-h-[185px]"
    >
      {/* Icon */}
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full border bg-[#07111c]"
        style={{
          borderColor: `${color}80`,
          boxShadow: `0 0 18px ${color}18`,
        }}
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          style={{ color }}
        />
      </div>

      {/* Title */}
      <h3 className="mt-3
    max-w-[130px]
    text-[12px]
    font-semibold
    leading-[1.2]
    text-white

    sm:text-[13px]

    lg:text-[15px]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3
    max-w-[145px]
    text-[11px]
    leading-[1.45]
    text-slate-400

    sm:text-[12px]

    lg:text-[15px]
    lg:leading-[1.55]">
        {description}
      </p>

      {/* Timeline connector */}
      <div className="mt-auto flex w-full flex-col items-center">

        <div className="h-4 w-px bg-white/10" />

        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />

        <div
          className="mt-1
    font-mono
    text-[11px]
    font-semibold

    sm:text-xs

    lg:text-[15px]"
          style={{ color }}
        >
          {year}
        </div>

      </div>
    </motion.article>
  );
};

export default AboutCard;