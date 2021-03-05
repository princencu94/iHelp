import React from 'react';
import './confirm-repair.styles.css';
import Navbar from '../../components/navbar/navbar.component';
import RepairsForm from '../../components/repairs-form/repairs-form.component';

const ConfirmRepairPage = () => {
    return (
        <div className="confirm-repair-container">
            <Navbar/>
            <div className="confirm-repair-header">
                <h1>Let's Schedule Your Repair</h1>
                <p>We just need a few more details to schedule your repair. Then, all we need is your device and we'll take care of the rest. </p>
            </div>

            <div className="confirm-repair-content">
                <div className="confirm-repair-forms">
                    <RepairsForm/>
                </div>
                
                <div className="vertical-line">
                </div>

                <div className="confirm-repair-info">
                    <h1>Card</h1>
                </div>
            </div>

        </div>
    )
}

export default ConfirmRepairPage;