import React from 'react';
import './checkout-form.styles.css';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

const validate = values => {

    const errors = {};
 
    if (!values.name) {
 
      errors.name = 'Required';
 
    }
 
    if (!values.phone) {
      errors.phone = 'Required';
    }
    
    if (!values.address) {
        errors.address = 'Required';
    }


    return errors;
 
};
 

const CheckoutForm = ({ cartItems, cartTotal }) => {

    var results = cartItems.map(cartItem => 
        ({
            title: cartItem.title,
            quantity: cartItem.quantity,
            price:cartItem.price
        })
    )
    
    const { enqueueSnackbar } = useSnackbar();

    const formik = useFormik({

        initialValues: {
   
          name: '',
          phone:'',
          address:'',
        },
        validate,
        onSubmit: values => {
            const submissionInfo = {
                name: values.name,
                phone: values.phone,
                address: values.address,
                title: results.title,
                quantity: results.quantity,
                price: results.price,
                total: cartTotal
            }
                emailjs.send('service_r73mmhm','invoice_form', submissionInfo, 'user_IKYzdHEQlppNIWtfQVf6E')
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
        <div className="checkout-form-container">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    {formik.errors.name ? <div className="error-message">{formik.errors.name}</div> : null}
                    <input type="text" name="name" placeholder="Name"  id="name" onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div>
                    {formik.errors.phone ? <div className="error-message">{formik.errors.phone}</div> : null}
                    <input type="text" name="phone" placeholder="Phone" id="phone" onChange={formik.handleChange} value={formik.values.phone} />
                </div>
                <div>
                    {formik.errors.address ? <div className="error-message">{formik.errors.address}</div> : null}
                    <input type="text" name="address" placeholder="address" id="address" onChange={formik.handleChange} value={formik.values.address} />
                </div>
                <button type="submit">Proceed</button>
            </form>

            <p>
                *Please note payments are only in cash for now so leave your details and we will get back to you immediately
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems:state.cart.cartItems,
    cartTotal: state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
})

export default connect(mapStateToProps)(CheckoutForm);