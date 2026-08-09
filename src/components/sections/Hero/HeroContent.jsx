import { Typewriter } from "react-simple-typewriter";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="flex w-full max-w-[560px] flex-col">
      
      <span className="
        inline-flex
        rounded-full
        px-5
        py-2
        text-sm
        tracking-[0.35em]
        text-white
      ">
        Hello, I'm
      </span>

      <h1 className="
        mt-5
        font-black
        leading-[0.9]
        tracking-[-4px]
        text-[7rem]
        xl:text-[8rem]
      ">
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

      {/* Typewriter wrapper */}
      <div className="mt-10 min-h-[2rem] text-lg font-medium text-white">
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

      {/* Paragraph */}
      <p className="
        mt-8
        min-h-[4rem]
        max-w-xl
        text-lg
        leading-6
        text-gray-500
      ">
        I love understanding how things are built, how systems work, and
        how technology can make everything better.
      </p>

      {/* Buttons */}
      <div className="mt-12">
        <HeroButtons />
      </div>

    </div>
  );
};

export default HeroContent;