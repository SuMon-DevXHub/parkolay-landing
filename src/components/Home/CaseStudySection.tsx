import * as React from "react";
import caseStudy from "../../assets/images/caseStudy.png";

const CaseStudySection: React.FC = () => {
  return (
    <div className="container mx-auto pb-[70px]">
      {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-12">
        <div>
          <h2 className="uppercase text-secondaryColor font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-normal">
            CASE STUDY
          </h2>
          <p className="font-inter text-[24px] max-w-[862px] font-semibold pt-5 text-justify">
            We consider each project as a partnership and we act as expert
            advisers to produce customized parking solutions in challenging
            areas of our customers. We consider each project as a partnership
            and we act as expert advisers to produce customized parking
            solutions in challenging areas of our customers. We consider each
            project as a partnership and we act as expert advisers to produce
            customized parking solutions in challenging areas of our customers.
            We consider each project as a partnership and we act as expert
            advisers to produce customized parking solutions in challenging
            areas of our customers.
          </p>
        </div>

        <div>
          <img
            src={caseStudy}
            alt="case-study-pic"
            className="object-cover border-[1px] border-solid border-black rounded-[77.3%]"
          />
        </div>
      </div> */}

      <div className="mx-auto  w-full">
        <div className="flex justify-between items-start gap-12 md:flex-row flex-col-reverse">
          <div className="md:w-[48%] w-full">
            <h2 className="text-[#05B6C7] xl:text-[56px] font-inter md:text-4xl text-3xl w-full font-semibold xl:pb-5 pb-4">
              CASE STUDY
            </h2>
            <p className="xl:text-2xl text-lg font-semibold pt-5 font-inter">
              We consider each project as a pertnership and we act as expert
              advisers to produce customized parking sollutions in challenging
              areas of our customers.We consider each project as a pertnership
              and we act as expert advisers to produce customized parking
              sollutions in challenging areas of our customers.We consider each
              project as a pertnership and we act as expert advisers to produce
              customized parking sollutions in challenging areas of our
              customers.We consider each project as a pertnership and we act as
              expert advisers to produce customized parking sollutions in
              challenging areas of our customers.
            </p>
          </div>
          <div className="md:w-[38%] w-full">
            <img
              src={caseStudy}
              alt="case-study-image"
              className="object-cover border-[1px] border-solid border-black rounded-[77.8%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
