import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Carousel from "./src/components/Carousel";

const App = () => {
    return (
        <div>
            <Header />
            <Carousel />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)