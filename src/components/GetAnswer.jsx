import React from "react";
import { AlhpaName2, HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const GetAnswer = () => {
  return (
    <div className="bg-rich-black relative max-w-[1440px] mx-auto" id="contect">
      <span className="absolute top-24 animate-pulse">
        <AlhpaName2 />
      </span>
      <div className="container relative max-w-[1115px] mx-auto lg:px-4 px-3 pt-10 md:pt-[96px]">
        <div className="h-[80px] w-[1px] bg-[#F6F6F6] absolute top-0 left-[7%] xl:left-[14%] hidden md:block "></div>
        <div className=" flex flex-wrap justify-center pb-16 sm:pb-[115px]">
          <div className="sm:w-[60%]">
            <div className="flex items-center">
              <span>
                <HalfGradientCircle />
              </span>
              <h2 className="uppercase text-llg md:text-[40px] lg:text-[50px] xl:text-2xl ml-[-24px] font-bold text-light-white font-aptos">
                GOT A QUESTION?
              </h2>
            </div>
            <h3 className="uppercase md:text-[40px] text-llg lg:text-[50px] xl:text-2xl ml-5 font-bold text-light-white font-aptos">
              GET YOUR
              <span className="bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
                {" "}
                ANSWER
              </span>
            </h3>
            <textarea
              className="md:mt-12 mt-6 bg-transparent max-w-[592px] border-[1px] outline-none text-white border-dark-gray w-full py-[18px] px-[25px]"
              cols="30"
              rows="4"
              placeholder="Type your Question here.."
            ></textarea>
            <div className="flex min-[460px]:flex-row flex-col gap-[21px] md:mt-12 sm:mt-10 mt-8">
              <button className="text-light-white min-[460px]:mx-0 border-transparent mx-auto px-[18px] lg:px-[38px] py-3 lg:py-[15px] bg-linear-gradient-btn border-[1px] text-sm font-inter font-semibold duration-300 hover:border-light-gray hover:text-rich-black">
                SEND MESSAGE
              </button>
              <button className="px-[18px] lg:px-[38px]text-sm font-inter font-semibold duration-300 min-[460px]:mx-0 mx-auto py-3 lg:py-[15px] bg-rich-black border-[1px] border-light-white text-light-gray hover:bg-gray ">
                BOOK A DISCOVERY CALL
              </button>
            </div>
          </div>
          <div className="sm:w-[40%] flex justify-end">
            <Image
              src="/assets/images/getanswer/webp/hands.webp"
              width={376.77}
              height={605.27}
              alt="hands"
              className="lg:h-[605px] w-[280px] lg:w-[376px] hidden md:block absolute z-10"
            />
            <Image
              src="/assets/images/getanswer/webp/hands.webp"
              width={376.77}
              height={605.27}
              alt="hands"
              className="lg:mt-12 lg:h-[605px] w-[220px] mt-6 lg:w-[376px] md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAnswer;
