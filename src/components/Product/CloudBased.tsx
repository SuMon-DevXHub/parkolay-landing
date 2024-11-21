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

    gsap.set(refs.text.current, {
      x: "150%",
    });

    const cloudBasedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top top",
        end: "+=150%",
        scrub: 3,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Set initial state
    gsap.set(refs.text.current, {
      y: "150vh",
      opacity: 0,
      translateX: "-50%",
      left: "50%",
    });

    // Animation sequence
    cloudBasedTimeline
      .to(refs.text.current, {
        y: "50vh",
        opacity: 0.3,
        duration: 0.4,
        ease: "linear",
      })
      .to(refs.text.current, {
        y: "25vh",
        opacity: 0.6,
        duration: 0.4,
        ease: "linear",
      })
      .to(refs.text.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "linear",
      })
      .to(
        refs.text.current,
        {
          y: "-75vh",
          opacity: 0,
          duration: 1,
          ease: "linear",
        },
        2
      )
      .to(refs.text.current, {
        y: "-110vh",
        opacity: 0,
        duration: 1,
        ease: "linear",
      })
      .to(refs.text.current, {
        y: "-150vh",
        opacity: 0,
        duration: 0.8,
        ease: "linear",
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
      className="overflow-hidden w-full h-[100vh] block mx-auto"
      aria-label="Cloud-Based Parking Management"
      role="region"
    >
      <div className="relative text-white mx-auto block cloud-section h-full w-full">
        <div
          ref={refs.image}
          className="w-full h-full cloud-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="Cloud-based parking system illustration"
        >
          <StaticImage
            src="../../assets/images/cloud_based.webp"
            alt="Cloud-based parking management interface"
            className="h-full w-full object-cover div-overlay-plus"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            aria-hidden="true"
          />
        </div>
        <div
          ref={refs.text}
          className="absolute top-1/2 -translate-y-1/2 z-20 w-full max-w-[1920px] cloud-text"
          role="contentinfo"
        >
          <div className="w-full xl:w-[1400px] md:w-[700px] h-full text-3xl md:text-5xl xl:text-7xl font-bold mx-auto xl:px-20 md:px-10 px-6">
            <h1 className="mt-3 mb-6 text-start" id="cloud-title">
              CLOUD BASED
            </h1>
            <p className="pl-8 md:pl-14 xl:pl-20" aria-labelledby="cloud-title">
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
