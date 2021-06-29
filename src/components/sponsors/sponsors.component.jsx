import React from 'react';
import './sponsors.styles.css';


import sponsor1 from '../../assets/sponsor-1.png';
import sponsor2 from '../../assets/sponsor-2.png';
import sponsor3 from '../../assets/sponsor-3.png';
import sponsor4 from '../../assets/sponsor-4.png';
import sponsor5 from '../../assets/sponsor-5.png';
import sponsor6 from '../../assets/sponsor-6.png';
import sponsor7 from '../../assets/sponsor-7.png';
import sponsor8 from '../../assets/sponsor-8.png';

const Sponsors = () => {
    return (
        <div className="sponsor-container">
            <div className="sponsor">
                <img src={sponsor1} alt="sponsor" />
                <img src={sponsor2} alt="sponsor" />
                <img src={sponsor3} alt="sponsor" />
                <img src={sponsor4} alt="sponsor" />
            </div> 
            <div className="sponsor">
                <img src={sponsor5} alt="sponsor" />
                <img src={sponsor6} alt="sponsor" />
                <img src={sponsor7} alt="sponsor" />
                <img src={sponsor8} alt="sponsor" />
            </div> 
        </div>
    )
}

export default Sponsors;