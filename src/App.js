import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import Head from "./components/Head";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import ScrollButton from "./components/ScrollButton";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Darkmode from "./components/Darkmode";
// import App from "./product-comparison-develop/product-comparison-develop/src/App.js";
// import ProductComparison from '.components/product-comparison-develop/product-comparison-develop/src/components/ProductComparison';

import logo1 from "./components/Images/moon.png";

const App = () => {
    const [dark, setdark] = useState(true);

    const changeMode = () => {
        if (dark === true) {
            setdark(false);
        } else {
            setdark(true);
        }
    };

    return (
        // <div>
        <div className={`${dark ? "dark" : "light"}`}>
            <div>
                <img
                    onClick={() => {
                        changeMode();
                    }}
                    className="darkmode"
                    src={logo1}
                    alt=""
                />
            </div>

            <Nav />
            <Head />

            <Page2 />
            {/* <Page3/> */}
            <Signup />

            <Contact />
            <Aboutus />
            <Footer />
            <ScrollButton />
        </div>
    );
};

export default App;
