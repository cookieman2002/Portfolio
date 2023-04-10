import { NavLink } from "react-router-dom";
const NavigatorLink = ({link, LinkName, data, style}) => {
    return ( <NavLink className={style} state={data} to={`${link}`}>{LinkName}</NavLink> );
}
 
export default NavigatorLink;