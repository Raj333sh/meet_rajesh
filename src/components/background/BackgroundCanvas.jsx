const BackgroundCanvas = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(40,215,255,0.08), transparent 35%),
          radial-gradient(circle at 80% 30%, rgba(94,169,255,0.05), transparent 30%),
          radial-gradient(circle at 50% 80%, rgba(40,215,255,0.04), transparent 40%),
          linear-gradient(180deg, #050B14 0%, #08101D 40%, #050B14 100%)
        `,
      }}
    />
  );
};

export default BackgroundCanvas;