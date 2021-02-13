import React from 'react';
import './product.styles.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { title, newProduct, image,sn } = product
    return (
        <div className="product-container">
            <Link to={`/single-product/${sn}`}>
                <div className="product-info">
                    <div className="product-image">
                        <img src={image} alt="product" />
                    </div>
                    <div className="product-body">
                        <p>{newProduct ? `New` : null}</p>
                        <h4>{title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product;