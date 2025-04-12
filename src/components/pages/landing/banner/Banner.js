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
            width: 150,
            height: 200
        },
        {
            src: "/appStoreImage.svg",
            alt: "banner2",
            width: 150,
            height: 150
        }
    ]
    return (
        <div className={`text-center mt-[100px]`}>
            <h1 className={`${styles.headingText} 2xl:text-[75px] font-extrabold 2xl:leading-[102px] xl:text-[60px] xl:leading-[82px]`}>Fast. Reliable. Right at your fingertips.</h1>
            <p className={`max-w-[981px] mx-auto ${styles.subHeadingText} mt-3`}>
                Say hello to the easiest way to manage your daily needs. The <span className={`font-bold`}>Go Green app</span> brings fast delivery, scheduled orders, pick & drop services, and a complete product <br /> catalog — All in one app.
            </p>
            <div className={`flex justify-center gap-10 mt-10 align-items-center`}>
                {bannerImage.map((image, index) => (
                    <Link to="#" key={index} href='' >
                        < Image
                            src={image.src}
                            alt={image.alt}
                            width={150}
                            height={150}
                    />
                </Link>
                ))}
            </div>
            <div className={`flex justify-center 2xl:h-[668px] xl:h-[568px] overflow-hidden mt-10 relative` }>
                <Image src="/banner_mobile.svg" className={`2xl:h-[1391px] xl:h-[1191px] relative z-[-1]`} alt="banner" width={1500} height={1500} />
                <Image src="/lines_leftImages.svg" className={`absolute bottom-0 left-[-89px] w-[29%] rotate-[-18deg] z-[-2]`} alt="banner" width={500} height={500} />
                <Image src="/lines_rightImages.svg" className={`absolute bottom-0 right-[-89px] w-[29%] rotate-[18deg] z-[-2]`} alt="banner" width={500} height={500} />
                
            </div>
        </div>
    )
}

export default Banner