import React, { useEffect, useRef } from "react";
import YellowBg from "./decorate/YellowBg";
import myPhoto from "/src/assets/myPhoto.png";
import heroDialogBox from "/src/assets/heroDialogBox.png";
import resumeIcon from "/src/assets/resumeIcon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingText from './decorate/RotatingText'

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const bubbleRef = useRef(null); 
  const passionateRef = useRef(null);
  const webDevRef = useRef(null);
  const focusedRef = useRef(null);
  const impressiveRef = useRef(null);
  const userExpRef = useRef(null);
  const photoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const defaults = {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        ease: "power3.out",
        duration: 0.75,
      };

      if (bubbleRef.current) {
        gsap.from(bubbleRef.current, {
          ...defaults,
          x: -120,
          opacity: 0,
        });
      }

      gsap.from(photoRef.current, {
        ...defaults,
        x: 120,
        opacity: 0,
      });

      const leftEls = [
        passionateRef.current,
        webDevRef.current,
        focusedRef.current,
        impressiveRef.current,
        userExpRef.current,
      ];

      gsap.from(leftEls, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        x: -80,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderSpeechBubble = () => (
    <div
      ref={bubbleRef}
      className="relative mb-1"
      style={{
        width: "clamp(240px, 90%, 420px)",
        height: "clamp(90px, 28vw, 160px)",
      }}
    >
      <img
        src={heroDialogBox}
        alt="speech bubble"
        style={{
          transform: "rotate(-2deg)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />
      <div
        style={{
          transform: "rotate(-2.5deg)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "14%",
          paddingRight: "14%",
          paddingBottom: "12%",
          paddingTop: "2%",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "Playpen Sans, cursive",
            fontSize: "clamp(1.2rem, 2.5vw, 1.1rem)",
            color: "#000",
            fontStyle: "italic",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}
        >
          Hey there ! I'm
        </span>
        <span
          style={{
            fontFamily: "Notable, sans-serif",
            fontSize: "clamp(2rem, 5.2vw, 2.5rem)",
            color: "#111",
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          MANSI SINGH
        </span>
      </div>
    </div>
  );

  return (
    <>
    <div
      className="relative flex w-screen items-center justify-center overflow-hidden"
      style={{ fontFamily: "sans-serif" }}
    >

      <section
        id="hero"
        ref={sectionRef}
        className="relative flex-1 flex items-center overflow-hidden"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <YellowBg />

        <div
          className="
            relative z-10 w-full mx-auto
            px-5 sm:px-8 lg:px-16
            py-10 sm:py-14
            flex flex-col items-center gap-5
            lg:flex-row lg:items-center lg:justify-center lg:gap-8
          "
          style={{ maxWidth: "1100px" }}
        >
          <div className="block lg:hidden order-1 w-full flex justify-center">
            {renderSpeechBubble()}
          </div>

          <div
            ref={photoRef}
            className="order-2 lg:order-2 shrink-0"
            style={{
              width: "clamp(200px, 45vw, 300px)",
              height: "clamp(200px, 45vw, 300px)",
              borderRadius: "50%",
              border: "5px solid #111",
              overflow: "hidden",
              background: "#ffd700",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              boxShadow: "0 6px 32px rgba(0,0,0,0.22)",
            }}
          >
            <img
              src={myPhoto}
              alt="Mansi Singh"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>

          <div
            className="order-3 lg:order-1 flex flex-col gap-3.5 w-full items-center lg:items-start text-center lg:text-left"
            style={{ maxWidth: "520px" }}
          >
            <div className="hidden lg:block w-full">
              {renderSpeechBubble()}
            </div>

            <p
              ref={passionateRef}
              style={{
                fontFamily: "Playpen Sans, cursive",
                fontSize: "clamp(1.5rem, 3vw, 1.5rem)",
                color: "#000",
                margin: 0,
              }}
            >
              A passionate
            </p>

            <h1
              ref={webDevRef}
              style={{
                fontFamily: "Smooch Sans, sans-serif",
                fontSize: "clamp(3rem, 9vw, 5rem)",
                color: "#c0392b",
                letterSpacing: "0.05em",
                lineHeight: 1,
                margin: 0,
                textShadow: "2px 2px 0 #7b1a1a",
              }}
            >
              Web Developer
            </h1>

            <p
              ref={focusedRef}
              style={{
                fontFamily: "Playpen Sans, cursive",
                fontSize: "clamp(1.5rem, 2.8vw, 1.15rem)",
                color: "#000",
                margin: 0,
              }}
            >
              focused on building
            </p>

            <p
              ref={impressiveRef}
              style={{
                fontFamily: "'Bitcount Grid Double', monospace",
                fontSize: "clamp(1.5rem, 2.5vw, 1.22rem)",
                color: "#000",
                fontWeight: "bold",
                letterSpacing: "0.04em",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <RotatingText
              texts={['Impressive', 'clean', 'Interactive', 'Cool']}
              mainClassName=" bg-transparent overflow-hidden justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
              splitBy="characters"
              auto
              loop
            />
            </p>

            <p
              ref={userExpRef}
              style={{
                fontFamily: "Playpen Sans, cursive",
                fontSize: "clamp(1.5rem, 2.8vw, 1.15rem)",
                color: "#000",
                margin: 0,
              }}
            >
              user-experiences that feel like{" "}
              <span
                style={{
                  fontFamily: "Smooch, cursive",
                  color: "#1565c0",
                  fontSize: "clamp(3rem, 3.5vw, 1.5rem)",
                }}
              >
                magic
              </span>
            </p>

            <a
              href="/resumeMS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                width: "clamp(160px, 42vw, 220px)",
                height: "clamp(52px, 13vw, 68px)",
                overflow: "hidden",
                marginTop: "8px",
                transition: "transform 0.12s ease, box-shadow 0.12s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={resumeIcon}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "Smooch, cursive",
                  fontSize: "clamp(1.8rem, 4vw, 1.9rem)",
                  color: "#fff",
                  letterSpacing: "0.05em",
                  textShadow: "0 1px 3px rgba(0,0,0,0.35)",
                }}
              >
                Get Resume
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}
