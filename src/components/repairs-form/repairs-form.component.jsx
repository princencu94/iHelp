import React from 'react';
import './repairs-form.styles.css';

const RepairsForm = () => {
    return (
        <div className="repairs-form-container">
            <div className="repairs-form-customer">
                <div className="repairs-form-header">
                    <h1>Customer Infomation</h1>
                </div>
               <div className="form-group">
                    <input type="text" name="first" onChange placeholder="First Name"/>
                    <input type="text" name="last" onChange placeholder="Last Name" />
               </div>

               <div className="form-group form-group-bottom-margin">
                    <input type="email" name="email" onChange placeholder="Email"/>
                    <input type="text" name="phone" onChange placeholder="Phone Number" />
               </div>
            </div>

            <div className="repairs-form-address">
                <div className="repairs-form-header">
                    <h1>Customer Address</h1>
                </div>
                <div className="form-single form-single-margin-bottom">
                    <input type="text" name="address1" onChange placeholder="Address 1"/>
                </div>

                <div className="form-single">
                    <input type="text" name="address2" onChange placeholder="Address 2"/>
                </div>

                <div className="form-group-options form-group-bottom-margin">
                    <div className="form-group">
                        <input type="text" name="city" onChange placeholder="City"/>
                        <input type="text" name="postal" onChange placeholder="Postal Code"/>
                    </div>
                </div>
            </div>

            <div className="form-button">
                <button>Submit</button>
            </div>
        </div>
    )
}


export default RepairsForm;