import GlowButton from "../../ui/GlowButton";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex gap-5">
      <GlowButton>
        <a
  href="#career"
  className="..."
>
        Explore Journey
        
</a>
      </GlowButton>

      <GlowButton variant="secondary">
        <a
  href="#contact"
  className="..."
>
        Let's Connect
        </a>
      </GlowButton>
    </div>
  );
};

export default HeroButtons;