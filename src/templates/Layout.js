import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ColorToggleContext } from "../context/ColorContext";
import { useState } from "react";
import { useEffect } from "react";
import { LangToggleContext } from "../context/LangContext";

const Layout = () => {
    const [isLang, setIsLang] = useState({
    english: true,
    danish: false
    })
    const [isColor, setIsColor] = useState({
        darkBlue: true,
        lightBlue: false,
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
            <LangToggleContext.Provider value={{isLang, setIsLang}}>

           <Navbar/>
            <main className={isColor.darkBlue || isColor.darkRed ? "dark-mode" : isColor.lightBlue || isColor.lightRed ? "light-mode": "dark-mode"} >
                <Outlet/>
            </main>

            </LangToggleContext.Provider>
        </ColorToggleContext.Provider>
        </div>
        );
}
 
export default Layout;