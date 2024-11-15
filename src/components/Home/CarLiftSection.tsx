import * as React from "react";
import Racker from "../../assets/images/racker.png";
import YellowCar from "../../assets/images/yellowCar.png";
const CarLiftSection: React.FC = () => {
  return (
    <div className="xl:mt-28 md:mt-20 mt-12">
      <div className="flex justify-between items-end gap-2 xl:pr-20 md:pr-10 pr-6 overflow-hidden">
        <img
          src={YellowCar}
          alt="Parkolay Car"
          className="car w-1/3 xl:w-full max-w-[605px] object-contain"
        />
        <img
          src={Racker}
          alt="Parkolay Car Lifter"
          className="lift w-1/3 xl:w-full max-w-[364px] object-contain"
        />
      </div>
      <div className="xl:mt-24 mt-16 max-w-[1080px] w-full mx-auto text-center xl:px-20 md:px-10 px-6">
        <p className="font-bold text-lg xl:text-2xl text-[#53575A]">
          Since our establishment in 1998, our core offering has always been
          Automatic parking systems. Click to see our projects...
        </p>
      </div>
    </div>
  );
};

export default CarLiftSection;
