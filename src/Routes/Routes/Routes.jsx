import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>,

            },
            {
                path:"/about-us",
                element:<AboutUs/>,

            },

        ]
    }
])

export default router;