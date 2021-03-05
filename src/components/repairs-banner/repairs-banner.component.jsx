import React from 'react';
import './repairs-banner.styles.css';

import curbside from '../../assets/car.png';
import carryIn from '../../assets/carry-in.png';
import mail from '../../assets/mail.png';

const RepairsBanner = () => {
    return (
        <div className="repairs-banner">
            <div className="repairs-banner-header">
                <h1>Your Repair Starts Here.</h1>
                <p>With our convenient service options and lightning fast repairs, we get you back to what's important. With more service options than ever before, repair is closer than you think. </p>
            </div>
            <div className="repairs-banner-images">
                <div className="repairs-image-1 h4-margin">
                    <img src={curbside} alt="service-1"/>
                    <h4>We Come to you</h4>
                </div>

                <div className="repairs-image-2 h4-margin">
                    <img src={carryIn} alt="service-2"/>
                    <h4>Carry In</h4>
                </div>

                <div className="repairs-image-3 h4-margin">
                    <img src={mail} alt="service-3"/>
                    <h4>Mail in Repair</h4>
                </div>
            </div>
        </div>
    )
}

export default RepairsBanner;