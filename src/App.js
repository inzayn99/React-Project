import React from 'react';
import {Switch, Route } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

const App =() => {
  return ( 
    <>
    <Switch>
    <Route exact path="/"  component={Home}     />
    <Route exact path="/contact"  component={Contact}     />
    <Route exact path="/about"  component={About}     />
    <Route exact path="/service"  component={Service}     />



    <Home/>
    </Switch>
</>
    );
};
export default App;