import Snowfall from "react-snowfall";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import { useLightMode } from "../context/light.context";

const HomePage = () => {
  const {isLightMode} = useLightMode()
  return (
    <div className={`min-h-screen mt-10 ${isLightMode ? "bg-[#F0F4F8]" : "bg-[#0B0F14]"}`}>
     
        <Snowfall
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
            inset:0
          }}
        />
      

      <div className="w-full ">
        <Hero />
      </div>

      <div className="w-full">
        <About />
      </div>
      <div className="w-full">
        <Skills />
      </div>
      <div className="w-full">
        <Project />
      </div>

      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
