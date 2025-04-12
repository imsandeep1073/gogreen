import React from 'react'
import Image from 'next/image'
import styles from '../../../main.module.css'
import Keyfeatures from '../keyfeature/Keyfeatures'
const VendorApp = () => {
    const data = [
        {
            title: 'Easy Product & Inventory Management',
            description: 'Add, update, and manage your products easily — all in one place.'
        },
        {
            title: 'Real-Time Order Notifications',

        },
        {
            img: '/pick_drop_icon_dotes.svg',
            title: 'Live Delivery Tracking',

        },
        {
            title: 'Sales & Performance Insights',

        }
    ]

    return (
        <div>
            <div className={`max-w-[1500px] mx-auto py-[150px]`}>
                <div className="flex flex-col-reverse lg:flex-row  justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-[#098B46] outline-text lg:text-[118px] text-[75px] leading-[90px] font-extrabold">Go Green</span>
                            <br />
                            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] text-[75px] font-normal lg:text-[60px] pr-5 leading-[80px] w-[75%] py-2 relative inline-block mt-2`}>
                            Vendor App</span>
                        </h1>
                        <p className="mt-20 mb-10 text-[#363636] text-base font-medium lg:text-[25px]">
                            Your daily essentials, delivered your way.
                        </p>
                        <p className=" text-[#363636] text-base lg:text-[20px]">
                            The Go Green Customer App is your all-in-one solution for fast, convenient, and reliable deliveries. Whether you need groceries, want to schedule a delivery, or send something across town — it’s all just a few taps away.
                        </p>

                        <Keyfeatures keyData={data} />

                    </div>
                    {/* Right Phone Mockup */}
                    <div className="w-full lg:w-5/12 flex justify-end">
                        <Image
                            src="/customerApp.png"
                            alt="App Preview"
                            className="pl-10 w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default VendorApp