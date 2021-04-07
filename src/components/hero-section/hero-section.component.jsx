import React from 'react';
import './hero-section.styles.css';
import heroImage2 from '../../assets/hero-3.jpg';
import { Link } from 'react-router-dom';

const HeroSection = ({ history }) => {
    return (
        <div className="hero-container"> 
            <img src={heroImage2} alt="Hero section" />
            <div className="hero-info">
                <h1>Phones also have doctors</h1>
                <p>We are here to make sure that you get your device repaired as soon as possible, give us a shout.</p>

                <div className="hero-buttons">
                    <Link className="products-button" to="/products">Products</Link>
                    <Link className="repairs-button" to="/services">Repairs</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;