import React from 'react'
import Footer from '../footer section/Footer'
import Navbar from '../navbar/Navbar'
import Hero_bg_project from '../Hero-section-project/Hero_bg_project'
import About_content from '../contents/about-content/About_content'
const About = () => {
  return (
    <div>
       <Navbar />
       <Hero_bg_project heading="ABOUT" text="I'm a FrontEnd Web Developer " />
       <About_content />
      <Footer />
    </div>
  )
}

export default About