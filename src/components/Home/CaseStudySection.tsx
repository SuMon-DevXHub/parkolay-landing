import * as React from "react";
import caseStudy from "../../assets/images/caseStudy.png";

const CaseStudySection: React.FC = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full block">
        <div className="flex justify-between items-start gap-12 md:flex-row flex-col-reverse">
          <div className="md:w-[48%] w-full">
            <h2 className="text-[#05B6C7] xl:text-[56px] md:text-4xl text-3xl w-full font-semibold xl:pb-5 pb-4">
              CASE STUDY
            </h2>
            <p className="xl:text-xl text-lg font-semibold mt-5">
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
