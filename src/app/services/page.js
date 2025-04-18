import React from 'react'
import ServiceBanner from '@/components/pages/ServicesPage/ServiceBanner'
import SliderInSection from '@/components/pages/ServicesPage/SliderInSection'
import FeaturesServices from '@/components/pages/ServicesPage/FeaturesServices'
import Stories from '@/components/pages/ServicesPage/Stories'
const page = () => {
  return (
    <div>
        <ServiceBanner />
        <SliderInSection />
        <FeaturesServices />
        <Stories />
    </div>
  )
}

export default page