import React from 'react'
import Footer from '../footer section/Footer'
import Navbar from '../navbar/Navbar'
import Hero_bg_project from '../Hero-section-project/Hero_bg_project'
import Contact_content from '../contents/contact-content/Contact_content'

const Contact = () => {
  return (
    <div>
       <Navbar />
       <Hero_bg_project heading="CONTACT" text="Call me for a better deal" />
       <Contact_content />
      <Footer />
    </div>
  )
}

export default Contact