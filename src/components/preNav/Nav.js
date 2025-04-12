import React from 'react'
import Image from 'next/image'

const Nav = () => {
    const linksUrl = [
        {
            src: "/instagramLogo.svg",
            alt: "Instagram",
            href: "#",
            width: 40,
            height: 40
        },
        {
            src: "/telegramLogo.svg",
            alt: "Facebook",
            href: "#",
            width: 40,
            height: 40
        },
        {
            src: "/facebookLogo.svg",
            alt: "Facebook",
            href: "#",
            width: 40,
            height: 40
        },
        {
            src: "/twtterLogo.svg",
            alt: "Twitter",
            href: "#",
            width: 40,
            height: 40
        },
        {
            src: "/LinkedinLogo.svg",
            alt: "LinkedIn",
            href: "#",
            width: 40,
            height: 40
        }
    ]

    return (
        <div className='gogreentheme'>
            <div className=''>
                <div className='flex justify-end gap-2 align-items-center p-2'>
                    {linksUrl.map((link, index) => (
                        <a key={index} href={link.href} >
                            < Image
                                src={link}
                                alt={link.alt}
                                width={40}
                                height={40}
                            />
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Nav