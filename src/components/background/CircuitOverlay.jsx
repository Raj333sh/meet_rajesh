const CircuitOverlay = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="5%" y1="20%" x2="25%" y2="20%" stroke="#28D7FF" />
      <line x1="25%" y1="20%" x2="25%" y2="40%" stroke="#28D7FF" />

      <circle cx="25%" cy="40%" r="4" fill="#28D7FF" />

      <line x1="75%" y1="15%" x2="90%" y2="15%" stroke="#28D7FF" />
      <line x1="90%" y1="15%" x2="90%" y2="35%" stroke="#28D7FF" />
    </svg>
  );
};

export default CircuitOverlay;