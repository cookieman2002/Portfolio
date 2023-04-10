import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ColorToggleContext } from "../context/ColorContext";
import { useState } from "react";
import { useEffect } from "react";

const Layout = () => {
    const [isColor, setIsColor] = useState({
        darkBlue: false,
        lightBlue: true,
        darkRed: false,
        lightRed: false
    });
    useEffect(() => {
        if (isColor.darkRed || isColor.darkBlue) {
            document.body.style.backgroundColor = 'black';
        }
        else if (isColor.lightRed || isColor.lightBlue) {
            document.body.style.backgroundColor = 'white';
        }
    
      
      }, [isColor]);
    return ( 
        <div >
        <ColorToggleContext.Provider value={{isColor, setIsColor}}>
           <Navbar/>
            <main className={isColor.darkBlue || isColor.darkRed ? "dark-mode" : isColor.lightBlue || isColor.lightRed ? "light-mode": "dark-mode"} >
                <Outlet/>
            </main>

        </ColorToggleContext.Provider>
        </div>
        );
}
 
export default Layout;