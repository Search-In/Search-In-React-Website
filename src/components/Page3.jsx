import React from 'react';
import "./Responsive.css"
import "./page31.css"

import logo1 from "./Images/chart1.png"
import logo2 from "./Images/chart2.png"
import logo3 from "./Images/chart3.png"
import logo4 from "./Images/chart4.png"
import logo5 from "./Images/chart5.png"
import logo6 from "./Images/chart6.png"
import logo7 from "./Images/chart7.png"
import logo8 from "./Images/chart8.png"
import logo9 from "./Images/figures-3.1.png"
import logo10 from "./Images/figures-3.2.png"
import logo11 from "./Images/chat.svg"
import logo12 from "./Images/figures-7.1.png"


const Page3 = () => {
    return <div className='container'>
        <div className="card-wrapper">
            <div className="card">
                <img src={logo1} alt="" />
                <h1>Interactive Virtual <br /> Experience</h1>
                <span></span>
                <p>For immersive exploration of the project's various aspects by customers</p>
            </div>
            <div className="card">
                <img src={logo2} alt="" />
                <h1>Executive Guided Virtual Tours</h1>
                <span></span>
                <p>Tours of the project by your executives with the virtual experience and video calls</p>
            </div>
            <div className="card">
                <img src={logo3} alt="" />
                <h1>Manage Inventory & Leads in one place</h1>
                <span></span>
                <p>Adv availability & grouping controls with per unit discount mechanism</p>
            </div>
            <div className="card">
                <img src={logo4} alt="" />
                <h1>One Ecosystem VR to Agreement</h1>
                <span></span>
                <p>Integrated tools to cater to the end to end customer experience of your project</p>
            </div>
            <div className="card">
                <img src={logo5} alt="" />
                <h1>Mapped out Touchpoints</h1>
                <span></span>
                <p>Seamless experience for every step of user's engagement with you</p>
            </div>
            <div className="card">
                <img src={logo6} alt="" />
                <h1>Lead Engagement Reports & Analytics</h1>
                <span></span>
                <p>Access behaviour data per lead to personalise sales calls & business decisions</p>
            </div>
            <div className="card">
                <img src={logo7} alt="" />
                <h1>Integrations thru API Templates</h1>
                <span></span>
                <p>Recieve marque customer actions in CRMs by setting up APIs as per our template</p>
            </div>
            <div className="card">
                <img src={logo8} alt="" />
                <h1>Channel Partners & Lead Attribution</h1>
                <span></span>
                <p>Manage leads coming from registered partners, & on-board new ones, no hassle</p>
            </div>
        </div>

        <div className="blog1 flex">
            <div className="left flex1">
                <div className="temp">The Focus : Intrigue, Engage, Convert, Repeat</div>
                <div className="heading">Realty needs  <br /> Tech Disruption</div>
                <p>Stand out amongst everyone and offer an inspiring experience that incentivises transparency and quick decisions. We dont want to replace site-visits, we want to augment them.</p>
                <ul className="flex ">
                    <li className="btn">Schedule A Demo</li>
                    <li className="btn">Contact US</li>
                </ul>
            </div>
            <div className="right flex1">
                <img className='logo10' src={logo10} alt="" />
                <img className='logo9' src={logo9} alt="" />
            </div>
        </div>


        <div className="casehead text-align">Case Studies</div>
        <div className="case flex">
            <div className='case-card flex1 rightbord'>
                <div className="image"><img src={logo11} alt="" /></div>
                <h1>Assisting Realty Sales of over $25M in India</h1>
                <p>Coming Soon. How we went live for a client in under a week and helped their sales.</p>
            </div>
            <div className='case-card flex1 rightbord'>
                <img src={logo11} alt="" />
                <h1>How Realty Advisories are leveraging our platform</h1>
                <p>Coming Soon. How one of the top firms is taking their game to the next level with us.</p>
            </div>
            <div className='case-card flex1 '>
                <img src={logo11} alt="" />
                <h1>Engaging audience from across the world virtually</h1>
                <p>Coming soon. How we are enabling overseas realty sales presentations, remotely.</p>
            </div>
        </div>

        <div className="blog1 blog2 flex">
            <div className="left flex1">
                <div className="temp"></div>
                <div className="heading just1">Explore the <br /> Future with <br /> Relata.io </div>
                <p>Connect with us for a demo, and see for yourself the value we can add to your project efforts.</p>
                <ul className="flex ">
                    <li className="btn">Schedule A Demo</li>
                </ul>
            </div>
            <div className="right flex1">
                <img className='logo10' src={logo10} alt="" />
                <img className='logo9' src={logo12} alt="" />
            </div>
        </div>
    </div>;
};

export default Page3;
