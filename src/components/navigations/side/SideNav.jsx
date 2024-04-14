import Links from "../../links/Links";
import { AiTwotoneHome, AiOutlineUser, AiFillSetting } from "react-icons/ai"
import { FaHome } from "react-icons/fa"
import style from "./side_nav.module.css"

const SideNav = () => {

    const path = [
        { to: "/home", icon: <FaHome />, label: "Home" },
        { to: "/users", icon: <AiOutlineUser />, label: "Users" },
        { to: "/settings", icon: <AiFillSetting />, label: "Settings" },

    ]
    const downPath = [
        { to: "/admin", icon: <AiOutlineUser />, label: "Admin" },
        { to: "/", icon: <AiOutlineUser />, label: "Login" },
    ]

    return (
        <>
            <div className={style.nav}>
                {
                    path.map(({to, label, icon}) => {
                        return <Links key={label} to={to} icon={icon} label={label}></Links>
                    })
                }
            </div>
            <div className={style.nav}>
                {
                    downPath.map(({to, label, icon}) => {
                        return <Links key={label} to={to} icon={icon} label={label}></Links>
                    })
                }
            </div>


        </>
    );
}

export default SideNav;