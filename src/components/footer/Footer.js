import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#098B46] text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description Section */}
        <div className="max-w-sm">
          <div className="mb-4">
            <img src="/logo.png" alt="Go Green Logo" className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Delivering convenience, one tap at a time.</h2>
          <p className="text-white/90">
            Go Green is your all-in-one delivery solution. From fast deliveries to pick & drop services, we make everyday tasks easier, faster, and more convenient — all through a single app.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="lg:ml-12">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a  className="hover:text-white/80 transition-colors">Home</a></li>
            <li><a  className="hover:text-white/80 transition-colors">About Us</a></li>
            <li><a  className="hover:text-white/80 transition-colors">Services</a></li>
            <li><a  className="hover:text-white/80 transition-colors">Blogs</a></li>
            <li><a  className="hover:text-white/80 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Download the Go Green app now.</h3>
          <div className="flex flex-col space-y-4">
            <a href="#" className="w-40">
              <img src="/google-play.png" alt="Get it on Google Play" className="w-full" />
            </a>
            <a href="#" className="w-40">
              <img src="/app-store.png" alt="Download on the App Store" className="w-full" />
            </a>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-12 pt-6 border-t border-white/20">
        <p className="text-center text-white/80 text-sm">
          © Copyright 2023-24 | All Rights Reserved
        </p>
      </div>

      {/* Decorative Leaf */}
      <div className="absolute right-0 bottom-0 opacity-20">
        <img src="/leaf.png" alt="" className="w-32 h-32" />
      </div>
    </footer>
  );
};

export default Footer;