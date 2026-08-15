import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import {
  storyItems,
  focusItems,
} from "./stories.data";

import StoryModal from "./StoryModal";

const Stories = () => {

  const [isStoriesOpen, setIsStoriesOpen] =
    useState(false);

  const [selectedStory, setSelectedStory] =
    useState(null);

  const openStories = () => {
    setSelectedStory(null);
    setIsStoriesOpen(true);
  };

  const closeStories = () => {
    setIsStoriesOpen(false);
    setSelectedStory(null);
  };

  return (
    <section
      id="stories"
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
      {/* Engineering grid */}
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

      {/* Subtle glow */}
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
            lg:grid-cols-[1fr_1.15fr]
            lg:gap-8
          "
        >

          {/* =====================================================
              STORIES & INSIGHTS
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              duration: 0.55,
            }}
            className="
              min-w-0
              lg:border-r
              lg:border-white/[0.08]
              lg:pr-8
            "
          >
            {/* Heading */}
            <div>
              <p
                className="
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[2.5px]
                  text-cyan-400
                "
              >
                Stories & Insights
              </p>

              <h2
                className="
                  mt-2
                  max-w-[250px]
                  text-[25px]
                  font-semibold
                  leading-[1.25]
                  text-white
                  sm:text-[25px]
                "
              >
                Thoughts, Learnings
                <br />
                & Experiences
              </h2>

              <button
  type="button"
  onClick={openStories}
  className="
    mt-5
    inline-flex
    min-h-[40px]
    shrink-0
    items-center
    justify-center
    rounded-[3px]
    border
    border-white/20
    bg-transparent
    px-5
    py-2.5
    text-[13px]
    text-white
    transition-all
    duration-300
    hover:border-cyan-400/50
    hover:text-cyan-300

    sm:text-sm
  "
>
  Read All Stories
</button>
            </div>

            {/* Story list */}
            <div
              className="
                mt-7
                overflow-hidden
                rounded-[3px]
                border
                border-cyan-400/20
                bg-[#07131F]/70
              "
            >
              {storyItems.map((story, index) => (
                <motion.button
                  key={story.id}
                  type="button"
  onClick={() => {
    setSelectedStory(story);
    setIsStoriesOpen(true);
  }}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className={`
                    group
                    flex
                    min-h-[43px]
                    items-center
                    gap-2
                    px-3
                    py-2
                    transition-colors
                    cursor-pointer
                    duration-300
                    hover:bg-cyan-400/[0.035]
                    ${
                      index !== storyItems.length - 1
                        ? "border-b border-white/[0.07]"
                        : ""
                    }
                  `}
                >
                  {/* Arrow */}
                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      text-cyan-400/70
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-cyan-300
                    "
                  >
                    <ChevronRight size={11} />
                  </div>

                  {/* Story */}
                  <p
                    className="
                      min-w-0
                      flex-1
                      truncate
                      text-[15px]
                      leading-5
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-white
                      sm:text-[15px]
                    "
                  >
                    {story.title}
                  </p>

                  {/* Date */}
                  <span
                    className="
                      shrink-0
                      text-[15px]
                      tracking-[0.5px]
                      text-slate-500
                      sm:text-[15px]
                    "
                  >
                    {story.date}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              CURRENT FOCUS
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
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
              duration: 0.55,
            }}
            className="min-w-0"
          >
            {/* Heading */}
            <div>
              <p
                className="
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[2.5px]
                  text-cyan-400
                "
              >
                Current Focus
              </p>

              <h2
                className="
                  mt-2
                  text-[25px]
                  font-semibold
                  leading-[1.25]
                  text-white
                  sm:text-[25px]
                "
              >
                What I'm Working On
              </h2>
            </div>

            {/* Focus cards */}
            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {focusItems.map((item, index) => {
                const Icon = item.icon;

                const isOrange =
                  item.accent === "orange";

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      min-h-[125px]
                      overflow-hidden
                      rounded-[3px]
                      border
                      border-cyan-400/20
                      bg-[#07131F]/70
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/40
                    "
                  >
                    {/* top accent */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-0
                        h-px
                        w-full
                        ${
                          isOrange
                            ? "bg-orange-400/50"
                            : "bg-cyan-400/50"
                        }
                      `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                        mx-auto
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          isOrange
                            ? "border-orange-400/40 text-orange-400"
                            : "border-cyan-400/40 text-cyan-400"
                        }
                        transition-all
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon size={15} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        text-center
                        text-[15px]
                        font-medium
                        leading-[1.25]
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
<p
  className="
    mt-2
    w-full
    px-2
    text-center
    text-[15px]
    leading-[1.5]
    text-slate-400
  "
>
  {item.description}
</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <StoryModal
  isOpen={isStoriesOpen}
  stories={storyItems}
  selectedStory={selectedStory}
  onSelectStory={setSelectedStory}
  onClose={closeStories}
/>
    </section>
  );
};

export default Stories;