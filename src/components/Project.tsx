import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import { easeInOut, motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const Project = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-5 gap-16 relative">
      <div>
        <h1 className="text-gray-100 font-extrabold text-6xl tracking-wider">
          Project
        </h1>
      </div>

      {/* Prjoect Cards */}

      <div className="flex overflow-x-auto snap-x snap-mandatory w-full max-w-sm ">
        <div className="shrink-0 snap-start">
          <ProjectCard />
        </div>
        <div className="shrink-0 snap-start">
          <ProjectCard />
        </div>
        <div className="shrink-0 snap-start">
          <ProjectCard />
        </div>
      </div>

      <div className="flex items-center self-center gap-6">
        <p className="text-white text-xl font-bold tracking-wider">
          Scroll to Right
        </p>
        <motion.span
          className="text-white text-3xl"
          animate={{ x: [0, 14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        >
          <FaArrowRightLong />
        </motion.span>
      </div>

      <ScrollDown />
    </section>
  );
};

export default Project;
