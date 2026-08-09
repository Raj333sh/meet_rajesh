const PortraitFrame = ({ children }) => {
  return (
    <div
      className="
      relative
      flex
      h-380px
      w-380px
      items-center
      justify-center
      rounded-full
      border
      border-cyan-400/20
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_80px_rgba(40,215,255,.15)]
      "
    >
      {children}
    </div>
  );
};

export default PortraitFrame;