"use client";
import React, { useState } from "react";
import { HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-rich-black ">
      <div className="container max-w-[1152px] mx-auto px-3 border-e-[1px] border-rich-black">
        <div className="h-[79px] w-[1px] bg-light-white ms-12"></div>
        <div className="flex md:flex-row flex-col lg:gap-[90px] gap-10">
          <div className="flex flex-col">
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
              className={`${
                activeTab === 0
                  ? "bg-linear-gradient-btn text-white"
                  : "text-light-white hover:text-gray-700"
              } flex-1 py-[30px] px-7 border-[1px] focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(0)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${
                activeTab === 1
                  ? "bg-linear-gradient-btn blue-500 text-white"
                  : "text-light-white hover:text-gray-700"
              } flex-1 py-[30px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(1)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${
                activeTab === 2
                  ? "bg-linear-gradient-btn blue-500 text-white"
                  : "text-light-white hover:text-gray-700"
              } flex-1 py-[30px] px-7 border focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(2)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${
                activeTab === 3
                  ? "bg-linear-gradient-btn blue-500 text-white"
                  : "text-light-white hover:text-gray-700"
              } flex-1 py-[30px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(3)}
            >
              Unearth new opportunities
            </button>
            <button
              className={`${
                activeTab === 4
                  ? "bg-linear-gradient-btn blue-500 text-white"
                  : "text-light-white hover:text-gray-700"
              } flex-1 py-[30px] px-7 border-[1px] border-t-0 focus:outline-none font-inter font-semibold text-md`}
              onClick={() => setActiveTab(4)}
            >
              Unearth new opportunities
            </button>
            {/* Add more buttons for additional tabs */}
          </div>
          <div className="m-0">
            {activeTab === 0 && (
              <div className="flex flex-col">
                <p className="capitalize font-inter font-normal text-sm text-dark-gray max-w-[718px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <div className="lg:h-[400px] relative mt-[62px]">
                  <Image
                    className="lg:absolute lg:min-w-[874px] max-h-[500px]"
                    width={984}
                    height={500}
                    src="/assets/images/services/meting.png"
                    alt="meting"
                  />
                </div>
                <div className="max-w-[217px] max-h-[175px] px-11 bg-light-white"></div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <p className="capitalize text-dark-gray max-w-[700px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
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
