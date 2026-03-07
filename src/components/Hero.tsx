import { useLightMode } from "../context/light.context";
import { Button } from "./Button";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  const { isLightMode } = useLightMode();

  return (
    <section
      className={`min-h-screen flex flex-col px-6 lg:px-12 pt-14 md:pt-16 text-white ${
        isLightMode ? "bg-[#F0F4F8]" : "bg-[#0B0F14]"
      } border-b border-gray-700`}
    >
      {/* HERO CONTENT */}
      <div className="flex flex-col justify-center flex-1 gap-6 items-start">
        <div className="space-y-1">
          <p
            className={`text-lg font-medium ${
              isLightMode ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Hi, I am Palsang Ghising
          </p>

          <p
            className={`text-sm font-medium tracking-widest uppercase ${
              isLightMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Full Stack Developer
          </p>
        </div>

        <div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-snug max-w-3xl ${
              isLightMode ? "text-gray-900" : "text-white"
            }`}
          >
            I build scalable web applications that solve real business problems.
          </h1>
        </div>

        <div>
          <p
            className={`text-lg ${
              isLightMode ? "text-gray-700" : "text-gray-400"
            } max-w-3xl leading-relaxed`}
          >
            I specialize in building fast and production-ready web apps using
            React, Node.js, and modern cloud technologies.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Button href="Project">View Projects</Button>
          <Button variant="secondary" href="About">
            About Me
          </Button>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <ScrollDown />
    </section>
  );
};

export default Hero;
