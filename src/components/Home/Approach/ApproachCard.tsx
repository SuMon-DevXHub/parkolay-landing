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
      className="shadow-md p-5 border border-[#8c8c8c] rounded-xl relative overflow-hidden transition-shadow duration-300 group"
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
          className="mt-5 mb-[6px] font-semibold xl:text-2xl text-lg"
        >
          {approach?.title}
        </h3>
        <p className="xl:text-lg text-sm line-clamp-3 font-normal">
          {approach?.description}
        </p>
      </div>

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
            className="bg-[#05B6C7] text-white  py-2 px-5 text-sm rounded-lg text-nowrap"
          >
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ApproachCard;
