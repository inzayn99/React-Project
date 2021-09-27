import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Picture/img1.png";


const Card =(props) => {
  return ( 
    <>


<div className="col-md-4 col-10 mx-auto">
<div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Through our digital marketing service, you are able to draw specific attention to yourself and your product.</p>
    <NavLink to="#" className="btn btn-outline-success">Go somewhere</NavLink>
  </div>
</div>
</div>


</>
    );
};
export default Card;