import React, { useState, useEffect } from "react";
import "./Header.css";
import Sai from "./Sai.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaCode, FaRocket, FaGlobe } from "react-icons/fa";

const roles = [
  "Professional React Developer",
  "Front-End Architect",
  "Geospatial UI Engineer",
  "Full-Stack Enthusiast"
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === activeRole.length) {
      typingSpeed = 2000; // Pause at end of text
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? activeRole.substring(0, charIndex - 1)
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <a href="#home" className="logo">
            <span className="logo-bracket">&lt;</span>
            J N V Sai Kumar
            <span className="logo-bracket"> /&gt;</span>
          </a>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>Skills & Playground</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span> Available for Opportunities
            </div>
            <h1>
              Hi, I'm <span className="highlight">J N V Sai Kumar</span>
            </h1>
            <div className="typewriter-container">
              <h3>
                <span className="typed-text">{typedText}</span>
                <span className="cursor">|</span>
              </h3>
            </div>
            <p className="hero-description">
              Specializing in building high-performance web applications using **React.js**, 
              robust state systems, and clean architectural principles. Transitioned from GIS 
              Engineering, bringing advanced spatial data logic and analytical problem-solving to front-end development.
            </p>
            
            {/* Quick Stats */}
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-num">98%</span>
                <span className="stat-lbl">Core Web Vitals Performance</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">1 Yr</span>
                <span className="stat-lbl">GIS Engineer Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Component Reusability Focus</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="glow-btn">
                Explore My Work <FaRocket style={{ marginLeft: "8px" }} />
              </a>
              <a href="#contact" className="outline-btn">
                Contact Me <FaEnvelope style={{ marginLeft: "8px" }} />
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:saikumarjayanthi6@gmail.com" className="social-icon" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="pic">
              <img src={Sai} alt="Sai Kumar Profile" />
              <div className="floating-tech-badge tech-react">
                <FaCode />
              </div>
              <div className="floating-tech-badge tech-gis">
                <FaGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;