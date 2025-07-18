import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Carousel from "./src/components/Carousel";
import Products from "./src/components/Products";


const App = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Products />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)