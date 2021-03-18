import React from 'react';
import './contact-us-page.styles.css';

import Navbar from '../../components/navbar/navbar.component';

const ContactUsPage = () => {
    return (
        <div className="contact-us-page-container">
            <Navbar/>
            <div className="contact-page-banner">
                <h1>Contact Us</h1>
            </div>
        </div>
    )
}

export default ContactUsPage;