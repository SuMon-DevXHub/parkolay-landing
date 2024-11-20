import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image"; // Use StaticImage for optimized images
import { HeadFC } from "gatsby";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  image1: React.RefObject<HTMLDivElement>;
  image2: React.RefObject<HTMLDivElement>;
  image3: React.RefObject<HTMLDivElement>;
  text1: React.RefObject<HTMLDivElement>;
  text2: React.RefObject<HTMLDivElement>;
  text3: React.RefObject<HTMLDivElement>;
}

const easyUseSchema = {
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

const EasyUse: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    image1: useRef<HTMLDivElement>(null),
    image2: useRef<HTMLDivElement>(null),
    image3: useRef<HTMLDivElement>(null),
    text1: useRef<HTMLDivElement>(null),
    text2: useRef<HTMLDivElement>(null),
    text3: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text1.current) return;

    const easyUseTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: refs.section.current,
          start: "top 20%", 
          end: "bottom 20%",
          scrub: 1,
          pin: true,
        }
    });

    const screenWidth = window.innerWidth;
    let textYValue;

    if (screenWidth >= 1024) {
      textYValue = "-50%";
    } else { 
      textYValue = "50%";
    }

    easyUseTimeLine
    .to(refs.text1.current, {
        y: "-150vh",
        duration: 6,
        ease: "power4.in",
        delay: 3
    })
    .to(refs.image1.current, {
        y: "-200vh",
        duration: 6,
        ease: "power4.out",
        delay: 3
    })
    .to(refs.image2.current, {
      y: 0,
      duration: 6,
      ease: "power4.out",
      delay: 3
  })
    .to(refs.text2.current, {
        y: textYValue,
        duration: 6,
        ease: "power4.in",
        delay: 3
    })
    .to(refs.image2.current, {
        y: "-150vh",
        duration: 6,
        ease: "power4.out",
        delay: 3
    })
    .to(refs.image3.current, {
      y: 0,
      duration: 6,
      ease: "power4.out",
      delay: 3
  })
    .to(refs.text2.current, {
        y: "-150vh",
        duration: 6,
        ease: "power4.in",
        delay: 3
    })
    .to(refs.text3.current, {
        y: textYValue,
        duration: 6,
        ease: "power4.in",
        delay: 3
    });
    // .from(refs.image3.current, {
    //     y: textYValue,
    //     duration: 3,
    //     ease: "power4.out",
    //     delay: 3
    // }, "<");

    return () => {
      easyUseTimeLine.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const cleanup = setupAnimation();
    return () => cleanup?.();
  }, [setupAnimation]);

  return (
    <div ref={refs.section} className="xl:mt-28 mt-12 overflow-hidden max-w-[1920px] w-full mx-auto">
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full">
        <div className="flex justify-center items-center gap-10 lg:flex-row flex-col easy-section">
          <div ref={refs.image} className="lg:w-1/2 w-full easy-image relative">
            <div className="relative overflow-hidden z-0">
              <StaticImage
                src="../../assets/images/tab.svg"
                alt="Rectangle border"
                className="w-full relative z-0"
                loading="lazy"
              />
              {/* <div className="border-[40px] border-black outline shadow-lg rounded-xl w-[880px] h-[660px]"></div> */}
              <div ref={refs.image1} className="absolute top-6 left-6 right-6 bottom-6 z-10 translate-y-0 w-[calc(100%-48px)] h-[calc(100%-48px)] object-fill">
                <StaticImage
                  src="../../assets/images/rectangle_car.svg"
                  alt="Car tariff machine"
                  className="easy-image-1 opacity-100 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div ref={refs.image2} className="absolute top-6 left-6 right-6 bottom-6 z-10 translate-y-[150vh] w-[calc(100%-48px)] h-[calc(100%-48px)] object-cover">
                <StaticImage
                  src="../../assets/images/rectangle_car1.svg"
                  alt="Car tariff machine"
                  className="easy-image-2 opacity-100 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div ref={refs.image3} className="absolute top-6 left-6 right-6 bottom-6 z-10 translate-y-[150vh] w-[calc(100%-48px)] h-[calc(100%-48px)] object-cover">
                <StaticImage
                  src="../../assets/images/rectangle_car.svg"
                  alt="Car tariff machine"
                  className="easy-image-3 opacity-100 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full">
            <div ref={refs.text1} className="easy-text-1 absolute lg:translate-y-[-50%] translate-y-[30%]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 1
              </h2>
              <p className="xl:text-3xl md:text-xl text-base font-normal">
                Maximizing the efficiency via technological parking solution.
              </p>
            </div>
            <div ref={refs.text2} className="easy-text-2 absolute translate-y-[150vh]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 2
              </h2>
              <p className="xl:text-3xl md:text-xl text-base font-normal">
                Maximizing the efficiency via technological parking solution.
              </p>
            </div>
            <div ref={refs.text3} className="easy-text-3 absolute translate-y-[150vh]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 3
              </h2>
              <p className="xl:text-3xl md:text-xl text-base font-normal">
                Maximizing the efficiency via technological parking solution.
              </p>
            </div>
            <div className="lg:hidden block w-full min-h-48 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyUse;

export const Head: HeadFC = () => (
  <>
    <title>Car Lift Systems | Parkolay</title>
    <meta name="description" content="Space-saving car lift system for efficient garage floor access" />
    <script type="application/ld+json">
      {JSON.stringify(easyUseSchema)}
    </script>
  </>
);