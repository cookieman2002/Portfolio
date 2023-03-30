import { NavLink } from "react-router-dom";
const NavigatorLink = ({link, LinkName, data}) => {
    return ( <NavLink state={data} to={`${link}`}>{LinkName}</NavLink> );
}
 
export default NavigatorLink;