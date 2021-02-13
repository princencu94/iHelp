import React from 'react';
import './hero-section.styles.css';
import heroImage from '../../assets/fixing-phone.jpg';

import store from '../../assets/carry-in.png';
import car from '../../assets/car.png';
import mail from '../../assets/mail.png';

const HeroSection = () => {
    return (
        <div className="hero-container"> 
            <img src={heroImage} alt="Hero section" />
            <div className="hero-info">
                <h1>Phones also have doctors</h1>
                <p>We are here to make sure that you get your device repaired as soon as possible, give us a shout.</p>

                <div className="hero-buttons">
                    <button className="products">Products</button>
                    <button className="repairs">Repair Device</button>
                </div>
            </div>
            {/* <div className="hero-find-us">
                <div className="find-us-home find-us-display">
                    <img src={store} alt="find-us-home"/>
                    <p>You can bring to our Shop</p>
                </div>

                <div className="find-us-car find-us-display with-border">
                    <img src={car} alt="find-us-car"/>
                    <p>We can come to you</p>
                </div>

                <div className="find-us-mail find-us-display">
                    <img src={mail} alt="find-us-mail"/>
                    <p>You can mail it to us</p>
                </div>
            </div> */}
        </div>
    )
}

export default HeroSection;