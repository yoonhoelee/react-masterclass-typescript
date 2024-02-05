import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./theme";
import {RouterProvider} from "react-router-dom";
import router from "./screens/Router";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <RouterProvider router={router}/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
