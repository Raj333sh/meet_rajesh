const Button = ({ children }) => {
  return (
    <button
      className="
        inline-flex
        min-h-[44px]
        items-center
        justify-center
        rounded-full

        px-7
        py-3

        text-sm
        font-semibold
        transition

        hover:bg-sky-400

        sm:min-h-[46px]
        sm:px-8
        sm:py-3.5

        md:min-h-[48px]
        md:px-9
        md:py-4

        lg:min-h-[50px]
        lg:px-10
        lg:py-4

        xl:px-11
        xl:py-4
      "
    >
      {children}
    </button>
  );
};

export default Button;