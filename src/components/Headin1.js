import React from 'react'
import "./Head1.css"
import "./responsive.css"


const Headin1 = () => {
    return (
        <div className='heading'>
            <div className='head'>
                <div className="left">
                    <div className="heading">Reinventing brick and mortar retail stores with <span>futuristic in-store shopping </span> experiences.</div>
                    <div className="buttons">
                        <div className="btn1">Book a Free Demo</div>
                        <div className="btn2"> <div className="skew"> Join our Waiting List </div></div>
                    </div>
                </div>

                <div className="right">
                    <iframe width="720" height="450"
                        src="https://youtu.be/wKHJDDGHnd0">
                    </iframe>
                </div>
            </div>
        </div>

    )
}

export default Headin1
