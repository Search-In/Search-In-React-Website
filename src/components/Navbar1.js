import React from 'react'
import "./nav.css";
import "./responsive.css";
import search from "./image/search.png";
import searchicon from "./image/search_icon.webp";
import { useState } from 'react';




const Navbar1 = () => {
    const [bar, setBar] = useState('');
    const menuBar = ()=>{
        if(bar === ''){
            setBar('active');
        }
        else{
            setBar('');
        }
    }
    return (
        <div>
            <div className="nav">
                <div className="left">
                    <img src={searchicon} alt="" className="logo" />
                    <img src={search} alt="" className="searchlogo" />
                </div>
                <div className="right">
                    <span className="about">About us</span>
                    <span className="join">Join our Waiting List</span>
                </div>
                <div className={`hamburger ${bar}`} onClick={()=>{menuBar()}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>  
            <div className={`mob_nav ${bar}`}>
                <span className="about">About us</span>
                <span className="join">Join our Waiting List</span>
            </div>
        </div>
    )
}

export default Navbar1
