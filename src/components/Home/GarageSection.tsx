import * as React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import garage_1 from "../../assets/images/garage_1.jpg";
import garage_2 from "../../assets/images/garage_2.jpg";
import garage_3 from "../../assets/images/garage_3.jpg";
import garage_4 from "../../assets/images/garage_4.jpg";
import garage_5 from "../../assets/images/garage_5.jpg";
import garage_1_2200 from "../../assets/images/garage_1_2200.jpg";
import garage_2_2200 from "../../assets/images/garage_2_2200.jpg";
import garage_3_2200 from "../../assets/images/garage_3_2200.jpg";
import garage_4_2200 from "../../assets/images/garage_4_2200.jpg";
import garage_5_2200 from "../../assets/images/garage_5_2200.jpg";
import garage_1_2560 from "../../assets/images/garage_1_2560.jpg";
import garage_2_2560 from "../../assets/images/garage_2_2560.jpg";
import garage_3_2560 from "../../assets/images/garage_3_2560.jpg";
import garage_4_2560 from "../../assets/images/garage_4_2560.jpg";
import garage_5_2560 from "../../assets/images/garage_5_2560.jpg";

import "./banner.css";

type ScreenSize = 'default' | '2200' | '2560';

const GarageSection: React.FC = () => {
  const [screenSize, setScreenSize] = React.useState<ScreenSize>('default');
  
  const slides: string[] = [garage_1, garage_2, garage_3, garage_4, garage_5];
  const slides2200: string[] = [
    garage_1_2200,
    garage_2_2200,
    garage_3_2200,
    garage_4_2200,
    garage_5_2200,
  ];
  const slides2560: string[] = [
    garage_1_2560,
    garage_2_2560,
    garage_3_2560,
    garage_4_2560,
    garage_5_2560,
  ];

  React.useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 2200) {
          setScreenSize('2560');
        } else if (window.innerWidth > 1920) {
          setScreenSize('2200');
        } else {
          setScreenSize('default');
        }
      }
    };

    // Check on mount
    if (typeof window !== "undefined") {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
      }
    };
  }, []);

  const getCurrentSlides = () => {
    switch (screenSize) {
      case '2560':
        return slides2560;
      case '2200':
        return slides2200;
      default:
        return slides;
    }
  };

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
          {getCurrentSlides()?.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                className="w-full max-h-[816px]"
                alt={`Garage slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default GarageSection;
