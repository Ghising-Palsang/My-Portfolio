import { Outlet } from "react-router";
import Navbar from "./components/Navbar";


import { useLightMode } from "./context/light.context";



const App = () => {
  const {isLightMode, lightToggle} = useLightMode();
  return (
    <div className="min-h-screen">
      
      
      <div className="fixed top-0 w-full">
        <Navbar isLightMode={isLightMode} lightToggle={lightToggle}/>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
