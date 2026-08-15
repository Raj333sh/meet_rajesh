import AboutCard from "./AboutCard";
import { aboutCards } from "./about.data";

const AboutCards = () => {
  return (
    <div className="w-full">
      <div
        className="
          grid
          w-full
          grid-cols-2

          lg:flex
        "
      >
        {aboutCards.map((card, index) => (
          <div
            key={card.title}
            className={`
              min-w-0
              border-white/20

              px-3
              py-2

              sm:px-4

              lg:flex-1
              lg:px-6
              lg:py-0

              ${
                index !== aboutCards.length - 1
                  ? "border-r border-b lg:border-r lg:border-b-0"
                  : ""
              }
            `}
          >
            <AboutCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;