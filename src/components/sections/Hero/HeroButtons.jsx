import GlowButton from "../../ui/GlowButton";

const HeroButtons = () => {
  return (
    <div className="mt-6
    flex
    flex-wrap
    gap-3

    sm:mt-7
    sm:gap-4

    lg:mt-10
    lg:gap-5">
      <GlowButton href="#career">Explore Journey</GlowButton>

      <GlowButton href="#contact" variant="secondary">
        Let's Connect
      </GlowButton>
    </div>
  );
};

export default HeroButtons;