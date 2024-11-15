import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";

interface Approach {
  image: string;
  title: string;
  description: string;
}

interface ApproachCardProps {
  approach: Approach;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ approach }) => {
  // State to store cursor position within the card
  const [position, setPosition] = useState({ x: "-50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="xl:w-[386px] xl:h-[286px] lg:w-[300px] lg:h-[286px] rounded-[10px] bg-[#FFF] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.45)] pl-[32px] pt-[32px] pr-[34px] relative overflow-hidden transition-shadow duration-300 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img
          src={approach?.image}
          alt="logo"
          className="w-[60px] h-[60px] mx-auto md:mx-0"
        />
        <h3
          className="pb-3 pt-[35px] text-[#53575A] font-inter font-semibold leading-normal 
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          {approach?.title}
        </h3>
        <p className="text-[#53575A] font-inter xl:text-lg text-sm line-clamp-3">
          {approach?.description}
        </p>
      </div>

      {/* Overlay with transition */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

      {/* "See More" button following cursor */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
          }}
          className="opacity-100 transition-opacity duration-300"
        >
          <Link
            to=""
            className="bg-[#05B6C7] text-white  py-1 px-1 text-sm rounded-lg text-nowrap"
          >
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ApproachCard;