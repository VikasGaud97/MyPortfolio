import React, { Component } from 'react'
import './project-hero-section.css'

class Hero_bg_project extends Component {
 render(){
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  );
 }
}

export default Hero_bg_project