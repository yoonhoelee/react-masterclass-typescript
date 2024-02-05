import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import App from "../App";

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
}])
export default router;