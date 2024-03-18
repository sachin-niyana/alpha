import React from "react";
import { HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const Quote = () => {
  return (
    <>
      <div className="bg-[#2B2B2B] pt-[96px] pb-[173px]">
        <div className="container max-w-[1152px] mx-auto px-3">
          <div className="flex items-center">
            <span>
              {" "}
              <HalfGradientCircle />{" "}
            </span>{" "}
            <h2 className="uppercase text-2xl ml-[-24px] font-normal font-inter text-light-white">
              Quote
            </h2>
          </div>

          <div className="flex items-center justify-center mt-[29px] flex-col">
            <Image
              src="/assets/images/quotes/png/esther-howard.png"
              width={115.51}
              height={106.91}
              alt="esther-howard"
            />
            <h4 className="font-semibold text-md mt-[15px] font-inter">
              Esther Howard
            </h4>
            <p className="text-sm font-normal  text-dark-gray font-inter">
              Marketing Coordinator
            </p>
            <p className="text-sm font-normal mt-[15px]  font-inter text-dark-gray max-w-[560px] text-center">
              Hipster ipsum tattooed brunch I'm baby. Shaman venmo sartorial out
              celiac af beard sartorial. Trade shabby cleanse actually chic
              franzen freegan. Dsa shabby pack etsy mumblecore lyft letterpress
              church-key. Pinterest dreamcatcher{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
