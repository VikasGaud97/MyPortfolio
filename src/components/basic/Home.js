import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero-section/Hero-section'
import Footer from '../footer section/Footer'
import Work_card from '../work-cards/Work_card'
import workApi from '../work-cards/WporkApi'
import { useState } from 'react'

const Home = () => {
  const [workData,setworkData] = useState(workApi)
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Work_card workData={workData} />
      <Footer />
    </div>
  )
}

export default Home