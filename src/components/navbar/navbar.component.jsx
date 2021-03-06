import React from 'react';
import './navbar.styles.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import phone from '../../assets/phone.svg';
import cartIcon from '../../assets/shopping-cart.svg';
import Checkout from '../checkout/checkout.component';
import Badge from '@material-ui/core/Badge';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MobileNavbar from '../mobile-nav/mobile-nav.component';

import {
    Responsive
} from 'typed-responsive-react';

import { toggleHiddenCart } from '../../redux/cart/cart-actions';

const Navbar = ({ toggleCart, toggleHiddenCart, totalItems}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="nav-container">
            <div className="logo">
                <Link to="/"><h1>iHelp</h1></Link>
            </div>

            <div className="nav">
                <Responsive displayIn={["laptop"]}>
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
                <Badge badgeContent={totalItems} color="secondary">
                    <img src={cartIcon} alt="Cart Icon" onClick={toggleHiddenCart}/>
                </Badge>
                    
                    {
                        toggleCart == true ?
                        <Checkout/>
                        : null
                    }
                   
                </div>
                </Responsive>
                <Responsive displayIn={["mobile", "tablet"]}>
                    <div className="mobile">
                        <div className="cart-link">
                            <Badge badgeContent={totalItems} color="secondary">
                                <img src={cartIcon} alt="Cart Icon" onClick={toggleHiddenCart}/>
                            </Badge>
                                
                                {
                                    toggleCart == true ?
                                    <Checkout/>
                                    : null
                                }
                    
                        </div>
                        <DehazeIcon className="hamburger" onClick={handleClickOpen}/>
                    </div>
                    <MobileNavbar handleClose={handleClose} open={open} />
                </Responsive>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

const mapStateToProps = state => ({
    toggleCart: state.cart.toggleCart,
    totalItems: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);