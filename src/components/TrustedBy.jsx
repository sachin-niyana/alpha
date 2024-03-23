import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div>
      <div className="container max-w-[1140px] mx-auto px-3 overflow-x-hidden">
        <div className="flex flex-col border-e-[1px] pt-[55px] pb-[68px] border-rich-black">
          <h2 className="font-aptos text-[24px] uppercase text-[#2B2B2B] font-bold">
            Trusted by:
          </h2>
          <Marquee speed={100} className="mt-[28px] gap-[4px]">
            <Image
              src="/assets/images/trusted/svg/grid-beyond.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/schneider.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/origin.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/fti.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/omnicom.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="mx-8 cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/group-plc.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
            <Image
              src="/assets/images/trusted/svg/engie.svg"
              width={153.02}
              height={77.37}
              alt="logo"
              className="cursor-pointer"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
