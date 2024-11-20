import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC, Link } from "gatsby";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  text: React.RefObject<HTMLDivElement>;
  carLeft1: React.RefObject<HTMLDivElement>;
  carLeft2: React.RefObject<HTMLDivElement>;
  carLeft3: React.RefObject<HTMLDivElement>;
  carLeft4: React.RefObject<HTMLDivElement>;
  carLeft5: React.RefObject<HTMLDivElement>;
  carLeft6: React.RefObject<HTMLDivElement>;
  carRight1: React.RefObject<HTMLDivElement>;
  carRight2: React.RefObject<HTMLDivElement>;
  carRight3: React.RefObject<HTMLDivElement>;
  carRight4: React.RefObject<HTMLDivElement>;
  carRight5: React.RefObject<HTMLDivElement>;
  carRight6: React.RefObject<HTMLDivElement>;
  
}

const parkingSolutionSchema = {
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

// interface ParkingSolutionProps {
//   title: string;
// }

const ParkingSolution: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
    carLeft1: useRef<HTMLDivElement>(null),
    carLeft2: useRef<HTMLDivElement>(null),
    carLeft3: useRef<HTMLDivElement>(null),
    carLeft4: useRef<HTMLDivElement>(null),
    carLeft5: useRef<HTMLDivElement>(null),
    carLeft6: useRef<HTMLDivElement>(null),
    carRight1: useRef<HTMLDivElement>(null),
    carRight2: useRef<HTMLDivElement>(null),
    carRight3: useRef<HTMLDivElement>(null),
    carRight4: useRef<HTMLDivElement>(null),
    carRight5: useRef<HTMLDivElement>(null),
    carRight6: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current) return;

    const parkingSolutionTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: refs.section.current,
          start: 'top 5%',
          end: 'bottom 5%',
          scrub: 1,
          pin: true,
        }
    });

    const screenWidth = window.innerWidth;
    let textXValue;
    let imageScale;

    if (screenWidth >= 1536) {
      textXValue = "-26%";
      imageScale = 1.4
    } else if (screenWidth >= 1024) {
      textXValue = "-50%";
      imageScale = 1.2
    } else if (screenWidth >= 768) {
      textXValue = "-50%";
      imageScale = 1.3
    } else { 
      textXValue = "-50%";
      imageScale = 1.3
    }

    parkingSolutionTimeLine
      .from(refs.text.current, { y: "80%", x: textXValue, textAlign: "left", duration: 6, ease: "power4.in" })
      .from(refs.image.current, { y: "-45%", x: "23vw", scale: imageScale, duration: 6, ease: "power4.in" }, "<")
      .from(refs.carLeft1.current, { x: "-100vw", delay: 0.5, duration: 2 })
      .from(refs.carRight1.current, { x: "100vw", delay: 1, duration: 2 })
      .from(refs.carLeft2.current, { x: "-100vw", delay: 1.5, duration: 2 })
      .from(refs.carRight2.current, { x: "100vw", delay: 2, duration: 2 })
      .from(refs.carLeft3.current, { x: "-100vw", delay: 2.5, duration: 2 })
      .from(refs.carRight3.current, { x: "100vw", delay: 3, duration: 2 })
      .from(refs.carLeft4.current, { x: "-100vw", delay: 3.5, duration: 2 })
      .from(refs.carRight4.current, { x: "100vw", delay: 4, duration: 2 })
      .from(refs.carLeft5.current, { x: "-100vw", delay: 4.5, duration: 2 })
      .from(refs.carRight5.current, { x: "100vw", delay: 5, duration: 2 })
      .from(refs.carLeft6.current, { x: "-100vw", delay: 5.5, duration: 2 })
      .from(refs.carRight6.current, { x: "100vw", delay: 6, duration: 2 });

    return () => {
      parkingSolutionTimeLine.kill();
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
      className="xl:mt-28 mt-12 overflow-hidden max-w-[1920px] w-full block mx-auto"
    >
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full">
        <div 
            id="car-lifts-section" 
            className="h-full"
        >
          <div 
            ref={refs.text} 
            className="block mx-auto text-center xl:mt-24 md:mt-16 mt-12 2xl:w-2/3 w-2/4" 
            id="car-lifts-text"
          >
            <h2 className="text-[#05B6C7] 2xl:text-6xl lg:text-4xl md:text-3xl text-xl w-full font-semibold xl:pb-5 pb-4 uppercase">
              PARKTRACK
              {/* {title} */}
            </h2>
            <p className="2xl:text-3xl md:text-xl text-base font-normal w-full">
              Maximizing the effeciency via technological<br/>parking sollution.
            </p>
          </div>
          <div
            ref={refs.image} 
            className="xl:mt-24 md:mt-16 mt-12 2xl:w-2/3 w-2/4 relative block mx-auto text-white" 
            id="car-lifts-image"
          >
            <div className="2xl:max-w-[660px] lg:max-w-2/3 max-w-1/3 w-full block mx-auto">
              <StaticImage
                src="../../assets/images/car_lifts.svg"
                alt="Car lift system showing vertical transportation mechanism"
                className="block"
                placeholder="blurred"
                width={660}
                height={440}
                loading="eager"
                formats={["auto", "webp", "avif"]}
                quality={95}
              />
            </div>
            <p 
                ref={refs.carLeft1} 
                className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[10%] top-[-15%] 2xl:left-[-6%] left-[-50%] md:block hidden"
            >
                SAFE AND SILENT
            </p>
            
            <p ref={refs.carLeft2} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[25%] top-[5%]  2xl:left-[-4%] left-[-48%] car-left-2 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carLeft3} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[40%] top-[25%]  2xl:left-[-2%] left-[-46%] car-left-3 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carLeft4} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[60%] top-[50%]  2xl:left-[0%] left-[-44%] car-left-4 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carLeft5} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[75%] top-[70%]  2xl:left-[-5%] left-[-49%] car-left-5 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carLeft6} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[90%] top-[90%]  2xl:left-[-3%] left-[-48%] car-left-6 md:block hidden">
              SAFE AND SILENT
            </p>
            <p ref={refs.carRight1} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[10%] top-[-15%]  2xl:right-[-2%] right-[-46%] car-right-1 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carRight2} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[25%] top-[5%]  2xl:right-[-5%] right-[-49%] car-right-2 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carRight3} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[40%] top-[25%]  2xl:right-[-3%] right-[-47%] car-right-3 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carRight4} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[60%] top-[50%]  2xl:right-[-6%] right-[-50%] car-right-4 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carRight5} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[75%] top-[70%] 2xl:right-[-4%] right-[-48%] car-right-5 md:block hidden">
              SAFE AND SILENT
            </p>
            
            <p ref={refs.carRight6} className="bg-[#05B6C7] px-4 lg:py-3 py-[6px] rounded font-semibold 2xl:text-xl md:text-base text-sm absolute xl:top-[90%] top-[90%] 2xl:right-[-8%] right-[-52%] car-right-6 md:block hidden">
              SAFE AND SILENT
            </p>
          </div>
        </div>
        <div className="lg:mt-20 mt-12">
          <div className="flex justify-center items-center xl:gap-8 gap-3 md:flex-row flex-col">
            {["Datasheet", "Project Reports", "DWG and 3D Models"].map((text, index) => (
              <button
                key={index}
                className="rounded-full flex justify-center items-center gap-2 border border-[#05B6C7] text-[#05B6C7] hover:text-white hover:bg-[#05B6C7] xl:py-4 py-3 px-7 group"
                aria-label={`Download ${text}`}
              >
                <span className="xl:text-lg text-base">{text}</span>
                <StaticImage
                  src="../../assets/images/right_arrow.svg"
                  alt="parkolay arrow icon"
                  className="w-2 h-3 [filter:brightness(0)_saturate(100%)_invert(71%)_sepia(40%)_saturate(6080%)_hue-rotate(157deg)_brightness(93%)_contrast(101%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  placeholder="blurred"
                  width={8}
                  height={12}
                  loading="eager"
                  formats={["auto", "webp", "avif"]}
                  quality={95}
              />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSolution;

export const Head: HeadFC = () => (
  <>
    <title>Car Lift Solutions | Parkolay</title>
    <meta name="description" content="Space-saving car lift system for efficient garage floor access" />
    <script type="application/ld+json">
      {JSON.stringify(parkingSolutionSchema)}
    </script>
  </>
);