import './App.css';

import Homepage from './pages/homepage/homepage';
import SingleProduct from './pages/single-product/single-product';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/single-product/:id" component={SingleProduct} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
