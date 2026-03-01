import React, { createContext, useContext, useState } from "react";


export interface ILight {
    children: React.ReactNode
}

export interface ILightProps {
    isLightMode: boolean,
    lightToggle: () => void;
}

const LightContext = createContext<ILightProps>({
    isLightMode: false,
    lightToggle: () => {}
});

export const LightProvider = ({children}: ILight) => {
    const [isLightMode, setLightMode] = useState<boolean>(false);
      const lightToggle = () => setLightMode((prev) => !prev);

    return(
        <LightContext.Provider value={{isLightMode, lightToggle}}>
            {children}
        </LightContext.Provider>
    )
}



// eslint-disable-next-line react-refresh/only-export-components
export const useLightMode = () => {
    
        const {isLightMode, lightToggle} = useContext(LightContext)
        return {
            isLightMode, lightToggle
        }
    
}
