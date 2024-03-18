"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { RightArrow } from "./common/Icon";

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
        counter1: Math.min(prevCounters.counter1 + 1, 5),
        counter2: Math.min(prevCounters.counter2 + 1, 235),
        counter3: Math.min(prevCounters.counter3 + 1, 20),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container max-w-[1080px] mx-auto px-3 relative">
        <Image
          className="absolute right-[101%] top-[-10%] h-[604px]"
          width={170}
          height={604}
          src="/assets/images/header/alpha.png"
        />
        <div className="flex justify-between border-e-[1px] border-rich-black">
          <div className="m-0">
            <div className="bg-rich-black h-[43px] w-[1px] xl:ms-[13px]"></div>
            <p className="font-inter font-normal text-md text-rich-black pt-[26px] tracking-widest uppercase">
              B2B Sales Agency
            </p>
            <h1 className="font-inter font-normal text-3xl text-rich-black uppercase leading-[120%] max-w-[550px] pt-[9px]">
              Corporate marketing agency{" "}
            </h1>
            <div className="flex gap-2.5 items-center mt-10 group max-w-[140px]">
              <p className="font-inter font-thin text-md text-rich-black">
                Our work
              </p>
              <div className="group-hover:translate-x-2 transition-all ease-in-out duration-300">
                <RightArrow />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="border-e-[1px] border-rich-black h-full">
              <Image
                className="mt-[185px]"
                width={180}
                height={359}
                src="/assets/images/header/study.png"
              />
            </div>
            <div className="m-0">
              <div className="absolute top-[8%] right-[4%] w-[37px] h-[74px] bg-linear-gradient-btn rounded-tr-full rounded-br-full rotate-[-30deg]"></div>
              <div className="flex flex-col w-[153px] mt-[230px]">
                <div className="border-b-[1px] border-rich-black pb-[33px] pt-[43px]">
                  <h3 className="text-center font-inter font-normal text-xxl text-rich-black leading-[120%]">
                    {" "}
                    {counters.counter1}+
                  </h3>
                  <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto">
                    Years of experience
                  </p>
                </div>
                <div className="border-b-[1px] border-rich-black pb-[33px] pt-[43px]">
                  <h3 className="text-center font-inter font-normal text-xxl text-rich-black leading-[120%]">
                    {" "}
                    {counters.counter2}+
                  </h3>
                  <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto">
                    Years of experience
                  </p>
                </div>
                <div className="border-b-[1px] border-rich-black pb-[33px] pt-[43px]">
                  <h3 className="text-center font-inter font-normal text-xxl text-rich-black leading-[120%]">
                    {" "}
                    {counters.counter3}+
                  </h3>
                  <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto">
                    Years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
