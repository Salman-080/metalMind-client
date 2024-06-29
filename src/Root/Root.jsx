import { Outlet } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";
import Footer from "../FixedComponents/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;