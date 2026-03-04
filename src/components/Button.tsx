
import type React from "react"
import { useLightMode } from "../context/light.context"

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean | string;
}

export const Button = ({children, variant='primary', href, download}: ButtonProps) => {
  const {isLightMode} = useLightMode(); 
  
  const base = 'border px-4 py-3 text-lg rounded-2xl font-bold cursor-pointer'
   const lightVariants = {
     primary: "bg-[#0F172A] text-white drop-shadow-sm border-black",
     secondary: " text-[#0F172A] border-[#CBD5E1] text-md ",
   };

   const darkVariants = {
     primary: "bg-[#E5E7EB] text-[#0B0F14] lg:px-8",
     secondary: "border-gray-500 text-[#E5E7EB] lg:px-9 ",
   };

   

   const name = {
    primary : "btn-primary",
    secondary: "btn-secondary"
   }
   
   

 if(href && download){
   return (
     <a download={download}  href={`${href}`}>
       <button
         className={`${base} ${isLightMode ? lightVariants[variant] : darkVariants[variant]} ${name[variant]} hover:scale-110 hover:opacity-80 transition-all`}
       >
         {children}
       </button>
     </a>
   );
 }else if (href){
  return (
    <a href={`#${href}`}>
      <button
        className={`${base} ${isLightMode ? lightVariants[variant] : darkVariants[variant]} ${name[variant]} hover:scale-110 hover:opacity-80 transition-all`}
      >
        {children}
      </button>
    </a>
  );
 }else {
  return (
     <button
       className={`${base} ${isLightMode ? lightVariants[variant] : darkVariants[variant]} ${name[variant]} hover:scale-110 hover:opacity-80 transition-all`}
     >
       {children}
     </button>
  )
 }
}

