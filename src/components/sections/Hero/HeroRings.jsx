const HeroRings = () => {
  const rings = [620, 520, 420, 340];

  return (
    <>
      {rings.map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-cyan-400/15"
          style={{
            width: size,
            height: size,
          }}
        />
      ))}
    </>
  );
};

export default HeroRings;