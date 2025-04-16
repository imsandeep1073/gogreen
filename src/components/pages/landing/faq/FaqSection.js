"use client"
import React, { useState } from 'react';
import styles from '../../../main.module.css'
import Image from 'next/image'

const faqData = [
  {
    question: "How do I place an order?",
    answer: "Open the Go Green app, choose your service, add your items or details, select the time, and confirm your order."
  },
  {
    question: "What can I send using Pick & Drop?",
    answer: "You can send various items through our Pick & Drop service. The specific items allowed may vary by location and service type."
  },
  {
    question: "Is Go Green available in my city?",
    answer: "Go Green is expanding to various cities. Check the app or website for current service areas and availability."
  },
  {
    question: "How do I track my delivery?",
    answer: "You can track your delivery in real-time through the Go Green app's tracking feature."
  },
  {
    question: "Can I schedule an order for later?",
    answer: "Yes, you can schedule orders in advance through the app by selecting your preferred delivery time."
  },
  {
    question: "What if I face an issue with my order?",
    answer: "Our support team is available 24/7 through the app to help resolve any issues with your order."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set initial state to 0 to open first FAQ

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1500px] mx-auto bg-white py-12 px-10">
      <div className="">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#098B46]  lg:text-[63px] text-[45px]  leading-[90px] font-medium">Frequently Asked Questions</span>
            <br />
            <span className={`${styles.customerAppBgText} text-[#fff] bg-[#098B46] text-[25px] z-0   pr-5 leading-[50px] w-[35%] py-2 relative inline-block mt-2 font-normal`}>
              Need help? We've got answers.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mr-auto mt-6">
            Here are some of the most common questions customers ask about using the Go Green app. If you
            don't find what you're looking for, feel free to contact our support team directly in the app.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-green-100 rounded overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 bg-[#098B46] transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-left text-3xl text-white">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <span className={`text-2xl font-medium text-white transform transition-transform duration-300 rotate-90`}>
                      <img src="/faq_open.svg" alt="faq" />
                    </span>

                  ) : (
                    <span className={`text-2xl font-medium text-white transform transition-transform duration-300 rotate-90`}>
                      <img src="/faq_close.svg" alt="faq" />
                    </span>
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${activeIndex === index
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="p-4 bg-white border-t border-l border-r border-b border-[#098B46]">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="mx-auto">
            <Image
              src="/faq_sectionIMg.png"
              alt="Customer Service"
              className=" rounded-lg object-cover"
              width={500}
              height={485}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;