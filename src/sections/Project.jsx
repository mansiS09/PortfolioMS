import React,{ useEffect, useRef, useState } from "react";
import YellowBg from "./decorate/YellowBg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mediarca from "/src/assets/mediarca.png";
import interstellar from "/src/assets/interstellar.png";
import jsQuiz from "/src/assets/jsQuiz.png";
import githubFinder from "/src/assets/githubFinder.png";
import webdevGuide from "/src/assets/webdevGuide.png";

gsap.registerPlugin(ScrollTrigger);

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

const projects = [
  {
    id: 1,
    title: "MediArca Website",
    titleFont: "Bitcount Grid Double",
    screenshot: "/src/assets/mediarca.png",
    description: "MediArca is a scalable, full-stack digital healthcare ecosystem designed to transition traditional offline clinical workflows into a high-efficiency, microservices-ready platform.",
    github: "currently unavailable",
    githubUrl: null,
    live: "https://mediarca.in/",
    liveUrl: "https://mediarca.in/",
  },
  {
    id: 2,
    title: "Interstellar Fanpage",
    titleFont: "Bitcount Grid Double",
    screenshot: "/src/assets/interstellar.png",
    description: 'This was my very first website, simple yet attractive. It is a fan-page of the movie "Interstellar" built using HTML, CSS, and JavaScript.',
    github: "https://github.com/mansiS09/PROJECT-REPO",
    githubUrl: "https://github.com/mansiS09/PROJECT-REPO",
    live: "https://mansis09.github.io/PROJECT-REPO/",
    liveUrl: "https://mansis09.github.io/PROJECT-REPO/",
  },
  {
    id: 3,
    title: "JavaScript Quiz",
    titleFont: "Bitcount Grid Double",
    screenshot: "/src/assets/jsQuiz.png",
    description: "This web-page is a quiz created to test user's knowledge in basic JavaScript.",
    github: "https://github.com/mansiS09/task2vercel",
    githubUrl: "https://github.com/mansiS09/task2vercel",
    live: "https://task2webwiz26.vercel.app/",
    liveUrl: "https://task2webwiz26.vercel.app/",
  },
  {
    id: 4,
    title: "Github Profile Finder",
    titleFont: "Bitcount Grid Double",
    screenshot: "/src/assets/githubFinder.png",
    description: "This website is a github profile finder that fetches the summary of a github profile using username.",
    github: "https://github.com/mansiS09/task3webwiz",
    githubUrl: "https://github.com/mansiS09/task3webwiz",
    live: "https://task3vercel.vercel.app/",
    liveUrl: "https://task3vercel.vercel.app/",
  },
  {
    id: 5,
    title: "Beginner WebDev Guide",
    titleFont: "Bitcount Grid Double",
    screenshot: "/src/assets/webdevGuide.png",
    description: "This website is a beginner's guide to start web development.",
    github: "https://github.com/mansiS09/Task1webwiz",
    githubUrl: "https://github.com/mansiS09/Task1webwiz",
    live: "https://mansis09.github.io/Task1webwiz/",
    liveUrl: "https://mansis09.github.io/Task1webwiz/",
  },
];

const ComicCard = ({ project }) => {
  const border = "3px solid #1a1a1a";
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", fontFamily: "Inter, sans-serif", borderRadius: 4, overflow: "hidden", boxShadow: "6px 6px 0 #1a1a1a, 0 2px 8px #00000060", border, background: "#fff", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "absolute", top: 6, right: -28, width: 90, height: 26, background: "#e63946", color: "#fffde7", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(45deg)", letterSpacing: "0.05em", zIndex: 10, boxShadow: "0 2px 4px #00000040" }}>
        NEW!
      </div>

      <div style={{ flex: "0 0 38%", borderBottom: border, overflow: "hidden", background: "#111" }}>
        <img src={project.screenshot} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.92 }} />
      </div>

      <div style={{ borderBottom: border, padding: "7px 12px", background: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: project.titleFont, fontSize: "clamp(0.85rem, 2vw, 1.35rem)", fontWeight: 500, color: "#1a1a1a", textAlign: "center", lineHeight: 1.2 }}>
          {project.title}
        </span>
      </div>

      <div style={{ padding: "8px 12px", background: "#c0392b", borderBottom: border, flex: "1 1 auto" }}>
        <div style={{ display: "inline-block", background: "#c0392b", border: "2px solid #fffde7", color: "#fffde7", fontSize: 9, fontWeight: 700, padding: "1px 6px", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>
          DESCRIPTION
        </div>
        <p style={{ margin: 0, color: "#fff", fontSize: "clamp(0.65rem, 1vw, 0.82rem)", fontWeight: 700, lineHeight: 1.5 }}>
          {project.description}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: border }}>
        <div style={{ padding: "8px 10px", borderRight: border, background: "#1a1a1a", display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 13, color: "#1a1a1a", background: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>⌥</span>
            <span style={{ color: "#FFD600", fontWeight: 800, fontSize: 10, letterSpacing: "0.06em" }}>GITHUB REPO</span>
          </div>
          {project.githubUrl
            ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: 10, wordBreak: "break-all", textDecoration: "none", lineHeight: 1.3 }}>{project.github}</a>
            : <span style={{ color: "#aaa", fontSize: 10 }}>{project.github}</span>}
        </div>
        <div style={{ padding: "8px 10px", background: "#0066ff", display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 13, color: "#0066ff", background: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>⊕</span>
            <span style={{ color: "#FFD600", fontWeight: 800, fontSize: 10, letterSpacing: "0.06em" }}>LIVE SITE</span>
          </div>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: 10, wordBreak: "break-all", textDecoration: "none", lineHeight: 1.3 }}>{project.live}</a>
        </div>
      </div>

      <div style={{ background: "#1a1a1a", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#FFD600", fontSize: 10, fontWeight: 400, letterSpacing: "0.12em" }}>★ PORTFOLIO SHOWCASE ★</span>
      </div>
    </div>
  );
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [current, setCurrent] = useState(0);
  const perPage = isMobile ? 1 : 2;
  const maxIndex = projects.length - perPage;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -60, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 80, opacity: 0, duration: 0.7, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrent(clamped);
    if (!trackRef.current) return;
    const cardEl = trackRef.current.children[0];
    if (!cardEl) return;
    const gap = isMobile ? 20 : 36;
    const cardW = cardEl.offsetWidth;
    gsap.to(trackRef.current, { x: -(clamped * (cardW + gap)), duration: 0.55, ease: "power3.inOut" });
  };

  useEffect(() => { goTo(0); }, [isMobile]);

  const btnStyle = (disabled) => ({
    width: 44, height: 44, borderRadius: "50%", border: "3px solid #1a1a1a",
    background: disabled ? "#ccc" : "#FFD600", color: "#1a1a1a", fontSize: 22, fontWeight: 900,
    cursor: disabled ? "not-allowed" : "pointer", display: "flex", alignItems: "center",
    justifyContent: "center", boxShadow: disabled ? "none" : "3px 3px 0 #1a1a1a", flexShrink: 0,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "clamp(5rem, 10vh, 7rem) 0 clamp(2rem, 5vh, 4rem)", boxSizing: "border-box",
      }}
    >
      <YellowBg />

      <div ref={titleRef} style={{ position: "relative", zIndex: 1, marginBottom: "clamp(1.2rem, 3vw, 2.5rem)", textAlign: "center", padding: "0 1rem" }}>
        <h1 style={{ fontFamily: "Notable, sans-serif", fontSize: "clamp(1.8rem, 5.5vw, 3.8rem)", fontWeight: 400, color: "#020202", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em", textShadow: "3px 3px 0 #FFD60080" }}>
          My Projects
        </h1>
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", overflow: "hidden", padding: "0 clamp(12px, 4vw, 48px)", boxSizing: "border-box" }}>
        <div ref={trackRef} style={{ display: "flex", gap: isMobile ? 20 : 36, willChange: "transform", alignItems: "stretch" }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                flexShrink: 0,
                width: isMobile ? "calc(100vw - 48px)" : "clamp(300px, 42%, 460px)",
                height: isMobile ? 520 : "clamp(480px, 55vh, 640px)",
              }}
            >
              <ComicCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 18, marginTop: "clamp(1rem, 2.5vw, 1.8rem)" }}>
        <button style={btnStyle(current === 0)} onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous">‹</button>
        <div style={{ display: "flex", gap: 8 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: 11, height: 11, borderRadius: "50%", border: "2.5px solid #1a1a1a", background: current === i ? "#1a1a1a" : "#FFD600", cursor: "pointer", padding: 0 }} />
          ))}
        </div>
        <button style={btnStyle(current >= maxIndex)} onClick={() => goTo(current + 1)} disabled={current >= maxIndex} aria-label="Next">›</button>
      </div>
    </section>
  );
}
