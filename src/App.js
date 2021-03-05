import './App.css';

import Homepage from './pages/homepage/homepage';
import SingleProduct from './pages/single-product/single-product';
import Products from './pages/products/products';
import CheckoutPage from './pages/checkout-page/checkout';
import RepairsPage from './pages/repairs/repairs';
import ConfirmRepairPage from './pages/confirm-repair/confirm-repair.component';
import Footer from './components/footer/footer.component';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
