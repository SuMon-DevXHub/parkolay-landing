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
    <div className="container mx-auto ">
      <h2 className="uppercase text-secondaryColor font-inter lg:text-[48px] md:text-[35px] text-[24px] font-semibold text-center">
        Our Approach
      </h2>
      <p className="text-center font-inter text-2xl font-semibold text-gray-700 pt-5">
        We consider each project as a partnership and we act as expert advisers
        to produce <br /> customized parking solutions in challenging areas of
        our customers.
      </p>

      {/* Approach Cards */}

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center md:text-left 2xl:gap-[32px] gap-5 mt-[30px] ">
        {approaches.map((approach, index) => (
          <ApproachCard approach={approach} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Approach;
