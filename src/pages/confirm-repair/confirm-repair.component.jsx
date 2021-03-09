import React from 'react';
import './confirm-repair.styles.css';
import Navbar from '../../components/navbar/navbar.component';
import RepairsForm from '../../components/repairs-form/repairs-form.component';
import { connect } from 'react-redux';

const ConfirmRepairPage = ({repairInfo}) => {
    const { device, issue, location, service } = repairInfo;
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
                    <h1>Repair Summary</h1>

                    <div className="repair-summary-card">
                        <div className="summary-card-info">
                            <h4>Device:</h4>
                            <p>{device}</p>
                        </div>

                        <div className="summary-card-info">
                            <h4>Damage:</h4>
                            <p>{issue}</p>
                        </div>

                        <div className="summary-card-info">
                            <h4>Location:</h4>
                            <p>{location}</p>
                        </div>

                        <div className="summary-card-info">
                            <h4>Service:</h4>
                            <p>{service}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    repairInfo: state.repair.repair
})

export default connect(mapStateToProps)(ConfirmRepairPage);