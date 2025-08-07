import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import AboutUs from "./src/pages/AboutUs";
import Header from "./src/components/Header"
import Shop from "./src/pages/Shop";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about-us" element={<AboutUs />} /> 
                <Route path="/shop" element={<Shop />} /> 
                
            </Routes>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)