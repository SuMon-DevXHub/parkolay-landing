import * as React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carParking1 from "../../assets/videos/car_parking_white.mp4";
import carParking2 from "../../assets/videos/car_parking_white.mp4";
import carParking3 from "../../assets/videos/car_parking_white.mp4";
import carParking4 from "../../assets/videos/car_parking_white.mp4";
import carParking5 from "../../assets/videos/car_parking_white.mp4";
import carParking6 from "../../assets/videos/car_parking_white.mp4";

const IncreaseCapacity: React.FC = () => {
  const swiperRef = React.useRef<any>(null);
  const videoRefs = React.useRef<{ [key: number]: HTMLVideoElement | null }>(
    {}
  );

  const slides = [
    {
      video: carParking1,
      title: "Parkonfor 11",
      description: "2 Level puzzle system without pit",
    },
    {
      video: carParking2,
      title: "Parkonfor 11o",
      description: "2 Level puzzle system with pit",
    },
    {
      video: carParking3,
      title: "Parkonfor 111",
      description: "3 Level puzzle system with pit",
    },
    {
      video: carParking4,
      title: "Parkonfor 110 PT",
      description: "2 Level Pass-thru puzzle system with pit",
    },
    {
      video: carParking5,
      title: "Parkonfor 11",
      description: "2 Level puzzle system without pit",
    },
    {
      video: carParking6,
      title: "Parkonfor 111 PT",
      description: "3 Level Pass-thru puzzle system with pit",
    },
  ];

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      // Stop autoplay when hovering
      swiperRef.current?.autoplay.stop();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      // Resume autoplay when not hovering
      swiperRef.current?.autoplay.start();
    }
  };

  return (
    <section className="xl:mt-40 md:mt-20 mt-12 overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full">
        <h2 className="font-semibold xl:text-[44px] md:text-3xl text-2xl text-center">
          Increasing the capacity with stacking and adjoining the cars.
        </h2>
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="2xl:w-[325px] lg:w-[290px] w-[260px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.video}
                  className="w-full"
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <p className="text-[#05B6C7] font-semibold xl:text-3xl md:text-2xl text-xl mt-4 mb-2">
                  {slide.title}
                </p>
                <p className="font-semibold xl:text-2xl md:text-lg text-base">
                  {slide.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IncreaseCapacity;
