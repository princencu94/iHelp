import './App.css';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage';
import SingleProduct from './pages/single-product/single-product';
import Products from './pages/products/products';
import CheckoutPage from './pages/checkout-page/checkout';
import RepairsPage from './pages/repairs/repairs';
import ConfirmRepairPage from './pages/confirm-repair/confirm-repair.component';
import Footer from './components/footer/footer.component';
import ProductPage from './pages/product-page/product-page';
import FaqPage from './pages/faq/faq-page';
import ContactUsPage from './pages/contact-us-page/contact-us-page';
import Checkout from './components/checkout/checkout.component';
import Blogs from './pages/blogs/blog.page';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App({ toggleCart }) {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/single-product/:id" component={SingleProduct} />
          <Route path="/products" component={Products} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/services" component={RepairsPage} />
          <Route path="/confirm" component={ConfirmRepairPage} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/contact-us" component={ContactUsPage} />
          <Route exact path="/:category" component={ProductPage} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
        
        <Footer/>
        {
          toggleCart !== true ?
          null :
            <Checkout/>
        }
      </Router>
      
    </div>
  );
}

const mapStateToProps = state =>({
  toggleCart: state.cart.toggleCart
})

export default connect(mapStateToProps)(App);
