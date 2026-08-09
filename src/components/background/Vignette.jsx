const Vignette = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            rgba(0,0,0,0) 45%,
            rgba(0,0,0,0.08) 72%,
            rgba(0,0,0,0.18) 100%
          )
        `,
      }}
    />
  );
};

export default Vignette;