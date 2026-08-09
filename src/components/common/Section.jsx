const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`site-section ${className}`}>
      {children}
    </section>
  );
};

export default Section;
