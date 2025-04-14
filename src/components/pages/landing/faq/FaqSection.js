"use client"
import React, { useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-green-600 text-white py-3 px-6 inline-block rounded-full mb-6">
            <p className="text-lg">Need help? We've got answers.</p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the most common questions customers ask about using the Go Green app. If you
            don't find what you're looking for, feel free to contact our support team directly in the app.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-green-100 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-green-50 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-left font-medium text-green-600">
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-medium text-green-600 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    activeIndex === index
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-4 bg-white border-t border-green-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              src="/faq-image.jpg"
              alt="Customer Service"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;