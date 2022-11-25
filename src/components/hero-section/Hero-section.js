import React from 'react'
import './hero-section.css'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src="./images/alone.jpg" alt="alone-img" className="bg-img" />
        </div>
        <div className="content">
            <p>Hi , This is Vikas</p>
            <h1>kind a  WEB DEVELOPER</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default Hero