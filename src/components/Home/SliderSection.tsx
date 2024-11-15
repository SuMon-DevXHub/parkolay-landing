import * as React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import autoParking from "../../assets/videos/auto_parking.mp4";
import carParking from "../../assets/videos/car_parking.mp4";

const SliderSection: React.FC = () => {
  const videos: string[] = [carParking, autoParking];
  return (
    <div className="hero-section text-white text-center relative">
      <div
        className="absolute z-10  w-full  min-h-[93%]
       bg-[#0004]"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-full">
          <div>
            <div className="text-white font-semibold md:text-xl text-base flex justify-center items-center xl:gap-5 gap-3">
              <p className="border border-white rounded-full w-[100px] md:w-[150px] py-2 hover:bg-[#05B6C7] hover:border-[#05B6C7]">
                Adaptive
              </p>
              <p className="border border-white rounded-full w-[100px] md:w-[150px] py-2 hover:bg-[#05B6C7] hover:border-[#05B6C7]">
                Creative
              </p>
              <p className="border border-white rounded-full w-[100px] md:w-[150px] py-2 hover:bg-[#05B6C7] hover:border-[#05B6C7]">
                Reliable
              </p>
            </div>
            <h1 className="xl:text-[56px] md:text-[40px] text-2xl font-semibold my-6 xl:my-16">
              BETTER PARKING EXPERIENCE
            </h1>
            <p className="text-lg md:text-2xl font-normal">
              Peak your park comfort with user-friendly design and software...
            </p>
          </div>
        </div>
      </div>

      <div className="swiper-container hero-page-swiper bg-black overflow-hidden">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          loop={true}
          modules={[EffectFade, Autoplay, Pagination]}
          className="mySwiper"
        >
          {videos?.map((video, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide min-h-screen  w-full"
            >
              <video className="h-screen w-full object-cover" autoPlay muted>
                <source src={video} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
