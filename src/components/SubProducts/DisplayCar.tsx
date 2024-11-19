import React, { useRef, useState } from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import carParking from "../../assets/videos/car_pallet.mp4";
import playButton from "../../assets/images/play.svg";
import pauseButton from "../../assets/images/pause_video.svg";

const displayCarSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Car Lift System",
  description: "Space-saving car lift system for efficient garage floor access",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const DisplayCar: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playTheVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="text-white text-center relative xl:mt-28 mt-12">
      <div className="bg-black overflow-hidden relative">
        <video
          className="h-full w-full object-cover"
          autoPlay
          src={carParking}
          ref={videoRef}
          muted
          loop
          preload="auto"
          aria-label="Car lift system demonstration video"
          role="presentation"
        />
        <button
          id="videoControl"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all duration-300 z-10"
          onClick={playTheVideo}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
            {
                isPlaying ? (<StaticImage
                    src="../../assets/images/pause_video.svg"
                    alt={isPlaying ? "Pause video" : "Play video"}
                    width={40}
                    height={40}
                  />): (<StaticImage
                    src="../../assets/images/play.svg"
                    alt={isPlaying ? "Pause video" : "Play video"} 
                    width={40}
                    height={40}
                  />)
            }
          
        </button>
      </div>
    </div>
  );
};

export default DisplayCar;

export const Head: HeadFC = () => (
  <>
    <title>Car Lift Systems | Parkolay</title>
    <meta name="description" content="Space-saving car lift system for efficient garage floor access" />
    <script type="application/ld+json">
      {JSON.stringify(displayCarSchema)}
    </script>
  </>
);