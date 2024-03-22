"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { HalfCircel, Plane, RightArrow } from "./common/Icon";

const Header = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });

  // useEffect hook to increment counters over time until a maximum value is reached
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        counter1: Math.min(prevCounters.counter1 + 1, 12),
        counter2: Math.min(prevCounters.counter2 + 1, 273),
        counter3: Math.min(prevCounters.counter3 + 1, 94),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" max-w-[1440px] mx-auto relative">
      <div className="absolute md:block hidden right-0 bottom-[-8%] animate-pulse">
        <HalfCircel />
      </div>
      <Sidebar />
      <div className="container max-w-[1080px] mx-auto px-3 relative">
        <Image
          className="absolute right-[101%] top-[-2%] h-[537px]"
          width={170}
          height={604}
          src="/assets/images/header/alpha.png"
          alt="alpha"
        />
        <div className="flex lg:flex-row flex-col items-center lg:border-e-[1px] border-rich-black">
          <div className="flex flex-col w-full border-e-[1px] border-rich-black">
            <div className="flex sm:flex-row flex-col sm:justify-between justify-center">
              <div className="flex flex-col">
                <div className="bg-rich-black h-[43px] w-[1px] xl:ms-[13px]"></div>
                <p className="font-inter font-normal sm:text-start text-center text-md text-rich-black pt-[26px] tracking-widest uppercase">
                  B2B LEAD GENERATION
                </p>
                <h1 className="font-aptos relative sm:text-start text-center sm:mx-0 mx-auto font-bold lg:text-3xl md:text-2xl sm:text-xxl text-xl text-rich-black uppercase leading-[120%] !xl:max-w-[750px] sm:max-w-[470px] max-w-[300px] pt-[9px]">
                  Corporate INTRODUCTION agency
                  <span className="lg:w-[680px] z-[-1] md:w-[500px] sm:w-[380px] w-[300px] sm:mx-0 h-[17px] bg-linear-gradient-btn absolute block top-[57%]"></span>
                </h1>
                <div className="flex gap-2.5 items-center sm:mx-0 cursor-pointer mx-auto md:mt-[38px] mt-7 group max-w-[140px]">
                  <p className="font-inter font-thin text-md text-rich-black">
                    Our work
                  </p>
                  <div className="group-hover:translate-x-2 transition-all ease-in-out duration-300">
                    <RightArrow />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  className="sm:block hidden md:mt-[185px] sm:mt-28 mt-10"
                  width={180}
                  height={359}
                  src="/assets/images/header/study-2.png"
                  alt="study-2"
                />
                <Image
                  className="sm:hidden block md:mt-[185px] sm:mt-28 my-10"
                  width={180}
                  height={359}
                  src="/assets/images/header/study.png"
                  alt="study"
                />
              </div>
            </div>
            <div className="relative lg:h-[449px]">
              <Image
                className="lg:absolute lg:min-w-[1112px] right-0 w-full"
                width={1087}
                height={439}
                src="/assets/images/header/screen.png"
                alt="screen"
              />
            </div>
          </div>
          <div className="min-w-[153px]">
            <div className="absolute lg:top-[4%] top-[2%] md:right-[4%] sm:right-[6%] right-[8%] w-[37px] h-[74px] bg-linear-gradient-btn rounded-tr-full rounded-br-full rotate-[-30deg]"></div>
            <div className="flex lg:flex-col flex-row justify-center lg:pb-0">
              <div className="lg:border-b-[1px] lg:border-e-0 lg:w-full sm:w-[150px] w-[120px] border-e-[1px] border-rich-black lg:pb-[33px] lg:pt-[43px] lg:my-0 my-8">
                <h3 className="text-center font-inter font-normal md:text-xxl text-xl text-rich-black leading-[120%]">
                  {counters.counter1}
                  <span className="font-aptos font-light text-lg">x</span>
                </h3>
                <p className="font-inter font-normal text-sm text-gray max-w-[105px] text-center mx-auto">
                  Average ROI
                </p>
              </div>
              <div className="lg:border-b-[1px] lg:border-e-0 lg:w-full sm:w-[150px] w-[120px] border-e-[1px] border-rich-black lg:pb-[33px] lg:pt-[43px] lg:my-0 my-8">
                <h3 className="text-center font-inter font-normal md:text-xxl text-xl text-rich-black leading-[120%]">
                  {counters.counter2}+
                </h3>
                <p className="font-inter font-normal text-sm text-gray max-w-[105px] text-center mx-auto">
                  average SQLs Generated (monthly)
                </p>
              </div>
              <div className="lg:border-b-[1px] lg:w-full sm:w-[150px] w-[120px] border-rich-black lg:pb-[33px] lg:pt-[43px] lg:my-0 my-8">
                <h3 className="text-center font-inter font-normal md:text-xxl text-xl text-rich-black leading-[120%]">
                  {counters.counter3}%
                </h3>
                <p className="font-inter font-normal text-sm text-gray max-w-[105px] text-center mx-auto">
                  SQL To meeting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
