import { motion } from "framer-motion";
import PulseGlow from "./hologram/PulseGlow";
import HeroGlow from "./HeroGlow";
import HeroRings from "./HeroRings";
import HeroPortrait from "./HeroPortrait";
import HeroGear from "./hologram/HeroGear";
import HeroHUD from "./hologram/HeroHUD";
import BlueprintOverlay from "./hologram/BlueprintOverlay";
import OrbitDots from "./hologram/OrbitDots";


const HeroImage = () => {
  return (
    <div className="relative
        flex
        h-[390px]
        w-full
        max-w-[430px]
        items-center
        justify-center
        overflow-visible

        sm:h-[450px]
        sm:max-w-[500px]

        md:h-[560px]
        md:max-w-[620px]

        lg:h-[700px]
        lg:max-w-none">
      <PulseGlow />
      
      <HeroGlow />

      <BlueprintOverlay />

      <HeroGear />
      
      <HeroRings />

      <OrbitDots />

      <HeroHUD />

      <div className="relative z-20">

    <motion.div
        animate={{
            y:[0,-6,0]
        }}
        transition={{
            duration:6,
            repeat:Infinity,
            ease:"easeInOut"
        }}
    >
        <HeroPortrait />
    </motion.div>

</div>
    </div>
  );
};

export default HeroImage;