import React from 'react'
import './feat1.css'
import "./responsive.css"
import green from "./image/green.svg"
import gif1 from "./image/gif1.gif"
import gif2 from "./image/gif2.gif"
import gif3 from "./image/gif3.svg"
import gif4 from "./image/gif4.gif"
import gif5 from "./image/gif5.gif"


const Feat = () => {
    return (
        <div>
            <div className="feat">
                <div className="feathead">"Say good bye to long billing lines..."</div>
                <img src={green} alt="" />

            </div>
            <div className="more">
                <div className="morefeat">More Feature</div>
                <div className="fivefeat">
                    <div className="card">
                        <img src={gif1} alt="" />
                    </div>

                    <div className="card">
                        <img src={gif2} alt="" />
                    </div>

                    <div className="card">
                        <img src={gif3} alt="" />
                    </div>

                    <div className="card">
                        <img src={gif4} alt="" />
                    </div>

                    <div className="card">
                        <img src={gif5} alt="" />
                    </div>
                </div>




                <div className="fivefeat mobilecard">
                    <div className="card">
                        <img src={gif1} alt="" />
                        <div className="deschead">Product Scanning</div>
                        <div className="desc">Due to covid-19, minimum touch is preferred by consumers. To address this, our product scanning feature allows the user to scan any product. Scanned product returns a description page for touch-less interaction.</div>
                    </div>

                    <div className="card">
                        <img src={gif2} alt="" />
                        <div className="deschead deschead1">Offers & Deals</div>
                        <div className="desc">In-app offers and deals will be provided to the shoppers to keep them connected to the malls and stores. </div>
                    </div>

                    <div className="card">
                        <img src={gif3} alt="" />
                        <div className="deschead">User Friendly</div>
                        <div className="desc">Easy-to-use mobile interface for better experience</div>
                    </div>

                    <div className="card">
                        <img src={gif4} alt="" />
                        <div className="deschead deschead1">Proximity Marketing</div>
                        <div className="desc">This will help store owners to advertise their products directly to the customers in proximity.</div>
                    </div>

                    <div className="card">
                        <img src={gif5} alt="" />
                        <div className="deschead">Product Scanning</div>
                        <div className="desc">Providing AR experiences like location based games and interactive videos. This will result into more user engagement and interaction. Insightful content like descriptive info can be provided with AR. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feat
