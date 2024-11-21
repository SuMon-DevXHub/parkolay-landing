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

const complaintSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EN14010 Compliant System",
  description: "EN14010 compliant parking management system",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const Complaint: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current)
      return;

    const complaintTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onEnter: () => {
          gsap.set(refs.text.current, {
            x: "50vw",
            y: "50vh",
            opacity: 0,
            left: "50%",
            right: "auto",
            xPercent: 0,
          });
        },
      },
    });

    // Set initial state
    gsap.set(refs.text.current, {
      x: "50vw",
      y: "50vh",
      opacity: 0,
      left: "50%",
      right: "auto",
      xPercent: 0,
    });

    // Animation sequence
    complaintTimeline
      // Move to center
      .to(refs.text.current, {
        x: 0,
        y: 0,
        opacity: 1,
        left: "50%",
        right: "auto",
        xPercent: -50,
        duration: 0.4,
        ease: "power1.inOut",
      })
      // Short pause in center with centered text
      .to(refs.text.current, {
        x: 0,
        y: 0,
        left: "50%",
        right: "auto",
        xPercent: -50,
        duration: 0.2,
      })
      // Move to top left with right alignment
      .to(refs.text.current, {
        x: "-50vw",
        y: "-50vh",
        left: "auto",
        right: "50%",
        xPercent: 0,
        duration: 0.4,
        ease: "power2.in",
      });

    return () => {
      complaintTimeline.kill();
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
      aria-label="EN14010 Compliant System"
      role="region"
    >
      <div className="relative text-white mx-auto block complain-section h-full w-full">
        <div
          ref={refs.image}
          className="w-full h-full complain-image absolute top-0 left-0 right-0 z-10 backdrop-brightness-50"
          role="img"
          aria-label="EN14010 compliant system illustration"
        >
          <StaticImage
            src="../../assets/images/compliant.jpg"
            alt="EN14010 compliant parking system"
            className="h-full w-full object-cover div-overlay"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            aria-hidden="true"
          />
        </div>
        <div
          ref={refs.text}
          className="absolute top-1/2 -translate-y-1/2 z-20 complain-text"
          role="contentinfo"
        >
          <div className="text-white whitespace-nowrap text-3xl md:text-5xl xl:text-7xl font-bold mx-auto">
            EN14010 COMPLIANT
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
    <meta
      name="description"
      content="EN14010 compliant parking management system"
    />
    <meta
      name="keywords"
      content="EN14010, compliant parking, safety standards, parking solutions, Parkolay"
    />
    <meta property="og:title" content="EN14010 Compliant System | Parkolay" />
    <meta
      property="og:description"
      content="EN14010 compliant parking management system"
    />
    <meta property="og:type" content="product" />
    <link
      rel="canonical"
      href="https://parkolay.com/products/en14010-compliant"
    />
    <script type="application/ld+json">
      {JSON.stringify(complaintSchema)}
    </script>
  </>
);
