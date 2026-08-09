const AboutText = () => {
  return (
    <div className="max-w-[400px]">

      <p className="text-[15px] font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
        WHO I AM
      </p>

      <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-white">
        Engineering is more
        <br />
        than my profession.
      </h2>

      <h3 className="mt-0 text-[26px] font-bold leading-[1.2] text-white">
        It is how I see the world.
      </h3>

      <p className="mt-5 max-w-[270px] text-[15px] leading-[1.55] text-slate-400">
        From understanding machines to building complex projects,
        my journey has been driven by curiosity, learning and the
        desire to create impact.
      </p>

      <a
        href="#travel"
        className="mt-5 rounded border border-white/25 px-4 py-2 text-[15px] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
      >
        Read My Story
      </a>

    </div>
  );
};

export default AboutText;