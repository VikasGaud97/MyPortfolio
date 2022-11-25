import React , { useState } from 'react'
import Footer from '../footer section/Footer'
import Navbar from '../navbar/Navbar'
import Hero_bg_project from '../Hero-section-project/Hero_bg_project'
import Pricing from '../pricing_cards/Pricing'
import Price from '../pricing_cards/PricingApi'
import Work_card from '../work-cards/Work_card'
import workApi from '../work-cards/WporkApi'

// useState for work project




const Project = () => {
  const [menuData,setmenuData] = useState(Price);
  // useState for work project
  const [workData,setworkData] = useState(workApi)
  return (
    <div>
      <Navbar />
      <Hero_bg_project heading="PROJECTS" text="Some of my projects" />
      <Work_card workData={workData} />
      <Pricing  menuData={menuData}/>
      <Footer />
    
      </div>
  )
}

export default Project