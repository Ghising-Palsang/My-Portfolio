import { FaLocationDot } from "react-icons/fa6";
import ContactIcon from "./ContactIcon"
import type { IconType } from "react-icons/lib";
import { GoMail } from "react-icons/go";
import type React from "react";
import Footer from "./Footer";
import { Button } from "./Button";
import { useLightMode } from "../context/light.context";

export type IContactIcon =  {
    title: string,
    description: React.ReactNode,
    Icon: IconType,

}

const Contact = () => {

  const {isLightMode} = useLightMode()
  const contactDes: Array<IContactIcon> = [
    {
      title: "Mail",
      description: <a href="mailto:merndeveloper.palsang@gmail.com">merndeveloper.palsang@gmail.com</a>,
      Icon: GoMail
    },
    {
      title: "Location",
      description: "Hattiban, Lalitpur",
      Icon: FaLocationDot
    },
  ];
  return (
    <div
      className={`min-h-[90vh] ${isLightMode ? "text-gray-900" : "text-gray-100"} flex flex-col justify-between py-10 items-start px-4 lg:px-12 sm:items-center md:items-center`} id="Contact"
    >
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest mb-10">
          Contact
        </h1>
      </div>

      <div className="space-y-6">
        {contactDes.map(({ title, description, Icon }) => (
          <ContactIcon
            title={title}
            description={description}
            Icon={Icon}
            key={title}
          />
        ))}
      </div>

      <div className="flex mt-6 self-center">
        <Button href="/public/resume.pdf" download="/resume.pdf" >
          Resume
        </Button>
      </div>

      <div >
        <hr className="border-gray-700 w-screen -mx-4 lg:-mx-12 my-8 opacity-40" />
        <Footer />
      </div>
    </div>
  );
}

export default Contact