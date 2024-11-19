import React, { useCallback, useEffect, useRef } from "react";
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
import { HeadFC, Link } from "gatsby";

const increaseCapacitySchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Capacity Increase Solutions",
  description: "Advanced parking capacity solutions for maximizing space efficiency",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const slides = [
  {
    video: carParking1,
    title: "Parkonfor 11",
    description: "2 Level puzzle system without pit",
    slug:"parkonfor11"
  },
  {
    video: carParking2,
    title: "Parkonfor 11o",
    description: "2 Level puzzle system with pit",
    slug:"parkonfor110"
  },
  {
    video: carParking3,
    title: "Parkonfor 111",
    description: "3 Level puzzle system with pit",
    slug:"parkonfor111"
  },
  {
    video: carParking4,
    title: "Parkonfor 110 PT",
    description: "2 Level Pass-thru puzzle system with pit",
    slug:"parkonfor110pt"
  },
  {
    video: carParking5,
    title: "Parkonfor 11 PT",
    description: "2 Level puzzle system without pit",
    slug:"parkonfor11pt"
  },
  {
    video: carParking6,
    title: "Parkonfor 111 PT",
    description: "3 Level Pass-thru puzzle system with pit",
    slug:"parkonfor111pt"
  },
];

const IncreaseCapacity: React.FC = () => {
  
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {
        // Handle autoplay failure silently
      });
      swiperRef.current?.autoplay.stop();
    }
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      swiperRef.current?.autoplay.start();
    }
  }, []);

  return (
    <div className="overflow-hidden max-w-[1920px] w-full block mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full">
        <h2 className="font-semibold xl:text-[44px] md:text-3xl text-2xl text-center">
          Increasing the capacity with stacking and adjoining the cars.
        </h2>
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.slug}
                className="2xl:w-[325px] lg:w-[290px] w-[260px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Link
                  to={`/products/${slide.slug}`}
                  className="block rounded-md"
                  aria-label={`Learn more about ${slide.title}: ${slide.description}`}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={slide.video}
                    className="w-full border shadow-md rounded-md"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={`${slide.title} demonstration video`}
                    role="presentation"
                  />
                  {/* <iframe
                    ref={(el: any) => (videoRefs.current[index] = el)}
                    src={slide.video}
                    title={slide.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                    aria-label={`${slide.title} demonstration video`}
                    role="presentation"
                  /> */}
                  <p className="text-[#05B6C7] font-semibold xl:text-3xl md:text-2xl text-xl mt-4 mb-2">
                    {slide.title}
                  </p>
                  <p className="font-semibold xl:text-2xl md:text-lg text-base">
                    {slide.description}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(IncreaseCapacity);

export const Head: HeadFC = () => (
  <>
    <title>Capacity Increase Solutions | Parkolay</title>
    <meta name="description" content="Advanced parking capacity solutions for maximizing space efficiency in modern parking systems" />
    <meta name="keywords" content="parking capacity, space optimization, smart parking, parking management, Parkolay" />
    <meta property="og:title" content="Capacity Increase Solutions | Parkolay" />
    <meta property="og:description" content="Advanced parking capacity solutions for maximizing space efficiency in modern parking systems" />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/increase-capacity" />
    <script type="application/ld+json">
      {JSON.stringify(increaseCapacitySchema)}
    </script>
  </>
);
