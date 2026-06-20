import React,{ useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0, pointerEvents: "none" },
        { y: 0, opacity: 1, pointerEvents: "all", duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -10, opacity: 0, pointerEvents: "none", duration: 0.2, ease: "power2.in",
      });
    }
  }, [open]);

  useEffect(() => {
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.7, ease: "power3.out",clearProps: "transform" });
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "#ffffff" : "#fff",
        borderBottom: "7px solid #000000",
        boxShadow: scrolled ? "0 4px 0 #000000" : "none",
        transition: "box-shadow 0.3s, background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          height: "clamp(60px, 8vw, 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 4vw, 3rem)",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "Notable, sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            color: "#8c0000",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}
          onClick={() => handleNav("#home")}
        >
          Mansi
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(1rem, 3vw, 2.5rem)",
          }}
          className="nav-desktop"
        >
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Playpen Sans, sans-serif",
                fontSize: "clamp(0.9rem, 1.6vw, 1.4rem)",
                fontWeight: 600,
                color: "#000",
                padding: "4px 0",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#8c0000"}
              onMouseLeave={e => e.currentTarget.style.color = "#000"}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "2.5px solid #1a1a1a",
            width: 42,
            height: 42,
            cursor: "pointer",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: 8,
            boxSizing: "border-box",
          }}
          className="nav-hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "100%",
                height: 2.5,
                background: "#1a1a1a",
                borderRadius: 2,
                transition: "transform 0.2s",
                transformOrigin: "center",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : open && i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      <div
        ref={menuRef}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#ededef",
          borderBottom: "4px solid #000",
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem 0",
          opacity: 0,
          pointerEvents: "none",
        }}
        className="nav-mobile-menu"
      >
        {LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNav(link.href)}
            style={{
              background: "none",
              border: "none",
              borderBottom: "1px solid #00000020",
              cursor: "pointer",
              fontFamily: "Playpen Sans, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#000",
              padding: "14px 2rem",
              textAlign: "left",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
