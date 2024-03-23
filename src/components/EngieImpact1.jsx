"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BoxNextArrow, BoxPrewArrow, HalfGradientCircle } from "./common/Icon";

const EngieImpact1 = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });

  // useEffect hook to increment counters over time until a maximum value is reached
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        counter1: Math.min(prevCounters.counter1 + 1, 12),
        counter2: Math.min(prevCounters.counter2 + 1, 273),
        counter3: Math.min(prevCounters.counter3 + 1, 94),
      }));
    }, 2);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute right-[30%] bottom-[-15%] min-[425px]:bottom-[-23%] md:bottom-[-20%] xl:right-0 transform rotate-90 xl:rotate-0 z-[10]"
      onClick={onClick}
    >
      <BoxNextArrow />
    </button>
  );
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute left-[30%] bottom-[-15%] min-[425px]:bottom-[-23%] md:bottom-[-20%]  xl:bottom-[-35%] xl:left-[87%] transform rotate-90 xl:rotate-0  z-[10] "
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
    <div className="">
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
                <Slider {...settings}>
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
                  <div className="max-w-[513.78px] bg-linear-gradient-btn px-[20px] lg:px-[28px] mt-[38px] py-[30px]  lg:py-[60px]">
                    <h3 className="text-[20px] font-inter font-semibold leading-[125%] text-[#F6F6F6] mb-[1px]">
                      Business Development (Director)
                    </h3>
                    <p className="text-sm font-inter font-normal leading-[156%] text-[#f9cbc4]">
                      Sustainable Resource Management (SRM)
                    </p>
                    <p className="text-[14px] lg:text-sm font-inter font-normal leading-[156%] mt-3  lg:mt-[22px] capitalize text-[#F6F6F6]">
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
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/engie-impact/wpp.png"
          width={1441.28}
          height={492.98}
          alt="wpp"
          className=" w-full h-[250px] md:h-[350px] lg:h-[492px] translate-y-[-20%] md:translate-y-[-40%] lg:translate-y-[-20%]"
        />
      </div>
    </div>
  );
};

export default EngieImpact1;
