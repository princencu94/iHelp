import React from 'react';
import './navbar.styles.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import phone from '../../assets/phone.svg';
import cartIcon from '../../assets/shopping-cart.svg';
import Checkout from '../checkout/checkout.component';

import { toggleHiddenCart } from '../../redux/cart/cart-actions';

const Navbar = ({ toggleCart, toggleHiddenCart}) => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link to="/"><h1>iHelp</h1></Link>
            </div>

            <div className="nav">
                <div className="products-link">
                    <Link to="/products">PRODUCTS</Link>
                    <div className="products-dropdown">
                        <div className="products-display-flex">
                            <Link to="/iphone">
                                <img src={phone} alt="Phone" />
                                <h4>Iphone</h4>
                            </Link>
                            <Link to="/samsung">
                                <img src={phone} alt="Phone" />
                                <h4>Samsung</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="services-link">
                    <Link to="/services">SERVICES</Link>
                </div>
                <div className="cart-link">
                    <img src={cartIcon} alt="Cart Icon" onClick={toggleHiddenCart}/>
                    {
                        toggleCart == true ?
                        <Checkout/>
                        : null
                    }
                   
                </div>
               
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

const mapStateToProps = state => ({
    toggleCart: state.cart.toggleCart
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);