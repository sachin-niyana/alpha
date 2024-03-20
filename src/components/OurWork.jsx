import React from 'react'
import { HalfGradientCircle } from './common/Icon'

const OurWork = () => {
    return (
        <div>
            <div className='container max-w-[1152px] mx-auto px-3'>
                <div className="sm:border-r-[1px]  lg:pt-[171px] py-[70px] lg:pb-[223px]  lg:mr-9 lg:items-start border-[#2B2B2B]">
                    <div className='flex flex-wrap'>
                        <div className='w-[50%]'>
                            <div className="flex items-center">
                                <span>
                                    {" "}
                                    <HalfGradientCircle />{" "}
                                </span>{" "}
                                <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-normal text-rich-black font-inter">
                                    OUR WORK
                                </h2>
                            </div>
                            <div className='flex flex-wrap mt-[67px]'>
                                <div className='border-[#2b2b2b] border-[1px] px-[14px] pt-[41px] max-w-[284.12px] pb-[51px] relative'>
                                    <h4 className='text-[40px] font-normal text-rich-black font-inter absolute bg-[#ECEAE7] top-[-15%] left-[10%]'>01</h4>
                                    <h3 className='font-semibold font-inter text-rich-black text-md mb-[13px] capitalize'>Live Results</h3>
                                    <p className='text-sm font-normal font-inter text-[#656463] capitalize'>Speak to ideal clients that are outside your network. Discover new markets and grow your </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork