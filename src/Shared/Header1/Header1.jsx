import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

const Header1 = () => {
    return (
        <div className=" sticky w-full top-0 z-50">
            <TopNavbar/>
            <Navbar/>
        </div>
    );
};

export default Header1;