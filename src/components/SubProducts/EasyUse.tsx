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
          start: "top top", 
          end: "+=6000",
          scrub: 3,
          pin: true,
        }
    });

    const screenWidth = window.innerWidth;
    let textYValue;
    let textYAfterValue;
    let textYAfter2Value;

    if (screenWidth >= 1024) {
      textYValue = "-50%";
      textYAfterValue = "-150vh";
      textYAfter2Value = "-400%";
    } else { 
      textYValue = "50%";
      textYAfterValue = "-50vh";
      textYAfter2Value = "-150%";
    }

    easyUseTimeLine
    .to(refs.text1.current, {
        y: textYAfterValue,
        ease: "power1.in",
        opacity: 0,
        delay: 0
    })
    .to(refs.text2.current, {
      y: textYValue,
      ease: "power1.in",
      delay: 0
    }, "<")
    .to(refs.image2.current, {
      display: "block",
      opacity: 1,
      ease: "power1.in",
      delay: 0
    },'<')
    .to(refs.text2.current, {
      y: textYAfter2Value,
      opacity: 0,
      ease: "power1.in",
      delay: 0
    })
    .to(refs.text3.current, {
      y: textYValue,
      ease: "power1.in",
      delay: 0
    },"<")
    .to(refs.image3.current, {
        display: "block",
        opacity: 1,
        ease: "power1.in",
        delay: 0
    }, "<")
  

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
    <div 
      ref={refs.section} 
      className="xl:mt-28 mt-12 overflow-hidden w-full mx-auto h-screen flex justify-center items-center"
    >
      <div className="mx-auto w-full flex justify-center items-center">
        <div className="flex justify-center items-center lg:gap-20 gap-10 lg:flex-row flex-col easy-section w-full">
          <div ref={refs.image} className="lg:w-1/2 w-full easy-image relative z-50">
            <div className="relative overflow-hidden z-0">
              <StaticImage
                src="../../assets/images/tab.svg"
                alt="Rectangle border"
                className="w-full relative z-0"
                loading="lazy"
              />
              <div ref={refs.image1} className="absolute xl:top-5 lg:top-4 md:top-5 top-3 xl:left-8 lg:left-7 md:left-8 left-6 xl:right-10 lg:right-9 md:right-10 right-8 xl:bottom-5 lg:bottom-4 md:bottom-5 bottom-3 translate-y-0 xl:w-[calc(100%-80px)] lg:w-[calc(100%-63px)] w-[calc(100%-48px)] md:w-[calc(100%-80px)] xl:h-[calc(100%-40px)] lg:h-[calc(100%-32px)] md:h-[calc(100%-40px)] h-[calc(100%-27px)] z-10">
                <StaticImage
                  src="../../assets/images/Jpg/tab_image1.jpg"
                  alt="Car tariff machine"
                  className="easy-image-1 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div ref={refs.image2} className="absolute xl:top-5 lg:top-4 md:top-5 top-3 xl:left-8 lg:left-7 md:left-8 left-6 xl:right-10 lg:right-9 md:right-10 right-8 xl:bottom-5 lg:bottom-4 md:bottom-5 bottom-3 translate-y-0 xl:w-[calc(100%-80px)] lg:w-[calc(100%-63px)] w-[calc(100%-48px)] md:w-[calc(100%-80px)] xl:h-[calc(100%-40px)] lg:h-[calc(100%-32px)] md:h-[calc(100%-40px)] h-[calc(100%-27px)] z-20 hidden opacity-0">
                <StaticImage
                  src="../../assets/images/Jpg/tab_image2.jpg"
                  alt="Car tariff machine"
                  className="easy-image-2 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div ref={refs.image3} className="absolute xl:top-5 lg:top-4 md:top-5 top-3 xl:left-8 lg:left-7 md:left-8 left-6 xl:right-10 lg:right-9 md:right-10 right-8 xl:bottom-5 lg:bottom-4 md:bottom-5 bottom-3 translate-y-0 xl:w-[calc(100%-80px)] lg:w-[calc(100%-63px)] w-[calc(100%-48px)] md:w-[calc(100%-80px)] xl:h-[calc(100%-40px)] lg:h-[calc(100%-32px)] md:h-[calc(100%-40px)] h-[calc(100%-27px)] z-30 hidden opacity-0">
                <StaticImage
                  src="../../assets/images/Jpg/tab_image3.jpg"
                  alt="Car tariff machine"
                  className="easy-image-3 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full z-40 mr-[6%] lg:p-0 p-6 md:px-10 md:py-6">
            <div ref={refs.text1} className="easy-text-1 absolute lg:translate-y-[-50%] translate-y-[30%]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 1
              </h2>
              <p className="xl:text-3xl xl:leading-10 md:text-xl md:leading-8 text-base leading-7 font-normal">
                Maximizing the efficiency via technological parking solution.
              </p>
            </div>
            <div ref={refs.text2} className="easy-text-2 absolute translate-y-[150vh]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 2
              </h2>
              <p className="xl:text-3xl xl:leading-10 md:text-xl md:leading-8 text-base leading-7 font-normal">
                Maximizing the efficiency via technological parking solution.
              </p>
            </div>
            <div ref={refs.text3} className="easy-text-3 absolute translate-y-[150vh]">
              <h2 className="text-[#05B6C7] xl:text-5xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4">
                IT WORKS LIKE A CHARM 3
              </h2>
              <p className="xl:text-3xl xl:leading-10 md:text-xl md:leading-8 text-base leading-7 font-normal">
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
    <meta name="description" content="Space-saving car lift system for efficient garage floor access and description" />
    <script type="application/ld+json">
      {JSON.stringify(easyUseSchema)}
    </script>
  </>
);