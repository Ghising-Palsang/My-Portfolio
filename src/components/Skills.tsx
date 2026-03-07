import { useLightMode } from "../context/light.context";
import { Button } from "./Button";
import ScrollDown from "./ScrollDown";
import SkillIcon from "./SkillIcon";

const Skills = () => {
  const { isLightMode } = useLightMode();

  const categories: Array<{
    name: string;
    id:number;
    variant: "frontend" | "backend" | "database" | "others";
  }> = [
    { name: "Frontend", variant: "frontend", id:1 },
    { name: "Backend", variant: "backend", id:2 },
    { name: "Database", variant: "database" , id:3},
    { name: "Others", variant: "others", id:4 },
  ];
  return (
    <section
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 gap-9 relative border-b border-gray-700 md:gap-16 py-12 md:py-20`}
    >
      {/* Title */}
      <div className="max-w-3xl">
        <h1
          className={`text-5xl tracking-wider font-extrabold ${
            isLightMode ? "text-gray-900" : "text-gray-100"
          } md:text-6xl lg:text-7xl lg:tracking-widest`}
        >
          Skills
        </h1>
      </div>

      <div className="space-y-5 md:space-y-10 lg:items-center lg:flex lg:flex-col lg:gap-4">
        {/* Text */}
        <p
          className={`text-lg tracking-tight font-medium leading-snug ${
            isLightMode ? "text-gray-900" : "text-gray-400"
          } md:text-xl lg:text-xl md:self-start`}
        >
          Tools and tech I love working with everyday.
        </p>

        {/* Logos */}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5 md:mx-auto md:items-center lg:gap-7 lg:gap-x-48">
          {categories.map(({ name, variant, id }) => (
            <div
              className="space-y-2 md:space-y-4 lg:space-y-6 min-h-40"
              key={id}
            >
              <h3
                className={`text-lg tracking-wide font-semibold ${
                  isLightMode ? "text-gray-900" : "text-gray-200"
                } md:text-xl`}
              >
                {name}
              </h3>
              <SkillIcon variant={variant} />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6 md:justify-center lg:justify-center lg:gap-6">
        <Button href="Project">View Projects</Button>
        <Button variant="secondary" download href="/resume.pdf">
          Resume
        </Button>
      </div>

      <div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Skills;
