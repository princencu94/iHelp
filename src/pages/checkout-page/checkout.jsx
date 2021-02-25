import React from 'react';
import './checkout.styles.css';

import Navbar from '../../components/navbar/navbar.component';
import CheckoutTable from '../../components/checkout-table/checkout-table.component';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';


  
const CheckoutPage = () => {
    return (
        <div className="checkout-page-container">
          <Navbar/>
          <div className="checkout-page-header">
              <h1>Checkout</h1>
          </div>
          <div className="checkout-page-content">
              <CheckoutTable/>
              <CheckoutForm/>
          </div>
          
        </div>
    )
}

export default CheckoutPage;