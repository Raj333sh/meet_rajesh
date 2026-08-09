import clsx from "clsx";

const GlowButton = ({
  children,
  variant = "primary",
}) => {
  return (
    <button
      className={clsx(
        "rounded-md",
        "px-8",
        "py-4",
        "font-medium",
        "transition-all",
        "duration-300",

        variant === "primary"
          ? "bg-cyan-400 text-black shadow-[0_0_40px_rgba(40,215,255,.35)] hover:scale-105"

          : "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white"
      )}
    >
      {children}
    </button>
  );
};

export default GlowButton;