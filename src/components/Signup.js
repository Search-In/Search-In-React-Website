import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './cont1.css'
import fb from './Images/facebook.png';
import google from './Images/google.svg';

const Signup = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="container1" data-aos="fade-up" id='signup' >
                <div className="content">
                    <div className="left-side">
                        <h1>Sign Up <br/>For News Letter</h1>
                    </div>

                    <div className="right-side">
                        <div className="topic-text">Enter Information</div>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name *" required/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your Company Name *" required/>
                            </div>
                            <div className="input-box">
                                <input type="number" placeholder="Enter your Phone *" required/>
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder="Enter your Email(Personal or Shop) *" required/>
                            </div>
                            <div class="button">
                                <input type="button" value="Sign Up" />
                            </div>
                        </form>
                        <br />
                        <h2>Or Sign In using</h2>
                        <br />
                        <div>
                            <button className='btn dark'><img src={google} alt='fb' className='navlogo1'></img><h3>Google</h3></button>
                            <button className='btn dark'><img src={fb} alt='fb' className='navlogo1'></img><h3>Facebook</h3></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;