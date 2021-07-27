import React from 'react';
import './navbar.styles.css';
import { connect } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';
import cartIcon from '../../assets/shopping-cart.svg';
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
                            <Link to="/accessories">
                                Accesories
                            </Link>
                            <Link to="/apple-watch">
                                Apple Watch
                            </Link>
                            <Link to="/ipad">
                                Ipad
                            </Link>
                            <Link to="/iphone">
                                Iphone
                            </Link>
                            <Link to="/macbook">
                                MacBook
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="services-link">
                    <NavLink activeClassName="selected" to="/services" >REPAIRS</NavLink>
                </div>
                <div>
                    <Link to="/contact-us">CONTACT US</Link>
                </div>
                <div className="cart-link">
                <Badge badgeContent={totalItems} color="secondary">
                    <img src={cartIcon} alt="Cart Icon" onClick={toggleHiddenCart}/>
                </Badge>
                   
                </div>
                </Responsive>
                <Responsive displayIn={["mobile", "tablet"]}>
                    <div className="mobile">
                        <div className="cart-link">
                            <Badge badgeContent={totalItems} color="secondary">
                                <img src={cartIcon} alt="Cart Icon" onClick={toggleHiddenCart}/>
                            </Badge>                    
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