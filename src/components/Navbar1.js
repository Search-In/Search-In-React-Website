import React from 'react'
import "./nav.css";
import "./responsive.css";

import search from "./image/search.png";
import searchicon from "./image/search_icon.webp";




const Navbar1 = () => {
    // RESPONSIVE WEBSITE
    // const hamberger = document.querySelector('.hamberger');
    // const times = document.querySelector('.times');
    // const mobileNav = document.querySelector('.mobile-nav')
    //     // let about = document.querySelector('.about')


    // hamberger.addEventListener('click', function() {
    //     mobileNav.classList.add('open');
        
    // });
    // times.addEventListener('click', function() {
    //     mobileNav.classList.remove('open');
    // });

    return (
        <div>
            
            <div className="mobnav">
                <button className="hamberger">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
                </button>
                <button className="hambergerlogo">
                    <img src="https://searchin.co.in/images/new_icon.webp" alt="" className="logo" />
                    <img src="https://fontmeme.com/permalink/211022/359d90efccb0a1f4146c83e06f2f5852.png" alt="" className="searchlogo" />
                </button>

                <div class="mobile-nav">
                    
                    <button>
                        <img className="times" src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-cross-icon-png-image_956622.jpg" alt="" />
                    </button>

                    <ul>
                        <li><a>About</a></li>
                        <li><a>Join Our Waiting list</a></li>
                    </ul>
                </div>
            </div>



            <div className="nav">
                <div className="left">
                    <img src={searchicon} alt="" className="logo" />
                    <img src={search} alt="" className="searchlogo" />
                </div>
                <div className="right">
                   
                    <span className="about">About us</span>
                    <span className="join">Join our Waiting List</span>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar1
