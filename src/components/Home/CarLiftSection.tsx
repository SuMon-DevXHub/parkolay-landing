import * as React from "react";
import carParking from "../../assets/videos/car_parking_white.mp4";

const CarLiftSection: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = React.useState(false);
  const lastScrollPosition = React.useRef(0);
  const lastTimeUpdate = React.useRef(0);
  const [videoHeight, setVideoHeight] = React.useState(0);

  const logVideoDimensions = () => {
    if (videoRef.current) {
      const height = videoRef.current.clientHeight;
      const naturalHeight = videoRef.current.videoHeight;
      const offsetHeight = videoRef.current.offsetHeight;
      const boundingHeight = videoRef.current.getBoundingClientRect().height;

      console.log("Video Dimensions:", {
        clientHeight: height,
        naturalHeight: naturalHeight,
        offsetHeight: offsetHeight,
        boundingHeight: boundingHeight,
      });

      setVideoHeight(height);
    }
  };

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    video.addEventListener("loadedmetadata", logVideoDimensions);

    video.addEventListener("loadeddata", logVideoDimensions);

    setTimeout(logVideoDimensions, 100);

    const handleVideoLoad = () => {
      const playbackConst = 1000;
      const extraPadding = 1.5 * playbackConst;
      container.style.height = `${
        Math.floor(video.duration) * playbackConst + extraPadding - 2000
      }px`;

      logVideoDimensions();
    };

    if (video.readyState >= 2) {
      handleVideoLoad();
    } else {
      video.addEventListener("loadeddata", handleVideoLoad);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === video) {
          logVideoDimensions();
        }
      }
    });

    resizeObserver.observe(video);

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const scrollPlay = () => {
      if (!video || !container) return;

      const playbackConst = 1000;
      const rect = container.getBoundingClientRect();
      const scrollPosition = -rect.top;

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const targetTime = Math.max(0, scrollPosition / playbackConst);
        const currentTime = video.currentTime;

        const now = performance.now();
        const deltaTime = (now - lastTimeUpdate.current) / 1000;
        lastTimeUpdate.current = now;

        const smoothFactor = Math.min(1, deltaTime * 15);

        if (video.readyState >= 2) {
          const newTime = lerp(
            currentTime,
            Math.min(targetTime, video.duration),
            smoothFactor
          );

          if (Math.abs(newTime - currentTime) > 0.001) {
            video.currentTime = newTime;
          }
        }
      }

      lastScrollPosition.current = scrollPosition;
      window.requestAnimationFrame(scrollPlay);
    };

    let animationFrame: number;
    if (typeof window !== "undefined") {
      animationFrame = window.requestAnimationFrame(scrollPlay);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.cancelAnimationFrame(animationFrame);
      }
      video.removeEventListener("loadeddata", handleVideoLoad);
      video.removeEventListener("loadedmetadata", logVideoDimensions);
      video.removeEventListener("loadeddata", logVideoDimensions);
      resizeObserver.disconnect();
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative pb-28">
      <div
        className={`sticky`}
        style={{
          top: `calc(50% - ${videoHeight / 2}px)`,
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          preload="auto"
          playsInline
          muted
          onLoad={logVideoDimensions}
        >
          <source src={carParking} type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-0 left-0 right-0 xl:mt-24 mt-16 max-w-[1080px] w-full mx-auto text-center xl:px-20 md:px-10 px-6">
        <p className="font-bold lg:text-xl 2xl:text-2xl text-base text-[#53575A] 2xl:leading-9 xl:leading-8 leading-7">
          Since our establishment in 1998, our core offering has always been
          Automatic parking systems. Click to see our projects...
        </p>
      </div>
    </div>
  );
};

export default CarLiftSection;
