import { motion } from "framer-motion";
import { contactInfo } from "./connect.data";

const ContactInfo = () => {
  return (
    <div
      className="
        rounded-xl
        border border-white/10
        bg-[#08121E]/70
        backdrop-blur-xl
        p-4
      "
    >
      <div className="space-y-5">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className={`
                group
                flex
                items-start
                gap-3
                ${
                  index !== contactInfo.length - 1
                    ? "border-b border-white/10 pb-4"
                    : ""
                }
              `}
            >
              <div
                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-cyan-400/30
                  bg-cyan-400/5
                  text-cyan-400
                  transition
                  group-hover:border-cyan-400/60
                  group-hover:bg-cyan-400/10
                "
              >
                <Icon size={16} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[15px]
                    uppercase
                    tracking-[0.18em]
                    text-cyan-400
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1
                    break-words
                    text-[15px]
                    leading-5
                    text-white/80
                    transition
                    group-hover:text-white
                  "
                >
                  {item.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;