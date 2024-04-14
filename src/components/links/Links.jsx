import { NavLink } from "react-router-dom";

const Links = ({label, to, icon}) => {
    return ( 
        <>
            <NavLink to={to}>
                <span>{icon}</span>
                <span>{label}</span>
            </NavLink>
        </>
     );
}
 
export default Links;