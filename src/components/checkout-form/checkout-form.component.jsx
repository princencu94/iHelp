import React from 'react';
import './checkout-form.styles.css';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { clearCart } from '../../redux/cart/cart-actions';

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
 

const CheckoutForm = ({ cartItems, cartTotal, clearCart }) => {

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
                orders: JSON.stringify(results),
                total: cartTotal
            }
                emailjs.send('cart_service','invoice_form', submissionInfo, 'user_IKYzdHEQlppNIWtfQVf6E')
                .then((response) => {
                    enqueueSnackbar("Your Cart Request has been submitted", { 
                        variant: 'success'});
                    if(response.status === 200) {
                        clearCart();
                    }
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

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);