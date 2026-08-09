import { ArrowRight } from "lucide-react";
import { socialLinks } from "./connect.data";

const SocialLinks = () => {
  return (
    <div>
      <p
        className="
          text-[15px]
          uppercase
          tracking-[0.2em]
          text-cyan-400
        "
      >
        Follow Me
      </p>

      <div className="mt-4">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href === "#" ? undefined : "_blank"}
              rel={item.href === "#" ? undefined : "noreferrer"}
              className={`
                group
                flex
                items-center
                justify-between
                py-2.5
                text-[15px]
                text-white/70
                transition
                hover:text-white
                ${
                  index !== socialLinks.length - 1
                    ? "border-b border-white/8"
                    : ""
                }
              `}
            >
              <span className="flex items-center gap-3">
                <Icon
                  size={14}
                  strokeWidth={1.6}
                  className="
                    text-white/60
                    transition
                    group-hover:text-cyan-400
                  "
                />

                <span>{item.label}</span>
              </span>

              <ArrowRight
                size={13}
                className="
                  text-white/30
                  transition
                  group-hover:translate-x-1
                  group-hover:text-cyan-400
                "
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;