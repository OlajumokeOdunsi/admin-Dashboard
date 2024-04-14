import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "*",
                element: "Page Not Found"
            },
        ]
    }
])

export default router