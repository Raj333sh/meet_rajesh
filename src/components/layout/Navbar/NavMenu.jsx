const links = [
  "Home",
  "About",
  "Career",
  "Projects",
  "Skills",
  "Travel",
  "Contact",
];

const NavMenu = () => {
  return (
    <nav className="hidden gap-8 lg:flex">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="
            text-sm
            text-slate-300
            transition-colors
            hover:text-cyan-400
          "
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;