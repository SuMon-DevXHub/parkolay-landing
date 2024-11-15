import * as React from "react";
import CarMoves from "../../assets/videos/car_moves.mp4";
import ClientSays from "../../assets/videos/client_says.mp4";
const OurClientSection: React.FC = () => {
  return (
    <div className="xl:mt-28 mt-16 overflow-hidden">
        <div className="relative text-white mx-auto block">
          <div className="absolute left-24 xl:left-[calc(10%+1vw)] top-1/2 -translate-y-1/2 z-10 w-full max-w-[1920px]">
            <div>
              <p className="text-lg md:text-2xl font-normal">What __</p>
              <h1 className="xl:text-5xl md:text-3xl text-2xl font-semibold mt-3 mb-6">
                OUR CLIENT SAYS...
              </h1>
              <p className="text-lg md:text-2xl font-normal">Parkolay</p>
              <button className="rounded-md flex justify-center items-center gap-2 bg-[#05B6C7] xl:mt-24 mt-8 xl:py-4 py-3 px-7">
                <span className="xl:text-lg text-base">
                  View full Testimonials
                </span>
                {">"}
              </button>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <video className="h-full w-full object-cover" autoPlay muted loop>
              <source src={ClientSays} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full pt-20">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src={CarMoves} type="video/mp4" />
          </video>
        </div>
      </div>
  );
};

export default OurClientSection;
