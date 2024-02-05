import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import App from "../App";
import NotFound from "./NotFound";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "about",
            element: <About/>
        },
    ],
    errorElement:<NotFound/>,
}])
export default router;