import React from "react";
import ReactDOM from "react-dom/client"
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Services from "../components/Services";
import Shop from "../components/Shop";
import News from "../components/News";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Carousel />
        <Products />
        <Services />
        <Shop />
        <News />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;