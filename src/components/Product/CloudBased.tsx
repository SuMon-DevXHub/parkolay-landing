import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC } from "gatsby";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  text: React.RefObject<HTMLDivElement>;
}

const cloudBasedSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cloud-Based Parking Management",
  description: "Cloud-based parking management system integrated with TAPS and PMX",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const CloudBased: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current) return;

    const cloudBasedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    });

    cloudBasedTimeline
      .from(refs.text.current, {
        x: "12%",
        y: '300%',
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      })
      .to(refs.text.current, {
        x: "12%",
        y: '-300%',
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });

    return () => {
      cloudBasedTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      refs.section.current?.removeAttribute('aria-hidden');
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
      aria-label="Cloud-Based Parking Management"
      role="region"
    >
      <div className="relative text-white mx-auto block cloud-section h-screen w-screen">
        <div 
          ref={refs.image}
          className="w-full h-full relative"
          role="img"
          aria-label="Cloud-based parking system illustration"
        >
          <StaticImage
            src="../../assets/images/cloud.svg"
            alt="Cloud-based parking management interface"
            className="h-full w-full object-cover"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            aria-hidden="true"
          />
        </div>
        <div
          ref={refs.text}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 max-w-[1920px] cloud-text"
          role="contentinfo"
        >
          <div className="w-full xl:w-[1400px] md:w-[700px] h-full mx-auto xl:px-20 md:px-10 px-6">
            <h1
              className="text-white xl:text-7xl md:text-5xl text-3xl font-bold mb-8"
              id="cloud-title"
            >
              CLOUD BASED
            </h1>
            <p 
              className="text-white xl:text-7xl md:text-5xl text-3xl font-bold mb-8 xl:pl-20 md:pl-14 pl-8"
              aria-labelledby="cloud-title"
            >
              INTEGRATED TO TAPS AND PMX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudBased;

export const Head: HeadFC = () => (
  <>
    <title>Cloud-Based Parking Management | Parkolay</title>
    <meta name="description" content="Cloud-based parking management system with TAPS and PMX integration" />
    <meta name="keywords" content="cloud parking, TAPS integration, PMX integration, parking management, Parkolay" />
    <meta property="og:title" content="Cloud-Based Parking Management | Parkolay" />
    <meta property="og:description" content="Cloud-based parking management system with TAPS and PMX integration" />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/cloud-based" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <script type="application/ld+json">
      {JSON.stringify(cloudBasedSchema)}
    </script>
  </>
);