import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
// import Header1 from "../Shared/Header1/Header1";
import Header2 from "../Shared/Header2/Header2";
// import Header3 from "../Shared/Header3/Header3";

const Main = () => {
    return (
        <div>
            {/* <Header1/> */}
            <Header2/>
            {/* <Header3/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;