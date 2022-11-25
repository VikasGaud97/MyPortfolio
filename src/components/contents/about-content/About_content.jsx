
import React from 'react'
import { Link } from 'react-router-dom'
import "./about_content.css"

const About_content = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I ?</h1>
        <p> I'm a react front-end developer</p>
        <Link to="/contact">
          <button className='btn'> Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="img1" alt="img1" />
          </div>
          <div className="img-stack bottom">
            <img src="img1" alt="img2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_content