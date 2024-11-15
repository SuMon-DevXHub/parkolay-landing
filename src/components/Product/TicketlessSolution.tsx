import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC, Link } from "gatsby";

// Register GSAP plugins safely for SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  text: React.RefObject<HTMLDivElement>;
}

// SEO Schema
const ticketlessSolutionSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ticketless Parking Solution",
  description: "Advanced ticketless parking system for modern parking management",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const TicketlessSolution: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  // Memoized animation setup with performance optimizations
  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current) return;

    const ticketlessSolutionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    });

    ticketlessSolutionTimeline
      .from(refs.text.current, {
        y: '150vh',
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      });

    // Proper cleanup
    return () => {
      ticketlessSolutionTimeline.kill();
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
      aria-label="Ticketless Parking Solutions"
      role="region"
    >
      <div className="relative text-white mx-auto block ticketless-section h-screen w-screen">
        <div 
          ref={refs.image} 
          className="w-full h-full ticketless-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="Ticketless parking system background"
        >
          <StaticImage
            src="../../assets/images/ticketless.svg"
            alt="Modern ticketless parking system"
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
          className="absolute -top-40 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1920px] ticketless-text"
          role="contentinfo"
        >
          <div>
            <h1
              className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl font-bold mt-3 mb-6 text-center"
            >
             TICKETLESS SOLUTION
            </h1>
            <p className="text-lg md:text-3xl text-center font-semibold">There will be sub texts to explain what it means</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketlessSolution;

export const Head: HeadFC = () => (
  <>
    <title>Ticketless Parking Solutions | Parkolay</title>
    <meta name="description" content="Advanced ticketless parking system for modern and efficient parking management" />
    <meta name="keywords" content="ticketless parking, smart parking, parking management, Parkolay" />
    <meta property="og:title" content="Ticketless Parking Solutions | Parkolay" />
    <meta property="og:description" content="Advanced ticketless parking system for modern and efficient parking management" />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/ticketless" />
    <script type="application/ld+json">
      {JSON.stringify(ticketlessSolutionSchema)}
    </script>
  </>
);