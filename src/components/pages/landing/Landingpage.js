import React from 'react'
import Banner from './banner/Banner'
import SmartApp from './threeApp/SmartApp'
import CustomerApp from './customerapp/CustomerApp'
import PartnerApp from './partnerapp/PartnerApp'
import VendorApp from './vendorapp/VendorApp.js'
const Landingpage = () => {
  return (
    <div>
        <Banner />
        <SmartApp />
        <CustomerApp />
        <PartnerApp />
        <VendorApp />
    </div>
  )
}

export default Landingpage