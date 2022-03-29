import React from 'react';

import "./Responsive.css"
import "./Footer1.css"
import logo from "./searchin images/search-in.png"
import logo1 from "./Images/facebook.png"
import logo2 from "./Images/twitter.png"
import logo3 from "./Images/instagram.png"


const Footer = () => {
  return(
      <>
        <div className='container'>
            <div className="foot">
                <img src={logo} alt="" />
            </div>
            
            <div className="footer flex justify-between">
                <div>ⓒ2022 Search.co.in </div>
                <div>Privacy Policy</div>
                <div className='flex'>
                    <img src={logo1} alt="" className="footlogo" />
                    <img src={logo2} alt="" className="footlogo" />
                    <img src={logo3} alt="" className="footlogo" />
                </div>
            </div>
        </div>
      </>
  );
};

export default Footer;
