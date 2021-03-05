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


const RepairsPage = ({ history }) => {

    const [currentCollection, setCurrentCollection] = useState("")
    const handleChange = (event) => {
        setCurrentCollection(event.target.value);
    }

    const [currentIssue, setCurrentIssue] = useState("")
    const handleIssueChange = (event) => {
        setCurrentIssue(event.target.value);
    }

    const [currentPhone, setCurrentPhone] = useState(0)
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

    }


    return (
        <div className="repairs-page-container">
            <Navbar/>
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
                                <option value="">Select Device</option>  
                                <option value="iphone">Iphone</option>
                                <option value="accessories">Accesories</option>
                                <option value="apple-watch">Apple Watch</option>
                                <option value="ipad">Ipad</option>
                            </select>

                            <select disabled={currentCollection !== "" ? false : true} value={currentPhone} onChange={handlePhoneChange}>    
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            
                        </form>
                    </div> 
                    <p><AnchorLink href='#issues'>Next</AnchorLink></p>
                </div>

                <div className="repairs-select-issue next-button" id='issues'>
                    <div className="repairs-header">
                        <h1>Tell us what's broken.</h1>
                        <p>What seems to be the problem? If you don't know that's ok too.</p>
                    </div>
                    <div className={currentPhone !== 0 ? "issue-select-card" : "form-display"}>
                        <select value={currentIssue} onChange={handleIssueChange} > 
                                <option value="">Select Issue</option>   
                                <option value="https://i.ibb.co/h8rkQz3/broken.jpg">Broken</option>
                                <option value="https://i.ibb.co/GVPxxTp/cover.jpg">Cover</option>
                                <option value="https://i.ibb.co/41Q7Jkc/unknown.jpg">Other Issue</option>
                        </select>

                        <div className="device-issue">
                            <img src={currentIssue} alt="issue" />
                        </div>
                        <p><AnchorLink href='#location'>Next</AnchorLink></p>
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
                            <img src={cubside} alt="Curbside" className={currentLocation === "curbside" ? true : "form-display"} />
                            <img src={carryIn} alt="Carry In" className={currentLocation === "walkin" ? true : "form-display"}/>
                            <img src={mail} alt="Mail In" className={currentLocation === "mail" ? true : "form-display"}/>
                        </div>
                        <p><AnchorLink href='#next'>Next</AnchorLink></p>
                    </div> 
                    
                </div>

                
                    <div className={ currentService !== "" ? "repairs-select-next next-button" : "form-display" } id='next'>
                        <div className="repairs-header">
                            <h1>Your Next Steps</h1>
                            <p> We need additional details. Call us or schedule an appointment for a free diagnostic.</p>
                        </div>
                    
                        <div className="repairs-next-buttons">
                            <Link to="tel:+263772999638">Call Store</Link>
                            <button onClick={() => history.push('/confirm')}>Make Appointment</button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default RepairsPage;