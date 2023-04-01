import NavigatorLink from "./NavigatorLink";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
const [settings, setSettings] = useState(false);
const [themes, setThemes] = useState(false);
    function handleSettings(){
    setSettings(true)
    }



    return ( <nav className="flex justify-between bg-blue-600">
        <NavigatorLink LinkName="Magnus Larsen" link="/"/>
        <div className="flex gap-3">

        <ul className="flex">
            <li>
    <NavigatorLink LinkName="something" link="/søg"/>
            </li>
            <li>

            </li>
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
            <div className="absolute z-10 h-full w-screen right-0 bg-black/50" onClick={() => setSettings(!setSettings)}/>
            <motion.div
            key={!settings}
            initial={{ marginright: settings ? -1000 : 0, translateX: settings ? 500 : 0  }}
            animate={{ marginright: 0, translateX: 0 }}
            exit={{marginRight: -1000, translateX: 500}}
            transition={{ stiffness: 300, ease: "easeInOut" }}
            className="absolute z-20 h-full  w-[300px] right-0 bg-red-500 overflow-hidden">
                <button className="z-50 absolute right-2 text-black font-bold text-xl" onClick={() => setSettings(!settings)}>X</button>
                <ul className="flex flex-col items-center justify-between mt-10">
                <li className="border-b w-full flex justify-center">
                    <button onClick={() => setThemes(!themes)} >Theme</button>
                </li>
                {themes && <div className="grid grid-cols-2 gap-2">
                    <button>somthing</button>
                    <button>somthing</button>
                    <button>somthing</button>
                    <button>somthing</button>
                </div> }
                <li className="border-b w-full flex justify-center">
                    <button>Theme</button>
                </li>
                </ul>
                
            </motion.div>
            
        </div> }
    </nav> );
}
 
export default Navbar;