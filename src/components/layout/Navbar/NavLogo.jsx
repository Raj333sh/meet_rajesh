import RMLogo from "./RMLogo";

const NavLogo = () => {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center text-lg font-black text-cyan-400">
        <RMLogo background="transparent" mark="#fff"/>
      </div>
    </a>
  );
};

export default NavLogo;