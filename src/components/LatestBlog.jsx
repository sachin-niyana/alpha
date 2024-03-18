import React from "react";
import { HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const LatestBlog = () => {
  return (
    <div className="bg-[#eceae7] ">
      <div className="container max-w-[1152px] mx-auto px-3">
        <div className="sm:border-r-[1px]  lg:pt-[171px] py-[70px] lg:pb-[223px] flex  flex-col justify-center items-center lg:mr-8 lg:items-start border-[#2B2B2B]">
          <div className="flex items-center">
            <span>
              {" "}
              <HalfGradientCircle />{" "}
            </span>{" "}
            <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-normal text-rich-black font-inter">
              LATEST BLOG
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-[55px] justify-center items-center">
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center min-[992px]:justify-end  md:px-2 lg:px-0  min-[992px]:pr-[10px] lg:pr-[0px]">
              <div className="px-[13px]  pt-[13px] pb-[52px] group cursor-pointer border-[1px] border-[#2B2B2B] relative max-w-[365.73px] flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-[#2B2B2B] font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/business.png"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal">
                      Hipster ipsum tattooed brunch I'm baby. Shaman venmo
                      sartorial out celiac af beard sartorial.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0 min-[992px]:justify-start">
              <div className="px-[13px] mt-4 sm:mt-0 pt-[13px] pb-[52px] group cursor-pointer border-[1px] lg:border-l-[0px] max-w-[365.73px] lg:border-r-[0px] border-[#2B2B2B] relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-[#2B2B2B] font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/plan.png"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal">
                      Hipster ipsum tattooed brunch I'm baby. Shaman venmo
                      sartorial out celiac af beard sartorial.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0">
              <div className="px-[13px] mt-4 pt-[13px] pb-[52px] lg:mt-0 group cursor-pointer border-[1px] lg:border-r-[0px] max-w-[365.73px] border-[#2B2B2B] relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-[#2B2B2B] font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/brainstrom.png"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 min-[1000px]:left-0 min-[1030px]:left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal">
                      Hipster ipsum tattooed brunch I'm baby. Shaman venmo
                      sartorial out celiac af beard sartorial.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;