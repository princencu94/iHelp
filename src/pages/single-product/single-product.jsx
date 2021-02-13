import React, { useState, useEffect } from 'react';
import {
    useParams
  } from "react-router-dom";


import { firestore } from '../../firebase/firebase-utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductOverview from '../../components/product-overview/product-overview.component';
import Navbar from '../../components/navbar/navbar.component';

const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setLoading] = useState(true)
    let { id } = useParams();


    useEffect(() => {
        firestore.collection("devices").where("sn", "==", id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    if(doc.data() !== undefined) {
                        setLoading(false);
                        setSingleProduct(doc.data());
                    }
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }, [])
    return (
        <div className="single-product-container">
            <Navbar/>
            {

                isLoading === false ? 
                <ProductOverview item={singleProduct}/>
                :
                <CircularProgress/> 
            }
            
        </div>
    )
}

export default SingleProduct;