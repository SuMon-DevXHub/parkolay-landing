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

const easyUseSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Easy to Use Parking System",
  description: "Safe, silent and user-friendly parking management system",
  category: "Parking Solutions",
  manufacturer: {
    "@type": "Organization",
    name: "Parkolay",
    url: "https://parkolay.com",
  },
};

const EasyUse: React.FC = () => {
  const refs: AnimationRefs = {
    section: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null),
    text: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (!refs.section.current || !refs.image.current || !refs.text.current)
      return;

    const easyUseTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Set initial states
    gsap.set(refs.image.current, {
      x: "-100%",
      opacity: 0,
    });
    gsap.set(refs.text.current, {
      x: "100%",
      opacity: 0,
    });

    easyUseTimeline
      // Image comes from left smoothly
      .to(refs.image.current, {
        x: "-75%",
        opacity: 0.3,
        duration: 0.4,
        ease: "power1.out",
      })
      .to(refs.image.current, {
        x: "-25%",
        opacity: 0.7,
        duration: 0.4,
        ease: "power1.out",
      })
      .to(refs.image.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      })
      // Pause after image is in position
      .to(refs.image.current, {
        duration: 0.3,
        ease: "none",
      })
      // Text comes from right smoothly
      .to(refs.text.current, {
        x: "75%",
        opacity: 0.3,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(refs.text.current, {
        x: "25%",
        opacity: 0.7,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(refs.text.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to([refs.image.current, refs.text.current], {
        duration: 1,
        ease: "none",
      });

    return () => {
      easyUseTimeline.kill();
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
      aria-label="Easy to Use Parking System"
      role="region"
    >
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full h-full">
        <div className="flex justify-center items-center gap-10 lg:flex-row flex-col easy-section h-full">
          <div
            ref={refs.image}
            className="lg:w-1/2 w-full easy-image"
            role="img"
            aria-label="Easy to use system illustration"
          >
            <StaticImage
              src="../../assets/images/tariff_machine.jpg"
              alt="Parking tariff machine interface"
              className="block mr-auto"
              placeholder="blurred"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              quality={95}
              width={682}
            />
          </div>
          <div
            ref={refs.text}
            className="lg:w-1/2 w-full easy-text"
            role="contentinfo"
          >
            <h1
              className="text-[#05B6C7] 2xl:text-7xl md:text-5xl text-3xl w-full font-semibold text-center xl:pb-5 pb-4 uppercase"
              id="easy-to-use-title"
            >
              EASY TO USE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyUse;

export const Head: HeadFC = () => (
  <>
    <title>Easy to Use Parking System | Parkolay</title>
    <meta
      name="description"
      content="Safe, silent and user-friendly parking management system"
    />
    <meta
      name="keywords"
      content="easy parking, user-friendly parking, safe parking, silent parking, Parkolay"
    />
    <meta property="og:title" content="Easy to Use Parking System | Parkolay" />
    <meta
      property="og:description"
      content="Safe, silent and user-friendly parking management system"
    />
    <meta property="og:type" content="product" />
    <link rel="canonical" href="https://parkolay.com/products/easy-use" />
    <meta name="robots" content="index, follow" />
    <script type="application/ld+json">{JSON.stringify(easyUseSchema)}</script>
  </>
);
