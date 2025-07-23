import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Carousel from "./src/components/Carousel";
import Products from "./src/components/Products";
import Services from "./src/components/Services";
import Shop from "./src/components/Shop";
import News from "./src/components/News";
import Testimonial from "./src/components/Testimonial";
import Contact from "./src/components/Contact";


const App = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Products />
            <Services />
            <Shop />
            <News />
            <Testimonial />
            <Contact />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)