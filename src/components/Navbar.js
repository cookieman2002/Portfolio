import NavigatorLink from "./NavigatorLink";
import { Settings2 } from "lucide-react";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ColorToggleContext } from "../context/ColorContext";
import { LangToggleContext } from "../context/LangContext";


const Navbar = () => {
    const [lang, setLang] = useState(false);
    const [settings, setSettings] = useState(false);
    const [themes, setThemes] = useState(false);
    const [menu, setmenu] = useState(false);
    function handleSettings() {
        setSettings(true)
    }
    const { isLang, setIsLang} = useContext(LangToggleContext)
    const { isColor, setIsColor } = useContext(ColorToggleContext)

    return (<nav className={`flex justify-between text-xl ${isColor.darkRed || isColor.lightRed ? "bg-red-500" : isColor.darkBlue || isColor.lightBlue ? "bg-blue-500" : ""}`}>

        <NavigatorLink LinkName="Magnus Larsen" style="w-7" link="/" />
        <div className="flex gap-3">

            <ul className="flex items-center gap-2">
                <button onMouseEnter={() => setmenu(true)} onMouseLeave={() => setmenu(false)}>
                    {isLang.english ? "Experience" : isLang.danish && "Erfaringer"}
                    {menu && <ul className="absolute flex  flex-col items-center rounded-lg  bg-violet-900">
                        <NavigatorLink style={"hover:text-blue-500"} LinkName={isLang.english ? "Graphics designer" : isLang.danish && "Grafisk designer"} link="/grafik" />
                        <NavigatorLink style={"hover:text-red-500"} LinkName={isLang.english ? "Web-developer" : isLang.danish && "Webudvikler"} link="/webudvikler" />
                        <NavigatorLink style={"hover:text-yellow-200"} LinkName={isLang.danish ? "Salgsassistent" : isLang.english && "Sales assistant"} link="/salgsassistent" />
                    </ul>}
                </button>
                <li>
                    <NavigatorLink LinkName={isLang.english ? "Search" : isLang.danish && "Søg"} link="/søg" />
                </li>
                <button onClick={handleSettings}>
                    <Settings2 />
                </button>
            </ul>
        </div>
        {settings && <div className="absolute z-10 h-full w-screen right-0 bg-black/50" >
            <div className="absolute z-10 h-full w-screen right-0 bg-black/50 " onClick={() => setSettings(!setSettings)} />
            <motion.div
                key={!settings}
                initial={{ marginright: settings ? -1000 : 0, translateX: settings ? 500 : 0 }}
                animate={{ marginright: 0, translateX: 0 }}
                exit={{ marginRight: -1000, translateX: 500 }}
                transition={{ stiffness: 300, ease: "easeInOut" }}
                className={`absolute z-20 h-full  w-[300px] right-0 ${isColor.darkRed || isColor.lightRed ? "bg-red-500" : isColor.darkBlue || isColor.lightBlue ? "bg-blue-500" : ""} overflow-hidden`}>
                <button className="z-50 absolute right-2 text-black font-bold text-xl" onClick={() => setSettings(!settings)}>X</button>
                <ul className="flex flex-col items-center justify-between mt-10">
                    <li className="border-b w-full flex justify-center">
                        <button onClick={() => setThemes(!themes)}>{isLang.danish ? "Tema" : isLang.english && "Theme"}</button>
                    </li>
                    {themes && <div className="grid grid-cols-2 gap-2 mt-5 ">
                        <button onClick={(prevState => setIsColor({ darkBlue: true }))} className="shadow-xl w-full h-14 bg-gradient-to-b from-blue-500 to-black text-transparent"> blue to black</button>
                        <button onClick={(prevState => setIsColor({ lightBlue: true }))} className="shadow-xl w-full h-14 bg-gradient-to-b from-blue-500 to-white text-transparent"> blue to white </button>
                        <button onClick={(prevState => setIsColor({ darkRed: true }))} className="shadow-xl w-full h-14 bg-gradient-to-b from-red-500 to-black text-transparent">blue to black </button>
                        <button onClick={(prevState => setIsColor({ lightRed: true }))} className="shadow-xl w-full h-14 bg-gradient-to-b from-red-500 to-white text-transparent">red to white </button>
                    </div>}
                    <li>
                        <button onClick={() => setLang(!lang,)}>{isLang.danish ? "Sprog" : isLang.english && "Language"}</button>
                    </li>
                    {lang && <div className="flex gap-2">
                        <button onClick={(prevState => setIsLang({ english: true, danish: false}, console.log(isLang) ))} className=""> {isLang.danish ? "Engelsk" : isLang.english && "English"}
                        </button>
                        <button onClick={(prevState => setIsLang({ danish: true, english: false}, console.log(isLang)))} >{isLang.danish ? "Dansk" : isLang.english && "Danish"}</button>
                    </div>}

                </ul>

            </motion.div>

        </div>}
    </nav>);
}

export default Navbar;