import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import './about1.css'
import "./Responsive.css"

const Aboutus = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div className='container' data-aos="fade-up" id='about'>
            {/* <div className="temp1">The Focus : Intrigue, Engage, Convert, Repeat</div> */}
            <div className="about1">About US</div>
            <div className="aboutus">
                <div className="left">
                    
                    <img src="https://searchin.co.in/images/new_icon.webp" alt="" className="img1" />
                </div>

                <div className="right">We're team of passionate individuals excelling in engineering and business operations.
                    Our vision is to build a complete digital ecosystem for indoor spaces.
                    By utilizing the most advanced A.I. and IoT technologies, in a reliable and cost-efficient manner.</div>
            </div>
        </div>
    )
}

export default Aboutus
