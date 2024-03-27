"use client";
import React, { useEffect, useState } from "react";
import { AlhpaName, HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const Services = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
  });

  // useEffect hook to increment counters over time until a maximum value is reached
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        counter1: Math.min(prevCounters.counter1 + 1, 37),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className="bg-rich-black border-b-[0.001px] border-light-gray relative max-w-[1440px] mx-auto"
      id="services"
    >
      <span>
        <Image
          className="absolute top-[25%] animate-pulse"
          width={170}
          height={545}
          src="/assets/images/services/webp/alpha-2.webp"
          alt="alpha-2"
        />
      </span>

      <div className="container relative max-w-[1164px] mx-auto lg:pb-[101px] sm:pb-16 pb-[50px] lg:px-4 px-3 border-e-[1px] border-rich-black">
        <div className="sm:h-[79px] h-[50px] w-[1px] bg-light-white lg:ms-12"></div>
        <div className="flex items-center">
          <span>
            <HalfGradientCircle />
          </span>
          <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-bold text-light-white font-aptos">
            Services
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col md:w-full w-[300px] justify-center mx-auto lg:mb-[101px] md:mb-12 mt-[53px]">
            <button
              className={`${
                activeTab === 0
                  ? "bg-linear-gradient-btn md:border-l-0 border-b-0 border-t-rich-black text-white "
                  : "text-dark-gray "
              } flex-1 py-[26px] lg:px-7 px-3 border-[1px] md:border-t-0 md:border-e-0 focus:outline-none font-inter font-normal xl:text-md lg:text-ssm text-sm`}
              onClick={() => setActiveTab(0)}
            >
              Lead Generation
            </button>
            <button
              className={`${
                activeTab === 1
                  ? "bg-linear-gradient-btn border-b-0 border-t-rich-black text-white "
                  : "text-dark-gray "
              } flex-1 py-[26px] lg:px-7 px-3 border-[1px] border-t-0 md:border-e-0 focus:outline-none font-inter font-normal xl:text-md lg:text-ssm text-sm`}
              onClick={() => setActiveTab(1)}
            >
              Strategic Marketing
            </button>
            <button
              className={`${
                activeTab === 2
                  ? "bg-linear-gradient-btn border-b-0 border-t-rich-black text-white "
                  : "text-dark-gray "
              } flex-1 py-[26px] lg:px-7 px-3 border-[1px] border-t-0 md:border-e-0 focus:outline-none font-inter font-normal xl:text-md lg:text-ssm text-sm`}
              onClick={() => setActiveTab(2)}
            >
              Demand Generation
            </button>
            <button
              className={`${
                activeTab === 3
                  ? "bg-linear-gradient-btn md:border-r-0 border-b-0 border-t-rich-black text-white "
                  : "text-dark-gray "
              } flex-1 py-[26px] lg:px-7 px-3 border-[1px] border-t-0 focus:outline-none font-inter font-normal xl:text-md lg:text-ssm text-sm`}
              onClick={() => setActiveTab(3)}
            >
              Target Profiling
            </button>
            {/* Add more buttons for additional tabs */}
          </div>
          <div className="m-0">
            {activeTab === 0 && (
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex flex-col min-[1440px]:pe-0 md:pe-5 md:my-0 my-8">
                  <h3 className="font-aptos font-bold xl:text-xxl lg:text-xl sm:text-llg text-lg md:text-start text-center text-light-white leading-[100%]">
                    Lead Generation
                  </h3>
                  <h4 className="font-inter font-semibold md:text-start text-center lg:text-md md:text-sm sm:text-md text-sm lg:mt-[31px] mt-4 bg-gradient-to-t from-[#FF684D] to-[#FF5269] bg-clip-text text-transparent capitalize">
                    Accelerate sales for aspiring businesses
                  </h4>
                  <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center lg:mt-[17px] mt-3 md:mx-0 mx-auto max-w-[463px]">
                    Sourcing and developing relationship with target prospects
                    can be challenging and most importantly time consuming.
                    Enhance your sales teams productivity by filling their
                    calendars with high-quality, pre-qualified appointments.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    className="min-[1440px]:translate-x-[163px]"
                    width={660}
                    height={494}
                    src="/assets/images/services/webp/meting.webp"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb-[33px] p-2 z-10 absolute min-[1440px]:top-[82%] top-0 min-[1440px]:right-14 ">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray leading-[125%] max-w-[120px] text-center mx-auto pb-[21px]">
                      B2B Companies trust Alpha2
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex flex-col min-[1440px]:pe-0 md:pe-5 md:my-0 my-8">
                  <h3 className="font-aptos font-bold xl:text-xxl lg:text-xl sm:text-llg text-lg md:text-start text-center text-light-white leading-[100%]">
                    Strategic Marketing
                  </h3>
                  <h4 className="font-inter font-semibold md:text-start text-center lg:text-md md:text-sm sm:text-md text-sm lg:mt-[31px] mt-4 bg-gradient-to-t from-[#FF684D] to-[#FF5269] bg-clip-text text-transparent capitalize">
                    A new generation of growth agency
                  </h4>
                  <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center lg:mt-[17px] mt-3 md:mx-0 mx-auto max-w-[463px]">
                    Through a number of multi-focused outreach campaigns,we work
                    alongside our partners to develop conversion specific
                    content – Showcasing the companies strengths using
                    intelligent positioning & messaging whilst organically
                    generating new opportunities.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    className="min-[1440px]:translate-x-[163px]"
                    width={660}
                    height={494}
                    src="/assets/images/services/webp/strategic.webp"
                    alt="strategic"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb-[33px] p-2 z-10 absolute min-[1440px]:top-[82%] top-0 min-[1440px]:right-14 ">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray leading-[125%] max-w-[120px] text-center mx-auto pb-[21px]">
                      B2B Companies trust Alpha2
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex flex-col min-[1440px]:pe-0 md:pe-5 md:my-0 my-8">
                  <h3 className="font-aptos font-bold xl:text-xxl lg:text-xl sm:text-llg text-lg md:text-start text-center text-light-white leading-[100%]">
                    Demand Generation
                  </h3>
                  <h4 className="font-inter font-semibold md:text-start text-center max-w-[463px] lg:text-md md:text-sm sm:text-md text-sm lg:mt-[31px] mt-4 bg-gradient-to-t from-[#FF684D] to-[#FF5269] bg-clip-text text-transparent capitalize">
                    Aligned sales and marketing generating new business
                    opportunities
                  </h4>
                  <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center lg:mt-[17px] mt-3 md:mx-0 mx-auto max-w-[463px]">
                    Diligent demand generation and lead acquisition, resulting
                    in a steady flow of Marketing Qualified Leads (MQLs).
                  </p>
                </div>
                <div className="relative">
                  <Image
                    className="min-[1440px]:translate-x-[163px]"
                    width={660}
                    height={494}
                    src="/assets/images/services/webp/demand.webp"
                    alt="demand"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb-[33px] p-2 z-10 absolute min-[1440px]:top-[82%] top-0 min-[1440px]:right-14 ">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray leading-[125%] max-w-[120px] text-center mx-auto pb-[21px]">
                      B2B Companies trust Alpha2
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex flex-col min-[1440px]:pe-0 md:pe-5 md:my-0 my-8">
                  <h3 className="font-aptos font-bold xl:text-xxl lg:text-xl sm:text-llg text-lg md:text-start text-center text-light-white leading-[100%]">
                    Target Profiling
                  </h3>
                  <h4 className="font-inter font-semibold md:text-start text-center lg:text-md max-w-[463px] md:text-sm sm:text-md text-sm lg:mt-[31px] mt-4 bg-gradient-to-t from-[#FF684D] to-[#FF5269] bg-clip-text text-transparent capitalize">
                    Scale revenue growth from new and existing prospects
                  </h4>
                  <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center lg:mt-[17px] mt-3 md:mx-0 mx-auto max-w-[463px]">
                    Understanding your customer profile and target audience
                    enables Alpha² to analyse factors such as industry, company
                    size, demographics, geo-location and purchasing behaviour to
                    create an accurate ‘Ideal Customer Profile / or ICP.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    className="min-[1440px]:translate-x-[163px]"
                    width={660}
                    height={494}
                    src="/assets/images/services/webp/target.webp"
                    alt="target"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb-[33px] p-2 z-10 absolute min-[1440px]:top-[82%] top-0 min-[1440px]:right-14 ">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray leading-[125%] max-w-[120px] text-center mx-auto pb-[21px]">
                      B2B Companies trust Alpha2
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
