import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Profile",
  description: "Experience, education, and capabilities of Charles Jr Ancheta.",
};

const experience = [
  {
    period: "May 2026 · Present",
    role: "Project Management Intern",
    organisation: "Curia Regis",
    location: "Singapore",
    current: true,
    description: null,
  },
  {
    period: "June 2023 · February 2024",
    role: "QA Engineer Intern",
    organisation: "NOAH Business Applications",
    location: "Remote",
    current: false,
    description: "Built manual and automated test coverage, reusable Selenium scripts, and structured QA documentation.",
  },
  {
    period: "2020 · 2024",
    role: "Part-time Data Analyst",
    organisation: "Arman Home Furnishing",
    location: "Baguio, Philippines",
    current: false,
    description: "Supported inventory decisions for a local Uratex branch through demand, sales, and stock-movement analysis.",
  },
];

const education = [
  {
    period: "Expected completion December 2026",
    degree: "Master of IT in Business",
    detail: "FinTech and Analytics specialisation",
    school: "Singapore Management University",
    note: "Degree conferral date to be confirmed",
  },
  {
    period: "August 2020 · July 2024",
    degree: "Bachelor of Science in Computer Science",
    detail: "Data Analytics major · Graduated with distinction",
    school: "Saint Louis University, Philippines",
    note: "IT Club facilitator",
  },
];

const capabilities = [
  ["Delivery", "Requirements, Agile delivery, SDLC, QA, UAT, process documentation"],
  ["Analytics", "Python, R, KNIME, Tableau, Excel, time series, geospatial analysis"],
  ["RegTech", "Regulatory research, workflow analysis, requirements, testing governance"],
  ["Tools", "Jira, ClickUp, Confluence, GitHub, Selenium, Java"],
];

export default function ProfilePage() {
  return (
    <div className="standard-page profile-page page-enter">
      <PageHeading
        eyebrow="Profile · Singapore"
        title="A generalist across delivery, data, and regulation."
        introduction="I turn unfamiliar problems into structured requirements, evidence, and work a team can act on."
      />

      <section className="profile-intro" aria-label="Profile summary">
        <p>Computer science trained. FinTech and analytics focused. Hungry for the next useful thing to learn.</p>
        <dl>
          <div><dt>Languages</dt><dd>English, Filipino</dd></div>
          <div><dt>Outside work</dt><dd>Golf, tools, systems, ideas</dd></div>
        </dl>
      </section>

      <section className="timeline-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.organisation}-${item.role}`}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <div className="timeline-heading">
                  <h3>{item.role}</h3>
                  {item.current ? <span>Current</span> : null}
                </div>
                <p className="timeline-organisation">{item.organisation} · {item.location}</p>
                {item.description ? <p className="timeline-description">{item.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <ol className="timeline timeline--education">
          {education.map((item) => (
            <li key={item.degree}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.degree}</h3>
                <p className="timeline-organisation">{item.school}</p>
                <p className="timeline-description">{item.detail}</p>
                <p className="timeline-note">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="profile-capabilities" aria-labelledby="capabilities-title">
        <h2 id="capabilities-title">Capabilities</h2>
        <dl>
          {capabilities.map(([title, detail]) => (
            <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  );
}
