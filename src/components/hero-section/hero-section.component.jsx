import React from 'react';
import './hero-section.styles.css';
import heroImage from '../../assets/fixing-phone.jpg';

const HeroSection = () => {
    return (
        <div className="hero-container"> 
            <img src={heroImage} alt="Hero section" />
            <div className="hero-info">
                <h1>Phones also have doctors</h1>
                <p>We are here to make sure that you get your device repaired as soon as possible, give us a shout.</p>

                <div className="hero-buttons">
                    <button className="products-button">Products</button>
                    <button className="repairs-button">Repair Device</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;