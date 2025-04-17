import React from 'react'
import styles from '../../main.module.css'
import Image from 'next/image'
function BannerSection() {
    return (
        <div className="bg-white">
            <div className="max-w-[1500px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Section */}
                    <div className='py-10'>
                        <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight">
                            <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[118px] sm:leading-[80px]">About</span>
                            <span className=" outline-text  sm:text-[55px] md:leading-[90px] pl-8  text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[118px] sm:leading-[80px]">Us</span>

                        </h1>
                        <p className="mt-6 text-xl">
                            <span className="font-bold text-green-700">GoGreen</span> is your
                            all-in-one delivery ecosystem — built to connect communities through
                            convenience, speed, and smart technology. Whether you're a customer
                            craving your favorite meal, a local store looking to grow, or a
                            delivery partner seeking flexible work, GoGreen brings everyone
                            together in one seamless experience.
                        </p>
                        <p className="mt-10 text-xl">
                            Founded with a vision to reshape the way people shop, send, and
                            receive, GoGreen simplifies daily life through fast, reliable delivery
                            solutions. Our platform uses technology not just to save time, but to
                            create smarter, more connected cities — one order at a time.
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
                            width={550}
                            height={550}
                            className="w-[400px] md:w-[350px] lg:w-[550px] drop-shadow-xl ml-auto"
                        />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default BannerSection