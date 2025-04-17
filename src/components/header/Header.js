'use client'
import React, { useState } from 'react'
import styles from '../main.module.css'
import Link from 'next/link'
import { HeaderLinks } from '../../dynamicData'

const Header = () => {
    const [activeItem, setActiveItem] = useState('Home');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (item) => {
        setActiveItem(item);
        setMobileMenuOpen(false); // Close mobile menu after click
    };

    return (
        <nav className="bg-white border-gray-200 pt-8">
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse sm:px-[50px] px-4">
                    <img src="/logo.svg" alt="Logo" />
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:block gogreentheme py-[23px] px-[50px] rounded-tl-[52px] rounded-bl-[52px] relative">
                    <ul className="font-medium flex space-x-8">
                        {HeaderLinks.map((item, index) => (
                            <li key={index}>
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden px-4 pt-4 pb-6 bg-white absolute z-10 w-full h-full">
                    <ul className="flex flex-col space-y-2">
                        {HeaderLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    onClick={() => handleClick(item.name)}
                                    className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                                        activeItem === item.name
                                            ? `${styles.urlTextActive} bg-gray-200 text-black`
                                            : `${styles.urlText} hover:bg-gray-100 !text-black`
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Header
