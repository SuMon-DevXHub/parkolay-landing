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
  text1: React.RefObject<HTMLDivElement>;
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
    text1: useRef<HTMLDivElement>(null),
  };

  const setupAnimation = useCallback(() => {
    if (
      !refs.section.current ||
      !refs.image.current ||
      !refs.text.current ||
      !refs.text1.current
    )
      return;

    const easyUseTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top center",
        end: "+=450px",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.set(refs.text.current, { y: "450px", opacity: 0 });
    gsap.set(refs.image.current, { y: "450px", opacity: 0 });
    gsap.set(refs.text1.current, { y: "450px", x: 0, opacity: 0 });

    easyUseTimeline
      .to(refs.text.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(refs.image.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(refs.text.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(refs.image.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(refs.image.current, {
        y: "-450px",
        duration: 0.2,
        ease: "power2.in",
      })
      .to(refs.text.current, {
        x: "200%",
        duration: 0.2,
        ease: "power2.in",
      })
      .to(refs.text1.current, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(refs.text1.current, {
        x: "30%",
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(refs.text1.current, {
        y: "-450px",
        duration: 0.2,
        ease: "power2.in",
      });

    return () => {
      easyUseTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
      aria-label="Easy to Use Parking System"
      role="region"
    >
      <div className="mx-auto xl:px-20 md:px-10 px-6 w-full h-[450px]">
        <div className="flex justify-center items-center gap-10 lg:flex-row flex-col easy-section h-full">
          <div
            ref={refs.image}
            className="lg:w-1/2 w-full easy-image"
            role="img"
            aria-label="Tariff machine illustration"
          >
            <StaticImage
              src="../../assets/images/tariff_machine.svg"
              alt="Parking tariff machine interface"
              className="h-[450px] mr-auto"
              placeholder="blurred"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              quality={95}
              height={450}
            />
          </div>
          <div
            ref={refs.text}
            className="lg:w-1/2 w-full easy-text"
            role="contentinfo"
          >
            <h1 className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl w-full font-semibold xl:pb-5 pb-4 uppercase">
              EASY TO USE
            </h1>
          </div>
        </div>
        <h2
          ref={refs.text1}
          className="text-[#05B6C7] xl:text-7xl md:text-5xl text-3xl font-semibold xl:pb-5 pb-4 uppercase"
        >
          SAFE AND SILENT
        </h2>
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
