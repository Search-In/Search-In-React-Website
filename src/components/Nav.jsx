import React, { useState } from "react";

import "./Responsive.css";
import "./Nav1.css";
import "./darkmode1.css";
import logo from "./searchin images/search-in.png";
import logo3 from "./searchin images/new_icon.webp";
import logo1 from "./Images/moon.png";
import logo2 from "./Images/sun.png";
import Footer from "./Footer";

const Nav = () => {
    const [bar, setBar] = useState("");
    const menuBar = () => {
        if (bar === "") {
            setBar("active");
        } else {
            setBar("");
        }
    };

    return (
        <div className="container ">
            <div className="navbar flex items-center">
                <div className="left flex">
                    <img src={logo3} alt="" className="navlogo1" />
                    <div>
                        <img src={logo} alt="" className="navlogo" />
                        <h6>&nbsp; Your Shopping Assistant</h6>
                    </div>
                    <ul className="flex mobnav1">
                        {/* <li>Relata.io</li> */}
                        <li to="/Footer">
                            {" "}
                            <a href="#features">Features</a>{" "}
                        </li>
                        <li>Impact</li>
                        <li>
                            {" "}
                            <a href="#about">About Us</a>
                        </li>
                    </ul>
                    <div
                        className={`hamburger ${bar}`}
                        onClick={() => {
                            menuBar();
                        }}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <div className="right flex mobnav1">
                    <ul className="flex">
                        <li>
                            Email Id: <br />{" "}
                            <a href="mailto:searchin789@gmail.com">
                                searchin789@gmail.com
                            </a>
                        </li>
                        <li>
                            Contact Us:
                            <br /> <i class="fa-solid fa-phone"></i>{" "}
                            <a href="tel:7498032457">+91-7498032457</a>{" "}
                        </li>
                        <li className="btn">
                            {" "}
                            <a href="#signup">Sign Up</a>{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`mob_nav ${bar}`}>
                <ul className="mob_nav2">
                    {/* <li>Relata.io</li> */}
                    <li>Features</li>
                    <li>Impact</li>
                    <li>About Us</li>
                    <li className="">Contact Us</li>
                </ul>
                <ul className=" mob_nav3">
                    <li className="btn">
                        <a href="#contact">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
