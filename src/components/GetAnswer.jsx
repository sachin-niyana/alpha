import React from "react";
import { HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const GetAnswer = () => {
  return (
    <div className="bg-[#2B2B2B]">
      <div className="container max-w-[1152px] mx-auto px-3 pt-10 md:pt-[96px]">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-7/12">
            <div className="flex items-center justify-center lg:justify-start">
              <span>
                {" "}
                <HalfGradientCircle />{" "}
              </span>{" "}
              <h2 className="uppercase text-[32px] sm:text-2xl ml-[-24px] font-normal text-light-white font-inter">
                GOT A QUESTION?
              </h2>
            </div>
            <h2 className="uppercase text-[26px] text-center lg:text-start sm:text-2xl xl:ml-5 font-normal text-light-white font-inter">
              GET YOUR <span className="text-red-500">ANSWER</span>
            </h2>
            <form action="" className=" mt-6 md:mt-[48px] ">
              <input
                type="text"
                className="w-[90%] lg:max-w-[592.96px]  border-[1px] border-[#b9b9b9] bg-transparent mb-6 md:mb-[48px] pt-[18px] pl-[25px] pb-[60px] sm:pb-[82px] lg:pr-[360px]"
                placeholder="Type your Question here.."
              />
              <button className="uppercase text-sm font-semibold text-light-white px-[38.5px] py-[15.5px] bg-linear-gradient-btn font-inter">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="lg:w-5/12 flex justify-center">
            <Image
              src="/assets/images/getanswer/hands.png"
              width={376.77}
              height={605.27}
              alt="hands"
              className="w-[250px] mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAnswer;
