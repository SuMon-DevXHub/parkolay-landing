import * as React from "react";
import rightArrow from "../../assets/images/right_arrow.svg";

interface Service {
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best user experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best user experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best user experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best user experience,`,
    },
  ];

  return (
    <div className="overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full block">
        <div className="flex lg:flex-row flex-col w-full gap-y-[10px] lg:gap-y-0 md:justify-between justify-center">
          <div className="lg:w-[33%] pt-10 md:pt-[106px]">
            <p className="text-[#383E42] lg:text-left text-center font-inter text-xl md:text-5xl lg:text-6xl font-semibold leading-normal">
              Services
            </p>
          </div>

          <div className="w-full lg:w-[1px] h-0.5 lg:h-[546px] bg-[#000] "></div>

          <div className="lg:w-[67%] lg:pt-[103px] md:pt-10">
            <div className="grid md:grid-cols-2 grid-cols-1 md:pl-[33px] gap-x-8 gap-y-4 md:gap-y-12 lg:gap-y-[100px]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="space-y-[5px] md:space-y-4 text-center md:text-start"
                >
                  <h3 className="text-[#383E42] font-inter xl:text-2xl md:text-xl font-semibold leading-[29px]">
                    {service.title}
                  </h3>
                  <p className="text-[#383E42] font-inter xl:text-xl md:text-base text-sm leading-6 font-normal line-clamp-3">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-end lg:mt-[66px] mt-8">
              <button className="rounded-md flex justify-center items-center gap-2 bg-[#05B6C7] xl:py-4 py-3 px-7 xl:ml-auto text-white">
                <span className="xl:text-lg text-base">Learn More</span>
                <img src={rightArrow} alt="parkolay arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
