import { FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { useLightMode } from "../context/light.context";
import { TbApi } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";


type IVariant = {
  variant?: "frontend" | "backend" | "database" | "others";
};

const SkillIcon = ({ variant ="frontend" }: IVariant) => {
  const tools = {
    frontend: [FaHtml5, FaJs, FaReact, SiTailwindcss],
    backend:[FaNodeJs, SiExpress, TbApi],
    database:[SiMongodb, SiPostgresql],
    others: [FaGitAlt, FaGithub, BiLogoVisualStudio, FaLinux, FaFigma ]
  };
  const darkColors = {
    frontend: "#7DD3FC",
    backend: "#6EE7B7",
    database: "#CBD5F5",
    others: "#C4B5FD",
  };
  const lightColors = {
    frontend: "#2563EB",
    backend: "#059669",
    database: "#64748B",
    others: "#6366F1",
  };
  const { isLightMode } = useLightMode();
  return (
    <span className={`flex gap-7 text-3xl md:text-4xl lg:text-5xl ${isLightMode ? "" : "text-white "}`}>
      {tools[variant].map((Icon, Index) => (
        <Icon
          key={Index}
          style={{
            color: isLightMode ? lightColors[variant] : darkColors[variant],
          }}
          className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
        />
      ))}
    </span>
  );
};

export default SkillIcon;
