import type { CSSProperties } from "react";
import Image from "next/image";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

type Domain = {
  title: string;
  summary: string;
  points: string[];
};

type LinkCard = {
  platform: string;
  handle: string;
  href: string;
  kind: "social" | "coding";
};

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years across core industries",
    detail: "Banking, transport, shuttle, tours, SEO, and business development",
  },
  {
    value: "5",
    label: "Years as entrepreneur",
    detail: "Built businesses from scratch and helped teams scale sustainably",
  },
  {
    value: "2x-4x",
    label: "Regional growth results",
    detail: "Hands-on execution model from strategy to operations",
  },
  {
    value: "Multi-Sector",
    label: "Leadership range",
    detail: "Enterprise systems mindset with field-level business ownership",
  },
];

const domainExperience: Domain[] = [
  {
    title: "Banking Technology & Delivery",
    summary:
      "Led high-accountability delivery in financial and risk-sensitive environments where quality, controls, and speed all matter.",
    points: [
      "Built reliable, scalable systems for complex business workflows",
      "Coordinated technology decisions with leadership and business units",
      "Raised delivery standards through clearer process and ownership",
    ],
  },
  {
    title: "Transport, Shuttle & Tours Operations",
    summary:
      "Improved operational flow for customer-facing mobility services with measurable impact on growth and repeatability.",
    points: [
      "Aligned service design to real regional demand patterns",
      "Improved operating efficiency through route and process planning",
      "Supported growth from early stage to stronger execution maturity",
    ],
  },
  {
    title: "SEO, Business Development & Market Expansion",
    summary:
      "Delivered practical growth systems that connect digital visibility, sales execution, and long-term business value.",
    points: [
      "Improved lead quality with SEO-focused positioning",
      "Built business development pipelines grounded in market insight",
      "Helped owners turn fragmented efforts into repeatable growth motion",
    ],
  },
];

const entrepreneurHighlights = [
  "Built businesses from zero to active operations with clear go-to-market plans",
  "Helped regional founders structure execution for consistent growth",
  "Blended strategic thinking with on-ground action and accountability",
] as const;

const socialLinks: LinkCard[] = [
  {
    platform: "LinkedIn",
    handle: "@jitendrapathak",
    href: "https://www.linkedin.com/in/jitendrapathak/",
    kind: "social",
  },
  {
    platform: "X / Twitter",
    handle: "@jitendrakPathak",
    href: "https://x.com/jitendrakPathak",
    kind: "social",
  },
  {
    platform: "Instagram",
    handle: "@jitendrakpathak",
    href: "https://www.instagram.com/jitendrakpathak/",
    kind: "social",
  },
  {
    platform: "YouTube",
    handle: "@jitendrakpathak",
    href: "https://www.youtube.com/@jitendrakpathak",
    kind: "social",
  },
  {
    platform: "GitHub",
    handle: "@jitendrakPathak",
    href: "https://github.com/jitendrakPathak",
    kind: "coding",
  },
  {
    platform: "LeetCode",
    handle: "@jitendrakpathak",
    href: "https://leetcode.com/jitendrakpathak/",
    kind: "coding",
  },
  {
    platform: "HackerRank",
    handle: "@jitendrakpathak",
    href: "https://www.hackerrank.com/jitendrakpathak",
    kind: "coding",
  },
  {
    platform: "Stack Overflow",
    handle: "Jitendra Pathak",
    href: "https://stackoverflow.com/users",
    kind: "coding",
  },
];

function withDelay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

function NameLogo() {
  return (
    <div className="name-logo">
      <Image
        src="/jp-monogram.svg"
        alt="JP monogram logo"
        width={58}
        height={58}
        priority
      />
      <div>
        <p className="logo-name">Jitendra Pathak</p>
        <p className="logo-subtitle">Operator • Builder • Entrepreneur</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-header fade-up" style={withDelay(70)}>
        <NameLogo />
        <nav aria-label="Primary" className="site-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#entrepreneur">Entrepreneur</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main>
        <section className="hero-grid section fade-up" style={withDelay(120)}>
          <article className="hero-copy">
            <p className="kicker">Modern Portfolio</p>
            <h1>
              Jitendra Pathak
              <span>Building strong businesses with engineering discipline.</span>
            </h1>
            <p>
              I bring over a decade of cross-industry experience across banking,
              transport, shuttle, tours, SEO, and business development, plus 5
              years of entrepreneurship helping businesses grow in the region.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#connect">
                Connect With Me
              </a>
              <a className="btn btn-outline" href="#experience">
                View Journey
              </a>
            </div>
          </article>

          <aside className="hero-panel fade-up" style={withDelay(180)}>
            <p className="panel-label">Profile Snapshot</p>
            <h2>Leadership + Growth + Execution</h2>
            <p>
              From enterprise delivery to entrepreneur-led expansion, my focus is
              always the same: build systems that perform and businesses that grow.
            </p>
            <p className="panel-foot">Available for leadership roles and advisory collaboration.</p>
          </aside>
        </section>

        <section className="stats-grid section" aria-label="Key stats">
          {stats.map((item, index) => (
            <article className="stat-card fade-up" style={withDelay(230 + index * 75)} key={item.label}>
              <p className="stat-value">{item.value}</p>
              <h2>{item.label}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="about" className="section split-layout fade-up" style={withDelay(250)}>
          <article>
            <p className="section-eyebrow">About</p>
            <h2>Enterprise-grade thinking with entrepreneurial speed.</h2>
            <p>
              I work where strategy meets execution. My style is practical,
              delivery-focused, and built around measurable outcomes that teams
              and founders can trust.
            </p>
          </article>
          <article className="quote-card">
            <p>
              &ldquo;Strong businesses are not built by ideas alone. They are
              built by disciplined execution, customer focus, and systems that
              scale.&rdquo;
            </p>
            <span>- Jitendra Pathak</span>
          </article>
        </section>

        <section id="experience" className="section">
          <div className="heading-block fade-up" style={withDelay(300)}>
            <p className="section-eyebrow">Experience</p>
            <h2>10+ years across delivery, operations, and growth.</h2>
          </div>
          <div className="domain-grid">
            {domainExperience.map((domain, index) => (
              <article className="domain-card fade-up" style={withDelay(340 + index * 90)} key={domain.title}>
                <h3>{domain.title}</h3>
                <p>{domain.summary}</p>
                <ul>
                  {domain.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="entrepreneur" className="section founder-section fade-up" style={withDelay(390)}>
          <div>
            <p className="section-eyebrow">Entrepreneur Journey</p>
            <h2>5 years of building and scaling from scratch.</h2>
            <p>
              I have worked closely with businesses in the region to launch,
              structure, and scale operations in competitive markets.
            </p>
          </div>
          <ul>
            {entrepreneurHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="connect" className="section">
          <div className="heading-block fade-up" style={withDelay(430)}>
            <p className="section-eyebrow">Connect</p>
            <h2>Find me on social and coding platforms.</h2>
          </div>
          <div className="links-grid">
            {socialLinks.map((link, index) => (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-card fade-up"
                style={withDelay(470 + index * 55)}
                aria-label={`Open ${link.platform}`}
              >
                <p className="link-kind">{link.kind === "social" ? "Social" : "Coding"}</p>
                <h3>{link.platform}</h3>
                <p>{link.handle}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer section fade-up" style={withDelay(620)}>
        <NameLogo />
        <p>
          Portfolio of Jitendra Pathak. Focused on leadership, growth, and modern execution.
        </p>
      </footer>
    </div>
  );
}
