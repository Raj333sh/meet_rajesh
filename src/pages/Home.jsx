import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Career from "../components/sections/career/Career";
import Workflow from "../components/sections/Workflow/Workflow";
import Projects from "../components/sections/Projects/Project";
import Skills from "../components/sections/Skills/Skills.jsx";
import Travel from "../components/sections/Travel/Travel.jsx";
import Stories from "../components/sections/Stories/Stories";
import Connect from "../components/sections/Connect/Connect.jsx";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Career />
      <Workflow />
      <Projects />
      <Skills />
      <Travel />
      <Stories />
      <Connect />
    </>
  );
};

export default Home;