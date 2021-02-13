import React from 'react';
import './sponsors.styles.css';

import sponsor from '../../assets/sponsor.png';

const Sponsors = () => {
    return (
        <div className="sponsor-container">
            <div className="sponsor">
                <img src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
                <img src={sponsor} alt="sponsor" />
            </div> 
        </div>
    )
}

export default Sponsors;