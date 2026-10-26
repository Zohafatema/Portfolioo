
import { Code2, Database, Palette, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    icon: Palette,
    title: "UI & Accessibility",
    skills: ["Responsive Design", "Flexbox", "CSS Grid", "WCAG Basics"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "REST APIs", "SQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "AI Development Tools"],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">MY TOOLKIT</span>
          <h2 className="section-title">
            Skills & <span className="accent">technologies.</span>
          </h2>
          <p className="section-description">
            Technologies I use and am exploring to create better web
            experiences. Update this list to match your actual skills.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, skills: items }) => (
            <article className="card skill-card" key={title}>
              <div className="skill-heading">
                <Icon size={23} />
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
