import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC } from "gatsby";

if (typeof window !== "undefined") {
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
  description:
    "Cloud-based parking management system integrated with TAPS and PMX",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const CloudBased: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current)
      return;

    const cloudBasedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top 20%",
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onEnter: () => {
          gsap.set(refs.text.current, { y: "150vh", opacity: 0 });
        },
      },
    });

    // Set initial state
    gsap.set(refs.text.current, { y: "150vh", opacity: 0 });

    // Animation sequence
    cloudBasedTimeline
      .to(refs.text.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(refs.text.current, {
        y: "-5%",
        duration: 0.1,
        ease: "power2.out",
      })
      .to(refs.text.current, {
        y: "0%",
        duration: 0.1,
        ease: "power2.inOut",
      });

    return () => {
      cloudBasedTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      refs.section.current?.removeAttribute("aria-hidden");
    };
  }, []);

  useEffect(() => {
    const cleanup = setupAnimation();
    return () => cleanup?.();
  }, [setupAnimation]);

  return (
    <div
      ref={refs.section}
      className="overflow-hidden w-full block mx-auto"
      aria-label="Cloud-Based Parking Management"
      role="region"
    >
      <div className="relative text-white mx-auto block cloud-section h-[880px] w-full">
        <div
          ref={refs.image}
          className="w-full cloud-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="Cloud-based parking system illustration"
        >
          <StaticImage
            src="../../assets/images/cloud.svg"
            alt="Cloud-based parking management interface"
            className="h-[880px] w-full object-cover"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            height={880}
            aria-hidden="true"
          />
        </div>
        <div
          ref={refs.text}
          className="absolute -top-40 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1920px] cloud-text"
          role="contentinfo"
        >
          <div className="w-full xl:w-[1400px] md:w-[700px] h-full text-3xl md:text-5xl xl:text-7xl font-bold mx-auto xl:px-20 md:px-10 px-6">
            <h1
              className="mt-3 mb-6 text-start"
              id="cloud-title"
            >
              CLOUD BASED
            </h1>
            <p
              className="pl-8 md:pl-14 xl:pl-20"
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
    <meta
      name="description"
      content="Cloud-based parking management system with TAPS and PMX integration"
    />
    <meta
      name="keywords"
      content="cloud parking, TAPS integration, PMX integration, parking management, Parkolay"
    />
    <meta
      property="og:title"
      content="Cloud-Based Parking Management | Parkolay"
    />
    <meta
      property="og:description"
      content="Cloud-based parking management system with TAPS and PMX integration"
    />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/cloud-based" />
    <script type="application/ld+json">
      {JSON.stringify(cloudBasedSchema)}
    </script>
  </>
);
