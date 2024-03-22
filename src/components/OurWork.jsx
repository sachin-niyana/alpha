import React from "react";
import Image from "next/image";
import {
  CirclesVector,
  DoubleTringalVector,
  HalfGradientCircle,
} from "./common/Icon";

const OurWork = () => {
  return (
    <div className="relative" id="our-work">
      <div className="absolute bottom-[45px] left-[35px] hidden md:block">
        <DoubleTringalVector />
      </div>
      <span className="absolute top-[10%] right-[6%] hidden md:block">
        <CirclesVector />
      </span>
      <div className="container max-w-[1152px] mx-auto px-3">
        <div className=" h-[60px] xl:h-[229.3px] w-[1px] bg-[#2B2B2B] absolute top-0 left-[7%] xl:left-[14%] hidden md:block"></div>
        <div className="sm:border-r-[1px] lg:mr-9 lg:items-start border-rich-black">
          <div className="flex flex-wrap justify-center pt-[60px] lg:pt-[100px] xl:pt-[244px]">
            <div className="lg:w-[70%] xl:w-[60%]">
              <div className="flex items-center">
                <span>
                  <HalfGradientCircle />
                </span>
                <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-normal text-rich-black font-inter">
                  OUR WORK
                </h2>
              </div>
              <div className="flex flex-wrap mt-10 sm:mt-[67px] justify-center items-center">
                <div className="sm:w-[50%] md:w-[43%] flex justify-end items-end">
                  <div className="border-rich-black border-[1px] xl:border-r-[0px] px-[14px] pt-[41px]  max-w-[284px]  md:max-w-[284.12px] pb-[51px] relative">
                    <h4 className="text-[40px] font-normal text-rich-black font-inter absolute bg-[#ECEAE7] top-[-15%] left-[10%]">
                      01
                    </h4>
                    <h3 className="font-semibold font-inter text-rich-black text-md mb-[13px] capitalize">
                      Live Results
                    </h3>
                    <p className="text-sm font-normal font-inter text-[#656463] capitalize">
                      Speak to ideal clients that are outside your network.
                      Discover new markets and grow your
                    </p>
                  </div>
                </div>
                <div className="sm:w-[50%] md:w-[57%] flex sm:justify-center sm:items-center xl:justify-start xl:items-start">
                  <div className="border-rich-black border-[1px] sm:border-t-[1px] px-[14px] pt-[41px]  max-w-[284px]  md:max-w-[284.12px] pb-[51px] relative">
                    <h4 className="text-[40px] font-normal text-rich-black font-inter absolute bg-[#ECEAE7] top-[-15%] left-[10%]">
                      02
                    </h4>
                    <h3 className="font-semibold font-inter text-rich-black text-md mb-[13px] capitalize">
                      ENGIE Impact
                    </h3>
                    <p className="text-sm font-normal font-inter text-[#656463] capitalize">
                      Speak to ideal clients that are outside your network.
                      Discover new markets and grow your
                    </p>
                  </div>
                </div>
                <div className="sm:w-[50%] md:w-[43%] flex justify-end items-end">
                  <div className="border-rich-black border-[1px]  border-t-[0px] xl:border-r-[0px] lg:border-t-[0px] px-[14px] pt-[41px] max-w-[284px]   md:max-w-[284.12px] pb-[51px] relative">
                    <h4 className="text-[40px] font-normal text-rich-black font-inter absolute bg-[#ECEAE7] top-[-15%] left-[10%]">
                      03
                    </h4>
                    <h3 className="font-semibold font-inter text-rich-black text-md mb-[13px] capitalize">
                      GridBeyond
                    </h3>
                    <p className="text-sm font-normal font-inter text-[#656463] capitalize">
                      Speak to ideal clients that are outside your network.
                      Discover new markets and grow your
                    </p>
                  </div>
                </div>
                <div className="sm:w-[50%] md:w-[57%] flex sm:justify-center sm:items-center xl:justify-start xl:items-start">
                  <div className="border-rich-black border-[1px]  border-t-[0px] lg:border-t-[0px] px-[14px] pt-[41px] max-w-[284px]   md:max-w-[284.12px] pb-[51px] relative">
                    <h4 className="text-[40px] font-normal text-rich-black font-inter absolute bg-[#ECEAE7] top-[-15%] left-[10%]">
                      04
                    </h4>
                    <h3 className="font-semibold font-inter text-rich-black text-md mb-[13px] capitalize">
                      eEnergy Management
                    </h3>
                    <p className="text-sm font-normal font-inter text-[#656463] capitalize">
                      Speak to ideal clients that are outside your network.
                      Discover new markets and grow your
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] xl:w-[40%]">
              <Image
                src="/assets/images/our-works/graph.png"
                width={459.45}
                height={550.02}
                alt="graph"
                className="mt-10 md:mt-20 lg:mt-[150px] xl:mt-20 mb-20 lg:mb-[133px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
