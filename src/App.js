import React from 'react'
import Home from'./pages/Home'
import Product from './pages/Product'
import './App.css';
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
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/product">
              <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
