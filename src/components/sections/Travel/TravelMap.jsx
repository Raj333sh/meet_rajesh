import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import world from "@svg-maps/world";
import { travelLocations } from "./travel.data";

const WORLD_WIDTH = 2000;
const WORLD_HEIGHT = 857;

const projectPoint = ([longitude, latitude]) => ({
  x: ((longitude + 180) / 360) * WORLD_WIDTH,
  y: ((90 - latitude) / 180) * WORLD_HEIGHT,
});

const TravelMap = () => {
  const projectedLocations = travelLocations.map((location) => ({
    ...location,
    ...projectPoint(location.coordinates),
  }));

  const routePoints = projectedLocations
    .filter((location) => location.routeOrder)
    .sort((a, b) => a.routeOrder - b.routeOrder);

  const routePath = routePoints
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previous = routePoints[index - 1];

      const controlX =
        (previous.x + point.x) / 2;

      const controlY =
        Math.min(previous.y, point.y) - 28;

      return `Q ${controlX} ${controlY} ${point.x} ${point.y}`;
    })
    .join(" ");

  return (
    <div
      className="
        relative
        mt-6
        h-[260px]
        w-full
        overflow-hidden
        sm:h-[290px]
        lg:h-[315px]
      "
    >
      {/* =========================================================
          MAP GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[52%]
          top-1/2
          z-0
          h-[240px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-3xl
        "
      />

      {/* =========================================================
          TECHNICAL GRID
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40,215,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40,215,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* =========================================================
          WORLD MAP
      ========================================================= */}

      <svg
        viewBox={`0 0 ${WORLD_WIDTH} ${WORLD_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="
          relative
          z-10
          h-full
          w-full
          overflow-visible
        "
        aria-label="World travel map showing visited locations"
        role="img"
      >
        <defs>
          {/* =====================================================
              WORLD DOT PATTERN
          ===================================================== */}

          <pattern
            id="travelDots"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="3"
              cy="3"
              r="1.8"
              fill="rgba(103,211,235,0.42)"
            />
          </pattern>

          {/* =====================================================
              GLOW
          ===================================================== */}

          <filter
            id="pinGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =====================================================
            COUNTRIES
        ===================================================== */}

        <g>
          {world.locations.map((country) => (
            <path
              key={country.id}
              d={country.path}
              fill="url(#travelDots)"
              stroke="rgba(90,190,215,0.075)"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>

        {/* =====================================================
            TRAVEL ROUTE
        ===================================================== */}

        {routePath && (
          <motion.path
            d={routePath}
            fill="none"
            stroke="rgba(40,215,255,0.55)"
            strokeWidth="3"
            strokeDasharray="9 10"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.7,
              ease: "easeInOut",
            }}
          />
        )}

        {/* =====================================================
            LOCATION PINS
        ===================================================== */}

        {projectedLocations.map(
          (location, index) => {
            const isHome =
              location.type === "home";

            const color = isHome
              ? "#f59e0b"
              : "#28d7ff";

            return (
              <motion.g
                key={location.id}
                transform={`
                  translate(
                    ${location.x}
                    ${location.y}
                  )
                `}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                style={{
                  transformOrigin: "center",
                }}
              >
                {/* PIN GLOW RING */}

                <circle
                  r="12"
                  fill="none"
                  stroke={color}
                  strokeOpacity="0.18"
                  strokeWidth="2"
                />

                {/* PIN DOT */}

                <circle
                  r="4"
                  fill={color}
                  opacity="0.9"
                  filter="url(#pinGlow)"
                />

                {/* PIN */}

                <foreignObject
                  x="-10"
                  y="-30"
                  width="20"
                  height="24"
                  className="
                    pointer-events-none
                    overflow-visible
                  "
                >
                  <div
                    className={`
                      text-center
                      ${
                        isHome
                          ? "text-orange-400"
                          : "text-cyan-400"
                      }
                    `}
                  >
                    <MapPin
                      size={18}
                      strokeWidth={1.6}
                      fill={
                        isHome
                          ? "rgba(245,158,11,0.08)"
                          : "rgba(40,215,255,0.08)"
                      }
                    />
                  </div>
                </foreignObject>
              </motion.g>
            );
          }
        )}
      </svg>

      {/* =========================================================
          COORDINATES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-1
          left-1
          z-20
          font-mono
          text-[10px]
          tracking-[0.14em]
          text-white/20
        "
      >
        20°N — 80°E
      </div>

      {/* =========================================================
          LOG
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-1
          top-1
          z-20
          font-mono
          text-[10px]
          tracking-[0.14em]
          text-cyan-400/30
        "
      >
        TRAVEL.LOG
      </div>
    </div>
  );
};

export default TravelMap;