import React, {useState} from 'react';
import './checkout-form.styles.css';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';

const CheckoutForm = ({ cartItems, cartTotal }) => {
    var results = cartItems.map(cartItem => 
        ({
            title: cartItem.title,
            quantity: cartItem.quantity,
            price:cartItem.price
        })
    )
    
    const [order, setOrder] = useState({name:"", phone:"", address:"", orders:JSON.stringify(results), total:cartTotal})
    
    console.log(cartItems.length);
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrder({...order, [name]:value})
        event.preventDefault();
    }
    
    const handleSubmit = (event) => {
        
        emailjs.send('service_r73mmhm','invoice_form', order, 'user_IKYzdHEQlppNIWtfQVf6E')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                event.preventDefault();
    }

    return ( 
        <div className="checkout-form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name"  onChange={handleChange} />
                <input type="text" name="phone" placeholder="phone" onChange={handleChange} />
                <input type="text" name="address" placeholder="address" onChange={handleChange}/>
                <button type="submit" disabled={cartItems.length !== 0 ? false: true}>Proceed</button>
            </form>

            <p>
                *Please not payments are only in cash for now so leave your details and we will get back to you immediately
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems:state.cart.cartItems,
    cartTotal: state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
})

export default connect(mapStateToProps)(CheckoutForm);