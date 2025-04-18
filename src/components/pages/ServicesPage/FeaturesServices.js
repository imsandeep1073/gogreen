import React from 'react'

const FeaturesServices = () => {
    const features = [

        {
            image: "/orderEaslyImg.png",
            title: "Browse & Order Easily",
            description: "Shop from a wide selection of items with our intuitive interface"
        },
        {
            image: "/secure_paymentImg.png",
            title: "Secure & Cashless Payments",
            description: "Multiple payment options for hassle-free digital transactions"
        },
        {
            image: "/schedule_orderPage.png",
            title: "Schedule Orders",
            description: "Plan ahead by scheduling deliveries at your preferred time"
        },
        {
            image: "/instentOrderPage_img.png",
            title: "Instant Order Notifications",
            description: "Real-time updates on your order status and delivery"
        },
        {
            image: "/customer_support.png",
            title: "Reliable Customer Support",
            description: "24/7 assistance for all your queries and concerns"
        }

    ]
    return (
        <div className=' mb-2'>
            <div className={`max-w-[1920px] mx-auto md:py-[100px] py-[50px] md:px-[50px] px-4  mb-2`}>
                <h1 className={` sm:text-4xl md:text-5xl text-lg font-bold leading-tight`}>
                    <span className="text-[#098B46] outline-text xl:text-[118px] md:text-[75px] sm:text-[55px] text-[35px] md:leading-[90px] font-extrabold">Customer App</span>
                    <br />
                    <span className="text-[#098B46] md:text-[75px] text-[30px] font-extrabold xl:text-[85px] sm:leading-[80px]">Features</span>
                </h1>
                <div className='mt-10'>
                    <p className='text-xl'>Everything you need, right at your fingertips — designed to make ordering fast, easy, and seamless.</p>
                </div>
            </div>
            <div className="max-w-[1920px] mx-auto our_carouselCustom md:px-[80px] px-4">
                <div className="flex flex-wrap gap-18 justify-center">
                    {features.map((feature, index) => (
                        <div key={index} className="relative rounded-xl  shadow-lg">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full"
                            />

                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-white/30 backdrop-blur-md border border-white rounded-lg px-4 py-3 text-white">
                                    <p className="font-bold uppercase text-left text-lg md:text-[21px]">
                                        {feature.title}
                                    </p>
                                    <p className="text-sm mt-1 font-light uppercase">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesServices