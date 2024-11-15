import * as React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  default as image1,
  default as image2,
  default as image3,
  default as image4,
  default as image5,
} from "../../assets/images/carparking.jpeg";

const GarageSection: React.FC = () => {
  const slides: string[] = [image1, image2, image3, image4, image5];
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} className="w-full max-h-[816px] pb-14" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default GarageSection;
