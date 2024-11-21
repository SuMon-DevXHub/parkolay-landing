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

type ScreenSize = "mobile" | "tablet" | "desktop";

const WebBased: React.FC = () => {
  const [screenSize, setScreenSize] = React.useState<ScreenSize>("mobile");
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
        start: "top top",
        end: "+=100%",
        scrub: 3,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Set initial states
    gsap.set(refs.image.current, {
      x: "100%",
      opacity: 0,
    });

    // Different initial states based on screen size
    if (screenSize === "desktop") {
      gsap.set(refs.text.current, {
        y: "100vh",
        opacity: 0,
      });
    } else {
      gsap.set(refs.text.current, {
        x: "-100%",
        opacity: 0,
      });
    }

    webBasedTimeline
      // Image comes from right and stops in right section
      .to(refs.image.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      })
      // Pause after image is in position
      .to(refs.image.current, {
        duration: 0.2,
        ease: "none",
      });

    if (screenSize === "desktop") {
      // Desktop animation: text from bottom to top
      webBasedTimeline
        .to(refs.text.current, {
          y: "50vh",
          opacity: 0.3,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          y: "25vh",
          opacity: 0.6,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          y: 0,
          duration: 0.8,
          ease: "none",
        })
        .to(refs.text.current, {
          y: "-100vh",
          opacity: 0,
          duration: 0.4,
          ease: "power1.in",
        });
    } else {
      webBasedTimeline
        .to(refs.text.current, {
          x: "-75%",
          opacity: 0.3,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          x: "-25%",
          opacity: 0.6,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .to(refs.text.current, {
          duration: 0.8,
          ease: "none",
        })
        .to(refs.text.current, {
          y: "-100vh",
          opacity: 0,
          duration: 0.4,
          ease: "power1.in",
        });
    }

    webBasedTimeline
      .to(refs.image.current, {
        duration: 0.2,
        ease: "none",
      })
      .to(refs.image.current, {
        x: "-90%",
        opacity: 0.6,
        duration: 0.4,
        ease: "power1.in",
      })
      .to(refs.image.current, {
        x: "-150%",
        opacity: 0,
        duration: 0.4,
        ease: "power1.in",
      });

    return () => {
      webBasedTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      refs.section.current?.removeAttribute("aria-hidden");
    };
  }, [screenSize]);

  useEffect(() => {
    const cleanup = setupAnimation();
    return () => cleanup?.();
  }, [setupAnimation]);

  const getScreenSize = useCallback(() => {
    console.log(window.innerWidth, "check inner width");
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1536) {
      setScreenSize("desktop");
    } else if (screenWidth >= 1024) {
      setScreenSize("tablet");
    } else {
      setScreenSize("mobile");
    }

    setupAnimation();
  }, [window.innerWidth]);

  return (
    <div
      ref={refs.section}
      className="overflow-hidden w-full max-w-[1920px] h-[100vh] block mx-auto"
      aria-label="Web-Based User Interface"
      role="region"
    >
      <div className="flex justify-center items-center gap-10 lg:flex-row flex-col webBased-section mx-auto xl:px-20 md:px-10 px-6 h-full w-full">
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
            src="../../assets/images/web_based.jpg"
            alt="Web-based parking management interface"
            className="h-full w-full object-cover"
            placeholder="blurred"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            quality={95}
            aria-hidden="true"
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
