import * as React from "react";
import comfort from "../../../assets/images/logo/comfort.svg";
import design from "../../../assets/images/logo/design.svg";
import performance from "../../../assets/images/logo/performance.svg";
import safety from "../../../assets/images/logo/saftey.svg";
import ApproachCard from "./ApproachCard";

interface Approach {
  image: string;
  title: string;
  description: string;
}

const Approach: React.FC = () => {
  const approaches: Approach[] = [
    {
      image: safety,
      title: "Safety",
      description: `The safety measures beyond the standards. Designed not for
              economic productivity, but also for the best user experience.
              Designed not for economic productivity, but also for the best user
              experience. Designed not for economic productivity, but also for
              the best user experience `,
    },
    {
      image: comfort,
      title: "Comfort",
      description: `Designed not for economic productivity, but also for the best user
              experience. Designed not for economic productivity, but also for
              the best user experience. Designed not for economic productivity,
              but also for the best user experience. Designed not for economic
              productivity, but also for the best user experience,`,
    },
    {
      image: performance,
      title: "Performance",
      description: `Standard systems with increased power for reasonable operating
              times. Designed not for economic productivity, but also for the
              best user experience. Designed not for economic productivity, but
              also for the best user experience. Designed not for economic
              productivity, but also for the best user experience,`,
    },
    {
      image: design,
      title: "Design Flexibility",
      description: `Very modular components. Designed not for economic productivity,
              but also for the best user experience. Designed not for economic
              productivity, but also for the best user experience. Designed not
              for economic productivity, but also for the best user experience.
              Designed not for economic productivity, but also for the best user
              experience,`,
    },
  ];

  return (
    <div className="overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="xl:px-20 md:px-10 px-6 w-full block mx-auto">
        <h2 className="text-[#05B6C7] xl:text-5xl lg:text-3xl text-2xl text-center font-semibold">
          OUR APPROACH
        </h2>
        <p className="font-medium xl:text-2xl text-lg text-center mt-5 mb-10 max-w-[1140px] w-full block mx-auto">
          We consider each project as a pertnership and we act as expert
          advisers to produce customized parking sollutions in challenging areas
          of our customers.
        </p>

        <div className="xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4 xl:gap-5 text-center md:text-left xl:mt-10 mt-6">
          {approaches.map((approach, index) => (
            <ApproachCard approach={approach} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
