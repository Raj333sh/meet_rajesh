import clsx from "clsx";

const GlowButton = ({
  children,
  variant = "primary",
  href,
}) => {
  const className = clsx(
    "inline-flex",
    "shrink-0",
    "min-h-[44px]",
    "items-center",
    "justify-center",
    "rounded-md",

    // Button padding
    "px-7",
    "py-3",

    // Responsive padding
    "sm:min-h-[46px]",
    "sm:px-8",
    "sm:py-3.5",

    "md:min-h-[48px]",
    "md:px-9",
    "md:py-4",

    "lg:min-h-[50px]",
    "lg:px-10",
    "lg:py-4",

    "xl:px-11",
    "xl:py-4.5",

    "font-medium",
    "leading-none",
    "transition-all",
    "duration-300",

    variant === "primary"
      ? "bg-cyan-400 text-black shadow-[0_0_40px_rgba(40,215,255,.35)] hover:scale-105"
      : "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default GlowButton;