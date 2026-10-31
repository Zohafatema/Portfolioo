
import { GraduationCap, BriefcaseBusiness, Trophy } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    type: "EDUCATION",
    title: "Bachelor's of Computer Science",
    organization: "Dr. Babasaheb Ambedkar Marathwada University (BAMU) Aurangabad",
    period: "2024 - 2027",
    details: "Add your course, relevant subjects and achievements.",
  },
  {
    icon: BriefcaseBusiness,
    type: "INTERNSHIP",
    title: "Frontend Development Intern",
    organization: "SpireX Foundation",
    period: "01 sep - 30 sep 2026",
    details:
      "Worked on frontend assignments involving HTML, CSS and JavaScript, responsive layouts and practical web development.",
  },
  {
    icon: Trophy,
    type: "ACHIEVEMENT",
    title: "SWAYAMBHU 2K26",
    organization: "MGM University",
    period: "2026",
    details:
      "Participated in a vibe coding competition and developed an Accessibility Colour Lab project.",
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">MY JOURNEY</span>
          <h2 className="section-title">
            Learning by <span className="accent">doing.</span>
          </h2>
          <p className="section-description">
            My education, practical experience and milestones along the way.
          </p>
        </div>

        <div className="timeline">
          {timeline.map(({ icon: Icon, type, title, organization, period, details }) => (
            <article className="timeline-item" key={title}>
              <div className="timeline-icon"><Icon size={21} /></div>
              <div className="card timeline-card">
                <div className="timeline-top">
                  <span className="eyebrow">{type}</span>
                  <span className="timeline-period">{period}</span>
                </div>
                <h3>{title}</h3>
                <h4>{organization}</h4>
                <p>{details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
