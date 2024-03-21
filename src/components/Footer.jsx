import React from 'react'
import Image from "next/image";
import { BigBackgroungA, FacebookIcon, InstagramIcon, LinkdinIcon } from './common/Icon';

const Footer = () => {
    return (
        <div className='bg-[#1E1E1E] mt-[-1px] relative overflow-hidden'>
            <div className='absolute top-[-56%] sm:top-[-57%] md:top-[-55%] lg:top-[-35.4%] animate-pulse'> <BigBackgroungA /> </div>
            <div className="container max-w-[1152px] xl:pl-[6px] mx-auto px-3">
                <div className='lg:mr-8 relative'>
                    <div className='flex flex-wrap pb-[23px] pt-[90px] md:pt-[130px] lg:pt-[229px]'>
                        <div className='w-full md:w-4/12 flex justify-center md:justify-start'>
                            <Image
                                src="/assets/images/footer/footer-logo.png"
                                width={207.03}
                                height={63}
                                alt="logo" className='cursor-pointer mb-4 md:mb-0' />
                        </div>
                        <div className='w-full md:w-4/12 flex items-center justify-center'>
                            <ul className='flex items-center gap-[17px] mb-4 md:mb-0'>
                                <li><a href="#about" className='font-normal text-sm font-inter transition-all duration-300 ease-in-out hover:text-white text-bombay'>About Us</a></li>
                                <li><a href="#work" className='font-normal text-sm font-inter transition-all duration-300 ease-in-out hover:text-white text-bombay'>Our Work</a></li>
                                <li><a href="#services" className='font-normal text-sm font-inter transition-all duration-300 ease-in-out hover:text-white text-bombay'>Services</a></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-4/12 flex justify-center md:justify-end md:items-end'>
                            <div className='flex items-center gap-2 md:gap-[16px]'>
                                <a className='transition-all duration-300 ease-in-out hover:translate-y-[-6px]' href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect"><LinkdinIcon /> </a>
                                <a className='transition-all duration-300 ease-in-out hover:translate-y-[-6px]' href="https://www.facebook.com/"><FacebookIcon /> </a>
                                <a className='transition-all duration-300 ease-in-out hover:translate-y-[-6px]' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fstories%2Fhighlights%2F17859310559785705%2F"><InstagramIcon /> </a>
                            </div>
                        </div>
                    </div>
                    <p className='pt-[19px] pb-[14px] text-sm font-normal text-bombay font-inter text-center border-t-[1px] border-[#BBBBBB]'>@copyright2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer