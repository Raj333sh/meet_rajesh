import { Typewriter } from "react-simple-typewriter";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div
      className="
        flex
        w-full
        max-w-[560px]
        flex-col

        lg:max-w-[560px]
      "
    >
      {/* GREETING */}
      <span
        className="
          inline-flex
          w-fit
          px-1
          py-1

          text-[13px]
          tracking-[0.12em]
          text-white

          sm:text-sm
          sm:tracking-[0.2em]

          lg:text-sm
          lg:tracking-[0.35em]
        "
      >
        Hello, I'm
      </span>

      {/* NAME */}
      <h1
        className="
          mt-3
          font-black
          leading-[0.88]
          tracking-[-2px]
          text-[2.8rem]

          sm:mt-4
          sm:text-[3.8rem]
          sm:tracking-[-3px]

          md:text-[5rem]

          lg:mt-5
          lg:text-[7rem]
          lg:tracking-[-4px]

          xl:text-[8rem]
        "
      >
        RAJESH
        <br />

        <span
          className="
            bg-size-[200%_200%]
            animate-gradient
            bg-linear-to-r
            from-cyan-300
            via-sky-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          MISHRA
        </span>
      </h1>

      {/* TYPEWRITER */}
      <div
        className="
          mt-5
          min-h-[2.5rem]
          text-[13px]
          font-medium
          leading-5
          text-white

          sm:mt-6
          sm:text-sm

          lg:mt-10
          lg:text-lg
        "
      >
        <Typewriter
          words={[
            "Mechanical Engineer",
            "Procurement Specialist",
            "Tender Planner",
            "Technology Enthusiast",
            "Explorer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
        />
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-4
          min-h-0
          max-w-[310px]
          text-[12px]
          leading-[1.55]
          text-gray-400

          sm:mt-5
          sm:max-w-[360px]
          sm:text-[13px]

          lg:mt-8
          lg:max-w-xl
          lg:text-lg
          lg:leading-6
        "
      >
        I love understanding how things are built, how systems work, and
        how technology can make everything better.
      </p>

      {/* BUTTONS */}
      <div
        className="
          mt-6

          sm:mt-7

          lg:mt-12
        "
      >
        <HeroButtons />
      </div>
    </div>
  );
};

export default HeroContent;