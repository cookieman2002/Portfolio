import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return ( 
        <>
           <Navbar/>
            <main className="bg-black">
                <Outlet/>
            </main>

        </>
        );
}
 
export default Layout;