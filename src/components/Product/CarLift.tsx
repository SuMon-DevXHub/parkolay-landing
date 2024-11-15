import * as React from "react";
import carLift from "../../assets/images/car_lifts.svg";
const CarLift: React.FC = () => {
  return (
    <section className="xl:mt-28 mt-12 overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full">
        <div
          id="car-lifts-section"
          className="flex justify-between items-center gap-10 lg:flex-row flex-col-reverse h-full xl:h-screen"
        >
          <div className="lg:w-1/2 w-full" id="car-lifts-text">
            <h2 className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl w-full font-semibold xl:pb-5 pb-4 uppercase">
              Car Lifts
            </h2>
            <p className="uppercase xl:text-4xl md:text-3xl text-xl font-semibold xl:mt-3 mt-2 xl:mb-10 mb-6">
              Car lifts are space savers
            </p>
            <p className="xl:text-3xl md:text-2xl text-lg font-normal">
              The easiest way to access the garage floors. Car lifts are space
              savers compared to conventional elevator pit dimensions.
            </p>
            <button className="rounded-md bg-[#05B6C7] xl:py-4 py-3 px-7 text-white xl:mt-10 mt-6">
              <span className="xl:text-lg text-base">Learn More</span>
            </button>
          </div>
          <div className="lg:w-1/2 w-full" id="car-lifts-image">
            <img
              src={carLift}
              alt="Car lifts"
              className="block ml-auto md:mr-0 mr-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLift;
