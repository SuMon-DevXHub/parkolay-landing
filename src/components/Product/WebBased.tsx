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

const webBasedSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Web-Based UI",
  description: "Web-based user interface for parking management system",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const WebBased: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current)
      return;

    const webBasedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top 10%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    webBasedTimeline
      .from(refs.image.current, {
        x: "300%",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      })
      .from(refs.text.current, {
        y: "200vh",
        opacity: 1,
        duration: 4,
        ease: "power2.out",
      })
      .to(refs.text.current, {
        y: "-200vh",
        opacity: 1,
        duration: 4,
        ease: "power4.in",
      })
      .to(refs.image.current, {
        x: "-300%",
        opacity: 1,
        duration: 2,
        ease: "power4.in",
      });

    return () => {
      webBasedTimeline.kill();
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
      aria-label="Web-Based User Interface"
      role="region"
    >
      <div className="flex justify-center items-center gap-10 lg:flex-row flex-col webBased-section mx-auto xl:px-20 md:px-10 px-6 h-[400px] w-full">
        <div
          ref={refs.text}
          className="lg:w-1/2 w-full webBased-text"
          role="contentinfo"
        >
          <h1 className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl w-full font-semibold xl:pb-5 pb-4 uppercase">
            WEB BASED UI
          </h1>
        </div>
        <div
          ref={refs.image}
          className="lg:w-1/2 w-full webBased-image"
          role="img"
          aria-label="Web-based interface illustration"
        >
          <StaticImage
            src="../../assets/images/web_based.svg"
            alt="Web-based parking management interface"
            className="h-[400px] w-full object-cover"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default WebBased;

export const Head: HeadFC = () => (
  <>
    <title>Web-Based UI | Parkolay</title>
    <meta
      name="description"
      content="Web-based user interface for parking management system"
    />
    <meta
      name="keywords"
      content="web-based UI, parking management interface, parking solutions, Parkolay"
    />
    <meta property="og:title" content="Web-Based UI | Parkolay" />
    <meta
      property="og:description"
      content="Web-based user interface for parking management system"
    />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/web-based" />
    <meta name="robots" content="index, follow" />
    <script type="application/ld+json">{JSON.stringify(webBasedSchema)}</script>
  </>
);
