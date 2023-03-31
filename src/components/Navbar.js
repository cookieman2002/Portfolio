import NavigatorLink from "./NavigatorLink";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
const [settings, setSettings] = useState(false);
const [themes, setThemes] = useState(false);
    function handleSettings(){
    setSettings(true)
    }



    return ( <nav className="flex justify-between bg-blue-600">
        <h1>Magnus Larsen</h1>
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
            <motion.div className="absolute z-20 h-full  w-[300px] right-0 bg-red-500">
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