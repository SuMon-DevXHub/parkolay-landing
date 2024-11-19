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

const complaintSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EN14010 Compliant System",
  description: "EN14010 compliant parking management system",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com"
  }
};

const Complaint: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current) return;

    const complaintTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    });

    complaintTimeline
      .from(refs.text.current, {
        x: "100%",
        y: '70vh',
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      })
      .to(refs.text.current, {
        x: "-100%",
        y: '-70vh',
        opacity: 1,
        duration: 2,
        ease: "power4.in",
      });

    return () => {
      complaintTimeline.kill();
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
      aria-label="EN14010 Compliant System"
      role="region"
    >
      <div className="relative text-white mx-auto block complain-section h-screen w-screen">
        <div 
          ref={refs.image}
          className="w-full h-full complain-image"
          role="img"
          aria-label="EN14010 compliant system illustration"
        >
          <StaticImage
            src="../../assets/images/cloud.svg"
            alt="EN14010 compliant parking system"
            className="h-full w-full object-cover"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
          />
        </div>
        <div
          ref={refs.text}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 max-w-[1920px] complain-text"
          role="contentinfo"
        >
          <div className="w-full xl:w-[1400px] md:w-[700px] h-full mx-auto xl:px-20 md:px-10 px-6">
            <h1
              className="text-white xl:text-7xl md:text-5xl text-3xl font-bold mb-8"
            >
              EN14010 COMPLIANT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

export const Head: HeadFC = () => (
  <>
    <title>EN14010 Compliant System | Parkolay</title>
    <meta name="description" content="EN14010 compliant parking management system" />
    <meta name="keywords" content="EN14010, compliant parking, safety standards, parking solutions, Parkolay" />
    <meta property="og:title" content="EN14010 Compliant System | Parkolay" />
    <meta property="og:description" content="EN14010 compliant parking management system" />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/en14010-compliant" />
    <meta name="robots" content="index, follow" />
    <script type="application/ld+json">
      {JSON.stringify(complaintSchema)}
    </script>
  </>
);