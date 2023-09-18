import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header1 from "../Shared/Header1/Header1";

const Main = () => {
    return (
        <div>
            <Header1/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;