import * as React from "react";
import CarMoves from "../../assets/videos/car_moves.mp4";
import ClientSays from "../../assets/videos/client_says.mp4";
import rightArrow from "../../assets/images/right_arrow.svg";

const OurClientSection: React.FC = () => {
  return (
    <div className="xl:mt-28 mt-16 overflow-hidden">
      <div className="relative text-white mx-auto block max-h-[700px]">
        <div className="aspect-w-16 aspect-h-9 w-full max-h-[700px]">
          <video
            className="h-full w-full object-cover max-h-[700px]"
            autoPlay
            muted
            loop
          >
            <source src={ClientSays} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-24 lg:left-[140px]">
          <p className="text-lg md:text-2xl font-normal">What __</p>
          <h1 className="xl:text-5xl md:text-3xl text-2xl font-semibold xl:mt-3 mt-2 xl:mb-6 mb-4">
            OUR CLIENT SAYS...
          </h1>
          <p className="text-lg md:text-2xl font-normal">Parkolay</p>
          <button className="rounded-md flex justify-center items-center gap-2 bg-[#05B6C7] xl:mt-24 lg:mt-16 mt-8 xl:py-4 py-3 px-7">
            <span className="xl:text-lg text-xs md:text-base">
              View full Testimonials
            </span>
            <img src={rightArrow} alt="parkolay arrow" />
          </button>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full pt-10 md:pt-[120px] max-h-[1080px]">
        <video
          className="h-full w-full object-cover max-h-[1080px]"
          autoPlay
          muted
          loop
        >
          <source src={CarMoves} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default OurClientSection;
