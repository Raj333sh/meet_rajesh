import CareerTimelineItem from "./CareerTimelineItem";
import { careerTimeline } from "./career.data";

const CareerTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical timeline */}
      <div
        className="
          absolute
          left-[24px]
          top-2
          bottom-2
          w-px
          bg-gradient-to-b
          from-cyan-400/50
          via-cyan-400/20
          to-cyan-400/40
        "
      />

      <div className="space-y-8 sm:space-y-9">
        {careerTimeline.map((item) => (
          <CareerTimelineItem
            key={`${item.year}-${item.company}`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;