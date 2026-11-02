import React, { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Github, Mail,
  Menu, X, Code2, Database, Smartphone, Terminal, GitBranch, MapPin, Phone, Clock3
} from "lucide-react";

const GITHUB = "https://github.com/dimetri-softdev";
const PHONE = "0692963741";
const projects = [
  {
    number: "01", name: "Doctor Practice CMS API", type: "Backend API",
    description: "An ASP.NET Core API for managing medical-practice content, doctor profiles and appointment requests. Includes JWT authentication, role-based access, SQL Server persistence and integration tests.",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "Integration testing"],
    accent: "violet", icon: "⌘", status: "API project", preview: "clinic",
    href: "https://github.com/dimetri-softdev/DoctorPracticeCmsApi"
  },
  {
    number: "02", name: "Ecommerce API", type: "Backend API",
    description: "A REST API for product catalogues and customer orders, with JWT authentication, role-based access, customer-scoped orders and transactional stock updates.",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "JWT"],
    accent: "mint", icon: "◉", status: "API project", preview: "store",
    href: "https://github.com/dimetri-softdev/EcommerceApi"
  },
  {
    number: "03", name: "Job Hunter", type: "Full-stack platform",
    description: "A job-search platform for tracking applications and supporting career preparation, built with a Next.js and TypeScript frontend, PostgreSQL, Prisma, Clerk authentication, Python services and a browser extension.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Python"],
    accent: "blue", icon: "↗", status: "Full-stack project", preview: "jobs",
    href: "https://github.com/dimetri-softdev/Job-Hunter"
  },
  {
    number: "04", name: "FineX AI", type: "Personal finance app",
    description: "An offline-first finance companion for tracking expenses, managing budgets and understanding spending. The concept includes receipt scanning, spending insights and secure sync across devices.",
    stack: ["Mobile", "Offline-first", "Receipt OCR", "Budgeting", "Spending insights"],
    accent: "violet", icon: "◒", status: "Mobile app", preview: "finance",
    href: "https://github.com/dimetri-softdev/FineX-AI"
  },
  {
    number: "05", name: "PastTimes Online Clothing Store", type: "E-commerce website",
    description: "A PHP and MySQL clothing store where customers can browse items, manage a cart and wishlist, check out, and review purchase history. Includes seller product tools and an admin dashboard.",
    stack: ["PHP", "MySQL", "E-commerce", "Authentication", "Admin dashboard"],
    accent: "clothing", icon: "◇", status: "Web application", preview: "clothing",
    href: "https://github.com/dimetri-softdev/PastTimes-Online-Clothing-Store"
  },
  {
    number: "06", name: "Gift of the Givers Foundation", type: "Relief management platform",
    description: "An ASP.NET Core MVC platform for coordinating relief projects, donations and volunteer applications. Supports recurring and multi-currency donations, plus role-based portals for donors, volunteers, employees and admins.",
    stack: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "ASP.NET Identity"],
    accent: "relief", icon: "✳", status: "Full-stack project", preview: "relief",
    href: "https://github.com/dimetri-softdev/Gift-of-the-Givers-Foundation"
  },
  {
    number: "07", name: "PlayBookAI", type: "AI-powered SaaS ecosystem",
    description: "A platform concept for discovering emerging digital business opportunities and turning a chosen strategy into an actionable roadmap, with AI guidance, competitor insights and web and mobile access.",
    stack: ["ASP.NET Core", "AI co-pilot", "REST API", "Trend discovery", "Mobile app"],
    accent: "violet", icon: "✦", status: "Coming soon", preview: "playbook"
  },
  {
    number: "08", name: "AuraLearn", type: "E-learning platform",
    description: "An LMS concept for guided online learning, bringing together a student dashboard, interactive AI tutoring and an educator course-building studio.",
    stack: ["ASP.NET Core", "LMS", "AI tutor", "Course builder", "Responsive web"],
    accent: "blue", icon: "✧", status: "Coming soon", preview: "auralearn"
  }
];

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.preview}`} role="img" aria-label={`${project.name} concept preview`}>
      <div className="preview-topbar">
        <span className="preview-mark">{project.icon}</span>
        <b>{project.preview === "clinic" ? "Carepoint" : project.preview === "store" ? "Everyday" : project.preview === "clothing" ? "PastTimes" : project.preview === "finance" ? "FineX" : project.preview === "relief" ? "Relief Connect" : project.preview === "playbook" ? "PlayBookAI" : project.preview === "auralearn" ? "AuraLearn" : "Job Hunter"}</b>
        <span className="preview-status"><i /> {project.preview === "clinic" ? "Practice portal" : project.preview === "store" || project.preview === "clothing" ? "Online store" : project.preview === "finance" ? "Your finances" : project.preview === "relief" ? "Relief response" : project.preview === "playbook" ? "Opportunity radar" : project.preview === "auralearn" ? "Learning dashboard" : "Application tracker"}</span>
      </div>
      {project.preview === "clinic" && (
        <div className="preview-content clinic-content">
          <div className="preview-greeting"><span>Practice overview</span><b>Appointments & care</b></div>
          <div className="preview-stats"><span><small>Doctors</small><b>12</b></span><span><small>Requests</small><b>08</b></span><span><small>Today</small><b>24</b></span></div>
          <div className="preview-list"><i /><span>Dr. M. Peters</span><small>Cardiology</small><b>Available</b></div>
          <div className="preview-list"><i /><span>Dr. L. Adams</span><small>Family care</small><b>Available</b></div>
        </div>
      )}
      {project.preview === "store" && (
        <div className="preview-content store-content">
          <div className="preview-greeting"><span>Curated for you</span><b>Popular products</b></div>
          <div className="preview-products">
            <div><i className="product-shape shape-one" /><small>Studio headphones</small><b>R 899</b></div>
            <div><i className="product-shape shape-two" /><small>Everyday backpack</small><b>R 650</b></div>
            <div><i className="product-shape shape-three" /><small>Minimal watch</small><b>R 1 199</b></div>
          </div>
          <div className="preview-order"><span>Recent order</span><b>Order #2048</b><i>Processing</i></div>
        </div>
      )}
      {project.preview === "clothing" && (
        <div className="preview-content store-content">
          <div className="preview-greeting"><span>PASTTIMES COLLECTION</span><b>Find your next favourite</b></div>
          <div className="preview-products">
            <div><i className="product-shape clothing-one" /><small>Everyday layers</small><b>SHOP WOMENS</b></div>
            <div><i className="product-shape clothing-two" /><small>Modern essentials</small><b>SHOP MENS</b></div>
            <div><i className="product-shape clothing-three" /><small>Seasonal picks</small><b>NEW ARRIVALS</b></div>
          </div>
          <div className="preview-order"><span>YOUR BAG</span><b>Curated for you</b><i>Browse pieces</i></div>
        </div>
      )}
      {project.preview === "finance" && (
        <div className="preview-content finance-content">
          <div className="preview-greeting"><span>YOUR MONEY, MADE CLEARER</span><b>Monthly overview</b></div>
          <div className="finance-balance"><span>Available balance</span><b>R 12,480.00</b><i>↑ 8% this month</i></div>
          <div className="finance-bars"><i /><i /><i /><i /><i /><i /><i /><span>WEEKLY SPENDING</span></div>
          <div className="preview-order"><span>RECENT RECEIPT</span><b>Groceries · Today</b><i>Scanned</i></div>
        </div>
      )}
      {project.preview === "relief" && (
        <div className="preview-content relief-content">
          <div className="preview-greeting"><span>RESPONDING WHERE IT MATTERS</span><b>Relief project overview</b></div>
          <div className="relief-campaign"><i /><span><b>Community food support</b><small>Active response · Eastern Cape</small></span><strong>ACTIVE</strong></div>
          <div className="relief-stats"><span><small>Raised</small><b>R 84,250</b></span><span><small>Volunteers</small><b>18 ready</b></span><span><small>Response</small><b>In progress</b></span></div>
          <div className="preview-order"><span>SUPPORT A CAUSE</span><b>Donate or volunteer</b><i>Make an impact</i></div>
        </div>
      )}
      {project.preview === "jobs" && (
        <div className="preview-content jobs-content">
          <div className="preview-greeting"><span>Your career workspace</span><b>Application tracker</b></div>
          <div className="preview-board">
            <div><span>Applied <b>03</b></span><i>Junior .NET Developer</i><i>Graduate Engineer</i></div>
            <div><span>Interview <b>01</b></span><i>Software Developer</i></div>
            <div><span>Saved <b>02</b></span><i>Backend Developer</i><i>Full-stack Intern</i></div>
          </div>
          <div className="preview-order"><span>Next step</span><b>Prepare for interview</b><i>In progress</i></div>
        </div>
      )}
      {project.preview === "playbook" && (
        <div className="preview-content concept-content">
          <div className="preview-greeting"><span>YOUR NEXT BIG IDEA</span><b>Opportunity radar</b></div>
          <div className="concept-feature"><i>↗</i><span><b>Digital products</b><small>Rising interest · Early opportunity</small></span><strong>RISING</strong></div>
          <div className="concept-steps"><span>Discover</span><i /><span>Plan</span><i /><span>Launch</span></div>
        </div>
      )}
      {project.preview === "auralearn" && (
        <div className="preview-content concept-content learn-content">
          <div className="preview-greeting"><span>YOUR LEARNING SPACE</span><b>Keep your momentum</b></div>
          <div className="learn-progress"><span><b>Product design</b><small>Module 4 of 6</small></span><strong>68%</strong><i><b /></i></div>
          <div className="learn-tutor"><i>✦</i><span><b>AI tutor</b><small>Ready when you are</small></span><strong>ASK A QUESTION ↗</strong></div>
        </div>
      )}
      <span className="preview-caption">ILLUSTRATIVE PROJECT PREVIEW</span>
    </div>
  );
}

const skills = [
  { title: "Backend & APIs", detail: "C# · ASP.NET Core · REST · JWT", icon: Code2 },
  { title: "Data & persistence", detail: "SQL Server · PostgreSQL · EF Core · SQLite", icon: Database },
  { title: "Full-stack & mobile", detail: "Next.js · TypeScript · Kotlin · Jetpack Compose", icon: Smartphone },
  { title: "Quality & workflow", detail: "Integration testing · Git · GitHub · Role-based access", icon: Terminal }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Dimetri Peters home"><span className="brand-mark">D<span>.</span></span><span>DIMETRI PETERS</span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-contact-bar">
            <span className="hero-contact-label">LET’S BUILD SOMETHING USEFUL</span>
            <a className="hero-contact-item hero-email" href="mailto:dimetri248@gmail.com"><Mail size={18} /><span><small>EMAIL</small><b>dimetri248@gmail.com</b></span></a>
            <a className="hero-contact-item hero-phone" href={`tel:${PHONE}`}><Phone size={18} /><span><small>PHONE</small><b>{PHONE}</b></span></a>
          </div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR JUNIOR & GRADUATE DEVELOPER ROLES</div>
            <h1>Building useful<br /><span className="gradient-text">software</span> with<br />purpose<span className="period">.</span></h1>
            <p className="hero-lede">I’m Dimetri Peters—a software developer who loves turning real-world problems into useful software. I build C#/.NET APIs and full-stack applications, and I’m always looking for ways technology can make things work better for people.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="github-feature" href={GITHUB} target="_blank" rel="noreferrer"><Github size={21} /><span><small>FIND ME ON GITHUB</small><b>@dimetri-softdev</b></span><ArrowUpRight size={20} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14} /> Gqeberha, South Africa</span><span className="meta-divider" /><span>Rosebank College · 2024–2026</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img className="portrait-photo" src="/images/dimetri-peters.png" alt="Dimetri Peters" />
              <div className="portrait-caption"><span><i className="status-dot" /> DIMETRI PETERS</span><b>Developer in progress. <span>Builder by nature.</span></b></div>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner"><span className="strip-label">CURRENT FOCUS</span>          <div className="strip-items"><span>C# & .NET</span><i /><span>RESTful APIs</span><i /><span>Relational databases</span><i /><span>Full-stack development</span></div></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Curious mind.<br /><span className="muted-heading">Practical builder.</span></h2></div>
            <div className="about-copy"><p className="large-copy">I’m a final-year IT Software Development student focused on C# and .NET backend engineering, RESTful APIs and relational databases.</p><p>I got into programming because I was curious about how software works and wanted to build my own. Discovering how useful software can be to people made that curiosity even stronger.</p><p>What I love most is taking a real-world problem, imagining how software could improve it, and then building that idea into something useful.</p><p>I build mobile, web and desktop applications, applying object-oriented programming and practical application architecture to real-world problems. My project work includes authenticated APIs, integration testing and full-stack products.</p><p>I’m looking for a Junior Software Developer or Graduate Developer role where I can contribute to dependable software and keep growing with a team.</p><div className="education-note"><b>Diploma in Information Technology: Software Development</b><span>Rosebank College · Gqeberha · 2024–2026</span></div><a className="text-link github-text-link" href={GITHUB} target="_blank" rel="noreferrer">EXPLORE MY GITHUB PROFILE <ArrowUpRight size={18} /></a></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Tools I work with<span className="period">.</span></h2></div><p>Technologies I’ve applied across my API,<br />full-stack and mobile projects.</p></div>
          <div className="skills-grid">{skills.map(({ title, detail, icon: Icon }, i) => <article className="skill-card" key={title}><div className="skill-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{i + 1}</span></div><h3>{title}</h3><p>{detail}</p><div className="skill-rule" /></article>)}</div>
          <div className="tech-cloud"><span>ALSO WORKED WITH</span>{["Java", "Python", "PHP", "HTML & CSS", "Firebase", "Clerk"].map((s) => <b key={s}>{s}</b>)}</div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading project-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Featured projects<span className="period">.</span></h2></div><p>A selection of the apps and platforms<br />I’ve built across different domains.</p></div>
            <div className="project-toolbar"><span className="project-count">FEATURED <b>{String(projects.length).padStart(2, "0")}</b> PROJECTS</span></div>
            <div className="projects-grid">{projects.map((p) => <article className={`project-card ${p.accent}${p.status === "Coming soon" ? " coming-soon" : ""}`} key={p.number}>
              <div className="project-card-top"><span className="project-number">PROJECT / {p.number}</span><span className="project-icon">{p.icon}</span></div>
              <ProjectPreview project={p} />
              <div className="project-info"><div className="project-title-row"><div><span className="project-type">{p.type}</span><h3>{p.name}</h3></div><span className="project-status">{p.status}</span></div><p>{p.description}</p><div className="tag-list">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>{p.href ? <a className="project-link" href={p.href} target="_blank" rel="noreferrer"><Github size={15} /> View repository <ArrowUpRight size={15} /></a> : <span className="project-link coming-soon-link"><Clock3 size={15} /> Coming soon</span>}</div>
            </article>)}</div>
            <div className="all-projects"><a className="button button-outline" href={GITHUB} target="_blank" rel="noreferrer">See all repositories <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="section-wrap approach-section">
          <div className="section-kicker">04 / HOW I WORK</div>
          <div className="approach-grid"><h2>Learn it.<br /><span className="muted-heading">Build it.</span><br />Improve it.</h2><div className="approach-list"><div><span>01</span><p><b>Understand the problem</b><small>Start with the purpose, requirements and user needs.</small></p></div><div><span>02</span><p><b>Build in small steps</b><small>Break features down and focus on readable, maintainable code.</small></p></div><div><span>03</span><p><b>Test and refine</b><small>Learn from mistakes, fix issues and improve the result.</small></p></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">05 / GET IN TOUCH</div><div className="contact-main"><div><h2>Have a project<br />or opportunity<span className="gradient-text"> in mind?</span></h2><p>I’m open to connecting with developers, teams and employers. Let’s talk about building something useful.</p></div><div className="contact-cards"><a className="contact-email" href="mailto:dimetri248@gmail.com"><span>EMAIL</span><b>dimetri248@gmail.com</b><ArrowUpRight size={21} /></a><a className="contact-email contact-phone" href={`tel:${PHONE}`}><span>PHONE</span><b>{PHONE}</b><ArrowUpRight size={21} /></a></div></div><div className="contact-links"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="mailto:dimetri248@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={13} /></a><a href={`tel:${PHONE}`}><Phone size={17} /> {PHONE} <ArrowUpRight size={13} /></a><a href="#home"><ArrowUpRight size={17} /> Back to top</a></div></div></section>
      </main>
      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DIMETRI PETERS</span></a><span>DESIGNED & BUILT WITH CURIOSITY.</span><span>© {new Date().getFullYear()} DIMETRI PETERS</span></div></footer>
    </div>
  );
}

export default App;