import type { CSSProperties } from "react";

const keyMetrics = [
  {
    value: "20+",
    label: "Years of experience",
    note: "Engineering delivery across enterprise finance and business growth",
  },
  {
    value: "11",
    label: "Engineers led",
    note: "Built high-accountability teams for mission-critical delivery",
  },
  {
    value: "2x to 4x",
    label: "Business scale impact",
    note: "Entrepreneurial operating model for practical growth execution",
  },
  {
    value: "Global",
    label: "Institutional footprint",
    note: "Platforms used in international banking environments",
  },
] as const;

const enterpriseExperience = [
  {
    company: "Societe Generale",
    focus: "Risk Valuation Platform Leadership",
    summary:
      "Directed architecture and delivery for valuation adjustment systems across equity and fixed-income workflows.",
    outcomes: [
      "Designed stochastic model integration for pricing accuracy and auditability",
      "Led an 11-engineer team with clear delivery cadences and quality ownership",
      "Improved reliability of risk operations by reducing manual error pathways",
    ],
  },
  {
    company: "Global Banking Technology",
    focus: "Quantitative Systems Architecture",
    summary:
      "Built and modernized performance-oriented platforms where engineering quality and financial correctness both matter.",
    outcomes: [
      "Connected quantitative research with production-grade software architecture",
      "Improved throughput in high-volume risk and pricing data pipelines",
      "Translated complex model requirements into maintainable engineering systems",
    ],
  },
] as const;

const ventureExperience = [
  {
    title: "NZ Shuttle Business",
    role: "Business Development Consultant",
    summary:
      "Applied product thinking and operational discipline to scale a transportation business from 2x to 4x.",
    outcomes: [
      "Reframed service operations around customer demand patterns",
      "Improved unit economics through route and process optimization",
      "Created a repeatable growth playbook for sustainable expansion",
    ],
  },
] as const;

const expertiseAreas = [
  "Engineering Leadership",
  "Quant Finance Platforms",
  "Risk & Pricing Systems",
  "Enterprise Architecture",
  "Business Strategy",
  "Entrepreneurial Operations",
  "Platform Modernization",
  "Scalable Team Building",
] as const;

const advisoryThemes = [
  "Modernize legacy financial systems without losing control of risk",
  "Align business goals, architecture decisions, and delivery velocity",
  "Scale products with the discipline of enterprise engineering",
] as const;

function animationDelay(delayMs: number): CSSProperties {
  return { "--delay": `${delayMs}ms` } as CSSProperties;
}

export default function Home() {
  return (
    <div className="page-shell">
      <header className="top-nav reveal" style={animationDelay(80)}>
        <p className="brand-mark">Jitendra Pathak</p>
        <nav aria-label="Primary" className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#venture">Entrepreneur</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section reveal" style={animationDelay(140)}>
          <p className="eyebrow">Engineering Leader • Quant Finance Architect • Entrepreneur</p>
          <h1>
            Building high-performance financial platforms with the execution depth
            of a 20-year operator.
          </h1>
          <p className="hero-lead">
            I help organizations move from complex ideas to measurable outcomes,
            combining enterprise-grade engineering leadership with entrepreneurial
            speed and accountability.
          </p>
          <div className="hero-cta">
            <a
              href="https://github.com/jitendrakPathak"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              View GitHub
            </a>
            <a href="#contact" className="button button-ghost">
              Discuss Collaboration
            </a>
          </div>
          <div className="metrics-grid" aria-label="Key metrics">
            {keyMetrics.map((metric, index) => (
              <article
                key={metric.label}
                className="metric-card reveal"
                style={animationDelay(220 + index * 90)}
              >
                <p className="metric-value">{metric.value}</p>
                <h2>{metric.label}</h2>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="profile" className="section split-section reveal" style={animationDelay(180)}>
          <article className="feature-card">
            <p className="section-tag">Leadership Profile</p>
            <h2>Enterprise confidence, entrepreneur mindset.</h2>
            <p>
              My core strength is operating at the intersection of engineering,
              finance, and business strategy. I build platforms that satisfy strict
              enterprise standards while still delivering with practical speed.
            </p>
            <p>
              This dual lens enables me to lead technical transformation, mentor
              teams, and drive outcomes that leadership teams can trust.
            </p>
          </article>

          <article className="feature-card">
            <p className="section-tag">Advisory Focus</p>
            <ul className="statement-list">
              {advisoryThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
            <p className="small-note">
              Ideal for CTO advisory, platform modernization programs, and
              founder-led scaling journeys.
            </p>
          </article>
        </section>

        <section id="experience" className="section reveal" style={animationDelay(220)}>
          <div className="section-headline">
            <p className="section-tag">Enterprise Experience</p>
            <h2>Impact where precision and scale are non-negotiable.</h2>
          </div>
          <div className="timeline-grid">
            {enterpriseExperience.map((item, index) => (
              <article
                key={item.company}
                className="timeline-card reveal"
                style={animationDelay(280 + index * 100)}
              >
                <p className="timeline-company">{item.company}</p>
                <h3>{item.focus}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="venture" className="section reveal" style={animationDelay(260)}>
          <div className="section-headline">
            <p className="section-tag">Entrepreneur Profile</p>
            <h2>Translating strategy into growth on the ground.</h2>
          </div>
          {ventureExperience.map((item) => (
            <article key={item.title} className="venture-card reveal" style={animationDelay(320)}>
              <div>
                <p className="timeline-company">{item.role}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <ul>
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section reveal" style={animationDelay(300)}>
          <div className="section-headline">
            <p className="section-tag">Capability Stack</p>
            <h2>What I bring to teams and founders.</h2>
          </div>
          <div className="chip-grid">
            {expertiseAreas.map((area, index) => (
              <span
                key={area}
                className="chip reveal"
                style={animationDelay(360 + index * 70)}
              >
                {area}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="section footer-card reveal" style={animationDelay(380)}>
        <p className="section-tag">Let&apos;s Build Something Meaningful</p>
        <h2>Open to leadership, advisory, and high-impact build opportunities.</h2>
        <p>
          If your team needs a senior operator who can align architecture,
          execution, and growth, let&apos;s connect.
        </p>
        <a
          href="https://github.com/jitendrakPathak"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          Connect on GitHub
        </a>
      </footer>
    </div>
  );
}
