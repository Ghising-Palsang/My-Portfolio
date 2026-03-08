import { useLightMode } from "../context/light.context";

export interface ICard {
  name: string;
  description: string;
  image: string;
  tools: string[];
}

const ProjectCard = ({ name, description, image, tools }: ICard) => {
  const {isLightMode} = useLightMode()
  return (
    <div className={`${isLightMode ? "text-gray-900 border-gray-300 card-light" : "text-gray-200 border-gray-600 card-dark"} flex flex-col gap-4 border-2  p-4 sm:w-80 md:w-auto lg:w-auto`}>
      <div>
        <img src={image} alt={name} className="w-full h-40 object-cover " />
      </div>
      <div className="flex flex-col items-center leading-snug">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm">{description}</p>
        <ul className="flex gap-2">
          {tools.map((tool, index) => (
            <li
              className="tracking-tight text-sm list-disc list-inside "
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
