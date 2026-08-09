const Button = ({ children }) => {
  return (
    <button className="rounded-full bg-sky-500 px-4 py-2 text-[15px] font-semibold transition hover:bg-sky-400">
      {children}
    </button>
  );
};

export default Button;