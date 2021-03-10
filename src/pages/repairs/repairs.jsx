import React, { useState } from 'react';
import './repairs.styles.css';
import Navbar from '../../components/navbar/navbar.component';
import RepairsBanner from '../../components/repairs-banner/repairs-banner.component';
import device from '../../assets/phone.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

import carryIn from '../../assets/carry-in.png';
import cubside from '../../assets/car.png';
import mail from '../../assets/mail.png';

import { addRepair } from '../../redux/repairs/repair-actions';
import { connect } from 'react-redux';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function getSteps() {
    return ['Select Your Device', 'Tell us whats Broken', 'Choose Location and Service', 'Finish'];
}

const RepairsPage = ({ history,addRepair }) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const [currentCollection, setCurrentCollection] = useState("")
    const handleChange = (event) => {
        setCurrentCollection(event.target.value);
    }

    const [currentIssue, setCurrentIssue] = useState("")
    const handleIssueChange = (event) => {
        setCurrentIssue(event.target.value);
    }

    const [currentPhone, setCurrentPhone] = useState("")
    const handlePhoneChange = (event) => {
        setCurrentPhone(event.target.value);
    }

    const [currentLocation, setCurrentLocation] = useState("")
    const handleLocationChange = (event) => {
        setCurrentLocation(event.target.value);
    }


    const [currentService, setCurrentService] = useState("")
    const handleServiceChange = (event) => {
        setCurrentService(event.target.value);
    }

    const handleAppointment =  () => {
        const repairInfo = {
            device:currentPhone,
            issue:currentIssue,
            location:currentLocation,
            service:currentService
        }

        addRepair(repairInfo);
        history.push('/confirm')
    }


    return (
        <div className="repairs-page-container">
            <Navbar/>

            <div className="stepper">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </div>
            
            <RepairsBanner/>
            <div className="repairs-page-content">
                <div className="repairs-select-device next-button">
                    <div className="repairs-header">
                        <h1>Tell us what device you have.</h1>
                        <p>In order to determine which repair solution is best for you, tell us about your device.</p>
                    </div>
                    <div className="device-select-card">
                        <div className="device-type">
                            <img src={device} alt="device"/>
                        </div>

                        <form>
                            <select value={currentCollection} onChange={handleChange} >  
                                <option value="">Select Device Type</option>  
                                <option value="iphone">Iphone</option>
                            </select>

                            <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange}>    
                            <option value="">Select Device</option>
                                <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
                                <option value="iPhone 12 Pro">iPhone 12 Pro</option>
                                <option value="iPhone 12">iPhone 12</option>
                                <option value="iPhone 12 mini">iPhone 12 mini</option>
                                <option value="iPhone SE 2nd">iPhone SE (2nd generation)</option>
                                <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
                                <option value="iPhone 11 Pro">iPhone 11 Pro</option>
                                <option value="iPhone 11">iPhone 11</option>
                                <option value="iPhone XS Max">iPhone XS Max</option>
                                <option value="iPhone XS">iPhone XS</option>
                                <option value="iPhone XR">iPhone XR</option>
                                <option value="iPhone 8 Plus">iPhone 8 Plus</option>
                                <option value="iPhone 8">iPhone 8</option>
                                <option value="iPhone 7 Plus">iPhone 7 Plus</option>
                                <option value="iPhone 7">iPhone 7</option>
                                <option value="iPhone SE 1st">iPhone SE (1st generation)</option>
                                <option value="iPhone 6s Plus">iPhone 6s Plus</option>
                                <option value="iPhone 6s">iPhone 6s</option>
                                <option value="iPhone 6 Plus">iPhone 6 Plus</option>
                                <option value="iPhone 6">iPhone 6</option>
                                <option value="iPhone 5s">iPhone 5s</option>
                                <option value="iPhone 5c">iPhone 5c</option>
                                <option value="iPhone 5">iPhone 5</option>
                            </select>    
                        </form>
                    </div> 
                    <p><AnchorLink href='#issues' onClick={handleNext}>Next</AnchorLink></p>
                </div>

                <div className="repairs-select-issue next-button" id='issues'>
                    <div className="repairs-header">
                        <h1>Tell us what's broken.</h1>
                        <p>What seems to be the problem? If you don't know that's ok too.</p>
                    </div>
                    <div className={currentPhone !== "" ? "issue-select-card" : "form-display"}>
                        <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>   
                                <option value="Broken Screen">Broken Screen</option>
                                <option value="Cover">Cover</option>
                                <option value="Battery">Battery</option>
                                <option value="Other Issue">Other Issue</option>
                        </select>

                        <div className="device-issue">

                            
                            {
                                currentIssue === "Broken Screen" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/h8rkQz3/broken.jpg" alt="issue" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Broken Screen</h4>
                                    </div>
                                </div>
                                : null
                            }

                            {
                                currentIssue === "Cover" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/GVPxxTp/cover.jpg" alt="issue" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Back Housing</h4>
                                    </div>
                                </div>
                                : null
                            }

                            {
                                currentIssue === "Other Issue" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/41Q7Jkc/unknown.jpg" alt="issue" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>l don't know</h4>
                                    </div>
                                </div>
                                : null
                            }   
                        </div>
                        <p><AnchorLink href='#location' onClick={handleNext}>Next</AnchorLink></p>
                    </div> 
                    
                </div>

                <div className="repairs-select-location next-button" id='location'>
                    <div className="repairs-header">
                        <h1>Tell us how would you like us to assist you</h1>
                        <p>Let us know your location so we can provide the service options available in your area.</p>
                    </div>
                    <div className={currentIssue !== "" ? "location-select-card" : "form-display"}>
                        <select value={currentLocation} onChange={handleLocationChange} > 
                                <option value="">Select Location</option>   
                                <option value="harare">Harare</option>
                                <option value="bulawayo">Bulawayo</option>
                                <option value="other">Other place</option>
                        </select>

                        
                        <div className={currentLocation !== "" ? "form-display-select": "form-display"}>
                            <select className={currentLocation !== "other" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                    <option value="">Select available options</option>   
                                    <option value="mail">Mail in</option>
                            </select>
                        </div>

                        <div className={currentLocation !== "" ? "form-display-select": "form-display"}>
                            <select className={currentLocation !== "harare" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                    <option value="">Select Service </option>   
                                    <option value="curbside">Curbside</option>
                                    <option value="walkin">Walkin</option>
                                    <option value="mail">Mail in</option>
                            </select>
                        </div>

                        <div className={currentLocation !== "" ? "form-display-select": "form-display"}>
                            <select className={currentLocation !== "bulawayo" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                    <option value="">Select Service </option>   
                                    <option value="curbside">Curbside</option>
                                    <option value="walkin">Walkin</option>
                                    <option value="mail">Mail in</option>
                            </select>
                        </div>
                       

                        <div className="device-location">
                            <img src={cubside} alt="Curbside" className={currentService === "curbside" ? true : "form-display"} />
                            <img src={carryIn} alt="Carry In" className={currentService === "walkin" ? true : "form-display"}/>
                            <img src={mail} alt="Mail In" className={currentService === "mail" ? true : "form-display"}/>
                        </div>
                        <p><AnchorLink href='#next' onClick={handleNext}>Next</AnchorLink></p>
                    </div> 
                    
                </div>

                
                    <div className={ currentService !== "" ? "repairs-select-next next-button" : "form-display" } id='next'>
                        <div className="repairs-header">
                            <h1>Your Next Steps</h1>
                            <p> We need additional details. Call us or schedule an appointment for a free diagnostic.</p>
                        </div>
                    
                        <div className="repairs-next-buttons">
                            <Link to="tel:+263772999638">Call Store</Link>
                            <button onClick={handleAppointment}>Make Appointment</button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addRepair: (repair) => dispatch(addRepair(repair))
})

export default connect(null, mapDispatchToProps)(RepairsPage);