const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-14">
      <p className="text-sky-400 uppercase tracking-[4px] text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default Heading;