"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BoxNextArrow, BoxPrewArrow, HalfGradientCircle } from "./common/Icon";

const EngieImpact1 = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute right-[30%] bottom-[15%] min-[425px]:bottom-[16%] md:bottom-[30%]  xl:bottom-[40%] xl:right-[13.3%] transform rotate-90 xl:rotate-0 z-[10]"
      onClick={onClick}
    >
      <BoxNextArrow />
    </button>
  );
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute left-[30%] bottom-[15%] min-[425px]:bottom-[16%] md:bottom-[30%]  xl:bottom-[34%] xl:left-[82.5%] transform rotate-90 xl:rotate-0  z-[10] "
      onClick={onClick}
    >
      <BoxPrewArrow />
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
    <div className="relative">
      <Slider {...settings}>
        <div>
          <div className="bg-rich-black">
            <div className="container max-w-[1080px] mx-auto px-3 pt-[97px]">
              <div className="md:flex flex-wrap justify-center">
                <div className="md:w-[50%]">
                  <div className="flex items-center">
                    <span>
                      <HalfGradientCircle />
                    </span>
                    <h2 className="uppercase text-[32px] md:text-[40px] lg:text-[50px] xl:text-[64px] leading-[121%] ml-[-24px] font-bold text-[#F6F6F6] font-aptos">
                      ENGIE IMPACT
                    </h2>
                  </div>
                  <div className="flex items-center justify-between mt-10 lg:mt-[97px]  sm:pe-[18px]">
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        94%
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        Growth in Pipeline
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        369
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        SQLs
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        518%
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        ROI Esther Howard
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[50%]">
                  <div className="z-20 relative min-[575px]:ms-[20px] lg:ms-[50px]">
                    <div className="max-w-[513.78px] bg-linear-gradient-btn px-[20px] lg:px-[28px] mt-[38px] py-[30px]  lg:py-[60px]">
                      <h3 className="text-[20px] font-inter font-semibold leading-[125%] text-[#F6F6F6] mb-[1px]">
                        Business Development (Director)
                      </h3>
                      <p className="text-sm font-inter font-normal leading-[156%] text-[#f9cbc4]">
                        Sustainable Resource Management (SRM)
                      </p>
                      <p className="text-[14px] lg:text-sm  font-inter font-normal leading-[156%] mt-3  md:mt-[22px] capitalize text-[#F6F6F6]">
                        “Alpha² presented to us the exact solution required, agile
                        project delivery and complete transparency throughout each
                        reporting review. Given the volatile energy market, we
                        wanted to understand the specific challenges our
                        prospective clients were facing to help us find ways in
                        which to support them. We worked closely with Alpha² right
                        from the start and achieved great results that have helped
                        shape our sales strategy moving forwards.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/engie-impact/webp/wpp.webp"
              width={1441.28}
              height={492.98}
              alt="wpp"
              className=" w-full h-[250px] md:h-[350px] lg:h-[492px] translate-y-[-20%] md:translate-y-[-40%] lg:translate-y-[-20%]"
            />
          </div>
        </div>
        <div>
          <div className="bg-rich-black">
            <div className="container max-w-[1080px] mx-auto px-3 pt-[97px]">
              <div className="md:flex flex-wrap justify-center">
                <div className="md:w-[50%]">
                  <div className="flex items-center">
                    <span>
                      <HalfGradientCircle />
                    </span>
                    <h2 className="uppercase text-[32px] md:text-[40px] lg:text-[50px] xl:text-[64px] leading-[121%] ml-[-24px] font-bold text-[#F6F6F6] font-aptos">
                      GRIDBEYOND
                    </h2>
                  </div>
                  <div className="flex items-center justify-between mt-10 lg:mt-[97px]  sm:pe-[18px]">
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        4M+
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        Pipeline Generated
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        215
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        SQLs
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        500%
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        ROI Alan Fitzpatrick
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[50%]">
                  <div className="z-20 relative min-[575px]:ms-[20px] lg:ms-[50px]">
                    <div className="max-w-[513.78px] bg-linear-gradient-btn px-[20px] lg:px-[28px] mt-[38px] py-[120px]  lg:py-[140px]">
                      <h3 className="text-[20px] font-inter font-semibold leading-[125%] text-[#F6F6F6] mb-[1px]">
                        Chief Executive Officer
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter font-normal leading-[156%] mt-3  md:mt-[22px] capitalize text-[#F6F6F6]">
                        I would happily recommend Alpha² because of the quality of service they put in, specifically how much time they invest into understanding the products and services that we are selling.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/engie-impact/webp/grid-beyond.png"
              width={1441.28}
              height={492.98}
              alt="wpp"
              className=" w-full h-[250px] md:h-[350px] lg:h-[492px] translate-y-[-20%] md:translate-y-[-40%] lg:translate-y-[-20%]"
            />
          </div>
        </div>
        <div>
          <div className="bg-rich-black">
            <div className="container max-w-[1080px] mx-auto px-3 pt-[97px]">
              <div className="md:flex flex-wrap justify-center">
                <div className="md:w-[50%]">
                  <div className="flex items-center">
                    <span>
                      <HalfGradientCircle />
                    </span>
                    <h2 className="uppercase text-[32px] md:text-[40px] lg:text-[50px] xl:text-[64px] leading-[121%] ml-[-24px] font-bold text-[#F6F6F6] font-aptos">
                      WPP
                    </h2>
                  </div>
                  <div className="flex items-center justify-between mt-10 lg:mt-[97px]">
                    <div className="flex flex-col justify-start items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        £8.2 £M+
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-center text-[#B9B9B9] xl:px-6  leading-[125%] font-normal">
                        Estimated Pipeline Value Keith Bott
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center xl:mt-[-15px]">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        124
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9]  leading-[125%] font-normal">
                        SQLs
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-center">
                      <h3 className="font-aptos text-[28px] md:text-[34px] lg:text-[48px] font-light  text-[#F6F6F6]">
                        13%
                      </h3>
                      <p className="text-[14px] lg:text-sm  font-inter text-[#B9B9B9] text-center  leading-[125%] font-normal">
                        Closed Won Opportunities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[50%]">
                  <div className="z-20 relative min-[575px]:ms-[20px] lg:ms-[50px]">
                    <div className="max-w-[513.78px] bg-linear-gradient-btn px-[20px] lg:px-[28px] mt-[38px] py-[30px]  lg:py-[30px]">
                      <h3 className="text-[20px] font-inter font-semibold leading-[125%] text-[#F6F6F6] mb-[1px]">
                        Global VP Business
                      </h3>
                      <p className="text-sm font-inter font-normal leading-[156%] text-[#f9cbc4]">
                        Development & Sales Onboarding
                      </p>
                      <p className="text-[14px] lg:text-sm  font-inter font-normal leading-[156%] mt-3  md:mt-[22px] capitalize text-[#F6F6F6]">
                        “At WPP, we rely on Alpha²  as our go-tosales partner within EMEA & North America. Their attention to detail, effort and willingness to leave no stone nturned in order to delivery service of the highest quality enables Alpha²  to stand out in the lead generation marketplace. I’ve used a number of firms for outsourced sales & lead generation and Alpha²  is easily the top 1 or 2. The quality of appointments and the attention to detail is beyond what was initially expected . For a large company, as we are, to be very satisfied means they’ve worked hard to get it right.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/engie-impact/webp/engie.png"
              width={1441.28}
              height={492.98}
              alt="wpp"
              className=" w-full h-[250px] md:h-[350px] lg:h-[492px] translate-y-[-20%] md:translate-y-[-40%] lg:translate-y-[-20%]"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default EngieImpact1;
