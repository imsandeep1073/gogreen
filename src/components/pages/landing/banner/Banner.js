import React from 'react'
// import styles from './Banner.module.css'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../main.module.css'

const Banner = () => {

    const bannerImage = [
        {
            src: "/googlePlayStoeImage.svg",
            alt: "banner1",
            width: 300,
            height: 250
        },
        {
            src: "/appStoreImage.svg",
            alt: "banner2",
            width: 300,
            height: 250
        }
    ]
    return (
        <div className={`text-center sm:mt-[150px] mt-[80px] relative md:px-[80px] px-4`}>
            <h1 className={`${styles.headingText} xl:text-[75px] xl:leading-[102px] md:text-[55px] md:leading-[75px] text-[40px] leading-[50px] font-extrabold`}>Fast. Reliable. Right at your fingertips.</h1>
            <p className={`max-w-[981px] md:text-[34px] text-[18px] md:px-20 p-4 xl:px-0 mx-auto ${styles.subHeadingText} mt-3`}>
                Say hello to the easiest way to manage your daily needs. The <span className={`font-bold`}>Go Green app</span> brings fast delivery, scheduled orders, pick & drop services, and a complete product <br /> catalog — All in one app.
            </p>
            <Image src="/right_lefe_img.svg" className={`absolute right-0 top-0 blur-[5px]`} alt="banner" width={200} height={200} />
            <div className={`sm:flex block  justify-center gap-20 my-14 align-items-center sm:space-y-0 space-y-4`}>
                {bannerImage.map((image, index) => (
                    <Link to="#" key={index} href=''  className='sm:block flex justify-center'>
                        < Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}                        
                        />
                    </Link>
                ))}
            </div>
            <div className={`flex justify-center 2xl:h-[668px] md:h-[568px] h-[228px] overflow-hidden sm:mt-10 relative`}>
                <Image src="/banner_mobile.svg" className={`2xl:h-[1391px] xl:h-[1191px] md:h-[991px] h-[500px] relative z-[-1]`} alt="banner" width={1500} height={1500} />
                <Image src="/lines_leftImages.svg" className={`absolute bottom-0 left-[-89px] w-[29%] rotate-[-18deg] z-[-2]`} alt="banner" width={500} height={500} />
                <Image src="/lines_rightImages.svg" className={`absolute bottom-0 right-[-89px] w-[29%] rotate-[18deg] z-[-2]`} alt="banner" width={500} height={500} />
            </div>
        </div>
    )
}

export default Banner