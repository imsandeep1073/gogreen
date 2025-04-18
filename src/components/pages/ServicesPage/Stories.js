import React from 'react'
import Image from 'next/image'
import styles from '../../main.module.css'

const Stories = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 md:px-8">
            <div className={`max-w-[1920px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4  mb-2`}>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Header Section */}
                    <div className='md:w-7/12'>
                        <div className="mb-12">
                            <h1 className="sm:text-4xl md:text-5xl text-lg font-bold leading-tight">
                                <span className="text-[#098B46] outline-text xl:text-[118px] lg:text-[75px] md:text-[85px] sm:text-[55px] text-[45px] md:leading-[90px] sm:font-extrabold font-semibold">For Stores</span>
                                <br />
                                <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] md:text-[75px] text-[30px] font-normal lg:text-[40px] pr-5 leading-[80px] xl:w-[100%] lg:w-[80%]  md:py-2 relative z-0 inline-block mt-2`}>Expand Your Reach. Grow Your Business</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-[25px] mb-12 max-w-3xl">
                            From delicious meals to daily essentials, Go Green gives you the power to get what
                            you need — exactly when you need it. With a few taps, you can browse nearby
                            stores and restaurants, place your order, and track it live, all from one seamless
                            app.
                        </p>


                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Feature 1 */}
                            <div className="relative md:col-span-2 h-64 rounded-lg overflow-hidden">
                                <Image
                                    src="/medium-shot-woman-holding-phone.png"
                                    alt="Instant Order Notifications"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <h4 className="text-white text-xl font-semibold">
                                        Instant Order Notifications
                                    </h4>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="relative h-64 md:col-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src="/Group_1392.png"
                                    alt="Easy Inventory & Menu Management"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <h4 className="text-white text-xl font-semibold">
                                        Easy Inventory & Menu Management
                                    </h4>
                                </div>
                            </div>

                           
                            {/* Feature 4 */}
                            <div className="relative h-64 md:col-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src="/Group_1391.png"
                                    alt="Direct Communication with Delivery Partners"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <h4 className="text-white text-xl font-semibold">
                                        Direct Communication with Delivery Partners
                                    </h4>
                                </div>
                            </div>

                            {/* Feature 5 */}
                            <div className="relative h-64 md:col-span-2 rounded-lg overflow-hidden">
                                <Image
                                    src="/happy-senior-man-using-touchpad-signing-delivery-from-courier.png"
                                    alt="Direct Communication with Delivery Partners"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <h4 className="text-white text-xl font-semibold">
                                        Direct Communication with Delivery Partners
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-8/12'>
                        <Image src="/storiesSection_rightIg.png" alt="Direct Communication with Delivery Partners" width={500} height={500} className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories