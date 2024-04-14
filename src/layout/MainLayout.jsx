import { Outlet } from "react-router-dom";
import SideNav from "../components/navigations/side/SideNav";
import style from "./mainlayout.module.css"

const MainLayout = () => {
    return (
        <>
            <div id={style.wrapper}>
                <div id={style.sideNav}><SideNav /></div>
                <div id={style.output}><Outlet /></div>
            </div>
        </>
    );
}

export default MainLayout;