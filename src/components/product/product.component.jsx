import React from 'react';
import './product.styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';

const Product = ({ product, addItem }) => {
    const { title, newProduct, image,sn, memory } = product
    return (
        <div className="product-container">
            <Link to={`/single-product/${sn}`}>
                <div className="product-info">
                    <div className="product-image">
                        <img src={image} alt="product" />
                    </div>
                    <div className="product-body">
                        <p>{newProduct ? `New` : null}</p>
                        <h4><span>{title}</span> <span className="memory-op">{memory === 0 ? null : memory}</span></h4>
                    </div>

                    <div className="product-overlay">
                        <button class="overlay-button" onClick={() => addItem(product)}>Add Cart</button>
                    </div>
                </div>
                
            </Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Product);