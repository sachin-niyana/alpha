import React from 'react'
import { HalfGradientCircle } from './common/Icon'
import Image from "next/image";

const LatestBlog = () => {
    return (
        <div className='bg-[#eceae7] pb-[200px]'>
            <div className='container pt-[171px] max-w-[1152px] mx-auto px-3 border-r-[1px] border-[#2B2B2B]'>
                <div className='flex items-center'><span> <HalfGradientCircle /> </span> <h2 className='uppercase text-2xl ml-[-24px] font-normal text-rich-black'>LATEST BLOG</h2></div>
                <div className='flex flex-wrap mt-[55px]'>
                    <div className='w-4/12'>
                        <div className='px-[13px] pt-[13px] pb-[52px] group border-[1px] border-[#2B2B2B] relative flex justify-center'>
                            <div className='relative'>
                                <p className='text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-[red] transition-all duration-300 ease-in-out bg-[#2B2B2B] absolute right-[5px] top-[5px]'>2/7/2024</p>
                                <Image
                                    src="/images/blogs/png/business.png"
                                    width={338.2}
                                    height={237.52}
                                    alt="business" />
                                <div className='bg-[#2B2B2B] absolute left-5 top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[290.47px] pr-[30px]'>
                                    <h3 className='font-semibold text-md text-light-white'>Esther Howard</h3>
                                    <p className='text-sm dark-gray font-normal'>Hipster ipsum tattooed brunch I'm baby. Shaman venmo sartorial out celiac af beard sartorial.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog