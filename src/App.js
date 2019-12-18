import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
