import { careerStats } from "./career.data";
import Counter from "../../common/Counter";

const CareerStats = () => {
  return (
    <div className="grid grid-cols-2 border-l border-white/10">
      {careerStats.map((stat, index) => {
        const isInfinity = stat.value === "∞";

        return (
          <div
            key={stat.label}
            className={`
              relative
              flex
              min-h-[92px]
              flex-col
              items-center
              justify-center
              px-3
              py-5
              text-center
              ${index % 2 === 0 ? "border-r" : ""}
              ${index < 4 ? "border-b" : ""}
              border-white/10
            `}
          >
            {/* Icon-like engineering marker */}
            <div className="mb-2 text-cyan-400">
              <span className="text-[14px] leading-none">
                {isInfinity ? "∞" : "✧"}
              </span>
            </div>

            {/* Number */}
            <div className="font-mono text-[25px] font-bold tracking-tight text-white">
              {isInfinity ? (
                "∞"
              ) : (
                <>
                  <Counter end={stat.value} />
                  <span className="text-cyan-400">
                    {stat.suffix}
                  </span>
                </>
              )}
            </div>

            {/* Label */}
            <div className="mt-1 text-[13px] font-medium uppercase tracking-wide text-slate-400 sm:text-[13px]">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CareerStats;