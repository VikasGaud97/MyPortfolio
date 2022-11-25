import React from 'react'
import { FaFacebook, FaHome , FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import './footer.css'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={22} style={{color:"white",marginLeft:"2rem"}} />
              <p>Ganraj Appartment</p>
              <p>Mumbai</p>
            </div>
          <div className="phone">
            <FaPhone size={22} style={{color:"white",marginLeft:"2rem"}} />
           <h4>+91<samp style={{padding:"10px"}}>90824</samp>26784</h4>
           </div>
           
          <div className="email">
          <MdEmail size={22} style={{color:"white",marginLeft:"2rem"}} />
          <h4>vikasgaud95@gmail.com</h4>  
        </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is Vikas</p>
          <div className="social">
          <div className="fb">
            <FaFacebook  />
          </div>
          <div className="insta">
            <FaInstagram  />
          </div>
          <div className="link-in">
            <FaLinkedin  />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer