import AboutCard from "./AboutCard";
import { aboutCards } from "./about.data";

const AboutCards = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        {aboutCards.map((card, index) => (
          <div
            key={card.title}
            className={`
              flex-1
              min-w-0
              px-6
              lg:px-8
              ${
                index !== aboutCards.length - 1
                  ? "border-r border-white/20"
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