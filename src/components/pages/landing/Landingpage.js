import React from 'react'
import Banner from './banner/Banner'
import SmartApp from './threeApp/SmartApp'
import CustomerApp from './customerapp/CustomerApp'
import PartnerApp from './partnerapp/PartnerApp'
import VendorApp from './vendorapp/VendorApp.js'
import WhyChoose from './whychoose/WhyChoose'
import PickDrop from './pickdrop/PickDrop'
import UserSay from './usersay/UserSay'
import FaqSection from './faq/FaqSection'
const Landingpage = () => {
  return (
    <div>
      <Banner />
      <SmartApp />
      <CustomerApp />
      <PartnerApp />
      <VendorApp />
      <WhyChoose />
      <PickDrop />
      <UserSay />
      <FaqSection />
    </div>
  )
}

export default Landingpage