import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Picture/444.png"
import Common from './Common';

const About =() => {
  return ( 
    <>
<Common  name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Contact Now" />

</>
    );
};
export default About;