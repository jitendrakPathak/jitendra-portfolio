import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";

export const WORK_CASE_DATA: readonly PortfolioWorkCase[] = [
  {
    slug: "banking-risk-command-center",
    title: "Banking Risk Command Center",
    subtitle: "Real-time monitoring for critical financial operations",
    excerpt:
      "A unified control layer to improve visibility and response time for risk-sensitive workflows.",
    category: "Banking",
    year: "2024",
    tone: "teal",
    challenge:
      "Risk alerts were scattered across tools, causing decision delays and duplicated effort.",
    approach:
      "Designed a central dashboard model with prioritized incidents, ownership states, and action trails.",
    impact:
      "Faster escalation cycles, stronger accountability, and better leadership visibility in daily operations.",
    highlights: ["Operational alerts", "Ownership routing", "Executive visibility"],
  },
  {
    slug: "credit-workflow-redesign",
    title: "Credit Workflow Redesign",
    subtitle: "Improving turnaround and compliance consistency",
    excerpt:
      "A structured flow for processing high-volume credit requests with better handoff discipline.",
    category: "Banking",
    year: "2023",
    tone: "amber",
    challenge:
      "Multiple approval steps lacked standardization, creating delays and uneven compliance coverage.",
    approach:
      "Mapped end-to-end process dependencies and introduced milestone-based workflow checkpoints.",
    impact:
      "Reduced cycle time and improved quality consistency across credit decision journeys.",
    highlights: ["Process mapping", "Quality controls", "Cycle-time improvement"],
  },
  {
    slug: "branch-performance-compass",
    title: "Branch Performance Compass",
    subtitle: "Regional branch analytics with clear execution signals",
    excerpt:
      "A compact KPI model to help branch teams align customer outcomes and business targets.",
    category: "Banking",
    year: "2022",
    tone: "blue",
    challenge:
      "Branch managers had fragmented reporting views and limited insight into underperforming actions.",
    approach:
      "Built a role-specific scorecard framework with trend-based indicators and team-level actions.",
    impact:
      "Stronger weekly reviews, clearer accountability, and more predictable performance cadence.",
    highlights: ["KPI scorecards", "Trend snapshots", "Team action loops"],
  },
  {
    slug: "shuttle-demand-optimizer",
    title: "Shuttle Demand Optimizer",
    subtitle: "Demand-aware route planning for shuttle operations",
    excerpt:
      "A scheduling framework that balances occupancy, customer convenience, and driver utilization.",
    category: "Shuttle",
    year: "2024",
    tone: "violet",
    challenge:
      "Route allocation relied heavily on intuition, resulting in peak congestion and off-peak waste.",
    approach:
      "Introduced demand windows, service clustering, and route prioritization based on local patterns.",
    impact:
      "Better seat utilization and smoother customer service during high-demand periods.",
    highlights: ["Route logic", "Peak balancing", "Utilization gains"],
  },
  {
    slug: "fleet-reliability-program",
    title: "Fleet Reliability Program",
    subtitle: "Reducing downtime across transport service units",
    excerpt:
      "A preventive operations model that aligns maintenance planning with active route demand.",
    category: "Transport",
    year: "2023",
    tone: "mint",
    challenge:
      "Reactive maintenance created avoidable route disruptions and service unpredictability.",
    approach:
      "Built a maintenance priority matrix tied to route criticality and vehicle health signals.",
    impact:
      "More stable daily operations and improved service confidence for customers.",
    highlights: ["Maintenance matrix", "Priority scheduling", "Service continuity"],
  },
  {
    slug: "tour-operations-suite",
    title: "Tour Operations Suite",
    subtitle: "Structured journey orchestration for tour experiences",
    excerpt:
      "A practical framework to coordinate bookings, guides, partners, and feedback loops.",
    category: "Tours",
    year: "2022",
    tone: "rose",
    challenge:
      "Tour planning tasks were manual and difficult to scale without consistency.",
    approach:
      "Defined reusable service playbooks with clear pre-tour, live-tour, and post-tour checkpoints.",
    impact:
      "Higher service consistency and better customer satisfaction across seasonal demand changes.",
    highlights: ["Journey playbooks", "Partner alignment", "Experience consistency"],
  },
  {
    slug: "seo-authority-engine",
    title: "SEO Authority Engine",
    subtitle: "Search-led growth system for long-term inbound",
    excerpt:
      "A strategic SEO architecture focused on discoverability, authority, and conversion alignment.",
    category: "SEO",
    year: "2024",
    tone: "amber",
    challenge:
      "Traffic was inconsistent and content strategy lacked measurable intent pathways.",
    approach:
      "Built topic clusters, content quality standards, and search-intent optimization templates.",
    impact:
      "Improved visibility and stronger inbound lead quality over sustained campaign cycles.",
    highlights: ["Topic clusters", "Intent mapping", "Organic growth"],
  },
  {
    slug: "local-seo-visibility-stack",
    title: "Local SEO Visibility Stack",
    subtitle: "Regional search presence for service businesses",
    excerpt:
      "A local ranking and reputation model for businesses targeting regional demand.",
    category: "SEO",
    year: "2023",
    tone: "teal",
    challenge:
      "Local market players struggled to appear consistently in map and intent-driven searches.",
    approach:
      "Standardized profile optimization, review workflows, and location-specific content assets.",
    impact:
      "Higher local visibility and stronger conversion from nearby search traffic.",
    highlights: ["Local ranking", "Review strategy", "Geo-targeted pages"],
  },
  {
    slug: "content-to-conversion-funnel",
    title: "Content to Conversion Funnel",
    subtitle: "Connecting organic visibility to sales outcomes",
    excerpt:
      "A reusable funnel design that links educational content with conversion-focused journeys.",
    category: "SEO",
    year: "2022",
    tone: "blue",
    challenge:
      "Content efforts generated traffic but lacked clear conversion architecture.",
    approach:
      "Mapped educational, evaluation, and conversion-stage assets with targeted calls to action.",
    impact:
      "Better engagement quality and improved conversion from organic user journeys.",
    highlights: ["Funnel architecture", "User journey mapping", "Lead quality"],
  },
  {
    slug: "business-dev-playbook",
    title: "Business Development Playbook",
    subtitle: "From outreach activity to predictable partnerships",
    excerpt:
      "A structured model for opportunity qualification, proposal rhythm, and win-rate improvement.",
    category: "Business Development",
    year: "2024",
    tone: "mint",
    challenge:
      "Partnership efforts were active but lacked a repeatable qualification framework.",
    approach:
      "Created a scoring model for opportunities, communication cadence, and follow-up standards.",
    impact:
      "More focused pipeline execution and stronger conversion from qualified opportunities.",
    highlights: ["Opportunity scoring", "Pipeline rhythm", "Partnership conversion"],
  },
  {
    slug: "regional-growth-program",
    title: "Regional Growth Program",
    subtitle: "Scaling businesses in high-opportunity local markets",
    excerpt:
      "A regional expansion framework combining operations, marketing, and field execution.",
    category: "Business Development",
    year: "2023",
    tone: "violet",
    challenge:
      "Businesses had growth intent but lacked local execution systems for scale.",
    approach:
      "Built a phase-based expansion plan with pilot zones, metrics, and team ownership rules.",
    impact:
      "Improved confidence in expansion decisions and reduced scaling risk in new areas.",
    highlights: ["Expansion phases", "Pilot metrics", "Local team playbook"],
  },
  {
    slug: "channel-partner-accelerator",
    title: "Channel Partner Accelerator",
    subtitle: "Improving partner ecosystem performance",
    excerpt:
      "An enablement structure to help partners deliver faster and with better consistency.",
    category: "Business Development",
    year: "2022",
    tone: "rose",
    challenge:
      "Partner network quality varied heavily, creating uneven delivery experiences.",
    approach:
      "Defined partner onboarding standards, playbooks, and outcome-based tracking.",
    impact:
      "More reliable partner outcomes and improved market response capacity.",
    highlights: ["Partner enablement", "Onboarding standards", "Quality tracking"],
  },
  {
    slug: "startup-launch-framework",
    title: "Startup Launch Framework",
    subtitle: "From concept to operational execution",
    excerpt:
      "A practical launch blueprint for turning early ideas into working business systems.",
    category: "Entrepreneurship",
    year: "2024",
    tone: "teal",
    challenge:
      "New ventures often started with ambition but without operational clarity.",
    approach:
      "Created launch milestones covering offer design, execution stack, and early traction loops.",
    impact:
      "Faster time-to-market with clearer owner confidence and execution discipline.",
    highlights: ["Launch milestones", "Operating stack", "Early traction"],
  },
  {
    slug: "operator-dashboard-for-founders",
    title: "Operator Dashboard for Founders",
    subtitle: "Simple metrics that drive better business decisions",
    excerpt:
      "A decision dashboard for founders to monitor demand, quality, and growth levers.",
    category: "Entrepreneurship",
    year: "2023",
    tone: "amber",
    challenge:
      "Founders tracked too many disconnected metrics without clear decision impact.",
    approach:
      "Built a concise dashboard model tied to weekly action priorities and review rituals.",
    impact:
      "Improved execution focus and faster course-correction across growth initiatives.",
    highlights: ["Founder metrics", "Decision focus", "Weekly execution"],
  },
  {
    slug: "service-quality-upgrade",
    title: "Service Quality Upgrade",
    subtitle: "Raising customer trust through operational detail",
    excerpt:
      "A quality-first operating framework for teams delivering high-touch regional services.",
    category: "Operations",
    year: "2022",
    tone: "blue",
    challenge:
      "Service quality varied by team and shift, impacting customer trust.",
    approach:
      "Designed quality rituals, escalation patterns, and frontline feedback integration.",
    impact:
      "More consistent customer outcomes and stronger reputation retention.",
    highlights: ["Quality rituals", "Frontline feedback", "Consistency controls"],
  },
  {
    slug: "digital-booking-replatform",
    title: "Digital Booking Replatform",
    subtitle: "Cleaner booking journeys for conversion growth",
    excerpt:
      "A redesign of booking flows to reduce drop-offs and increase completion rates.",
    category: "Digital Product",
    year: "2024",
    tone: "violet",
    challenge:
      "The old booking journey had friction points that caused high abandonment.",
    approach:
      "Simplified flow steps, clarified user intent, and improved handoff transparency.",
    impact:
      "Higher completion rates and better customer confidence during checkout.",
    highlights: ["Flow redesign", "Drop-off reduction", "Conversion lift"],
  },
  {
    slug: "process-automation-studio",
    title: "Process Automation Studio",
    subtitle: "Standardizing recurring workflows for speed",
    excerpt:
      "A reusable automation model to reduce repetitive manual coordination tasks.",
    category: "Operations",
    year: "2023",
    tone: "mint",
    challenge:
      "Teams spent significant time on repeatable tasks with low strategic value.",
    approach:
      "Identified repetitive process clusters and introduced automation-ready workflow templates.",
    impact:
      "More time for strategic work and improved operational throughput.",
    highlights: ["Workflow templates", "Manual effort reduction", "Throughput gains"],
  },
  {
    slug: "entrepreneur-growth-lab",
    title: "Entrepreneur Growth Lab",
    subtitle: "Scaling region-first ventures with disciplined execution",
    excerpt:
      "A growth lab model for founders building practical businesses with long-term resilience.",
    category: "Entrepreneurship",
    year: "2025",
    tone: "rose",
    challenge:
      "Growth efforts were energetic but lacked structured experimentation and learning cycles.",
    approach:
      "Set up measurable growth experiments, review loops, and execution scorecards.",
    impact:
      "Faster learning cycles and more dependable scaling outcomes for emerging ventures.",
    highlights: ["Growth experiments", "Learning loops", "Scale readiness"],
  },
] as const;
