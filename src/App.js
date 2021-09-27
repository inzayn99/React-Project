import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from './Navbar';
import Footer from './Footer';

const App =() => {
  return ( 
    <>
    <Navbar />
    <Switch>
    <Route exact path="/"  component={Home}     />
    <Route exact path="/contact"  component={Contact}     />
    <Route exact path="/about"  component={About}     />
    <Route exact path="/service"  component={Service}     />
    <Redirect to="/" />



    <Home/>
    </Switch>
    <Footer />
</>
    );
};
export default App;