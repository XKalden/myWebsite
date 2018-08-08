import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';

import {Route, Switch, Redirect} from 'react-router-dom';
// HOC router

import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/contact';


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/resume" exact component={Resume} /> 
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} /> 
     
      </Switch>
    );

  
    return (
      <div>
          {routes}
      </div>


    );
  }
}

export default App;
