import React from "react";
import ParkolayLogo from "../../assets/images/logo/parkolay_logo.svg";
import Captcha from "../../assets/images/captcha.svg";
import Facebook from "../../assets/images/facebook.svg";
import YouTube from "../../assets/images/youTube.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import { HeadFC, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const footerSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Parkolay, Parking Solutions",
  description: "Space-saving, efficient car parking solution by parkolay",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#383E42] text-white pt-12 2xl:mt-28 xl:mt-24 md:mt-16 mt-12 w-full">
      <div className="mx-auto block">
        <div className="max-w-[1920px] w-full md:px-10 px-6 xl:px-20  grid md:grid-cols-3 grid-cols-1 md:justify-items-stretch justify-items-start xl:gap-8 md:gap-4 gap-8 mx-auto">
          <div className="">
            <h2 className="font-semibold xl:text-2xl text-xl">
              Office Address
            </h2>
            <p className="font-semibold xl:text-xl text-lg xl:mt-4 mt-2 xl:mb-2 mb-1">
              HEADQUARTER & FACTORY
            </p>
            <p className="font-normal text-sm">
              Merkez Mah. Sardunya Cad. No:8,
              <br />
              77600 Taşköprü, Yalova
            </p>
          </div>

          <div className="flex justify-center md:items-center items-start xl:gap-5 gap-3 flex-col">
            <StaticImage
              src="../../assets/images/logo/parkolay_logo.svg"
              alt="Parkolay Logo"
              className="md:mx-auto max-w-[240px] w-full"
            />
            <p className="font-semibold xl:text-2xl text-xl">
              Get started to up your business
            </p>
            <div className="flex items-center justify-center">
              <StaticImage
                src="../../assets/images/captcha.svg"
                alt="parkolay captcha"
                className="w-16 h-16 md:hidden lg:block block"
                width={64}
                height={64}
              />
              <div className="max-w-[320px] w-full flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none bg-transparent w-full"
                />
                <button className="px-4 py-2 bg-[#05B6C7] text-white rounded-r-lg font-normal text-base w-20">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="text-left md:ml-auto ml-0">
            <h2 className="font-semibold xl:text-2xl text-xl xl:mb-5 mb-3">
              Contact Information
            </h2>
            <p className="text-sm font-normal">Email: info@otomatik.com.tr</p>
            <p className="text-sm font-normal">Phone: +90 (850) 333 36 67</p>
            <p className="text-sm font-normal">Fax: +90 (226) 353 27 74</p>
            <div className="flex justify-start items-center gap-2 md:mt-8 mt-6">
              <Link to="https://www.facebook.com/otomatikotopark" className="">
                <StaticImage
                  src="../../assets/images/facebook.svg"
                  alt="parkolay facebook link"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  placeholder="blurred"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                />
              </Link>
              <Link to="https://www.youtube.com/user/otomatikotopark" className="">
                <StaticImage
                  src="../../assets/images/youTube.svg"
                  alt="parkolay youtube link"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  placeholder="blurred"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                />
              </Link>
              <Link to="https://www.instagram.com/parkolay_otomatik_otopark/" className="">
                <StaticImage
                  src="../../assets/images/instagram.svg"
                  alt="parkolay instagram link"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  placeholder="blurred"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                />
              </Link>
              <Link to="https://www.instagram.com/parkolay_otomatik_otopark/" className="">
                <StaticImage
                  src="../../assets/images/twitter.svg"
                  alt="parkolay twitter link"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  placeholder="blurred"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                />
              </Link>
              <Link to="https://www.linkedin.com/company/parkolay/" className="">
                <StaticImage
                  src="../../assets/images/linkedin.svg"
                  alt="parkolay linkedin link"
                  className="w-8 h-8"
                  width={32}
                  height={32}
                  placeholder="blurred"
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 text-center text-sm text-white">
          <div className="md:px-10 px-6 xl:px-20 flex justify-between items-center py-4 md:flex-row flex-col max-w-[1920px] w-full mx-auto">
            <p>
              &copy; 2024.{" "}
              <Link to="#" className="text-[#05B6C7]">
                Parkolay Company Inc.
              </Link>{" "}
              All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="#" className="text-[#05B6C7]">
                Privacy & Policy
              </Link>
              <span>|</span>
              <Link to="#" className="text-[#05B6C7]">
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="h-2 w-full bg-[#05B6C7]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Head: HeadFC = () => (
  <>
    <title>Car Lift Systems | Parkolay</title>
    <meta name="description" content="Space-saving, efficient car parking solution by parkolay" />
    <script type="application/ld+json">
      {JSON.stringify(footerSchema)}
    </script>
  </>
);
