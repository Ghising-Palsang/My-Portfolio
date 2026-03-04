import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import { easeInOut, motion } from "framer-motion";
import ScrollDown from "./ScrollDown";
import { useLightMode } from "../context/light.context";

export type ICard = {
  name: string;
  description: string;
  image: string;
  tools: string[];
  id: number;
};

const Project = () => {
    const {isLightMode} = useLightMode()

  const card: Array<ICard> = [
    {
      name: "Task Manager App",
      description: "Full-stack productivity app with JWT auth",
      image: "../../src/public/images/website.jpeg",
      tools: ["React", "Node", "Mongodb"],
      id: 1,
    },
    {
      name: "Blog",
      description: "Full-stack productivity app with JWT auth",
      image: "../../src/public/images/website.jpeg",
      tools: ["React", "Node", "Mongodb"],
      id: 2,
    },
    {
      name: "Ecom",
      description: "Full-stack productivity app with JWT auth",
      image: "../../src/public/images/website.jpeg",
      tools: ["React", "Node", "Mongodb"],
      id: 3,
    },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-5 gap-16 relative">
      <div>
        <h1
          className={` font-extrabold text-6xl tracking-wider ${isLightMode ? "text-gray-900" : "text-gray-100"}`}
        >
          Project
        </h1>
      </div>

      {/* Prjoect Cards */}

      <div className="flex overflow-x-auto snap-x snap-mandatory w-full max-w-sm ">
        {card.map(({ name, description, image, tools, id }) => (
          <div className="shrink-0 snap-start" key={id}>
            <ProjectCard
              name={name}
              description={description}
              image={image}
              tools={tools}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center self-center gap-6">
        <p
          className={`${isLightMode ? "text-gray-900 " : "text-gray-200"} text-xl font-bold tracking-wider`}
        >
          Scroll to Right
        </p>
        <motion.span
          className={`${isLightMode ? "text-gray-900" : "text-gray-200"} text-3xl`}
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
