const AboutText = () => {
  return (
    <div className="max-w-[400px]">
      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-cyan-400

          sm:text-[10px]

          lg:text-xs
          lg:tracking-[0.28em]
        "
      >
        WHO I AM
      </p>

      <h2
        className="
          mt-3
          text-[24px]
          font-bold
          leading-[1.15]
          tracking-[-0.02em]
          text-white

          sm:text-[27px]

          lg:text-[26px]
        "
      >
        Engineering is more
        <br />
        than my profession.
      </h2>

      <h3
        className="
          mt-0
          text-[24px]
          font-bold
          leading-[1.15]
          tracking-[-0.02em]
          text-white

          sm:text-[27px]

          lg:text-[26px]
        "
      >
        It is how I see the world.
      </h3>

      <p
        className="
          mt-4
          max-w-[310px]
          text-[12px]
          leading-[1.55]
          text-slate-400

          sm:text-[13px]

          lg:mt-5
          lg:max-w-[270px]
          lg:text-[15px]
        "
      >
        From understanding machines to building complex projects,
        my journey has been driven by curiosity, learning and the
        desire to create impact.
      </p>

      <a
        href="#stories"
        className="
          mt-5
          inline-flex
          min-h-[40px]
          items-center
          justify-center
          rounded
          border
          border-white/25
          px-5
          py-2.5
          text-[12px]
          font-medium
          text-white
          transition-all
          duration-300

          hover:border-cyan-400
          hover:bg-cyan-400
          hover:text-black

          sm:text-[13px]
        "
      >
        Read My Story
      </a>
    </div>
  );
};

export default AboutText;