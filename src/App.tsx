import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default App;
