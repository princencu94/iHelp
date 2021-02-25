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


const Homepage = ({productsFetchStartAsnyc}) => {

    const [allProducts, setAllProducts] = useState();
    const [isLoading, setLoading] = useState();


    useEffect(() => {
        productsFetchStartAsnyc();

       const Devices= firestore.collection("featured");

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
    }, [])
    return (
        <div className="homepage">
            <Navbar/>
            <HeroSection/>
            <div className="web-content">
                <div className="header">
                    <h1>Enjoy the Apple Experience</h1>
                </div>

                <div className="tab-menu">
                    <Link to="">iPhone</Link>
                    <Link to="">iWatch</Link>
                    <Link to="">Accessories</Link>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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