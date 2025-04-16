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
            <Image src="/right_lefe_img.svg" className={`absolute right-0 top-1/2 -translate-y-1/2  blur-[5px]`} alt="banner" width={200} height={200} />
            <Image src="/left_lefe_img.svg" className={`absolute left-0 top-1/4 -translate-y-1/2  blur-[5px]`} alt="banner" width={100} height={100} />
            <div className={`max-w-[1500px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4 relative`}>
                <div className="flex flex-col-reverse lg:flex-row  justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-5/12 flex justify-start ">
                        <Image
                            src="/customerApp.png"
                            alt="App Preview"   
                            className="w-full lg:pr-10"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    {/* Right Phone Mockup */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight">
                            <span className="text-[#098B46] outline-text xl:text-[118px] lg:text-[75px] md:text-[85px] sm:text-[55px] text-[45px] md:leading-[90px] sm:font-extrabold font-semibold">Go Green</span>
                            <br />
                            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] md:text-[75px] text-[30px] font-normal lg:text-[60px] pr-5 leading-[80px] xl:w-[75%] lg:w-[100%]  md:py-2 relative inline-block mt-2`}>Delivery Partner App</span>
                        </h1>
                        <p className="xl:mt-20 lg:mt-10 md:mt-20 mt-10 xl:mb-10 mb-5 text-[#363636] text-base font-medium md:text-[30px] lg:text-[25px]">
                            Earn on your time, with every ride.
                        </p>
                        <p className=" text-[#363636] text-sm lg:text-[18px] md:text-[20px]">
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