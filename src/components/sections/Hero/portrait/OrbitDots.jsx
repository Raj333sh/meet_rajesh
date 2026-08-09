const OrbitDots = () => {
  const dots = Array.from({ length: 8 });

  return (
    <>
      {dots.map((_, index) => {
        const angle = (index * 360) / dots.length;
        const radius = 210;

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-400"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          />
        );
      })}
    </>
  );
};

export default OrbitDots;