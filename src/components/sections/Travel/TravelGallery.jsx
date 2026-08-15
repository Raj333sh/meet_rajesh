import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { travelPhotos } from "./travel.data";
import TravelPhoto from "./TravelPhoto";

const TravelGallery = () => {
  return (
    <div>
      {/* HEADER */}
      <div>
        <span className="text-[14px] font-medium uppercase tracking-[2px] text-cyan-400">
          Moments Captured
        </span>

        <h2 className="mt-2 text-[26px] font-semibold leading-tight text-white sm:text-[26px]">
          Some Clicks from My Journey
        </h2>
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-5">
        {travelPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="
              group
              relative
              overflow-hidden
              border
              border-white/[0.10]
              bg-[#0A1622]
              aspect-[1.15]
            "
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
          >
            {/* OPTIMIZED, LAZY-MOUNTED IMAGE */}
            <TravelPhoto photo={photo} className="absolute inset-0" />

            {/* IMAGE OVERLAY */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            />

            {/* ARROW */}
            <div
              className="
                absolute
                right-1.5
                top-1.5
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
            >
              <ArrowUpRight
                size={12}
                className="text-white"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TravelGallery;