import { useState } from "react";
import { FaBars,  FaRegMoon, FaSun } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export interface ILight {
  isLightMode: boolean;
  lightToggle: () => void;
}

const Navbar = ({ isLightMode, lightToggle }: ILight) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const menuToggle = () => setMenuOpen((prev) => !prev);

  const base =
    "h-20 max-h-20 border-b  px-4 md:px-10 flex items-center justify-between relative";

  const nav = ["Project", "About", "Contact"];

  return (
    <header
      className={`${base} ${isLightMode ? "bg-[#F0F4F8] border-b-gray-400" : "bg-[#0B0F14] border-b-gray-700"}`}
    >
      <div className="logo">
        <h1
          className={`font-bold text-2xl md:text-3xl ${
            isLightMode ? "text-gray-900" : "text-gray-100"
          }`}
        >
          Palsang Ghising
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {isMenuOpen && (
          <nav className="absolute top-20 right-4 md:static md:flex">
            <ul
              className={`flex flex-col md:flex-row gap-6 md:gap-8  md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none shadow-md md:shadow-none bg-gray-900 text-gray-100`}
            >
              {nav.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item}`}
                    className={`text-lg md:text-xl font-medium px-3 py-2 rounded hover:${
                      isLightMode ? "bg-gray-200" : "bg-gray-700"
                    } transition-colors`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <nav className="hidden font-semibold  md:block lg:block">
          <ul className={`flex gap-5 text-lg px-3 md:px-3 lg:px-5 `}>
            {nav.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item}`}
                  className={`${isLightMode ? "text-gray-900  border-transparent border-2 hover:border-2 hover:border-black hover:rounded-xl" : "hover:bg-gray-700 hover:rounded-xl rounded-xl text-gray-100 transition-colors"} text-xl p-3 `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span
          className="p-2 md:hidden cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          onClick={menuToggle}
        >
          {isMenuOpen ? (
            <FaXmark
              className={`${isLightMode ? "text-gray-900" : "text-white"} text-2xl`}
            />
          ) : (
            <FaBars
              className={`${isLightMode ? "text-gray-900" : "text-white"} text-2xl`}
            />
          )}
        </span>
        <span
          className={`p-2 cursor-pointer  rounded transition ${isLightMode ? "hover:border-2 border-2 border-transparent hover:rounded-xl hover:border-gray-500" : "hover:bg-gray-700"}`}
          onClick={lightToggle}
        >
          {isLightMode ? (
            <FaSun className="text-gray-900 text-2xl" />
          ) : (
            <FaRegMoon className="text-gray-400 text-2xl" />
          )}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
