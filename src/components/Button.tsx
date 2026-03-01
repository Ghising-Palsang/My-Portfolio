
import type React from "react"
import { useLightMode } from "../context/light.context"

type ButtonProps = {
    children: React.ReactNode,
    variant?: "primary" | "secondary",
    
}

export const Button = ({children, variant='primary'}: ButtonProps) => {
  const {isLightMode} = useLightMode(); 
  
  const base = 'border px-4 py-3 text-lg rounded-2xl font-bold cursor-pointer'
   const lightVariants = {
     primary: "bg-[#0F172A] text-white drop-shadow-sm border-black",
     secondary: " text-[#0F172A] border-[#CBD5E1] text-md ",
   };

   const darkVariants = {
     primary: "bg-[#E5E7EB] text-[#0B0F14]",
     secondary: "border-[#1F2937] text-[#E5E7EB]",
   };

   const lightVariantHovers = {
     primary: "hover:bg-[#131B34]",
     secondary: "hover:bg-[#E5E5E5] hover:drop-shadow-sm",
   };

   const darkVariantHovers = {
     primary: "hover:bg-[#D1D5DB]",
     secondary: "hover:bg-[#111827] hover:drop-shadow-sm",
   };

   const name = {
    primary : "btn-primary",
    secondary: "btn-secondary"
   }
   
   

  return (
    <button className={`${base} ${isLightMode ? lightVariants[variant] : darkVariants[variant]} ${isLightMode ? lightVariantHovers[variant] : darkVariantHovers[variant]} ${name[variant]}` }>
        {children}
    </button>
)
}

