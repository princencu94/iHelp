import React from 'react';
import './product-overview.styles.css';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

const ProductOverview = ({ item, addItem }) => {
    const { title, image, description, price, memory, stock, sn } = item;
    return (
        <div className="product-overview-container">
            <div className="product-overview">
                <div className="product-overview-image">
                    <img src={image} alt=""/>
                </div>

                <div className="product-overview-detail">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p className="detail-line"><span>{memory} Gig</span> <span>{stock} in Stock</span></p>
                    <h3>${price}</h3>

                    <div className="product-overview-buttons"> 
                        <button onClick={(item) => addItem(item)}>Add to Cart</button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductOverview);

