
import { ArrowUpRight, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Writing structured, maintainable and reusable components.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    text: "Exploring thoughtful designs and practical solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    text: "Learning new technologies through hands-on projects.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">GET TO KNOW ME</span>
          <h2 className="section-title">
            More than just <span className="accent">code.</span>
          </h2>
          <p className="section-description">
            A little about my journey, what motivates me, and how I
            approach building digital experiences.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <h3>Curious mind. Creative builder.</h3>
            <p>
              I'm a student and aspiring frontend developer who enjoys
              building websites that look great and work smoothly on
              different devices.
            </p>
            <p>
              Through personal projects, internship assignments and
              coding challenges, I'm developing my skills in React,
              JavaScript, responsive design and web accessibility.
            </p>
            <a className="text-link" href="#contact">
              Let's connect <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="highlight-list">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="card highlight-card" key={title}>
                <div className="highlight-icon"><Icon size={22} /></div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
