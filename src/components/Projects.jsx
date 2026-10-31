import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Rock Paper Scissors Game",
    description:
      "A colour accessibility tool for checking contrast ratios and understanding WCAG text accessibility requirements.",
    tags: ["HTML","CSS", "JavaScript"],
    accent: "project-blue",
    github: "https://github.com/Zohafatema/Rock-Paper-Scissor-Game",
    demo: "",
  },
  {
    number: "02",
    category: "WEB-APPLICATION",
    title: "Task Managment App",
    description:
      "A productivity-focused task management application with task creation, editing, deletion, status tracking and an organized dashboard for managing daily activities.",
    tags: ["React", "CSS", "LocalStorage"],
    accent: "project-pink",
    github: "https://github.com/Zohafatema/Task-Management",
    demo: "",
  },
  {
    number: "01",
    category: "WEB ACCESSIBILITY",
    title: "Accessibility Colour Lab",
    description:
      "A colour accessibility tool for checking contrast ratios and understanding WCAG text accessibility requirements.",
    tags: ["React", "JavaScript", "WCAG", "CSS"],
    accent: "project-green",
    github: "https://github.com/",
    demo: "",
  },
  // {
  //   number: "02",
  //   category: "E-COMMERCE",
  //   title: "SugarBloom",
  //   description:
  //     "A bakery storefront concept with product browsing, cake customization and an elegant responsive shopping experience.",
  //   tags: ["React", "CSS", "Supabase"],
  //   accent: "project-pink",
  //   github: "https://github.com/",
  //   demo: "",
  // },
  // {
  //   number: "03",
  //   category: "UTILITY APPLICATION",
  //   title: "Currency Converter",
  //   description:
  //     "A currency conversion interface designed to retrieve exchange rates from an API and convert between currencies.",
  //   tags: ["HTML", "CSS", "JavaScript", "API"],
  //   accent: "project-blue",
  //   github: "https://github.com/",
  //   demo: "",
  // },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">SELECTED WORK</span>

          <h2 className="section-title">
            Things I've <span className="accent">built.</span>
          </h2>

          <p className="section-description">
            A selection of projects that reflect my learning, creativity
            and interest in solving real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="card project-card"
              key={project.number}
            >
              <div className={`project-art ${project.accent}`}>
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-art-shape">
                  <span>{project.number}</span>
                  <span className="art-brackets">{"</>"}</span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="skill-tags project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-pending">
                      Add demo link
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}