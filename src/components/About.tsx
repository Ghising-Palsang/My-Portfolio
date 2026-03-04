import { useLightMode } from "../context/light.context";
import { Button } from "./Button";
import ScrollDown from "./ScrollDown";

const About = () => {
  const { isLightMode } = useLightMode();
  return (
    <section
      className={`min-h-screen  flex flex-col justify-center  items-start px-6  py-16 gap-17 relative border-b border-gray-700 ${isLightMode && "bg-gray-200"}
      md:px-12 lg:gap-24`}
      id="About"
    >
      <div>
        <h1
          className={`${isLightMode ? "text-gray-900" : "text-white"} text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest`}
        >
          About
        </h1>
      </div>

      <div className="space-y-5 max-w-2xl lg:text-lg lg:max-w-3xl">
        <p
          className={`${isLightMode ? "text-gray-900" : "text-gray-100"} font-medium leading-relaxed `}
        >
          Hi! I'm Palsang Ghising, a full-stack developer focused on building
          web applications that solve real problems and deliver smooth user
          experiences.
        </p>

        <p
          className={`${isLightMode ? "text-gray-900" : "text-gray-100"} leading-relaxed`}
        >
          I build responsive interfaces with React and develop scalable backends
          using Node.js and MongoDB. My goal is to create applications that are
          fast, reliable, and easy to use.
        </p>

        <p
          className={`${isLightMode ? "text-gray-900" : "text-gray-100"} leading-relaxed `}
        >
          Explore my projects below to see what I've been working on.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <Button href="Project">
          View Projects
        </Button>
        <Button variant="secondary" href="/public/resume.pdf" download='/public/resume.pdf'>Resume</Button>
      </div>

      <ScrollDown />
    </section>
  );
};

export default About;
