import Snowfall from "react-snowfall";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div className={`h-screen mt-10 bg-gray-600`}>
      <Snowfall />

      <div className="w-full ">
        <Hero />
      </div>

      <div className="bg-gray-700">
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Project />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
