"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  DoubleCircleVetor,
  HalfGradientCircle,
  SliderNextArrow,
  SliderPrevArrow,
} from "./common/Icon";

const Quote = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button className="absolute top-[53%] right-[0%] z-[10]" onClick={onClick}>
      <SliderPrevArrow />
    </button>
  );
  const CustomNextArrow = ({ onClick }) => (
    <button className="absolute top-[53%] left-[0%]  z-[10] " onClick={onClick}>
      {" "}
      <SliderNextArrow />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <div className="bg-[#2B2B2B] pt-[96px] pb-[173px] relative overflow-hidden">
        <span className="absolute right-[3%] bottom-[8%] animate-ping">
          {" "}
          <DoubleCircleVetor />{" "}
        </span>
        <div className="container max-w-[1152px] mx-auto px-3">
          <div className="xl:mr-9">
            <div className="flex items-center">
              <span>
                {" "}
                <HalfGradientCircle />{" "}
              </span>{" "}
              <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-normal font-inter text-light-white">
                Quote
              </h2>
            </div>
            <Slider {...settings} className="mx-auto">
              <div className="flex items-center  justify-center mt-[29px] flex-col">
                <div className="flex justify-center ">
                  {" "}
                  <Image
                    src="/assets/images/quotes/esther-howard.png"
                    width={115.51}
                    height={106.91}
                    alt="esther-howard"
                  />
                </div>
                <h4 className="font-semibold text-md mt-[15px] bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text text-center font-inter">
                  Esther Howard
                </h4>
                <p className="text-sm font-normal text-center  text-dark-gray font-inter">
                  Marketing Coordinator
                </p>
                <div className="flex justify-center">
                  {" "}
                  <p className="text-sm font-normal mt-[15px]  font-inter text-dark-gray max-w-[560px] text-center">
                    Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                    sartorial out celiac af beard sartorial. Trade shabby
                    cleanse actually chic franzen freegan. Dsa shabby pack etsy
                    mumblecore lyft letterpress church-key. Pinterest
                    dreamcatcher{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center  justify-center mt-[29px] flex-col">
                <div className="flex justify-center ">
                  {" "}
                  <Image
                    src="/assets/images/quotes/esther-howard.png"
                    width={115.51}
                    height={106.91}
                    alt="esther-howard"
                  />
                </div>
                <h4 className="font-semibold text-md mt-[15px] bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text text-center font-inter">
                  Esther Howard
                </h4>
                <p className="text-sm font-normal text-center  text-dark-gray font-inter">
                  Marketing Coordinator
                </p>
                <div className="flex justify-center">
                  {" "}
                  <p className="text-sm font-normal mt-[15px]  font-inter text-dark-gray max-w-[560px] text-center">
                    Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                    sartorial out celiac af beard sartorial. Trade shabby
                    cleanse actually chic franzen freegan. Dsa shabby pack etsy
                    mumblecore lyft letterpress church-key. Pinterest
                    dreamcatcher{" "}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
