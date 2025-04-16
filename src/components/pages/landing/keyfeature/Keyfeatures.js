import React from 'react'
import Image from 'next/image'


const Keyfeatures = ({ keyData }) => {
    return (
        <div>

            <h6 className="text-[#098B46]  font-medium text-[35px] mt-10">
                Key Features:
            </h6>
            <div className="flex flex-col md:flex-row gap-5 mt-4">
                <div className="w-full xl:w-12/12 lg:w-6/12 sm:w-6/12 border-2 border-[#098B46] rounded-lg p-3">
                    <div className="flex gap-4">
                        <div className="">
                            <div className="">
                                <Image src="/fastDelivery_icon.svg" alt="Check" width={80} height={80} />
                            </div>
                            <h3 className="text-[#363636] text-base font-semibold lg:text-[20px] mt-3">
                                {keyData ? keyData[0]?.title : ''}
                            </h3>
                            <p className="text-[#363636] text-base font-medium lg:text-sm mt-3 ">
                                {keyData ? keyData[0]?.description : ''}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-8/12 lg:w-6/12 sm:w-6/12 border-2 border-[#098B46] rounded-lg p-3">
                    <div className="flex gap-4">
                        <div className="">
                            <div className="">
                                <Image src="/schedule_icon.svg" alt="Check" width={45} height={45} />
                            </div>
                            <h3 className="text-[#363636] text-base font-semibold lg:text-[20px] mt-3">
                                {keyData ? keyData[1]?.title : ''}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-8/12 lg:w-6/12 sm:w-6/12 border-2 border-[#098B46] rounded-lg p-3">
                    <div className="flex gap-4">
                        <div className="">
                            <div className="">
                                <Image src="/pick_drop_icon.svg" alt="Check" width={42} height={42} />
                            </div>
                            <h3 className="text-[#363636] text-base font-semibold lg:text-[20px] mt-3">
                                {keyData ? keyData[2]?.title : ''}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-8/12 lg:w-6/12 sm:w-6/12 border-2 border-[#098B46] rounded-lg p-3">
                    <div className="flex gap-4">
                        <div className="">
                            <div className="pb-4">
                                <Image src="/all_product_icon.svg" alt="Check" width={20} height={20} />
                            </div>
                            <h3 className="text-[#363636] text-base font-semibold lg:text-[20px] mt-3">
                                {keyData ? keyData[3]?.title : ''}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-10 gap-3'>
               <Image src="/googlePlayStoeImage.svg" alt="Check" width={150} height={100} />
               <Image src="/appStoreImage.svg" alt="Check" width={150} height={100} />
            </div>

        </div>
    )
}

export default Keyfeatures