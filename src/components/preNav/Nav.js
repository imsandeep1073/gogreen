import React from 'react'
import Image from 'next/image'
import { linksUrl } from '../../dynamicData'

const Nav = () => {

    return (
        <div className='gogreentheme hidden md:block'>
            <div className='pr-12'>
                <div className='flex justify-end gap-2 align-items-center p-2'>
                    {linksUrl.map((link, index) => (
                        <a key={index} href={link.href} >
                            < Image
                                src={link}
                                alt={link.alt}
                                width={link.width}
                                height={link.height}
                            />
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Nav