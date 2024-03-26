import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  TwiterIcon,
} from "./common/Icon";
import Link from "next/link";
function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <div className="bg-footer-bg bg-cover bg-no-repeat bg-center mt-[-2px] relative overflow-hidden max-w-[1440px] mx-auto">
      <Image
        className="absolute lg:bottom-[11%] bottom-[15%]"
        src="/assets/images/footer/webp/footer-img.webp"
        width={221}
        height={335}
        alt="footer-img"
      />
      <div className="container max-w-[1115px] xl:pl-[6px] mx-auto lg:px-4 px-3">
        <div className=" relative">
          <div className="flex flex-wrap pt-[60px] md:pt-[130px] lg:pt-[167px] justify-center">
            <div className="w-full sm:w-[50%] md:w-4/12  flex justify-center md:justify-start">
              <ul className="flex justify-center flex-col items-center">
                <li className="font-aptos text-[24px] font-bold text-[#F6F6F6] mb-[10px]">
                  CONTACT US
                </li>
                <li className="mb-2">
                  {" "}
                  <Link
                    href="mailto:info@alpha2.agency+44"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] underline"
                  >
                    info@alpha2.agency+44
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="tel:+44 (0) 203 3049950"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] "
                  >
                    {" "}
                    +44 (0) 203 3049950
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[50%] mt-4 md:mt-0 md:w-4/12  flex items-center justify-center">
              <ul className="flex justify-center flex-col items-center">
                <li className="font-aptos text-[24px] font-bold text-[#F6F6F6] mb-[10px]">
                  US
                </li>
                <li className="mb-2">
                  {" "}
                  <Link
                    href="/"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] "
                  >
                    13785 Research Boulevard Austin
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] "
                  >
                    {" "}
                    TX 78750
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[50%] mt-4 md:mt-0 md:w-4/12  flex justify-center md:justify-end md:items-end">
              <ul className="flex justify-center flex-col items-center">
                <li className="font-aptos text-[24px] font-bold text-[#F6F6F6] mb-[10px]">
                  MADRID
                </li>
                <li className="mb-2">
                  {" "}
                  <Link
                    href="/"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] "
                  >
                    Calle de las Huertas Madrid
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal  font-inter text-[#b7b7b7] "
                  >
                    {" "}
                    28012
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-[20px] mb-3 mt-7 lg:gap-[84px] lg:mt-[119px] lg:mb-[25px] mx-auto">
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="transition-all ease-out duration-300"
              >
                {" "}
                <LinkdinIcon />{" "}
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="transition-all ease-out duration-300"
              >
                {" "}
                <FacebookIcon />{" "}
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                className="transition-all ease-out duration-300"
              >
                {" "}
                <TwiterIcon />{" "}
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="transition-all ease-out duration-300"
              >
                {" "}
                <InstagramIcon />{" "}
              </Link>
            </div>
          </div>
          <p className="pt-[19px] pb-[14px] text-sm font-normal text-bombay font-inter text-center border-t-[1px] border-[#BBBBBB]">
            Alpha² Partners© {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
