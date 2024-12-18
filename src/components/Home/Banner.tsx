import * as React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import autoParking from "../../assets/videos/auto_parking.mp4";
import carParking from "../../assets/videos/car_parking.mp4";
import clientSays from "../../assets/videos/client_says.mp4";
import "./banner.css";

const Banner: React.FC = () => {
  const videos: string[] = [carParking, autoParking, clientSays];
  const swiperRef = React.useRef<any>(null);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    const slides = swiperInstance.slides;

    slides.forEach((slide: any, index: number) => {
      const video = slide.querySelector("video");
      if (video) {
        if (index === swiperInstance.activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <div className="hero-section relative div-overlay text-white text-center 2xl:max-w-[1920px] min-[1920px]:max-w-full min-h-[300px] max-h-[980px] w-full mx-auto">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
        className="video-swiper"
      >
        {videos?.map((video, index) => (
          <SwiperSlide key={index} className="video-slide w-full banner-slides">
            <video
              className="w-full object-cover aspect-video min-h-[300px] max-h-[980px]"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-full">
        <div className="md:px-10 px-6 xl:px-20">
          <div className="text-white font-semibold md:text-xl text-base flex justify-center items-center xl:gap-5 gap-3">
            <p className="border border-white rounded-full lg:px-6 px-3 lg:py-2 py-[6px] hover:bg-[#05B6C7] hover:border-[#05B6C7]">
              Adaptive
            </p>
            <p className="border border-white rounded-full lg:px-6 px-4 py-2 hover:bg-[#05B6C7] hover:border-[#05B6C7]">
              Creative
            </p>
            <p className="border border-white rounded-full lg:px-6 px-4 py-2 hover:bg-[#05B6C7] hover:border-[#05B6C7]">
              Reliable
            </p>
          </div>
          <h1 className="xl:text-[56px] md:text-[40px] text-2xl font-semibold my-3 md:my-6 xl:my-16">
            BETTER PARKING EXPERIENCE
          </h1>
          <p className="text-lg md:text-2xl font-normal">
            Peak your park comfort with user-friendly design and software...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
