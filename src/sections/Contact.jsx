import React,{ useEffect, useRef, useState } from "react";
import YellowBg from "./decorate/YellowBg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instaIcon from "/src/assets/instaIcon.png";
import linkedIn from "/src/assets/linkedIn.png";
import githubIcon from "/src/assets/githubIcon.png";

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

const LocationIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#8c0000"/>
  </svg>
);

const MailIcon = () => (
  <svg width="42" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#8c0000"/>
  </svg>
);

const GitHubIcon = () => (
  <image src="/src/assets/githubIcon"/>
);

const LinkedInIcon = () => (
  <image src="/src/assets/linkedIn"/>
);

const InstaIcon = () => (
  <image src="/src/assets/instaIcon"/>
);

const Building = ({ src, style }) => (
  <img src={src} alt="" style={{ objectFit: "cover", ...style }} />
);

export default function Contact() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };


  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "Playpen Sans, sans-serif",
    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
    color: "#1a1a1a",
    padding: "12px 14px",
    resize: "none",
  };

  const fieldWrap = {
    background: "#ffffff",
    boxShadow: "inset 4px 4px 4px #00000040",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        paddingBottom: 0,
      }}
    >
      <YellowBg />

      <div
        ref={titleRef}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1280,
          padding: "clamp(2rem, 6vh, 4.5rem) clamp(1rem, 5vw, 5rem) clamp(1rem, 3vh, 2rem)",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Notable, sans-serif",
            fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
            fontWeight: 400,
            color: "#020202",
            margin: "0 0 0.4rem 0",
            lineHeight: 1.1,
          }}
        >
          Contact Me?!
        </h1>
        <p
          style={{
            fontFamily: "Playpen Sans, sans-serif",
            fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
            fontWeight: 600,
            color: "#8c0000",
            margin: 0,
            lineHeight: 1.55,
            maxWidth: 760,
            marginInline: "auto",
          }}
        >
          Have a project in mind for me to work on? Or just wanna say hi.....let's connect.
          Contact me on any of my socials or leave a message.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 900,
          padding: "0 clamp(1rem, 5vw, 5rem)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          alignItems: isMobile ? "stretch" : "flex-start",
          marginBottom: "clamp(1.5rem, 4vh, 3rem)",
        }}
      >
        <div
          style={{
            flex: isMobile ? "unset" : "0 0 auto",
            width: isMobile ? "100%" : "clamp(280px, 38%, 420px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1rem, 2.5vh, 1.8rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <MailIcon />
            <a
              href="mailto:parmarmansi0056@gmail.com"
              style={{
                fontFamily: "Playpen Sans, sans-serif",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 600,
                color: "#000",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              parmarmansi0056@gmail.com
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <LocationIcon />
            <span
              style={{
                fontFamily: "Playpen Sans, sans-serif",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontWeight: 600,
                color: "#000",
              }}
            >
              Rourkela, India
            </span>
          </div>

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: "0.5rem" }}>
            <a href="https://github.com/mansiS09" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/mansi-singh-nitrkl/" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
              <InstaIcon />
            </a>
          </div>
        </div>

        <div
          ref={cardRef}
          style={{
            flex: 1,
            background: "#ededef",
            border: "5px solid #000",
            boxSizing: "border-box",
            padding: "clamp(0.8rem, 3vw, 1rem)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(0.6rem, 1.5vh, 1rem)",
          }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 200,
                fontFamily: "Smooch Sans, sans-serif",
                fontSize: "clamp(2rem, 3vw, 1.5rem)",
                color: "#8c0000",
                textAlign: "center",
              }}
            >
              Message sent! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(0.6rem, 1.5vh, 1rem)" }}>
              <div style={{ ...fieldWrap, height: 80 }}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  style={{ ...inputStyle, height: "100%" }}
                />
              </div>

              <div style={{ ...fieldWrap, height: 80 }}>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={{ ...inputStyle, height: "100%" }}
                />
              </div>

              <div style={{ ...fieldWrap, minHeight: 120 }}>
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={7}
                  style={{ ...inputStyle, display: "block", minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: "flex-end",
                  background: "#8c0000",
                  color: "#FFD600",
                  border: "3px solid #1a1a1a",
                  fontFamily: "Notable, sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  letterSpacing: "0.06em",
                  padding: "10px 36px",
                  cursor: "pointer",
                  boxShadow: "4px 4px 0 #1a1a1a",
                  transition: "transform 0.1s, box-shadow 0.1s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "2px 2px 0 #1a1a1a"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "4px 4px 0 #1a1a1a"; }}
              >
                SEND IT!
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}