import React from 'react'
import { Link } from 'react-router-dom'



const Pricing = ({ menuData }) => {
 
  return (
   <>
    <div className="pricing">
      <div className="card-container" >
  {
  menuData.map((curElem)=>{
    return (
   
         <div className="card-name">
          <h3>{curElem.name}</h3>
          <h2>Rs</h2>
          <span className="bar"></span>
          <p className="btc"  >{curElem.price}</p>
          <p>3 Days</p>
          <p>3 Pages</p>
          <p>Featured</p>
          <p>Responsive Desgin</p>
          <div className="button">
          <Link to="/contact" className="btn">Contact Now</Link>
          </div>
        </div>
 
    )
    })
  }
  </div>
     </div>
   </>
  )
}



export default Pricing