import React from 'react'
import "./workcards.css"
import { NavLink } from 'react-router-dom'

const Work_card = ({ workData }) => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
            workData.map((curElem)=>{
                return(
                    <div className="project-card">
                    <img src={curElem.image} alt="" />
                    <h2 className="project-title">{curElem.title}</h2>
                    <div className="pro-details">
                        <p>{curElem.paragraph}</p>
                        <div className="pro-btns">                 
                            <NavLink to="url.com" className="btn">view</NavLink>
                        </div>
                    </div>
                </div>
                )

            })
            }
     
        </div>
    </div>
  )
}

export default Work_card