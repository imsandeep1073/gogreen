import React from 'react'
import styles from '../../../main.module.css'
import BenifitsofPick from './BenifitsofPick'
const PickDrop = () => {
    return (
        <div>
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url("/pickAndDrop_banner.png")' }}
            >
            </div>
            <div className="flex flex-col md:flex-row h-screen">
                {/* Left Section (Blurred image with heading) */}
                <div className="relative md:w-5/12 w-full h-64 md:h-full z-[1]">
                    <img
                        src="/pickAndDrop_leftIMg.png"
                        alt="Pick and Drop"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-[120px] font-bold text-center leading-tight">
                            Pick &amp;
                            <br />
                            Drop
                            <br />
                            Service
                        </h1>
                    </div>
                </div>
                {/* Right Section (Content) */}
                <div className="md:w-7/12 w-full bg-white flex flex-col justify-center p-8 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-[#098B46]  lg:text-[118px] text-[75px] pl-20 leading-[90px] font-semibold">Pick & Drop</span>
                        <br />
                        <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] text-[75px] z-0 lg:text-[80px] pl-20 pr-5 leading-[80px] w-[75%] py-2 relative inline-block mt-2 font-bold`}>
                            Service</span>
                    </h1>
                    <p className="mt-6 text-gray-700 text-lg md:text-[20px] leading-relaxed px-20">
                        Go Green’s Pick &amp; Drop service makes sending anything across town
                        easier than ever. Whether it's important documents, a lunchbox for a loved
                        one, forgotten items, or a small parcel — we’ve got you covered. Just add
                        the pickup and drop-off locations in the app, and we’ll take care of the
                        rest with speed and care.
                    </p>
                    <p className="mt-4 text-gray-700 text-sm md:text-[20px] leading-relaxed px-20">
                        Designed for your convenience, our service offers real-time tracking,
                        flexible scheduling, and reliable delivery by trusted partners. No more
                        running errands or relying on others — with Go Green, everything moves
                        smoothly from your door to theirs.
                    </p>
                </div>
            </div>
            <BenifitsofPick />


        </div>
    )
}

export default PickDrop