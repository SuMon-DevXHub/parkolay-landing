import * as React from "react";

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
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col w-full md:justify-between justify-center">
        <div className="md:w-[33%]">
          <p className="text-[#383E42] text-center font-inter text-6xl font-semibold leading-normal">
            Services
          </p>
        </div>
        <div className="w-[1px] md:h-[546px] bg-[#000] "></div>
        <div className="md:w-[72%]">
          <div className="grid md:grid-cols-2 grid-cols-1">
            {services.map((service, index) => (
              <div key={index} className="pt-[100px] md:pl-[33px] pl-[5px]">
                <h3 className="text-[#383E42] font-inter  xl:text-2xl text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-[#383E42] font-inter xl:text-xl text-base font-normal xl:mt-4 mt-2 line-clamp-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-[66px]">
            <button className="bg-[#05B6C7] text-white font-inter text-xl font-semibold py-[17px] px-[20px] rounded-md">
              Learn More {" > "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
