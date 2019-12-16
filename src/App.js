import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
