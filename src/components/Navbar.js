import NavigatorLink from "./NavigatorLink";
import { Settings2 } from "lucide-react";

const Navbar = () => {
    return ( <nav className="flex justify-between bg-blue-600">
        <h1>Magnus Larsen</h1>
        <div className="flex gap-3">

        <ul>
            <li>
    <NavigatorLink LinkName="something" link="/søg"/>
            </li>
            <li>

            </li>
            <li>

            </li>
            <li>
                
            </li>
        </ul>
        <span>
            <Settings2/>
        </span>
        </div>
    </nav> );
}
 
export default Navbar;