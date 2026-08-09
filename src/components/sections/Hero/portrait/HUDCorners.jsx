const HUDCorners = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-400/50" />
      <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-cyan-400/50" />
      <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-cyan-400/50" />
    </>
  );
};

export default HUDCorners;