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
        counter1: Math.min(prevCounters.counter1 + 1, 500),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-rich-black  relative" id="services">
      <span className="absolute top-[11%] animate-pulse"> <AlhpaName /> </span>

      <div className="container max-w-[1152px] mx-auto px-3 border-e-[1px] border-rich-black">
        <div className="h-[79px] w-[1px] bg-light-white lg:ms-12"></div>
        <div className="flex md:flex-row flex-col lg:gap-[90px] gap-10 mt-4">
          <div className="flex flex-col max-w-[330px] justify-center mx-auto lg:mb-[101px] md:mb-12">
            <div className="flex items-center">
              <span>
                {" "}
                <HalfGradientCircle />{" "}
              </span>{" "}
              <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-normal text-light-white font-inter">
                Services
              </h2>
            </div>
            <button
              className={`${activeTab === 0
                ? "bg-linear-gradient-btn border-x-0 border-b-0 border-t-rich-black text-white mt-[50px]"
                : "text-dark-gray mt-[50px]"
                } flex-1 py-[26px] px-7 border-[1px] focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(0)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${activeTab === 1
                ? "bg-linear-gradient-btn border-x-0 border-b-0 border-t-rich-black text-white"
                : "text-dark-gray"
                } flex-1 py-[26px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(1)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${activeTab === 2
                ? "bg-linear-gradient-btn border-x-0 border-b-0 border-t-rich-black text-white"
                : "text-dark-gray"
                } flex-1 py-[26px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(2)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${activeTab === 3
                ? "bg-linear-gradient-btn border-x-0 border-b-0 border-t-rich-black text-white"
                : "text-dark-gray"
                } flex-1 py-[26px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(3)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${activeTab === 4
                ? "bg-linear-gradient-btn border-x-0 border-b-0 border-t-rich-black text-white"
                : "text-dark-gray"
                } flex-1 py-[26px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(4)}
            >
              Unearth new opportunities
            </button>
            {/* Add more buttons for additional tabs */}
          </div>
          <div className="m-0">
            {activeTab === 0 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center md:mx-0 mx-auto max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="min-[1440px]:h-[400px] relative mt-[62px]">
                  <Image
                    className="min-[1440px]:absolute min-[1440px]:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb[33px] p-2 z-10 absolute min-[1440px]:top-[100%] top-0 min-[1440px]:right-9 right-0">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {" "}
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto pb-[21px]">
                      Years Of Experience
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center md:mx-0 mx-auto max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="min-[1440px]:h-[400px] relative mt-[62px]">
                  <Image
                    className="min-[1440px]:absolute min-[1440px]:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb[33px] p-2 z-10 absolute min-[1440px]:top-[100%] top-0 min-[1440px]:right-9 right-0">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {" "}
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto pb-[21px]">
                      Years Of Experience
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center md:mx-0 mx-auto max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="min-[1440px]:h-[400px] relative mt-[62px]">
                  <Image
                    className="min-[1440px]:absolute min-[1440px]:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb[33px] p-2 z-10 absolute min-[1440px]:top-[100%] top-0 min-[1440px]:right-9 right-0">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {" "}
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto pb-[21px]">
                      Years Of Experience
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center md:mx-0 mx-auto max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="min-[1440px]:h-[400px] relative mt-[62px]">
                  <Image
                    className="min-[1440px]:absolute min-[1440px]:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb[33px] p-2 z-10 absolute min-[1440px]:top-[100%] top-0 min-[1440px]:right-9 right-0">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {" "}
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto pb-[21px]">
                      Years Of Experience
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray md:text-start text-center md:mx-0 mx-auto max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="min-[1440px]:h-[400px] relative mt-[62px]">
                  <Image
                    className="min-[1440px]:absolute min-[1440px]:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                  <div className=" bg-light-gray lg:px-8 lg:pt-[22px] lg:pb[33px] p-2 z-10 absolute min-[1440px]:top-[100%] top-0 min-[1440px]:right-9 right-0">
                    <h3 className="text-center font-inter font-normal lg:text-xxl md:text-xl text-lg text-rich-black leading-[120%]">
                      {" "}
                      {counters.counter1}+
                    </h3>
                    <p className="font-inter font-normal text-sm text-gray max-w-[80px] text-center mx-auto pb-[21px]">
                      Years Of Experience
                    </p>
                    <div className="lg:w-[153px] sm:w-[110px] w-[100px] h-[1px] bg-rich-black mx-auto"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Add content for additional tabs */}
        </div>
      </div>
    </div>
  );
};

export default Services;
