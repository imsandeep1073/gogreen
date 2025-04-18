import React from 'react'
import styles from '../../main.module.css'
const SliderInSection = () => {
    return (
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row ">
            {/* Left Side with Green Background */}
            <div className="relative w-full lg:w-1/2 bg-green-700 flex justify-center items-center p-8  py-[100px]">
                <div className="bg-[#F8F8F8] rounded-md  shadow-md max-w-xl w-full relative z-[1]">
                    <img
                        src="/serviceSection_sliderImage.png"
                        alt="Grocery Shopping"
                        className="w-full h-auto"
                    />
                </div>
                {/* White Block Cutting Bottom Green (Like design) */}
                <div className="absolute bottom-0 right-0 w-1/2 h-[-webkit-fill-available] bg-[#F8F8F8] hidden lg:block" />
            </div>
            {/* Right Side Content */}
            <div className="w-full lg:w-1/2 bg-[#F8F8F8] flex items-center px-6 lg:px-12 py-10">
                <div className="">
                    {/* Headline */}
                    <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight flex gap-3">
                        <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[85px] sm:leading-[80px]">For</span>
                        <br />
                        <span className="text-[#098B46] outline-text xl:text-[90px] md:text-[75px] sm:text-[55px] text-[35px] md:leading-[90px] font-extrabold">Customers</span>
                    </h1>
                    {/* Subheadline */}
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6 flex gap-4 justify-center ">
                        <span className="text-[#098B46] outline-text xl:text-[80px] md:text-[75px] sm:text-[55px] text-[35px] md:leading-[90px] font-extrabold">Order</span>
                        <span className={`${styles.customerAppBgText_right} text-[#fff] bg-[#098B46] pl-10 pt-2 text-[30px] font-semibold lg:text-[50px] leading-[60px] xl:w-[50%] lg:w-[70%] z-0 relative inline-block mt-2`}>Anything</span>

                    </h2>
                    {/* Description */}
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        From delicious meals to daily essentials, Go Green gives you the power
                        to get what you need — exactly when you need it. With a few taps, you
                        can browse nearby stores and restaurants, place your order, and track it
                        live, all from one seamless app.
                    </p>
                </div>
            </div>
        </div >


    )
}

export default SliderInSection