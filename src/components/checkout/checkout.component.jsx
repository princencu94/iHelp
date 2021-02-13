import React from 'react';
import './checkout.styles.css';
import { connect } from 'react-redux';

import CartItem from '../cartItem/cart-item.component';

const Checkout = ({ cartItems }) => {
    return (
        <div className="checkout-container">
            {
                cartItems !== undefined ?
                cartItems.map(cartItem =>
                    <CartItem cartItem={cartItem} />
                ):
                <p>No items Added</p>
            } 
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
}) 

export default connect(mapStateToProps)(Checkout);