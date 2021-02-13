import React from 'react';
import './cart-item.styles.css';

const CartItem = ({cartItem}) => {
    const { title, price, image } = cartItem;
    return (
        <div className="cart-item-container">
            <div className="cart-item-image">
                <img src={image} alt="cart item" />
            </div>

            <div className="cart-item-info">
                <h4>{title}</h4>
                <h5>${price}</h5>
            </div>

            <div className="cart-item-remove">
                <p>Remove</p>
            </div>
        </div>
    )
}

export default CartItem;