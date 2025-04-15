import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#098B46] text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description Section */}
        <div className="max-w-sm">
          <div className="mb-4">
            <img src="/gogreenLogo_white.svg" alt="Go Green Logo" className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Delivering convenience, one tap at a time.</h2>
          <p className="text-white/90 text-sm">
            Go Green is your all-in-one delivery solution. From fast deliveries to pick & drop services, we make everyday tasks easier, faster, and more convenient — all through a single app.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="lg:ml-12">
          <h3 className="text-3xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-white/80 transition-colors">Home</a></li>
            <li><a className="hover:text-white/80 transition-colors">About Us</a></li>
            <li><a className="hover:text-white/80 transition-colors">Services</a></li>
            <li><a className="hover:text-white/80 transition-colors">Blogs</a></li>
            <li><a className="hover:text-white/80 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Download the Go Green app now.</h3>
          <div className="flex flex-col space-y-4">
            <a href="#" className="w-40">
              <img src="/googlePlayStoeImage.svg" alt="Get it on Google Play" className="w-full" />
            </a>
            <a href="#" className="w-40">
              <img src="/appStoreImage.svg" alt="Download on the App Store" className="w-full" />
            </a>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="">
              <img src="/footer_instagram.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="">
              <img src="/footer_Telegram.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="">
              <img src="/footer_twitter.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="">
              <img src="/footer_fb.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="">
              <img src="/foter_Linkden.svg" alt="Facebook" className="w-10 h-10" />
            </a>

          </div>
          <div> <p className="text-white/80 text-base mt-4">
            © Copyright 2023-24 | All Rights Reserved
          </p></div>
        </div>
      </div>

      {/* Copyright Section */}     

      {/* Decorative Leaf */}
      <div className="absolute right-[-12px] bottom-[-10px] opacity-20">
        <img src="/life_footer.svg" alt="" className="w-50 h-32" />
      </div>
    </footer>
  );
};

export default Footer;