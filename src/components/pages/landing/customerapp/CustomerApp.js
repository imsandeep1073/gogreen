import React from 'react'
import Image from 'next/image'
import styles from '../../../main.module.css'
import Keyfeatures from '../keyfeature/Keyfeatures'
const CustomerApp = () => {
    const data = [
        {
            title: 'Fast, On-Demand Delivery',
            description: 'Get what you need, when you need it — delivered fast to your doorstep.'
        },
        {
            title: 'Schedule Orders at Your Convenience',

        },
        {
            title: 'Pick & Drop Service for Anything, Anywhere',

        },
        {
            title: 'All Products in One App',

        }
    ]
    return (
        <div className={`relative`}>
            <Image src="/right_lefe_img.svg" className={`absolute right-0 top-1/2 -translate-y-1/2  blur-[5px]`} alt="banner" width={200} height={200} />
            <div className={`max-w-[1920px] mx-auto md:py-[100px] py-[50px] relative md:px-[80px] px-4`}>
                <div className="flex flex-col lg:flex-row  justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight">
                            <span className="text-[#098B46] outline-text xl:text-[118px] lg:text-[75px] md:text-[85px] sm:text-[55px] text-[45px] md:leading-[90px] sm:font-extrabold font-semibold">Go Green</span>
                            <br />
                            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] md:text-[75px] text-[30px] font-normal lg:text-[60px] pr-5 leading-[80px] xl:w-[75%] lg:w-[80%]  md:py-2 relative inline-block mt-2`}>Customer App</span>
                        </h1>
                        <p className="xl:mt-20 lg:mt-10 md:mt-20 mt-10 xl:mb-10 mb-5 text-[#363636] text-base font-medium md:text-[30px] lg:text-[25px]">
                            Your daily essentials, delivered your way.
                        </p>
                        <p className=" text-[#363636] text-sm lg:text-[18px] md:text-[20px]">
                            The Go Green Customer App is your all-in-one solution for fast, convenient, and reliable deliveries. Whether you need groceries, want to schedule a delivery, or send something across town — it’s all just a few taps away.
                        </p>

                        <Keyfeatures keyData={data} />

                    </div>
                    {/* Right Phone Mockup */}
                    <div className="w-full lg:w-5/12 flex justify-end">
                        <Image
                            src="/customerApp.png"
                            alt="App Preview"
                            className="lg:pl-10 w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CustomerApp