import React from 'react';
import './cart-item.styles.css';
import { connect } from 'react-redux';
import { clearCartItem } from '../../redux/cart/cart-actions';

const CartItem = ({ cartItem, clearCartItem }) => {
    const { title, price, image, quantity  } = cartItem;
    return (
        <div className="cart-item-container">
            <div className="cart-item-image">
                <img src={image} alt="cart item" />
            </div>

            <div className="cart-item-info">
                <h4>{title}</h4>
                <h5>${price} x {quantity}</h5>
            </div>

            <div className="cart-item-remove">
                <p onClick={() => clearCartItem(cartItem)}>Remove</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartItem: item => dispatch(clearCartItem(item))
})
export default connect(null, mapDispatchToProps)(CartItem);