import "./contact-content.css"

import React from 'react'

const Contact_content = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="FirstName & LastName"></input>
            
            <label>Email</label>
            <input type="text" placeholder="xyx@gmail.com"></input>
            <label>Subject</label>
            <input type="text"placeholder="project type"></input>
            <label>Messages</label>
           <textarea rows="6" placeholder="type your message" />
           <button  type="submit"  className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Contact_content