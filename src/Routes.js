import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/common.scss';
import './Styles/reset.scss';
import './Styles/variable.scss';

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ProductList from './Pages/ProductList/ProductList';
import Signup from './Pages/Signup/Signup';
import Cart from './Pages/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/placedetail/:id" component={ProductDetail} />
          <Route exact path="/product-list/:id" component={ProductList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
