import React from 'react';
import './contact-us-page.styles.css';

import Navbar from '../../components/navbar/navbar.component';
import Map from '../../assets/map.gif';


const ContactUsPage = () => {
    return (
        <div className="contact-us-page-container">
            <Navbar/>
            <div className="contact-page-banner">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-page-content">
                <div className="contact-map">
                    <img src={Map} alt="map" />
                </div>
                <div className="contact-details">
                    <h1>Find Us</h1>

                    <div className="contact-details-sections">
                        <h3>Head Office</h3>
                        <p>23 Rhodesville Road<br/>
                            Eastlea<br/>
                        </p>
                        <p>
                            <span>< a href="tel:+263772999638">+263 772 999 638</a></span>
                            <br/>
                            <span>< a href="tel:+263773668980">+263 773 668 980</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;