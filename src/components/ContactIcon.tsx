import type React from "react"
import type { IconType } from "react-icons/lib"



export interface IContactIcon {
    title: string,
    description: React.ReactNode,
    Icon: IconType
}

const ContactIcon = ({title, description, Icon}: IContactIcon) => {
  return (
    <div className="flex items-center gap-6">
        <div className=" p-4 border-white rounded-full border transition-transform hover:scale-100 hover:opacity-80">
            <Icon style={{color:"gray", fontSize:'1.5em'}}/>
            
        </div>
        <div className="">
            <p className="font-semibold text-lg tracking-wide">{title}</p>
            <p className="text-sm tracking-wide">{description}</p>
        </div>
    </div>
  )
}

export default ContactIcon