import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import "./Responsive.css"
import "./Page21.css"

import logo1 from "./searchin images/biglogo.jpg"
import logo2 from "./Images/figures-6.1.png"
import logo3 from "./Images/comment-add.svg"
import logo4 from "./Images/folder-replace.svg"
import logo5 from "./Images/chat.svg"
import logo6 from "./Images/options-pic.png"
import logo7 from "./Images/discount.png"
import logo8 from "./Images/cloud-computing.png"
import logo9 from "./Images/global.png"
import logo10 from "./Images/vr-gaming.png"
import logo11 from "./searchin images/Skip-Scan-Product-App-Detail.svg"
import logo12 from "./searchin images/enggagement.svg"
import logo13 from "./searchin images/Ecom_UI_grocery.webp"
import logo14 from "./searchin images/scanner.webp"
import logo15 from "./searchin images/Ar.jpg"






const Page2 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return <div className='container' id='features'>
        <div className="page2 flex">
            <div className="left flex1">
                <div className="images">
                    <img className='logo1' src={logo1} alt="" data-aos="fade-up"/>
                    {/* <img className='logo2' src={logo2} alt="" /> */}
                </div>

                <div className="temp">THE PRIORITY : CUSTOMER EXPERIANCE </div>
                <div className="heading">Key Features <br /> </div>
                <p>The Next Generation of buyers is tech savy & expects nothing but delightful engagement, remotely, and we deliver!</p>
                <div className="btn">Join our Waiting List</div>

                <div className="leftdiv">
                    <ul>
                        <li data-aos="zoom-in-up">
                        <img src={logo11} alt="" className="new" />
                        <div className="flex">
                            {/* <div className="left"> <img src={logo4} alt="faf" /></div> */}
                            <div className="right"> <div className="pagehead flex">Smart Shopping Cart</div><p>Tired of long billing lines? Introducing a state-of-the-art smart shopping cart. Built with advanced AI and sensor fusion tech for smart checkout. Just Scan and Go.</p></div>
                        </div>
                        </li>
                        <li data-aos="zoom-in-up">
                        <img src={logo14} alt="" className="new" />
                        <div className="flex">
                            {/* <div className="left"> <img src={logo4} alt="faf" /></div> */}
                            <div className="right"> <div className="pagehead flex">Product Scanning</div><p>Due to covid-19, minimum touch is preferred by consumers. To address this, our product scanning feature allows the user to scan any product. Scanned product returns a description page for touch-less interaction.</p></div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right flex1 ">
                <ul>

                    <li className='tabview' data-aos="zoom-in-up">
                        <img src={logo12} alt="" className="new" />
                        <div className="newdiv flex ">
                            {/* <div className="left"> <img src={logo3} alt="fa" /></div> */}
                            <div className="right"> <div className="pagehead flex">E-commerce like Interface </div><p>With advent of online shopping, users want recommendations and a up-to-date product catalogue. Building an E-commerce like experience in physical stores, is the only way forward.</p>
                            </div>
                        </div>
                    </li>

                    <li data-aos="zoom-in-up">
                        <img src={logo15} alt="" className="new" />
                        <div className="newdiv flex ">
                            {/* <div className="left"> <img src={logo3} alt="fa" /></div> */}
                            <div className="right"> <div className="pagehead flex">AR Experience </div><p>Providing AR experiences like location based games and interactive videos. This will result into more user engagement and interaction. Insightful content like descriptive info can be provided with AR. </p>
                            </div>
                        </div>
                    </li>

                    <li data-aos="zoom-in-up">
                        <img src={logo13} alt="" className="new" />
                        <div className="flex">
                            {/* <div className="left"> <img src={logo5} alt="fsa" /></div> */}
                            <div className="right"> <div className="pagehead flex">Customer Engagement</div><p>Offline shopping is all about customer engagement. We're building a gamification engine for improving customer experience. </p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div className="heading2" data-aos="fade-up">
            <div className="temp">The Process : One Word, Effortless</div>
            <div className="heading">Setup & Ready on a Schedule</div>
            <p>Neat and to-the-point onboarding to get you started so seamlessly that  <br />your Shopping will be live before you even really notice. </p>
        </div>



        <div className="div1 flex">
            
            <div className="div2 flex1" data-aos="flip-left">
                <img src={logo8} alt="" />
                <div className='div3'><span >User Friendly</span></div>
                {/* <div className='div3'><span ></span></div> */}
                <p>Easy-to-use mobile interface for better experience. </p>
            </div>
            <div className="div2 flex1" data-aos="flip-left">
                <img src={logo7} alt="" />
                <div className='div3'><span >Offers & Deals</span></div>
                <p>In-app offers and deals will be provided to the shoppers to keep them connected to the malls and stores. </p>
            </div>
            <div className="div2 flex1" data-aos="flip-left">
                <img src={logo9} alt="" />
                <div className='div3'><span >Proximity Marketing</span></div>
                <p>This will help store owners to advertise their products directly to the customers in proximity.</p>
            </div>
            

        </div>

        <div className="heading2" data-aos="fade-up">
            <div className="temp">The Experience : Simply Amazing</div>
            <div className="heading">Fast, Simple & Available, Always.</div>
            <p>Enrich every step of your customers interaction with your projects, from <br />exploration to transactions, agreements, & beyond. </p>
        </div>

        <div className="tabnav2 align-items">
            <img src={logo6} alt="" />
        </div>
    </div>;
};

export default Page2;
