import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header2 from "../Shared/Header2/Header2";

const Main = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
