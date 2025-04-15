"use client"
import React, { useState } from 'react'
import styles from '../main.module.css'
import Link from 'next/link'

const Header = () => {
    const [activeItem, setActiveItem] = useState('Home');
    const urls = [
        {
            name: 'Home',   
            url: '/'
        },
        {
            name: 'About Us',
            url: '/about'
        },
        {
            name: 'Services',
            url: '/services'
        },  
        {
            name: 'Blog',
            url: '/blog' 
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ];
    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <nav className="bg-white border-gray-200 mt-10">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse pl-9">
                    <img
                        src="/logo.svg"
                        className=""
                        alt="Logo"
                    />                    
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto gogreentheme py-[23px] px-[50px] rounded-tl-[52px] rounded-bl-[52px] relative" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-whit">
                        {urls.map((item, index) => (
                            <li key={index} className="relative">
                                <Link
                                    href={item.url}
                                    onClick={() => handleClick(item.name)}
                                    className={`block py-2 px-3 transition-all duration-400 ${
                                        activeItem === item.name
                                            ? `${styles.urlTextActive} bg-white rounded-[25px]`
                                            : `${styles.urlText} hover:text-black`
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
