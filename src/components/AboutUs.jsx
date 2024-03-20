import React from "react";
import { HalfGradientCircle } from "./common/Icon";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container max-w-[1152px] mx-auto px-3">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="bg-rich-black h-[121px] w-[1px] md:ms-12"></div>
          <div className="flex items-center mt-8">
            <span>
              {" "}
              <HalfGradientCircle />{" "}
            </span>{" "}
            <h2 className="uppercase text-xl sm:text-2xl ml-[-22px] font-normal font-inter text-rich-black">
              ABOUT US
            </h2>
          </div>
          <div className="md:ps-12">
            <p className="font-inter font-normal text-sm max-w-[709px] capitalize">
              Hipster ipsum tattooed brunch I'm baby. Shaman venmo sartorial out
              celiac af beard sartorial. Trade shabby cleanse actually chic
              franzen freegan. Dsa shabby pack etsy mumblecore lyft letterpress
              church-key. Pinterest dreamcatcher asymmetrical vibecession vegan
              neutra bun vexillologist. Chips vape you diy locavore dreamcatcher
              mood edison kombucha. Kogi retro chambray bird on. Organic
              farm-to-table iceland knausgaard heirloom.
            </p>
            <button className="bg-dark-black hover:scale-105 mt-6 transition-all ease-in-out duration-300 py-[15px] px-[38px] font-inter font-semibold text-sm leading-[150%] text-light-white">
              CONTACT US
            </button>
          </div>
          <div className="flex justify-center">
            <div className="pt-12 pb-["></div>
          </div>
        </div>
        <Image
          width={333}
          height={652}
          src="/assets/images/about-us/learn.png"
          alt="learn"
        />
      </div>
    </div>
  );
};

export default AboutUs;
