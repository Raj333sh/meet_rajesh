const GlowDivider = () => {
  return (
    <div className="relative my-24 h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-white/5" />

      <div className="absolute left-1/2 top-0 h-px w-80 -translate-x-1/2 bg-cyan-400 shadow-[0_0_20px_#28D7FF]" />
    </div>
  );
};

export default GlowDivider;