const BlueprintGrid = () => {
  return (
    <>
      {/* Major Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          background-size: 80px 80px
        "
      />

      {/* Minor Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
          background-size: 20px 20px
        "
      />
    </>
  );
};

export default BlueprintGrid;