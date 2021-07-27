import React from 'react';
import './checkout.styles.css';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import CartItem from '../cartItem/cart-item.component';
import { toggleHiddenCart } from '../../redux/cart/cart-actions';


const list = (toggleHiddenCart,cartItems) => (
    <div
      className="list"
      role="presentation"
      onClick={toggleHiddenCart}
      onKeyDown={toggleHiddenCart}
    >
        <div className="checkout-items">
                {
                    cartItems !== undefined ?
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.sn} cartItem={cartItem} />
                    ):
                    <p>No items Added</p>
                } 
            </div>
           
    </div>
  );

const Checkout = ({ cartItems, toggleHiddenCart, toggleCart }) => {
    let history = useHistory();

    const handleCheckout = () => {
        history.push('/checkout');
        toggleHiddenCart();
    }

    return (
        <div className="checkout-container">
            <React.Fragment key="right">
            <SwipeableDrawer
                anchor="right"
                open={toggleCart}
                onClose={toggleHiddenCart}
                onOpen={toggleCart}
            > 
            <div className="checkout-close">
                    <h3>Your Cart</h3>
                    <p onClick={toggleHiddenCart}>Close</p>
            </div>
            {list(toggleHiddenCart, cartItems)}
            <div className="checkout-proceed">
                <button onClick={handleCheckout}>Checkout</button>
            </div>
            </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    toggleCart: state.cart.toggleCart
}) 

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);