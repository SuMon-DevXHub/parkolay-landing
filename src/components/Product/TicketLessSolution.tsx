import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC, Link } from "gatsby";

// Register GSAP plugins safely for SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  text: React.RefObject<HTMLDivElement>;
}

// SEO Schema
const ticketLessSolutionSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TicketLess Parking Solution",
  description:
    "Advanced ticketLess parking system for modern parking management",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const TicketLessSolution: React.FC = () => {
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

    const ticketLessSolutionTimeline = gsap.timeline({
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

    ticketLessSolutionTimeline
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
      ticketLessSolutionTimeline.kill();
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
      aria-label="TicketLess Parking Solutions"
      role="region"
    >
      <div className="relative text-white mx-auto block ticketLess-section h-full w-full">
        <div
          ref={refs.image}
          className="w-full h-full ticketLess-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="TicketLess parking system background"
        >
          <StaticImage
            src="../../assets/images/ticketLess.webp"
            alt="Modern ticketLess parking system"
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
          className="absolute top-1/2 -translate-y-1/2 z-20 w-full max-w-[1920px] ticketLess-text"
          role="contentinfo"
        >
          <div>
            <h1 className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl font-bold mt-3 mb-6 text-center">
              TICKETLESS SOLUTION
            </h1>
            <p className="text-lg md:text-3xl text-center font-semibold">
              There will be sub texts to explain what it means
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketLessSolution;

export const Head: HeadFC = () => (
  <>
    <title>TicketLess Parking Solutions | Parkolay</title>
    <meta
      name="description"
      content="Advanced ticketLess parking system for modern and efficient parking management"
    />
    <meta
      name="keywords"
      content="ticketLess parking, smart parking, parking management, Parkolay"
    />
    <meta
      property="og:title"
      content="TicketLess Parking Solutions | Parkolay"
    />
    <meta
      property="og:description"
      content="Advanced ticketLess parking system for modern and efficient parking management"
    />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/ticketLess" />
    <script type="application/ld+json">
      {JSON.stringify(ticketLessSolutionSchema)}
    </script>
  </>
);
