import profile from "../../../assets/images/profile/profile.png";

const HeroPortrait = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={profile}
        alt="Rajesh Mishra"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width="900"
        height="900"
        className="
          relative
          z-20
          w-[285px]
          max-w-[82vw]

          sm:w-[330px]

          md:w-[420px]

          lg:w-[600px]

          xl:w-[680px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-30
          h-40

          sm:h-48

          lg:h-56
        "
        style={{
          background:
            "linear-gradient(to top, #050B14 0%, rgba(5,11,20,.85) 20%, rgba(5,11,20,.3) 50%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default HeroPortrait;