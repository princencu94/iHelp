import React, { useEffect, useState } from 'react';
import './single-products.styles.css';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase-utils';
import {
    useParams,
    Link
} from "react-router-dom";


import CircularProgress from '@material-ui/core/CircularProgress';
import ProductOverview from '../../components/product-overview/product-overview.component';
import Navbar from '../../components/navbar/navbar.component';
import RelatedItems from '../../components/related-items/related-items.component';

import { getSingleProduct } from '../../redux/product/product-actions';

const SingleProduct = () => {
    let { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        firestore.collection("products").where("sn", "==", id)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setSingleProduct(doc.data());
            });

        });
    }, [id])
   
    
    console.log(singleProduct)
    return (
        <div className="single-product-container">
            <Navbar/>
            <div className="single-product-back">
                <Link to="/products"> All Products</Link>
            </div>
            {

                singleProduct !== undefined ? 
                <ProductOverview item={singleProduct}/>
                :
                <div className="spinner">
                     <CircularProgress/> 
                </div>
            }
            {
                singleProduct.related !== undefined ? 
                <RelatedItems related={singleProduct.related} id={id}/>
                :
                <div className="spinner">
                     <CircularProgress/> 
                </div>
               
                
            }
            
        </div>
    )
}

const mapStateToProps = state => ({
    singleProduct: state.product.singleProduct
})

const mapDispatchToProps = dispatch => ({
    getSingleProduct: (product) => dispatch(getSingleProduct(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);