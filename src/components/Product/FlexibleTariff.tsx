import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { HeadFC, Link } from "gatsby";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  section: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  text: React.RefObject<HTMLDivElement>;
}

// SEO Schema
const flexibleTariffSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Flexible Parking Tariffs",
  description:
    "Customizable parking tariff management system for efficient pricing control",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const FlexibleTariff: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current)
      return;

    gsap.set(refs.image.current, {
      opacity: 0,
      x: "-150%", // Start from further left
    });
    gsap.set(refs.text.current, {
      opacity: 0,
      x: "150%", // Start from further right
    });

    const flexibleTariffTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top top",
        end: "+=150%",
        scrub: 3,
        pin: true,
      },
    });

    flexibleTariffTimeline
      // Smooth entry for image
      .to(refs.image.current, {
        x: "-75%",
        opacity: 0.3,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(refs.image.current, {
        x: "-25%",
        opacity: 0.7,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(refs.image.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      // Pause after image enters
      .to(refs.image.current, {
        x: 0,
        duration: 0.5,
        ease: "none",
      })
      // Smooth entry for text
      .to(refs.text.current, {
        x: "75%",
        opacity: 0.3,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(refs.text.current, {
        x: "25%",
        opacity: 0.7,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(refs.text.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      })
      // Final pause with both elements in place
      .to([refs.image.current, refs.text.current], {
        duration: 1,
        ease: "none",
      });

    return () => {
      flexibleTariffTimeline.kill();
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
      className="overflow-hidden flex justify-center h-[100vh] items-center max-w-[1920px] w-full mx-auto"
      aria-label="Flexible Parking Tariffs"
      role="region"
    >
      <div className="mx-auto flex justify-center items-center xl:px-20 md:px-10 px-6 w-full h-full">
        <div className="flex justify-center items-center gap-10 h-full lg:flex-row  flex-col tariff-section">
          <div
            ref={refs.image}
            className="lg:w-1/2 w-full"
            role="img"
            aria-label="Flexible tariff system illustration"
          >
            <StaticImage
              src="../../assets/images/tariff.svg"
              alt="Flexible parking tariff management interface"
              className="block mx-auto "
              placeholder="blurred"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              quality={95}
            />
          </div>
          <div
            ref={refs.text}
            className="lg:w-1/2 w-full tariff-text"
            role="contentinfo"
          >
            <h1
              className="text-[#05B6C7] 2xl:text-7xl md:text-5xl text-3xl w-full font-semibold xl:pb-5 pb-4 uppercase"
              id="tariff-title"
            >
              FLEXIBLE TARIFFS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexibleTariff;

export const Head: HeadFC = () => (
  <>
    <title>Flexible Parking Tariffs | Parkolay</title>
    <meta
      name="description"
      content="Customizable parking tariff management system for efficient pricing control"
    />
    <meta
      name="keywords"
      content="flexible parking tariffs, parking rates, tariff management, parking solutions, Parkolay"
    />
    <meta property="og:title" content="Flexible Parking Tariffs | Parkolay" />
    <meta
      property="og:description"
      content="Customizable parking tariff management system for efficient pricing control"
    />
    <meta property="og:type" content="product" />
    <link
      rel="canonical"
      href="https://parkolay.com/products/flexible-tariffs"
    />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <script type="application/ld+json">
      {JSON.stringify(flexibleTariffSchema)}
    </script>
  </>
);
