import React from 'react'
import BannerSection from '../../components/pages/aboutPage/BannerSection'
import OurMission from '../../components/pages/aboutPage/OurMission'
import OurCoreValue from '../../components/pages/aboutPage/OurCoreValue'
import FaqSection from '../../components/pages/landing/faq/FaqSection'
const page = () => {
  return (
    <div>
      <BannerSection />
      <OurMission />
      <OurCoreValue />   
      <FaqSection />  
    </div>
  )
}

export default page