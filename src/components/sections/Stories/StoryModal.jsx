import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

const StoryModal = ({
  isOpen,
  stories,
  selectedStory,
  onSelectStory,
  onClose,
}) => {
  /*
   * Lock page scrolling while modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /*
   * ESC closes modal.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentIndex = selectedStory
    ? stories.findIndex(
        (story) => story.id === selectedStory.id
      )
    : -1;

  const previousStory =
    currentIndex > 0
      ? stories[currentIndex - 1]
      : null;

  const nextStory =
    currentIndex >= 0 &&
    currentIndex < stories.length - 1
      ? stories[currentIndex + 1]
      : null;

  const handleNext = () => {
    if (nextStory) {
      onSelectStory(nextStory);
    }
  };

  const handlePrevious = () => {
    if (previousStory) {
      onSelectStory(previousStory);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="story-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-[#02070D]/90
          p-4
          backdrop-blur-md
          sm:p-6
          lg:p-10
        "
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.98,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            max-h-[90vh]
            w-full
            max-w-[900px]
            flex-col
            overflow-hidden
            rounded-[6px]
            border
            border-cyan-400/20
            bg-[#07131F]
            shadow-[0_0_80px_rgba(0,0,0,0.55)]
          "
        >
          {/* TOP ACCENT */}
          <div
            className="
              absolute
              left-0
              top-0
              h-px
              w-full
              bg-cyan-400/60
            "
          />

          {/* HEADER */}
          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              border-b
              border-white/[0.08]
              px-5
              py-4
              sm:px-7
            "
          >
            {selectedStory ? (
              <button
                type="button"
                onClick={() =>
                  onSelectStory(null)
                }
                className="
                  -ml-3
                  inline-flex
                  min-h-[40px]
                  shrink-0
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-2
                  text-[14px]
                  text-slate-400
                  transition
                  hover:text-cyan-300
                "
              >
                <ArrowLeft size={15} />
                Back to Stories
              </button>
            ) : (
              <div>
                <p
                  className="
                    text-[13px]
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
                    mt-1
                    text-[22px]
                    font-semibold
                    text-white
                    sm:text-[25px]
                  "
                >
                  Thoughts, Learnings & Experiences
                </h2>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close stories"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-slate-400
                transition
                hover:border-cyan-400/40
                hover:text-cyan-300
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* CONTENT */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              p-5
              sm:p-7
              lg:p-9
            "
          >
            {!selectedStory ? (
              /* STORY LIST */
              <div className="space-y-2">
                {stories.map((story, index) => (
                  <motion.button
                    key={story.id}
                    type="button"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() =>
                      onSelectStory(story)
                    }
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      border
                      border-white/[0.08]
                      bg-[#081722]/70
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.035]
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[13px]
                        text-cyan-400/60
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          text-[16px]
                          font-medium
                          leading-6
                          text-white
                          transition
                          group-hover:text-cyan-300
                        "
                      >
                        {story.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          uppercase
                          tracking-[1px]
                          text-slate-500
                        "
                      >
                        {story.date}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="
                        shrink-0
                        text-slate-600
                        transition
                        group-hover:translate-x-1
                        group-hover:text-cyan-300
                      "
                    />
                  </motion.button>
                ))}
              </div>
            ) : (
              /* STORY ARTICLE */
              <motion.article
                key={selectedStory.id}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mx-auto max-w-[720px]"
              >
                <p
                  className="
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[2.5px]
                    text-cyan-400
                  "
                >
                  {selectedStory.date}
                </p>

                <h1
                  className="
                    mt-3
                    text-[28px]
                    font-semibold
                    leading-[1.2]
                    text-white
                    sm:text-[34px]
                  "
                >
                  {selectedStory.title}
                </h1>

                <div
                  className="
                    mt-6
                    h-px
                    w-full
                    bg-white/[0.08]
                  "
                />

                <div
                  className="
                    mt-7
                    whitespace-pre-line
                    text-[16px]
                    leading-[1.8]
                    text-slate-300
                    sm:text-[17px]
                  "
                >
                  {selectedStory.content}
                </div>

                {/* ARTICLE NAVIGATION */}
                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-white/[0.08]
                    pt-6
                  "
                >
                  <button
                    type="button"
                    disabled={!previousStory}
                    onClick={handlePrevious}
                    className="
                      -ml-3
                      inline-flex
                      min-h-[40px]
                      shrink-0
                      items-center
                      gap-2
                      rounded-md
                      px-3
                      py-2
                      text-[14px]
                      text-slate-400
                      transition
                      hover:text-cyan-300
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                  >
                    <ArrowLeft size={15} />
                    Previous
                  </button>

                  <button
                    type="button"
                    disabled={!nextStory}
                    onClick={handleNext}
                    className="
                      -mr-3
                      inline-flex
                      min-h-[40px]
                      shrink-0
                      items-center
                      gap-2
                      rounded-md
                      px-3
                      py-2
                      text-[14px]
                      text-slate-400
                      transition
                      hover:text-cyan-300
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                  >
                    Next
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.article>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryModal;