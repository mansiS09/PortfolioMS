import React,{ useEffect, useRef, useState } from "react";
import YellowBg from "./decorate/YellowBg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import polyAbout from "/src/assets/polyAbout.png";
import polyDescri from "/src/assets/polyDescri.png";
import polyEdu from "/src/assets/polyEdu.png";
import polySkills from "/src/assets/polySkills.png";

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

const AboutMe = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <img
      src={polyAbout}
      alt=""
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10% 10%",
      }}
    >
      <span
        style={{
          fontFamily: "Notable, sans-serif",
          fontSize: "clamp(2rem, 6vw, 5rem)",
          color: "#FFD700",
          textShadow: "3px 3px 0 #8B0000, -1px -1px 0 #8B0000, 1px -1px 0 #8B0000, -1px 1px 0 #8B0000",
          letterSpacing: "0.06em",
          lineHeight: 1.05,
          textAlign: "center",
          textTransform: "uppercase",
          WebkitTextStroke: "1px #8B0000",
        }}
      >
        ABOUT<br />ME
      </span>
    </div>
  </div>
);

const IntroText = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <img
      src={polyDescri}
      alt=""
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1rem, 5%, 2rem) clamp(1.2rem, 6%, 2.8rem)",
      }}
    >
      <p
        style={{
          fontFamily: "Playpen Sans, sans-serif",
          fontSize: "clamp(0.72rem, 1.3vw, 1.05rem)",
          color: "#1a1a1a",
          textAlign: "center",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        I build{" "}
        <strong style={{ textDecoration: "underline" }}>high-performance web applications</strong>{" "}
        that combine clean code with{" "}
        <strong style={{ fontStyle: "italic" }}>intuitive design.</strong> As a developer, I love
        tackling complex technical challenges and turning them into{" "}
        <strong style={{ textDecoration: "underline" }}>seamless user experiences.</strong> I am
        always exploring new frameworks and tools to ensure the software I deliver is both{" "}
        <strong>scalable</strong> and modern.
      </p>
    </div>
  </div>
);

const Education = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <img
      src={polyEdu}
      alt=""
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "clamp(1rem, 5%, 2rem) clamp(1.2rem, 6%, 2.5rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Playpen Sans, sans-serif",
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          color: "#1a1a1a",
          margin: "0 0 0.5rem 0",
          letterSpacing: "0.04em",
        }}
      >
        Education
      </h2>
      <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {[
          { school: "NIT Rourkela", detail: "B.Tech (Artificial Intelligence)" },
          { school: "Dadhichi Public School, Cuttack", detail: "AISSCE (12TH) - 90%" },
          { school: "Doon International School, BBSR", detail: "Matriculation (10TH) - 94%" },
        ].map((item, i) => (
          <li key={i} style={{ lineHeight: 1.35 }}>
            <span style={{ fontFamily: "Playpen Sans, sans-serif", fontSize: "clamp(0.75rem, 1.1vw, 0.98rem)", color: "#8B0000", fontWeight: "bold", display: "block" }}>
              {item.school}
            </span>
            <span style={{ fontFamily: "Playpen Sans, sans-serif", fontSize: "clamp(0.68rem, 1vw, 0.88rem)", color: "#1a1a1a" }}>
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <img
      src={polySkills}
      alt=""
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "clamp(1rem, 4%, 1.8rem) clamp(1.5rem, 6%, 3rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Playpen Sans, sans-serif",
          fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)",
          color: "#E8A000",
          margin: "0 0 0.65rem 0",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}
      >
        Skills
      </h2>
      <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%", maxWidth: 320 }}>
        {[
          "FrontEnd Development",
          "Open Source Contribution",
          "Team Collaboration",
          "Communication Skills",
          "Version control & Tools",
          "Adaptability to new tech-stack",
        ].map((skill, i) => (
          <li key={i} style={{ fontFamily: "Playpen Sans, sans-serif", fontSize: "clamp(0.7rem, 1.1vw, 0.95rem)", color: "#1a1a1a", lineHeight: 1.4 }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function About() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const introRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(aboutRef.current, { x: "-110vw", opacity: 0 });
      gsap.set(introRef.current, { y: "-110vh", opacity: 0 });
      gsap.set(educationRef.current, { x: "110vw", opacity: 0 });
      gsap.set(skillsRef.current, { y: "110vh", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });

      tl.to(aboutRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" })
        .to(introRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.45")
        .to(educationRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.45")
        .to(skillsRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.45");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(5rem, 10vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 4rem)",
        boxSizing: "border-box",
      }}
    >
      <YellowBg />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gridTemplateRows: "auto",
          gap: "clamp(8px, 1.5vw, 18px)",
          aspectRatio: isMobile ? "unset" : "1/1",
        }}
      >
        <div ref={aboutRef} style={{ gridColumn: "1 / 2", gridRow: isMobile ? "auto" : "1 / 2", position: "relative", minHeight: isMobile ? 220 : undefined}}>
          <AboutMe />
        </div>
        <div ref={introRef} style={{ gridColumn: isMobile ? "1 / 2" : "2 / 3", gridRow: isMobile ? "auto" : "1 / 2", position: "relative", minHeight: isMobile ? 220 : undefined }}>
          <IntroText />
        </div>
        <div ref={educationRef} style={{ gridColumn: "1 / 2", gridRow: isMobile ? "auto" : "2 / 3", position: "relative", minHeight: isMobile ? 240 : undefined }}>
          <Education />
        </div>
        <div ref={skillsRef} style={{ gridColumn: isMobile ? "1 / 2" : "2 / 3", gridRow: isMobile ? "auto" : "2 / 3", position: "relative", minHeight: isMobile ? 240 : undefined }}>
          <Skills />
        </div>
      </div>
    </section>
  );
}