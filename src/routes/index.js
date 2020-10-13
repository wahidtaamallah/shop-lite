import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import Message from "../pages/Message"
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path exact="/" component={Home} />
          <Route path="/about" component={About} />
          <Route  path="/store" component={Store}/>
          <Route  path="/message" component={Message}/>
          <Route path="/cart" component={Cart} />          
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;