import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Picture/img1.png"
import Common from './Common';


const Home =() => {
  return ( 
    <>
<Common name="Grow your bussiness with" imgsrc={web} visit="/service" btnname="Get Started"/>

</>
    );
};
export default Home;