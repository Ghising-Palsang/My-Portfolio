import { useLightMode } from "../context/light.context";
import { FiExternalLink } from "react-icons/fi";

export interface ICard {
  name: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
}

const ProjectCard = ({ name, description, image, tools, link }: ICard) => {
  const { isLightMode } = useLightMode();

  return (
    <div
      className={`${
        isLightMode
          ? "text-gray-900 border-gray-300 card-light"
          : "text-gray-200 border-gray-600 card-dark"
      } flex flex-col gap-4 border-2 p-4 sm:w-80 md:w-auto lg:w-auto`}
    >
      <div>
        <img src={image} alt={name} className="w-full h-40 object-cover" />
      </div>

      <div className="flex flex-col gap-2 leading-snug">
        
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{name}</h4>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:scale-110 transition"
          >
            <FiExternalLink />
          </a>
        </div>

        <p className="text-sm">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <li
              className="tracking-tight text-sm list-disc list-inside"
              key={index}
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
