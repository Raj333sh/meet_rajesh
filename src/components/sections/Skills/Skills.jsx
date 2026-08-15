import { motion } from "framer-motion";
import SkillColumn from "./SkillColumn";
import Interests from "./Interests";
import skillsData from "./skills.data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="site-section 
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        border-b
        border-white/[0.08]
        bg-[#06111B]
      "
    >
      {/* subtle engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40,215,255,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40,215,255,0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div
        className="
          relative
          mx-auto
          site-container py-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-7
            lg:grid-cols-[165px_minmax(0,1fr)_285px]
            lg:gap-5
          "
        >
          {/* LEFT TITLE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p
              className="
                text-[15px]
                font-medium
                uppercase
                tracking-[2.5px]
                text-cyan-400
              "
            >
              Skills & Tools
            </p>

            <h2
              className="
                mt-2
                max-w-[150px]
                text-[26px]
                font-semibold
                leading-[1.25]
                text-white
              "
            >
              My Technical
              <br />
              Toolkit
            </h2>
          </motion.div>

          {/* SKILL COLUMNS */}
          <div
            className="
              grid
              grid-cols-2
              gap-y-7
              sm:grid-cols-2
              md:grid-cols-4
              md:gap-y-0
            "
          >
            {skillsData.map((skill) => (
              <SkillColumn
                key={skill.title}
                {...skill}
              />
            ))}
          </div>

          {/* INTERESTS */}
          <Interests />
        </div>
      </div>
    </section>
  );
};

export default Skills;