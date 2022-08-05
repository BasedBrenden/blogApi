import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App";
import Form from "./components/Form";

const RouteSwitch = () =>{


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/admin" element={<Form/>} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default RouteSwitch