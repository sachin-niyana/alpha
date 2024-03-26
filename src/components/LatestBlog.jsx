import Image from "next/image";
import { HalfCircleVetor, HalfGradientCircle } from "./common/Icon";

const LatestBlog = () => {
  return (
    <div
      className="lg:mt-[-100px] md:mt-[-140px] mt-[-50px] relative overflow-hidden max-w-[1440px] mx-auto"
      id="latest"
    >
      <span className="absolute bottom-[10%] right-[4%] animate-pulse hidden md:block ">
        <Image
          src="/assets/images/blogs/svg/blog-arrow.svg"
          width={126}
          height={78}
          alt="blog-arrow"
        />
      </span>
      <span className="absolute top-[40%] left-[2%] animate-spin hidden md:block">
        <HalfCircleVetor />
      </span>
      <div className="container max-w-[1164px] mx-auto lg:px-4 px-3 overflow-x-hidden">
        <div className="xl:h-[148px] h-[70px] w-[1px] bg-rich-black absolute top-0 left-[7%] xl:left-[14%] hidden lg:block "></div>
        <div className="sm:border-r-[1px]  xl:pt-[171px] md:py-[70px] py-14 xl:pb-[223px] lg:items-start border-richbg-rich-black">
          <div className="flex items-center">
            <span>
              <HalfGradientCircle />
            </span>
            <h2 className="uppercase text-xl sm:text-2xl ml-[-24px] font-bold text-rich-black font-aptos">
              LATEST BLOG
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-[45px] justify-center items-center">
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center min-[992px]:justify-end  md:px-2 lg:px-0  min-[992px]:pr-[10px] lg:pr-[0px]">
              <div className="px-[13px]  pt-[13px] pb-[52px] group cursor-pointer border-[1px] border-richbg-rich-black relative max-w-[379px] w-full flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-rich-black font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/webp/business.webp"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-rich-black absolute transition-all duration-300 ease-out left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[303px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal max-w-[250px]">
                      Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                      sartorial out celiac af beard sartorial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0 min-[992px]:justify-start">
              <div className="px-[13px] mt-4 sm:mt-0 pt-[13px] pb-[52px] group cursor-pointer border-[1px] lg:border-l-[0px] max-w-[379px] w-full lg:border-r-[0px] border-richbg-rich-black relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-rich-black font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/webp/plan.webp"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-rich-black absolute transition-all duration-300 ease-out left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[303px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal max-w-[250px]">
                      Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                      sartorial out celiac af beard sartorial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0">
              <div className="px-[13px] mt-4 pt-[13px] pb-[52px] lg:mt-0 group cursor-pointer border-[1px] lg:border-r-[0px] max-w-[379px] w-full border-richbg-rich-black relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-btn transition-all duration-300 ease-in-out bg-rich-black font-inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src="/assets/images/blogs/webp/brainstrom.webp"
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-rich-black absolute transition-all duration-300 ease-out left-5 min-[1000px]:left-0 min-[1030px]:left-5 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[16px] max-w-[303px] pr-[30px]">
                    <h3 className="font-semibold text-md font-inter text-light-white">
                      Esther Howard
                    </h3>
                    <p className="text-sm text-dark-gray font-inter font-normal max-w-[250px]">
                      Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                      sartorial out celiac af beard sartorial.
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
