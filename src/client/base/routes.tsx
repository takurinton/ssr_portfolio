import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import About from '../pages/About';
import Post from '../pages/Post';

const Routes = () => (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
)
  
export default Routes;