import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
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
          opacity-[0.14]
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
            gap-8
            lg:grid-cols-[190px_minmax(0,1fr)]
            lg:gap-8
          "
        >
          {/* LEFT SECTION TITLE */}
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
              amount: 0.35,
            }}
            transition={{
              duration: 0.55,
            }}
            className="lg:pr-4"
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
              Featured Projects
            </p>

            <h2
              className="
                mt-2
                max-w-[175px]
                text-[26px]
                font-semibold
                leading-[1.25]
                text-white
                sm:text-[25px]
              "
            >
              Things I've Built &
              <br />
              Worked On
            </h2>
          </motion.div>

          {/* PROJECT GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;