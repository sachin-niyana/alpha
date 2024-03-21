import React from "react";
import { AlhpaName, HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const GetAnswer = () => {
  return (
    <div className="bg-[#2B2B2B] relative" id="contect">
      <span className="absolute top-9 animate-pulse">
        {" "}
        <AlhpaName />{" "}
      </span>
      <div className="container max-w-[1152px] mx-auto px-3 pt-10 md:pt-[96px]">
        <div className="h-[80px] w-[1px] bg-[#F6F6F6] absolute top-0 left-[7%] xl:left-[14%] hidden md:block "></div>
        <div className=" flex flex-wrap justify-center pb-16 sm:pb-[115px]">
          <div className="sm:w-[60%]">
            <div className="flex items-center">
              <span>
                {" "}
                <HalfGradientCircle />{" "}
              </span>{" "}
              <h2 className="uppercase text-[32px] md:text-[40px] lg:text-[50px] xl:text-2xl ml-[-24px] font-normal text-light-white font-inter">
                GOT A QUESTION?
              </h2>
            </div>
            <h2 className="uppercase text-[30px] md:text-[40px] xl:text-2xl xl:ml-5 font-normal text-light-white font-inter">
              GET YOUR{" "}
              <span className="bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
                ANSWER
              </span>
            </h2>
            <form action="" className=" mt-6 md:mt-[48px]">
              <input
                type="text"
                className="w-[90%] lg:max-w-[592.96px]  border-[1px] text-white outline-0 border-[#b9b9b9] bg-transparent mb-6 md:mb-[48px] pt-3 sm:pt-[18px] pl-3 sm:pl-[25px] pb-[60px] sm:pb-[82px] lg:pr-[360px]"
                placeholder="Type your Question here.."
              />
              <button className="uppercase text-sm font-semibold hover:text-black hover:border-[#b9b9b9] border-transparent border-[1px] transition-all duration-300 ease-in-out text-light-white px-[38px] py-[15px] bg-linear-gradient-btn font-inter">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="sm:w-[40%] flex justify-center">
            <Image
              src="/assets/images/getanswer/hands.png"
              width={376.77}
              height={605.27}
              alt="hands"
              className="lg:mt-12 lg:h-[605px] w-[220px] lg:w-[376px] hidden sm:block absolute z-10"
            />
            <Image
              src="/assets/images/getanswer/hands.png"
              width={376.77}
              height={605.27}
              alt="hands"
              className="lg:mt-12 lg:h-[605px] w-[220px] mt-6 lg:w-[376px] sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAnswer;
