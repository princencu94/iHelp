import React from 'react';
import './product-page.styles.css';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navbar.component';
import Product from '../../components/product/product.component';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
    
    const { category } = useParams();
    const nameCapitalized = category.charAt(0).toUpperCase() + category.slice(1)

    const filteredCollection = products.filter(product => product.category === category);
    return (
        <div className="products-container">
            <Navbar/>
            <div className="all-products-content">
                <h1>{nameCapitalized}</h1>
        
                <div className="all-products">
                    {
                        filteredCollection.map(product => 
                            <Product key={product.sn} product={product} />
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.product.products
})
export default connect(mapStateToProps)(ProductPage);

