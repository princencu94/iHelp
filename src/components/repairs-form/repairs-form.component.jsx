import React from 'react';
import './repairs-form.styles.css';

import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';


 const validate = values => {

    const errors = {};
 
    if (!values.first) {
 
      errors.first = 'Required';
 
    }
 
    if (!values.last) {
      errors.last = 'Required';
    }
 
  
 
    if (!values.email) {
 
      errors.email = 'Required';
 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 
      errors.email = 'Invalid email address';
 
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }
    
    if (!values.address1) {
        errors.address1 = 'Required';
    }

    if (!values.address2) {
        errors.address2 = 'Required';
    }

    if (!values.city) {
        errors.city = 'Required';
    }

    if (!values.postal) {
        errors.postal = 'Required';
    }



 
  
 
    return errors;
 
  };
 
 
  
const RepairsForm = ({ repairInfo }) => {
    const { enqueueSnackbar } = useSnackbar();

    const formik = useFormik({

        initialValues: {
   
          first: '',
          last: '',
          email: '',
          phone:'',
          address1:'',
          address2:'',
          city:'',
          postal:''
        },
        validate,
        onSubmit: values => {
            const submissionInfo = {
                first: values.first,
                last: values.last,
                email: values.email,
                phone: values.phone,
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                postal: values.postal,
                device: repairInfo.device,
                issue: repairInfo.issue,
                location:repairInfo.location,
                service:repairInfo.service
            }
            emailjs.send('service_iyousyz','repair_form', submissionInfo, 'user_IKYzdHEQlppNIWtfQVf6E')
                .then((response) => {
                    enqueueSnackbar("Appointment Submitted", { 
                        variant: 'success'});
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
        },
   
      });


    return (
        <div className="repairs-form-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="repairs-form-customer">
                    <div className="repairs-form-header">
                        <h1>Customer Infomation</h1>
                    </div>
                    <div className="form-group">
                        <div className="form-group-width">
                            {formik.errors.first ? <div className="error-message">{formik.errors.first}</div> : null}
                            <input type="text" name="first"  placeholder="First Name" id="first" onChange={formik.handleChange} value={formik.values.first} />
                        </div>
                        
                        <div className="form-group-width">
                            {formik.errors.last ? <div className="error-message">{formik.errors.last}</div> : null}
                            <input type="text" name="last" placeholder="Last Name" id="last" onChange={formik.handleChange} value={formik.values.last} />
                        </div>
                    </div>

                    <div className="form-group form-group-bottom-margin">
                        <div className="form-group-width">
                            {formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : null}
                            <input type="email" name="email" placeholder="Email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                        </div>
                        <div className="form-group-width">
                            {formik.errors.phone ? <div className="error-message">{formik.errors.phone}</div> : null}
                            <input type="text" name="phone"  placeholder="Phone Number" id="phone" onChange={formik.handleChange} value={formik.values.phone} />
                        </div>
                    </div>
                </div>

                <div className="repairs-form-address">
                    <div className="repairs-form-header">
                        <h1>Customer Address</h1>
                    </div>
                    <div className="form-single form-single-margin-bottom">
                        {formik.errors.address1 ? <div className="error-message">{formik.errors.address2}</div> : null}
                        <input type="text" name="address1"  placeholder="Address 1" id="address1" onChange={formik.handleChange} value={formik.values.address1} />
                    </div>

                    <div className="form-single">
                        {formik.errors.address2 ? <div className="error-message">{formik.errors.address2}</div> : null}
                        <input type="text" name="address2" placeholder="Address 2" id="address2" onChange={formik.handleChange} value={formik.values.address2} />
                    </div>

                    <div className="form-group-options form-group-bottom-margin">
                        <div className="form-group">
                            <div className="form-group-width">
                                {formik.errors.city ? <div className="error-message">{formik.errors.city}</div> : null}
                                <input type="text" name="city"  placeholder="City" id="city" onChange={formik.handleChange} value={formik.values.city} />
                            </div>
                            <div className="form-group-width">
                                {formik.errors.postal ? <div className="error-message">{formik.errors.postal}</div> : null}
                                <input type="text" name="postal"  placeholder="Postal Code" id="postal" onChange={formik.handleChange} value={formik.values.postal} />
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="form-button">
                    <button type="submit">Submit</button>
                </div>

                <div className="error-info">
                    {formik.errors ? <p>Fix Errors above first before submission</p> : null}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    repairInfo: state.repair.repair
})

export default connect(mapStateToProps)(RepairsForm);