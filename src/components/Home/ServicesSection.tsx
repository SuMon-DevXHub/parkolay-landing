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
      description: `Designed not for economic productivity, but also for the best
                  user experience.Designed not for economic productivity, but
                  also for the best user experience. Designed not for economic
                  productivity, but also for the best user experience.Designed
                  not for economic productivity, but also for the best user
                  experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best
                  user experience.Designed not for economic productivity, but
                  also for the best user experience. Designed not for economic
                  productivity, but also for the best user experience.Designed
                  not for economic productivity, but also for the best user
                  experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best
                  user experience.Designed not for economic productivity, but
                  also for the best user experience. Designed not for economic
                  productivity, but also for the best user experience.Designed
                  not for economic productivity, but also for the best user
                  experience,`,
    },
    {
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best
                  user experience.Designed not for economic productivity, but
                  also for the best user experience. Designed not for economic
                  productivity, but also for the best user experience.Designed
                  not for economic productivity, but also for the best user
                  experience,`,
    },
  ];

  return (
    <div className="overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full block">
        <div className="flex lg:flex-row flex-col w-full md:justify-between justify-center">
          <div className="lg:w-[33%]">
            <p className="text-[#383E42] lg:text-left text-center font-inter text-6xl font-semibold leading-normal lg:mt-4 mt-0">
              Services
            </p>
          </div>
          <div className="w-[1px] lg:h-[540px] bg-[#000] "></div>
          <div className="lg:w-[67%]">
            <div className="grid md:grid-cols-2 grid-cols-1">
              {services.map((service, index) => (
                <div key={index} className="lg:px-5 lg:py-10 p-3">
                  <h3 className="text-[#383E42] font-inter  xl:text-2xl text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-[#383E42] font-inter xl:text-xl text-base font-normal xl:mt-4 mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-end lg:mt-12 mt-8">
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
