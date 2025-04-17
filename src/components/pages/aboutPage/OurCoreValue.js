import React from 'react'
import styles from '../../main.module.css'

const OurCoreValue = () => {
    return (
        <div className='border-b-2 border-black mb-2'>
            <div className={`max-w-[1500px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4  mb-2`}>
                <h1 className={`${styles.about_header} sm:text-4xl md:text-5xl text-lg font-bold leading-tight`}>
                    <span className="text-[#098B46] outline-text xl:text-[118px] md:text-[75px] sm:text-[55px] text-[35px] md:leading-[90px] font-extrabold">Our Core</span>
                    <br />
                    <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[85px] sm:leading-[80px]">Values</span>
                </h1>
                <div className='mt-10'>
                    <p className='text-xl'>At GoGreen, our values shape everything we do — from how we deliver to how we connect with <br /> communities. Here’s what we stand for:</p>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValue