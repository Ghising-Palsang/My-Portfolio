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
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 gap-9 relative border-b border-gray-700">
      {/* title */}
      <div className="max-w-3xl">
        <h1
          className={`text-5xl tracking-wider font-extrabold ${isLightMode ? "text-gray-900" : "text-gray-100"}`}
        >
          Skills
        </h1>
      </div>
      <div className="space-y-5">
        {/* text */}
        <p
          className={`text-lg tracking-tight font-medium leading-snug ${isLightMode ? "text-gray-900" : "text-gray-400"}`}
        >
          Tools and tech I love working with everyday.
        </p>
        {/* logos */}
        {categories.map(({ name, variant, id }) => (
          <div className=" space-y-2" key={id}>
            <h3
              className={`text-lg tracking-wide font-semibold ${isLightMode ? "text-gray-900" : "text-gray-200"}`}
            >
              {name}
            </h3>
            <SkillIcon variant={variant} />
          </div>
        ))}
        </div>
      <div className="flex gap-4 mt-6">
        <Button>View Projects</Button>
        <Button variant="secondary">Resume</Button>
      </div>

      <ScrollDown />
    </section>
  );
};

export default Skills;
