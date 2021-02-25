import React from 'react';
import './checkout.styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../cartItem/cart-item.component';

const Checkout = ({ cartItems }) => {
    return (
        <div className="checkout-container">
            <div className="checkout-items">
                {
                    cartItems !== undefined ?
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.sn} cartItem={cartItem} />
                    ):
                    <p>No items Added</p>
                } 
            </div>
            <div className="checkout-proceed">
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
}) 

export default connect(mapStateToProps)(Checkout);