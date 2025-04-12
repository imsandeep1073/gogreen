import React from 'react'
import CustomerApp from '../customerapp/CustomerApp'
import Image from 'next/image'
import styles from '../../../main.module.css'
import Keyfeatures from '../keyfeature/Keyfeatures'
const PartnerApp = () => {
    const data = [
        {
            title: 'Instant Order Alerts',
            description: 'Get what you need, when you need it — delivered fast to your doorstep.'
        },
        {
            title: 'Live Navigation & Route Assistance',

        },
        {
            title: 'Easy Earnings Tracking',

        },
        {
            title: 'Flexible Work Hours',

        },

    ]

  
    return (
        <div className='bg-[#F5F5F5] relative z-0'>
            <div className={`max-w-[1500px] mx-auto py-[100px]`}>
                <div className="flex flex-col-reverse lg:flex-row  justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-5/12 flex justify-start ">
                        <Image
                            src="/customerApp.png"
                            alt="App Preview"
                            className="w-full pr-10"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    {/* Right Phone Mockup */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-[#098B46] outline-text lg:text-[118px] text-[75px] leading-[90px] font-extrabold">Go Green</span>
                            <br />
                            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] text-[75px] font-normal lg:text-[60px] pr-5 leading-[80px] w-[75%] py-2 relative inline-block mt-2`}>Delivery Partner App</span>
                        </h1>
                        <p className="mt-20 mb-10 text-[#363636] text-base font-medium lg:text-[25px]">
                            Earn on your time, with every ride.
                        </p>
                        <p className=" text-[#363636] text-base lg:text-[20px]">
                            The Go Green Delivery Partner App is built to help you work smarter. Accept orders, track routes, manage deliveries, and get paid — all from one easy-to-use app.
                        </p>

                        <Keyfeatures keyData={data} />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default PartnerApp