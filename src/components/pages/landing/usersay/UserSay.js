import React from 'react'

const UserSay = () => {
    return (
        <div className="bg-[#098B46] py-[100px] px-4 relative ">



            {/* <div className="bg-[#098B46] py-[100px] px-4 relative"> */}
                {/* <img src="/bg_dots.svg" alt="userSay_bg" className="absolute bottom-0 left-0 w-full h-full object-cover opacity-10" /> */}
                <div className="max-w-[1500px] mx-auto text-center">
                    {/* Section Heading */}
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">
                        <span className="text-white">What Our </span>
                        <span className="text-white font-extrabold">Users Say</span>
                    </h2>
                    {/* Testimonials */}
                    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial Card */}
                        <div className="bg-white rounded-md shadow-md p-6 border border-green-600 relative">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/user_profileImg.png"
                                    alt="User"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-green-700 text-xl font-semibold text-left">Ritika M.</h3>
                                    <p className="text-gray-600 text-sm">Stemcell Technologies</p>
                                    <div className="text-green-600 text-sm mt-1 text-left">
                                        ★★★☆☆ <span className="text-gray-500">(3/5)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed">
                                "Super quick delivery and super friendly service. I scheduled my
                                groceries in the morning and they arrived right on time!"
                            </p>
                        </div>
                        {/* Duplicate Testimonial Card (Same content as screenshot) */}
                        <div className="bg-white rounded-md shadow-md p-6 border border-green-600 relative">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/user_profileImg.png"
                                    alt="User"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-green-700 text-xl font-semibold text-left">Ritika M.</h3>
                                    <p className="text-gray-600 text-sm">Stemcell Technologies</p>
                                    <div className="text-green-600 text-sm mt-1 text-left">
                                        ★★★☆☆ <span className="text-gray-500">(3/5)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed">
                                "Super quick delivery and super friendly service. I scheduled my
                                groceries in the morning and they arrived right on time!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            )
}

            export default UserSay