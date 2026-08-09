import profile from "../../../assets/images/profile/profile.png";

const HeroPortrait = () => {
  return (
      <div className="relative">

  <img
  src={profile}
  alt="Rajesh Mishra"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  width="900"
  height="900"
  className="relative z-20"
/>

  {/* Bottom Fade */}
  <div
    className="absolute inset-x-0 bottom-0 h-56 z-30 pointer-events-none"
    style={{
      background:
        "linear-gradient(to top, #050B14 0%, rgba(5,11,20,.85) 20%, rgba(5,11,20,.3) 50%, transparent 100%)",
    }}
  />

</div>
  );
};

export default HeroPortrait;