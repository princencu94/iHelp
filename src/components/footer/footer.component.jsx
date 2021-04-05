import React from 'react';
import './footer.styles.css';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="logo-section">
                    <h2>iHelp</h2>
                    <div className="social-media">
                        <a href="https://www.facebook.com/iHelpZimbabwe/" target="_blank"><FacebookIcon className="social-icon-size"/></a>
                        <a href="https://twitter.com/ihelp_zimbabwe" target="_blank"><TwitterIcon className="social-icon social-icon-size"/></a>
                        <a href="https://www.instagram.com/ihelpzimbabwe/" target="_blank"><InstagramIcon className="social-icon-size"/></a>
                    </div>
                </div>

                <div className="discover-section">
                    <Link>About Us</Link>
                    <Link>The Blog</Link>
                </div>

                <div className="customer-section">
                    <Link to="/contact-us">Contact Us</Link>
                    <Link>Shipping</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2021 iHelp. All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer;