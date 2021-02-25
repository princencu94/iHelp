import React from 'react';
import './single-products.styles.css';
import { connect } from 'react-redux';
import {
    useParams,
    Link
} from "react-router-dom";


import CircularProgress from '@material-ui/core/CircularProgress';
import ProductOverview from '../../components/product-overview/product-overview.component';
import Navbar from '../../components/navbar/navbar.component';
import RelatedItems from '../../components/related-items/related-items.component';

const SingleProduct = ({products, isFetchingProducts}) => {
   

    let { id } = useParams();
    const singleProduct = products.find(product => product.sn === id);
    const related = singleProduct.related;
    return (
        <div className="single-product-container">
            <Navbar/>
            <div className="single-product-back">
                <Link to="/products"> All Products</Link>
            </div>
            {

                isFetchingProducts ? 
                <ProductOverview item={singleProduct}/>
                :
                <CircularProgress/> 
            }
            <RelatedItems related={related} />
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.product.products,
    isFetchingProducts: state.product.isFetchingProducts
})



export default connect(mapStateToProps)(SingleProduct);