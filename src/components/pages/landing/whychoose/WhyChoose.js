
import React from 'react'
import Animation from '../animation/Animation'
import Carouselbox from '../carousel/Carousel'

const WhyChoose = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className="py-12 md:py-20 lg:py-[100px]">
                <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Heading */}
                    <Animation animationType="scaleIn">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="text-[#098B46] outline-text lg:text-[80px] text-[75px] leading-[90px] font-extrabold">Why Choose</span>
                                <br />
                                <span className="text-[#098B46] text-[75px] font-extrabold lg:text-[115px] leading-[80px]">Go Green?</span>
                            </h1>
                        </div>
                    </Animation>

                    {/* Right Side - Paragraph */}
                    <Animation animationType="slideIn">
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed pl-10">
                                Go Green makes everyday tasks easier — all from one app. Whether it's
                                fast delivery, scheduled orders, or pick &amp; drop service, we've got
                                you covered. With a clean interface, real-time tracking, and a wide
                                range of products and services, we bring convenience to your fingertips
                                — quickly, reliably, and stress-free.
                            </p>
                        </div>
                    </Animation>
                </div>


                <div>
                    <Carouselbox />
                </div>

            </div>
        </div>
    )
}

export default WhyChoose