import React, { useState } from 'react'
import {FaBars , FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
const [click,setclick] = useState(false);
const handleClick = ()=>setclick(!click)

// function foer changing bg color
const [color,setcolor] = useState(false);
const changrClor = () => {
    if(window.scrollY >= 100){
        setcolor(true);
    }
    else{
        setcolor(false);
    }
}



  return (
       <>
        <div className='header'>
        <Link to="/">
        <h1>PortFolio</h1>
        </Link>
        <ul className={ click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
           { click ? (
           <FaTimes size={20} style={{color:"white"}} />):(<FaBars size={20} style={{color:"white"}} />
           )}

        </div>
    </div>
       </>
  )
}

export default Navbar