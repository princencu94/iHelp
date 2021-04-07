import React from 'react';
import './contact-us-page.styles.css';

import Navbar from '../../components/navbar/navbar.component';
import Map from '../../assets/map.gif';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="contact-details-header"
                        >
                        <h3>Head Office</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <p>
                                    6th Floor Green Bridge, Northwing
                                    Eastgate, Harare
                                </p>
                            </div>
                            <div>
                                <p>
                                    772 999 638
                                    773 668 980
                                </p>
                            </div>
                            
                        </AccordionDetails>
                     </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;