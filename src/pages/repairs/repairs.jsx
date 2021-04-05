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
import computer from '../../assets/computer.svg';
import other from '../../assets/other.svg';
import tablet from '../../assets/tablet.svg';
import virus from '../../assets/virus.svg';
import hardDrive from '../../assets/hard-drive.svg';
import brokenScreen from '../../assets/broken-screen.svg';

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
                    <div className="device-select">
                        <select value={currentCollection} onChange={handleChange}  >  
                            <option value="">Select Device Type</option>  
                            <option value="iphone">iPhone</option>
                            <option value="ipad">iPad</option>
                            <option value="macbook">Macbook</option>
                            <option value="iwatches">iWatch</option>
                        </select>
                    </div>
                    <div className={currentCollection !== "" ? "device-select-card" : "form-display"}>
                        <div className="device-type">
                            {
                                 currentCollection === "iphone" ?
                                 <div className="device-type-img">
                                     <img src={device} alt="device"/>
                                     <h4>iPhone</h4>
                                 </div>   
                                : null
                            }

                            {
                                 currentCollection === "ipad" ?
                                 <div className="device-type-img">
                                    <img src={tablet} alt="Ipad"/>
                                    <h4>iPad</h4>
                                </div>
                                : null
                            }

                            {
                                currentCollection === "macbook" ?
                                <div className="device-type-img">
                                    <img src={computer} alt="MacBook"/>
                                    <h4>MacBook</h4>
                                </div>
                                : null
                            }

                            {
                                 currentCollection === "iwatches" ?
                                <div className="device-type-img">
                                    <img src={other} alt="iWatch"/>
                                    <h4>iWatch</h4>
                                </div>
                                : null
                            }
                           
                        </div>

                        <form>
                            
                            {
                                currentCollection === "iphone" ?
                            <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange} >    
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
                                : null    
                            }


                            {
                                currentCollection === "ipad" ?
                                    <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange} >    
                                    <option value="">Select Device</option>
                                        <option value="iPad Pro 12.9 (3rd Gen)">iPad Pro 12.9 (3rd Gen)</option>
                                        <option value="iPad Pro 12.9 (2nd Gen)">iPad Pro 12.9 (2nd Gen)</option>
                                        <option value="iPad Pro 12.9 (1st Gen)">iPad Pro 12.9 (1st Gen)</option>
                                        <option value="iPad Pro 11 (3rd Gen)">iPad Pro 11 (3rd Gen)</option>
                                        <option value="iPad Pro 10.5">iPad Pro 10.5</option>
                                        <option value="iPad Pro 9.7">iPad Pro 9.7</option>
                                        <option value="iPad 10.2 (7th Gen)">iPad 10.2 (7th Gen)</option>
                                        <option value="iPad 9.7 (6th Gen)">iPad 9.7 (6th Gen)</option>
                                        <option value="iPad (5th Generation)">iPad (5th Generation)</option>
                                        <option value="iPad Air 3">iPad Air 3</option>
                                        <option value="iPad Air 2">iPad Air 2</option>
                                        <option value="iPad Air">iPad Air</option>
                                        <option value="iPad Mini 6">iPad Mini 6</option>
                                        <option value="iPad Mini 5">iPad Mini 5</option>
                                        <option value="iPad Mini 4">iPad Mini 4</option>
                                        <option value="iPad Mini 3">iPad Mini 3</option>
                                        <option value="iPad Mini 2">iPad Mini 2</option>
                                        <option value="iPad Mini (1st Generation)">iPad Mini (1st Generation)</option>
                                        <option value="iPad (4th Generation)">iPad (4th Generation)</option>
                                        <option value="iPad (3rd Generation)">iPad (3rd Generation)</option>
                                        <option value="iPad 2">iPad 2</option>
                                        <option value="iPad (1st Generation)">iPad (1st Generation)</option>
                                        <option value="Other Device">Other Device</option>
                                    </select>
                                : null    
                            }

                                {
                                    currentCollection === "macbook" ?
                                    <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange} >    
                                    <option value="">Select Device</option>
                                        <option value="MacBook Pro Retina(Late 2012 - 2015)">MackBook Pro Retina(Late 2012 - 2015)</option>
                                        <option value="MacBook Pro Alluminum(2006 - 2008)">MackBook Pro Alluminum(2006 - 2008)</option>
                                        <option value="MacBook Pro Unibody(2009 - Mid 2012)">MackBook Pro Unibody(2009 - Mid 2012)</option>
                                        <option value="MacBook Air Unibody(Late 2010 - current)">MacBook Air Unibody(Late 2010 - current)</option>
                                        <option value="MacBook Air (2008-2010)">MacBook Air (2008-2010)</option>
                                        <option value="Other issues">Other issues</option>
                                    </select>
                                : null    
                                }

                                {
                                    currentCollection === "iwatches" ?
                                    <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange} >    
                                    <option value="">Select Device</option>
                                        <option value="Apple Watch (1st generation)">Apple Watch (1st generation)</option>
                                        <option value="Apple Watch Series 1">Apple Watch Series 1</option>
                                        <option value="Apple Watch Series 2">Apple Watch Series 2</option>
                                        <option value="Apple Watch Series 3">Apple Watch Series 3</option>
                                        <option value="Apple Watch Series 4">Apple Watch Series 4</option>
                                        <option value="Apple Watch Series 5">Apple Watch Series 5</option>
                                        <option value="Apple Watch SE">Apple Watch SE</option>
                                        <option value="Apple Watch Series 6">Apple Watch Series 6</option>
                                    </select>
                                : null    
                                }
                        </form>
                        <p><AnchorLink href='#issues' onClick={handleNext}>Next</AnchorLink></p>
                    </div>
                    {
                        currentCollection !== "" ?
                        <p><AnchorLink href='#issues' onClick={handleNext}>Next</AnchorLink></p>
                        :
                        null
                    }
                    
                </div>

                <div className="repairs-select-issue next-button" id='issues'>
                    <div className="repairs-header">
                        <h1>Tell us what's broken.</h1>
                        <p>What seems to be the problem? If you don't know that's ok too.</p>
                    </div>
                    <div className={currentPhone !== "" ? "issue-select-card" : "form-display"}>
                        {
                            currentCollection === "iphone" ?
                            <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>   
                                <option value="Broken Screen">Broken Screen</option>
                                <option value="Cover">Back Housing/Cover</option>
                                <option value="Battery">Short Battery Life</option>
                                <option value="Charging">Won't Charge</option>
                                <option value="Water Damage">Water Damage</option>
                                <option value="Other Issue">Other Issue</option>
                            </select>
                            :
                            null
                        }

                        {
                            currentCollection === "ipad" ?
                            <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>   
                                <option value="Broken Screen">Broken Screen</option>
                                <option value="Water Damage">Water Damage</option>
                                <option value="Other Issue">Other Issue</option>
                            </select>
                            :
                            null
                        }

                        {
                            currentCollection === "macbook" ?
                            <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>
                                <option value="Battery">Short Battery Life</option>   
                                <option value="Water Damage">Water Damage</option>
                                <option value="Broken Computer Screen">Broken Screen</option>
                                <option value="Virus or Spyware">Virus or Spyware</option>
                                <option value="Won't Boot/Hard Drive">Won't Boot/Hard Drive</option>
                                <option value="Other Issue">Other Issue</option>
                            </select>
                            :
                            null
                        }

                        {
                            currentCollection === "iwatches" ?
                            <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>   
                                <option value="Broken Screen">Broken Screen</option>
                                <option value="Cover">Back Housing/Cover</option>
                                <option value="Battery">Short Battery Life</option>
                                <option value="Charging">Won't Charge</option>
                                <option value="Water Damage">Water Damage</option>
                                <option value="Other Issue">Other Issue</option>
                            </select>
                            :
                            null
                        }

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

                            {
                                currentIssue === "Battery" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/jZ5NpKJ/battery.png" alt="Battery Problem" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Short Battery Life</h4>
                                    </div>
                                </div>
                                : null
                            }  
                             {
                                currentIssue === "Charging" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/QFW3mPx/charger.png" alt="Charging Problem" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Won't Charge</h4>
                                    </div>
                                </div>
                                : null
                            }    
                            {
                                currentIssue === "Water Damage" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src="https://i.ibb.co/JvmG5wN/1594996307.png" alt="Water Damage" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Water Damage</h4>
                                    </div>
                                </div>
                                : null
                            } 
                            {
                                currentIssue === "Broken Computer Screen" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src={brokenScreen} alt="Broken Screen" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Broken Computer Screen</h4>
                                    </div>
                                </div>
                                : null
                            }     
                            {
                                currentIssue === "Virus or Spyware" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src={virus} alt="Virus or Spyware" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Virus or Spyware</h4>
                                    </div>
                                </div>
                                : null
                            } 
                            {
                                currentIssue === "Won't Boot/Hard Drive" ?
                                <div className="repair-img-card">
                                    <div className="repair-img">
                                        <img src={hardDrive} alt="Won't Boot/Hard Drive" />
                                    </div>
                                    <div className="repair-caption">
                                        <h4>Won't Boot/Hard Drive</h4>
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
                        <select value={currentLocation} onChange={handleLocationChange}> 
                                <option value="">Select Location</option>   
                                <option value="harare">Harare</option>
                                <option value="bulawayo">Bulawayo</option>
                                <option value="other">Other place</option>
                        </select>

                        {
                            currentLocation === "other" ?
                                <div className="location-select-width">
                                    <select className={currentLocation !== "other" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                            <option value="">Select available options</option>   
                                            <option value="mail">Mail in</option>
                                    </select>
                                </div>
                                :
                                null
                        }
                        

                        {
                            currentLocation === "harare" ? 
                            <div className="location-select-width">
                                <select className={currentLocation !== "harare" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                        <option value="">Select Service </option>   
                                        <option value="curbside">Curbside</option>
                                        <option value="walkin">Walk in</option>
                                        <option value="mail">Mail in</option>
                                </select>
                            </div>
                            :
                            null
                        }

                        {
                            currentLocation === "bulawayo" ?
                            <div className="location-select-width">
                                <select className={currentLocation !== "bulawayo" ? "form-display" : "form-display-select"} value={currentService} onChange={handleServiceChange} > 
                                        <option value="">Select Service </option>   
                                        <option value="curbside">Curbside</option>
                                        <option value="walkin">Walk in</option>
                                        <option value="mail">Mail in</option>
                                </select>
                            </div>
                            :
                            null
                        }
                       

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
                            <a href="tel:0777864943">Call Store</a>
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