import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Zoha Fatema Ansari 
          <br />
          {/* <span className="accent">.</span> */}
        </h1>

        <h2 className="hero-role">
          Full Stack Developer
        </h2>

        <p className="hero-description">
          I build clean, responsive, and user-friendly web
          applications using React, Next.js, JavaScript,
          and modern web technologies. I enjoy transforming
          ideas into practical digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn">
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        {/*
        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={19} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={19} />
            LinkedIn
          </a>
        </div>
        */}
      </div>

      <div className="hero-visual">
        <div className="visual-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="hero-monogram">
          <span>FULL STACK</span>

          <strong>
            DEV<span className="accent">.</span>
          </strong>

          <div className="monogram-symbol">
            {"</>"}
          </div>
        </div>

        <div className="floating-tag tag-top">
          <span className="accent">✳</span>
          Creative Problem Solving
        </div>

        <div className="floating-tag tag-bottom">
          <span className="accent">●</span>
          Building Web Experiences
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} />
        SCROLL TO DISCOVER
      </a>
    </section>
  );
}