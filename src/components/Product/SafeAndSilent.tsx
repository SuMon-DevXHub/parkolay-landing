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

const safeAndSilentSolutionSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Safe silent Parking Solution",
  description:
    "Advanced safe and silent parking system for modern parking management",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const SafeAndSilent: React.FC = () => {
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

    const safeAndSilentSolutionTimeline = gsap.timeline({
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

    safeAndSilentSolutionTimeline
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
      safeAndSilentSolutionTimeline.kill();
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
      aria-label="Safe-Silent Parking Solutions"
      role="region"
    >
      <div className="relative text-white mx-auto block safeAndSilent-section h-full w-full">
        <div
          ref={refs.image}
          className="w-full h-full safeAndSilent-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="TicketLess parking system background"
        >
          <StaticImage
            src="../../assets/images/safe_silent.webp"
            alt="Modern safeAndSilent parking system"
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
          className="absolute top-1/2 -translate-y-1/2 z-20 w-full max-w-[1920px] safeAndSilent-text"
          role="contentinfo"
        >
          <h1 className="text-white xl:text-7xl md:text-5xl text-3xl font-bold mt-3 mb-6 text-center">
            SAFE AND SILENT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SafeAndSilent;

export const Head: HeadFC = () => (
  <>
    <title>SafeAndSilent Parking Solutions | Parkolay</title>
    <meta
      name="description"
      content="Advanced safeAndSilent parking system for modern and efficient parking management"
    />
    <meta
      name="keywords"
      content="safeAndSilent parking, smart parking, parking management, Parkolay"
    />
    <meta
      property="og:title"
      content="SafeAndSilent Parking Solutions | Parkolay"
    />
    <meta
      property="og:description"
      content="Advanced safeAndSilent parking system for modern and efficient parking management"
    />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/safeAndSilent" />
    <script type="application/ld+json">
      {JSON.stringify(safeAndSilentSolutionSchema)}
    </script>
  </>
);
