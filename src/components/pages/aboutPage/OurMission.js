import React from 'react'
import Image from 'next/image'
const OurMission = () => {
    return (
        <div>
            <>
                {/* Tailwind CSS Responsive About Us Section */}
                <div className="bg-[#F5F5F5]">
                    <div className="">
                        {/* Mission Section */}
                        <div className="flex items-center">
                            <div className='lg:w-1/2'>
                                <Image
                                    src="/our_mission_img.png"
                                    alt="Mission Image"
                                    className="shadow-lg w-full h-auto object-cover"
                                    width={550}
                                    height={550}
                                />
                            </div>
                            <div className='lg:w-1/2'>
                                <div className=''>
                                    <h2 className="text-3xl md:text-8xl font-bold text-[#098B46] mb-2 text-center">
                                        Our <span className="bg-[#098B46] text-white px-4 pr-40">Mission</span>
                                    </h2>
                                    <div className='w-[70%] mx-auto mt-10'>
                                        <p className="text-[25px]">
                                            At GoGreen, our mission is to deliver more than just products — we
                                            deliver convenience, connection, and opportunity. We provide fast,
                                            reliable delivery while supporting local businesses and creating
                                            fair, flexible work for delivery partners. Powered by technology and
                                            rooted in community, we’re building a smarter, more inclusive
                                            future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Vision Section */}
                        <div className="flex items-center">
                            <div className='lg:w-1/2 '>
                                <div className='pl-[70px]'>
                                    <h2 className="text-3xl md:text-8xl font-bold text-[#098B46] mb-2 flex items-center gap-2">
                                        Our <span className="bg-[#098B46] text-white px-4 pr-40 w-full">Vision</span>
                                    </h2>
                                    <div className='mt-10'>
                                        <p className="w-[75%] mr-auto text-[25px] leading-[35px]">
                                            Our vision is to become the go-to platform for sustainable,
                                            all-in-one delivery. We aim to build a world where every order
                                            supports local businesses, strengthens community connections, and
                                            contributes to a smarter, more responsible future. Through
                                            innovation and thoughtful logistics, we’re creating a delivery
                                            experience that goes beyond convenience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-1/2'>
                                <Image
                                    src="/our_vision_img.png"
                                    alt="Vision Image"
                                    className="shadow-lg w-full h-auto object-cover"
                                    width={550}
                                    height={550}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default OurMission