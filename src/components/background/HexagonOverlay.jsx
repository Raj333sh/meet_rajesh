const HexagonOverlay = () => {
  return (
    <div
      className="
      absolute
      inset-0
      opacity-[0.04]
      pointer-events-none
      "
      style={{
        backgroundImage: `
        radial-gradient(circle at center, transparent 0%, transparent 75%, rgba(255,255,255,.04) 100%),
        linear-gradient(30deg, transparent 24%, rgba(40,215,255,.12) 25%, rgba(40,215,255,.12) 26%, transparent 27%, transparent 74%, rgba(40,215,255,.12) 75%, rgba(40,215,255,.12) 76%, transparent 77%)
        `,
        backgroundSize: "120px 120px",
      }}
    />
  );
};

export default HexagonOverlay;