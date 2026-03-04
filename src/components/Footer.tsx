import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import type { IconType } from "react-icons/lib";

export type IIconType = {
    Icon: IconType,
    link: string,
    id:number
}

const Footer = () => {
  const footerIcons: IIconType[] = [
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/palsang-ghising/" , id:1},
    { Icon: FaGithub, link: "https://github.com/Ghising-Palsang" , id:2},
    { Icon: GoMail, link: "merndeveloper.palsang@gmail.com" ,id:3},
  ];
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:px-16">
      <div>
        <p className="text-sm font-semibold">© {new Date().getFullYear()} Palsang Ghising. All rights reserved.</p>
      </div>
      <div className=" rounded-lg flex gap-4">
        {footerIcons.map(({ Icon, link, id }) => (
          <a
            href={Icon === GoMail ? `mailto:${link}` : link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:scale:110 transition hover:opacity-80"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
