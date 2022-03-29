import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './cont1.css'
// import "./responsive.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div>
            <div className="container1" data-aos="fade-up" id='contact' >
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="topic">Address</div>
                            <div className="text-one">Maharashtra, NP12</div>
                            <div className="text-two">XYZnagar 06</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+91 12345 67890</div>
                            <div className="text-two">+91 12345 67890</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">abc@gmail.com</div>
                            <div className="text-two">info.abc@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from us or any types of quries related to our company, you can send us message from here. It's our pleasure to help you.</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name*" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email*" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your Company*" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your Phone*" required/>
                            </div>
                            <div className="input-box message-box">
                                <input type="text" placeholder="Enter your Message" />
                            </div>
                            
                            
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
