import React, { useState, useEffect } from 'react';
import './homepage.styles.css';

import { productsFetchStartAsnyc } from '../../redux/product/product-actions';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase/firebase-utils';

import aboutImage from '../../assets/about.jpg';

import HeroSection from '../../components/hero-section/hero-section.component';
import Product from '../../components/product/product.component';
import Sponsor from '../../components/sponsors/sponsors.component'
import Navbar from '../../components/navbar/navbar.component';


//import { addCollectionAndDocuments } from "../../firebase/firebase-utils";
//import { featured, devices } from '../../shop-data/data';

const Homepage = ({productsFetchStartAsnyc}) => {

    const [allProducts, setAllProducts] = useState();
    const [isLoading, setLoading] = useState();

    

    useEffect(() => {
        //addCollectionAndDocuments('featured', featured);
        productsFetchStartAsnyc();

       const Devices= firestore.collection("featured").orderBy("manufactured", "desc");

        Devices
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        if(data.length !== 0) {
            setAllProducts(data);
            setLoading(false);
        } else {
            setLoading(true);
        }
        });
    },[productsFetchStartAsnyc])
    return (
        <div className="homepage">
            <Navbar/>
            <HeroSection/>
            <div className="web-content">
                <div className="header">
                    <h1>Enjoy the Apple Experience</h1>
                </div>

                <div className="tab-menu">
                    <Link>iPhone</Link>
                    <Link>iPad</Link>
                    <Link>iWatch</Link>
                    <Link>Macbook</Link>
                    <Link>Accessories</Link>
                </div>

                <div className="products-content">
                    <div className="featured-products">
                        {
                            isLoading === false ?
                            allProducts.map(item =>
                                <Product key={item.sn} product={item} /> 
                            )
                            :
                            <CircularProgress/>
                        }
                    </div>
                </div>

                <div className="about-us">
                    <div className="about-info">
                        <h1>About us</h1>
                        <p>
                            Founded in 2014 with an aim to sell authentic apple products and improve customer’s experience, iHelp is a tech-centred support firm whose special focus over the years has revolved around supplying all Apple products and other related technological devices and services. 
                        </p>

                        <h1>Our Core Values</h1>
                        <p>
                            Professionalism,
                            Transparency,
                            Honesty,
                            Reliable,
                            Efficiency and
                            Exceptional customer service.
                        </p>
                        
                      
                    </div>

                    <div className="about-image">
                        <img src={aboutImage} alt="about us" />
                    </div>
                </div>

                <Sponsor/>
            </div>


        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    productsFetchStartAsnyc: () => dispatch(productsFetchStartAsnyc())
})
export default connect(null, mapDispatchToProps)(Homepage);