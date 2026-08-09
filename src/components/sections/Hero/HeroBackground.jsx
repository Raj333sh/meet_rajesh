const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,#050816_65%)]" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
    </>
  );
};

export default HeroBackground;