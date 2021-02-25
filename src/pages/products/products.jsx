import React, { useState } from 'react';
import './products.styles.css';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navbar.component';
import Product from '../../components/product/product.component';

const Products = ({ products }) => {
    const [currentCollection, setCurrentCollection] = useState("iphone")

    const filteredCollection = products.filter(product => product.category === currentCollection);

    const handleChange = (event) => {
        setCurrentCollection(event.target.value);
    }
    return (
        <div className="products-container">
            <Navbar/>
            <div className="all-products-content">
                <h1>All Products</h1>
                <form>
                    <select value={currentCollection} onChange={handleChange} className="select-css"> 
                        <option value="iphone">Iphone</option>
                        <option value="accessories">Accesories</option>
                        <option value="apple-watch">Apple Watch</option>
                        <option value="ipad">Ipad</option>
                    </select>
                </form>
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
export default connect(mapStateToProps)(Products);