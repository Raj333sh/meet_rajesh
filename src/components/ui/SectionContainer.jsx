const SectionContainer = ({ children, className = "" }) => {
  return <div className={`site-container ${className}`}>{children}</div>;
};

export default SectionContainer;
