import React from 'react'
import styles from '../../main.module.css'
import Image from 'next/image'
const ServiceBanner = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1920px] mx-auto md:py-[100px] py-[50px] md:px-[80px] px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Section */}
                    <div className='py-8'>
                        <div className='relative'>
                            <h1 className={`${styles.about_header} sm:text-4xl md:text-5xl text-lg font-bold leading-tight`}>
                                <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[126px] sm:leading-[80px]">Our</span>
                                <span className=" outline-text  sm:text-[55px] md:leading-[90px] pl-8  text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[118px] sm:leading-[80px]">Services</span>
                            </h1>
                            <Image src="" alt="About Us" width={25} height={25} className="absolute bottom-0 right-0" />
                        </div>
                        <p className="mt-14 text-[25px]">
                            At Go Green, we’re dedicated to making your everyday tasks more convenient and hassle-free. Our platform is designed to give you instant access to essential services right from your phone. Whether you're shopping for groceries, in need of a quick delivery, or simply managing your daily errands, everything you need is just a few taps away.
                        </p>
                        <p className="mt-10 text-[25px]">
                            From fast deliveries to scheduled orders and citywide pick & drop services, we’ve built a system that fits seamlessly into your routine. No more juggling multiple apps or wasting time on errands — Go Green brings it all together in one place, helping you save time, stay organized, and live smarter.
                        </p>
                        <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight relative z-0 mt-10">
                            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] text-[30px] font-normal lg:text-[30px]  leading-[60px] xl:w-[40%] lg:w-[70%]  relative inline-block mt-2`}>Get started today.</span>
                        </h1>
                    </div>
                    {/* Right Section (Phone Image) */}
                    <div className="text-center">
                        <Image
                            src="/mobileAppWithcircle.png"
                            alt="GoGreen App UI"
                            width={650}
                            height={650}
                            className="w-[400px] md:w-[350px] lg:w-[650px] drop-shadow-xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceBanner