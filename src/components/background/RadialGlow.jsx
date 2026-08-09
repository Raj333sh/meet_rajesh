const RadialGlow = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#050B14]" />

      <div
        className="
          absolute
          left-1/2
          top-0
          height-1000px
          width-1000px
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          height-700px
          width-700px
          rounded-full
          bg-blue-500/10
          blur-[200px]
        "
      />
    </>
  );
};

export default RadialGlow;