import React from 'react'
import styles from '../../../main.module.css'
import Image from 'next/image'
import Animation from '../animation/Animation'
const SmartApp = () => {

    return (
        <div className={`${styles.smartAppBg}`}>
            <div className={`max-w-[1500px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4`}>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight">
                            <span className="text-[#098B46] outline-text xl:text-[118px] md:text-[75px] sm:text-[55px] text-[35px] md:leading-[90px] font-extrabold">One Platform</span>
                            <br />
                            <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[85px] sm:leading-[80px]">Three Smart Apps</span>
                        </h1>
                        <p className="mt-6 text-gray-600 text-base lg:text-[20px] lg:my-20">
                            Go Green brings customers, delivery partners, and vendors together through
                            a powerful, connected system. Each app is purpose-built — for placing
                            orders, delivering them, or managing your business. Simple, efficient, and
                            designed to keep everything running smoothly in real time.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 relative">
                            <button className="bg-[#098B46] text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition relative z-10">
                                CUSTOMER APP
                            </button>
                            <button className="bg-[#098B46] text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition relative z-10">
                                DELIVERY PARTNER APP
                            </button>
                            <button className="bg-[#098B46] text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition relative z-10">
                                VENDOR APP
                            </button>
                            <Image src="/smartApp_imageBtnDots.svg" className={`absolute top-[-56px] left-[74px] w-[83%] hidden lg:block`} alt="banner" width={1000} height={500} />
                        </div>
                    </div>
                    {/* Right Phone Mockup */}
                    <div className="w-full lg:w-5/12 flex justify-end">
                        <Animation animationType="slideIn" duration={2} >
                            <Image
                                src="/smartApp_image.png"
                                alt="App Preview"
                                className="lg:pl-10 w-full"
                                width={1000}
                                height={1000}
                            />
                        </Animation>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default SmartApp