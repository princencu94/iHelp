import React from 'react';
import './checkout.styles.css';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import CartItem from '../cartItem/cart-item.component';
import { toggleHiddenCart } from '../../redux/cart/cart-actions';

const Checkout = ({ cartItems, toggleHiddenCart }) => {
    let history = useHistory();

    const handleCheckout = () => {
        history.push('/checkout');
        toggleHiddenCart();
    }

    return (
        <div className="checkout-container">
            <div className="checkout-close">
                <p onClick={toggleHiddenCart}>Close</p>
            </div>
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
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
}) 

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);