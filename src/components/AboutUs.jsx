import React from "react";
import { CircleLineVector, HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative" id="about-us">
      <span className="absolute bottom-[10%] left-[1.5%] hidden md:block animate-pulse">
        <CircleLineVector />
      </span>
      <div className="container max-w-[1080px] mx-auto px-3" id="ABOUT-US">
        <div className="flex lg:items-end md:items-center md:flex-row justify-between flex-col border-e-[1px] border-rich-black me-0 lg:border-t-[0px] border-t-[1px] ">
          <div className="flex flex-col">
            <div className="bg-rich-black md:h-[121px] sm:h-[100px] h-[60px] w-[1px] lg:ms-8"></div>
            <div className="flex xl:translate-x-[-3%] items-center md:mt-8 md:justify-start justify-center">
              <span>
                <HalfGradientCircle />
              </span>
              <h2 className="uppercase md:text-xxl lg:text-2xl text-xl lg:ml-[-22px] md:ml-[-18px] ml-[-14px] font-bold font-inter text-rich-black">
                ABOUT US
              </h2>
            </div>
            <p className="font-inter md:text-start text-gray text-center font-normal text-sm max-w-[680px] capitalize ">
              For nearly a decade, Alpha² Partners have accelerated revenue
              generation for global En-Tech (Energy Technology) businesses,
              disruptive PR agencies, and many more.
            </p>
            <p className="font-inter mt-6 md:text-start text-gray text-center font-normal text-sm max-w-[680px] capitalize ">
              With over 23+ years senior experience from global PR agencies and
              new business development within energy providers & technology
              companies, we possess the market knowledge and insights to
              generate new business opportunities within complex markets,
              delivering exceptional results for our clients. Since inception,
              we have been able to define the equation to deliver success, the
              Alpha² way – consistently outperforming expectations and
              committing to our clients’ success.
            </p>
            <button className=" bg-dark-black border-[1px] border-transparent hover:border-dark-black hover:bg-[#ECEAE7] hover:text-dark-black mt-6 transition-all ease-in-out duration-300 py-[15px] px-[34px] font-inter font-semibold text-sm leading-[150%] text-light-white max-w-[181px] md:mx-0 mx-auto">
              CONTACT US
            </button>
            <div className="relative z-2 bg-[#ECEAE7] flex min-[480px]:flex-row flex-col justify-center md:mt-[54px] mt-7  md:me-5 lg:me-[45px]">
              <div className="pt-12 pb-[18px] px-[19px] border-[1px] border-rich-black max-w-[360px] min-[480px]:mx-0 mx-auto">
                <Image
                  className="lg:mx-0 mx-auto"
                  width={58}
                  height={58}
                  src="/assets/images/about-us/svg/unearth.svg"
                  alt="unearth"
                />
                <h4 className="font-inter lg:mx-0 mx-auto font-semibold lg:text-start text-center lg:text-md md:text-sm text-md max-w-[143px] mt-[15px] leading-[125%] capitalize">
                  Unearth new opportunities
                </h4>
                <p className="font-inter lg:mx-0 mx-auto text-gray font-normal lg:text-start text-center text-sm max-w-[294px] capitalize mt-[13px]">
                  Speak to ideal clients that are outside your network. Discover
                  new markets and grow your business
                </p>
              </div>
              <div className="pt-12 pb-[18px] px-[19px] border-[1px] min-[480px]:border-s-0 min-[480px]:border-t-[1px] border-t-0 border-rich-black max-w-[360px] min-[480px]:mx-0 mx-auto">
                <Image
                  className="lg:mx-0 mx-auto"
                  width={58}
                  height={58}
                  src="/assets/images/about-us/svg/leave.svg"
                  alt="unearth"
                />
                <h4 className="font-inter lg:mx-0 mx-auto font-semibold lg:text-start text-center lg:text-md md:text-sm text-md max-w-[217px] mt-[15px] leading-[125%] capitalize">
                  Leave prospecting to the experts
                </h4>
                <p className="font-inter text-gray lg:mx-0 mx-auto lg:text-start text-center font-normal text-sm max-w-[294px] capitalize mt-[13px]">
                  Our fully managed outreach service delivers a reliable flow of
                  leads, reducing your cost per sale
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="max-w-[333px] md:max-h-[652px] max-h-[500px] object-cover md:mt-0 mt-7"
              width={333}
              height={652}
              src="/assets/images/about-us/learn.png"
              alt="learn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
