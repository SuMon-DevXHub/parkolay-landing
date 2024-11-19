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
}

const carLiftSchema = {
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

const CarLift: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  // Memoize animation setup
  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current) return;

    const carLiftTimeline = gsap.timeline();

    carLiftTimeline
      .from(refs.image.current, {
        y: "-30%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        refs.text.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        },
        "<0.5"
      );

    return () => {
      carLiftTimeline.kill();
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
      className="overflow-hidden max-w-[1920px] w-full block mx-auto"
      aria-label="Car Lift Solutions"
    >
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full mt-5">
        <div className="flex justify-between items-center gap-10 lg:flex-row flex-col-reverse h-full xl:h-[70vh] w-full">
          <div 
            ref={refs.text} 
            className="lg:w-1/2 w-full"
            role="region"
            aria-label="Car Lift Information"
          >
            <h2 className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl w-full font-semibold xl:pb-5 pb-4 uppercase">
              Car Lifts
            </h2>
            <p className="uppercase xl:text-4xl md:text-3xl text-xl font-semibold xl:mt-3 mt-2 xl:mb-10 mb-6 text-[#4E5051]">
              Car lifts are space savers
            </p>
            <p className="xl:text-3xl md:text-2xl text-lg font-normal text-[#53575A]">
              The easiest way to access the garage floors. Car lifts are space
              savers compared to conventional elevator pit dimensions.
            </p>
            <Link
              to="/products/car-lifts"
              className="inline-block rounded-md bg-[#05B6C7] hover:bg-[#049DAC] transition-colors duration-200 xl:py-4 py-3 px-7 text-white xl:mt-10 mt-6 focus:outline-none focus:ring-2 focus:ring-[#05B6C7] focus:ring-offset-2"
              aria-label="Learn more about car lifts"
            >
              <span className="xl:text-lg text-base">Learn More</span>
            </Link>
          </div>
          <div 
            ref={refs.image} 
            className="lg:w-1/2 w-full"
            role="img"
            aria-label="Car lift illustration"
          >
            <StaticImage
              src="../../assets/images/car_lifts.svg"
              alt="Car lift system showing vertical transportation mechanism"
              className="block ml-auto md:mr-0 mr-auto shadow-md lg:p-12 p-4 object-cover"
              placeholder="blurred"
              width={600}
              height={400}
              loading="eager"
              formats={["auto", "webp", "avif"]}
              quality={95}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLift;

export const Head: HeadFC = () => (
  <>
    <title>Car Lift Systems | Parkolay</title>
    <meta name="description" content="Space-saving car lift system for efficient garage floor access" />
    <script type="application/ld+json">
      {JSON.stringify(carLiftSchema)}
    </script>
  </>
);