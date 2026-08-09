import { motion } from "framer-motion";
import WorkflowStep from "./WorkflowStep";
import workflowSteps from "./workflow.data";

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="site-section 
    relative
    overflow-hidden
    border-y border-white/[0.06]
    bg-white/[0.025]
    backdrop-blur-[6px]
      "
    >
      {/* subtle blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(40,215,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(40,215,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* subtle radial glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[100px]
        "
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
            lg:items-center
            lg:gap-8
          "
        >
          {/* LEFT TITLE AREA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:pr-3"
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
              What I Do
            </p>

            <h2
              className="
                mt-2
                max-w-[180px]
                text-[26px]
                font-semibold
                leading-[1.25]
                text-white
                sm:text-[25px]
              "
            >
              From Requirement to
              <br />
              Successful Delivery
            </h2>
          </motion.div>

          {/* RIGHT WORKFLOW */}
          <div className="relative min-w-0">
            {/* WORKFLOW ROW */}
            <div
              className="
                hidden
                lg:flex
                lg:items-start
                lg:gap-0
              "
            >
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={step.id}
                  {...step}
                  isLast={index === workflowSteps.length - 1}
                />
              ))}
            </div>

            {/* TABLET */}
            <div
              className="
                hidden
                md:grid
                md:grid-cols-4
                md:gap-x-3
                md:gap-y-8
                lg:hidden
              "
            >
              {workflowSteps.map((step) => (
                <WorkflowStep
                  key={step.id}
                  {...step}
                  isLast={true}
                />
              ))}
            </div>

            {/* MOBILE */}
            <div
              className="
                grid
                grid-cols-2
                gap-x-2
                gap-y-8
                md:hidden
              "
            >
              {workflowSteps.map((step) => (
                <WorkflowStep
                  key={step.id}
                  {...step}
                  isLast={true}
                />
              ))}
            </div>

            {/* LOWER COMPLIANCE CONNECTOR */}
            <div className="relative mt-7 hidden lg:block">
              {/* left dotted curve */}
              <div
                className="
                  absolute
                  left-[6%]
                  right-[6%]
                  top-0
                  h-[28px]
                  border-b
                  border-dashed
                  border-cyan-400/35
                "
                style={{
                  borderRadius: "0 0 50% 50%",
                }}
              />

              {/* vertical drops */}
              <div
                className="
                  absolute
                  left-[6%]
                  top-0
                  h-[13px]
                  border-l
                  border-dashed
                  border-cyan-400/35
                "
              />

              <div
                className="
                  absolute
                  right-[6%]
                  top-0
                  h-[13px]
                  border-r
                  border-dashed
                  border-cyan-400/35
                "
              />

              {/* CENTER PILL */}
              <div className="relative z-10 flex justify-center pt-4">
                <div
                  className="
                    rounded-full
                    border
                    border-cyan-400/30
                    bg-[#07131F]
                    px-5
                    py-1.5
                    text-[15px]
                    tracking-[0.3px]
                    text-slate-300
                    shadow-[0_0_20px_rgba(40,215,255,0.06)]
                  "
                >
                  <span className="text-cyan-300">
                    Compliance
                  </span>

                  <span className="mx-2 text-slate-600">
                    •
                  </span>

                  <span>
                    Documentation
                  </span>

                  <span className="mx-2 text-slate-600">
                    •
                  </span>

                  <span>
                    Communication
                  </span>

                  <span className="mx-2 text-slate-600">
                    •
                  </span>

                  <span>
                    Coordination
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;