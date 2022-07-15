import { Outlet } from "react-router-dom";
import Navbar from '../Components/Nav.js'
/* The <Outlet> renders the current route selected. */

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
};

export default Layout;