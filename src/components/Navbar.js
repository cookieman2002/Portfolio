import NavigatorLink from "./NavigatorLink";
import { Settings2 } from "lucide-react";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ColorToggleContext } from "../context/ColorContext";

const Navbar = () => {
const [settings, setSettings] = useState(false);
const [themes, setThemes] = useState(false);
const [menu, setmenu] = useState(false);
    function handleSettings(){
    setSettings(true)
    }

const {isColor, setIsColor} = useContext(ColorToggleContext)

    return ( <nav className={`flex justify-between text-xl ${isColor.darkRed || isColor.lightRed ? "bg-red-500" : isColor.darkBlue || isColor.lightBlue ? "bg-blue-500" : ""}`}>
      
        <NavigatorLink LinkName="Magnus Larsen" style="w-7" link="/"/>
        <div className="flex gap-3">

        <ul className="flex items-center gap-2">
            <li>
    <NavigatorLink LinkName="Søg" link="/søg"/>
            </li>
            <button onMouseEnter={() => setmenu(true)} onMouseLeave={() => setmenu(false)}>
            emner
            {menu && <ul className="absolute flex right-6 flex-col items-center  bg-violet-900">
                <NavigatorLink LinkName="Grafik" link="/grafik" />
                <NavigatorLink LinkName="Webudvikler" link="/webudvikler" />
                <NavigatorLink/>
            </ul> }
            </button>
            <li>

            </li>
            <li>
                
            </li>
        <button onClick={handleSettings}>
            <Settings2/>
        </button>
        </ul>
        </div>
        {settings && <div className="absolute z-10 h-full w-screen right-0 bg-black/50" >
            <div className="absolute z-10 h-full w-screen right-0 bg-black/50 " onClick={() => setSettings(!setSettings)}/>
            <motion.div
            key={!settings}
            initial={{ marginright: settings ? -1000 : 0, translateX: settings ? 500 : 0  }}
            animate={{ marginright: 0, translateX: 0 }}
            exit={{marginRight: -1000, translateX: 500}}
            transition={{ stiffness: 300, ease: "easeInOut" }}
            className={`absolute z-20 h-full  w-[300px] right-0 ${isColor.darkRed || isColor.lightRed ? "bg-red-500" : isColor.darkBlue || isColor.lightBlue ? "bg-blue-500" : ""} overflow-hidden`}>
                <button className="z-50 absolute right-2 text-black font-bold text-xl" onClick={() => setSettings(!settings)}>X</button>
                <ul className="flex flex-col items-center justify-between mt-10">
                <li className="border-b w-full flex justify-center">
                    <button onClick={() => setThemes(!themes)} >Theme</button>
                </li>
                {themes && <div className="grid grid-cols-2 gap-2 mt-5 ">
                    <button onClick={() => setIsColor({darkBlue: true})} className="shadow-xl w-full h-14 bg-gradient-to-b from-blue-500 to-black text-transparent"> blue to black</button>
                    <button onClick={() => setIsColor({lightBlue: true})} className="shadow-xl w-full h-14 bg-gradient-to-b from-blue-500 to-white text-transparent"> blue to white </button>
                    <button onClick={() => setIsColor({darkRed: true})} className="shadow-xl w-full h-14 bg-gradient-to-b from-red-500 to-black text-transparent">blue to black </button>
                    <button onClick={() => setIsColor({lightRed: true})} className="shadow-xl w-full h-14 bg-gradient-to-b from-red-500 to-white text-transparent">red to white </button>
                </div> }
               
                </ul>
                
            </motion.div>
            
        </div> }
    </nav> );
}
 
export default Navbar;