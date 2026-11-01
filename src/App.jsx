import React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Smartphone, Terminal, Layers3, ExternalLink,
  ChevronRight, Sparkles, GitBranch, MapPin
} from "lucide-react";

const GITHUB = "https://github.com/dimetri-softdev";
const projects = [
  {
    number: "01", name: "FinSight AI Analyzer", type: "Full-stack concept",
    description: "A financial insights platform concept, planned around a .NET API and PostgreSQL backend, with an AI-assisted analysis direction.",
    stack: ["C#", ".NET", "PostgreSQL", "Docker", "AI"],
    accent: "violet", icon: "◈", status: "In development",
    href: "https://github.com/MagnificentGarren/FinSight-AI-Analyzer"
  },
  {
    number: "02", name: "Equili", type: "Android application",
    description: "A personal finance and expense-tracking app concept with budgets, categories, receipt capture and a progress-focused dashboard.",
    stack: ["Kotlin", "Android", "XML", "Firebase*"],
    accent: "mint", icon: "◉", status: "Academic project",
    href: GITHUB
  },
  {
    number: "03", name: "TaskTracker", type: "Desktop application",
    description: "A task management application built to practise clean separation of concerns, observable data and everyday CRUD workflows.",
    stack: ["C#", "WPF", "MVVM", "JSON"],
    accent: "blue", icon: "▤", status: "Learning project",
    href: GITHUB
  },
  {
    number: "04", name: "Student Manager", type: "Desktop application",
    description: "A student records manager with search, selection, update and delete functionality, built as a practical C# desktop application.",
    stack: ["C#", "WPF", "Collections"],
    accent: "orange", icon: "⌘", status: "Learning project",
    href: GITHUB
  },
  {
    number: "05", name: "Library Manager", type: "Desktop application",
    description: "A small library management app for managing book records and exploring observable collections and JSON persistence.",
    stack: ["C#", "WPF", "JSON"],
    accent: "pink", icon: "▥", status: "Learning project",
    href: GITHUB
  },
  {
    number: "06", name: "Campus Lost & Found", type: "Web application concept",
    description: "A campus-focused concept for reporting, discovering and managing lost property through a structured application workflow.",
    stack: ["ASP.NET Core", "C#", "SQL"],
    accent: "cyan", icon: "⌖", status: "Concept",
    href: GITHUB
  }
];

const skills = [
  { title: "Backend development", detail: "C# · .NET · ASP.NET Core", icon: Code2 },
  { title: "Databases", detail: "SQL Server · EF Core · PostgreSQL", icon: Database },
  { title: "Application development", detail: "WPF · Kotlin · Android", icon: Smartphone },
  { title: "Tools & workflow", detail: "Git · GitHub · Visual Studio", icon: Terminal }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "C# / .NET", "Android", "Concepts"];
  const visibleProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "C# / .NET") return p.stack.some((s) => ["C#", ".NET", "WPF", "ASP.NET Core"].includes(s));
    if (filter === "Android") return p.stack.includes("Kotlin");
    return p.type.toLowerCase().includes("concept");
  });
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
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR GRADUATE & JUNIOR OPPORTUNITIES</div>
            <h1>Building useful<br /><span className="gradient-text">software</span> with<br />purpose<span className="period">.</span></h1>
            <p className="hero-lede">I’m Dimetri Peters — a software development student focused on C#, .NET and creating practical applications that solve real problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Let’s connect <ArrowRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14} /> Gqeberha, South Africa</span><span className="meta-divider" /><span>Software Development</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.cs</span><span className="window-lock">C#</span></div>
              <div className="code-content">
                <div className="line"><span className="ln">01</span><span><b className="code-purple">public class</b> <b className="code-green">Developer</b></span></div>
                <div className="line"><span className="ln">02</span><span>{"{"}</span></div>
                <div className="line indent"><span className="ln">03</span><span><b className="code-purple">public string</b> Name = <b className="code-yellow">"Dimetri"</b>;</span></div>
                <div className="line indent"><span className="ln">04</span><span><b className="code-purple">public string</b> Focus = <b className="code-yellow">"C# & .NET"</b>;</span></div>
                <div className="line indent"><span className="ln">05</span><span><b className="code-purple">public string[]</b> Interests =</span></div>
                <div className="line indent2"><span className="ln">06</span><span>{"{"}</span></div>
                <div className="line indent2"><span className="ln">07</span><span><b className="code-yellow">"Backend"</b>, <b className="code-yellow">"Databases"</b>,</span></div>
                <div className="line indent2"><span className="ln">08</span><span><b className="code-yellow">"Problem solving"</b></span></div>
                <div className="line indent2"><span className="ln">09</span><span>{"};"}</span></div>
                <div className="line"><span className="ln">10</span><span>{"}"}</span></div>
                <div className="code-cursor" />
              </div>
              <div className="window-bottom"><span><span className="tiny-green" /> Ready to build</span><span>UTF-8&nbsp;&nbsp; C#</span></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-icon purple-chip"><Code2 size={16} /></span><span><b>.NET focused</b><small>Backend development</small></span></div>
            <div className="float-chip chip-bottom"><span className="chip-icon green-chip"><GitBranch size={16} /></span><span><b>Always learning</b><small>One commit at a time</small></span></div>
            <div className="visual-caption">TURNING IDEAS INTO WORKING SOFTWARE <span>↗</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner"><span className="strip-label">CURRENT FOCUS</span><div className="strip-items"><span>C# & .NET</span><i /><span>Backend engineering</span><i /><span>Database design</span><i /><span>Continuous learning</span></div></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Curious mind.<br /><span className="muted-heading">Practical builder.</span></h2></div>
            <div className="about-copy"><p className="large-copy">I’m developing my skills as a software developer, with a strong interest in backend engineering and building applications that work beyond the screen.</p><p>Through academic and personal projects, I’ve been working with C#, .NET, databases, desktop applications and Android development. I enjoy taking an idea, breaking it into manageable pieces and turning it into something functional.</p><p>My current goal is to grow into a junior software developer role where I can contribute, keep learning and build dependable software with a team.</p><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">Explore my GitHub profile <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Tools I work with<span className="period">.</span></h2></div><p>Technologies I’m using to build, experiment<br />and strengthen my foundations.</p></div>
          <div className="skills-grid">{skills.map(({ title, detail, icon: Icon }, i) => <article className="skill-card" key={title}><div className="skill-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{i + 1}</span></div><h3>{title}</h3><p>{detail}</p><div className="skill-rule" /></article>)}</div>
          <div className="tech-cloud"><span>ALSO EXPLORING</span>{["JavaScript", "React", "HTML & CSS", "REST APIs", "Entity Framework Core", "GitHub"].map((s) => <b key={s}>{s}</b>)}</div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading project-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects in progress<span className="period">.</span></h2></div><p>A selection of applications and concepts<br />that reflect what I’ve been learning.</p></div>
            <div className="project-toolbar"><span className="project-count">SHOWING <b>{String(visibleProjects.length).padStart(2, "0")}</b> PROJECTS</span><div className="filters">{categories.map((c) => <button key={c} onClick={() => setFilter(c)} className={filter === c ? "filter active" : "filter"}>{c}</button>)}</div></div>
            <div className="projects-grid">{visibleProjects.map((p) => <article className={`project-card ${p.accent}`} key={p.number}>
              <div className="project-card-top"><span className="project-number">PROJECT / {p.number}</span><span className="project-icon">{p.icon}</span></div>
              <div className="project-art"><div className="art-grid" /><div className="art-symbol">{p.icon}</div><span className="art-type">{p.type.toUpperCase()}</span></div>
              <div className="project-info"><div className="project-title-row"><div><span className="project-type">{p.type}</span><h3>{p.name}</h3></div><span className="project-status">{p.status}</span></div><p>{p.description}</p><div className="tag-list">{p.stack.map((s) => <span key={s}>{s}</span>)}</div><a className="project-link" href={p.href} target="_blank" rel="noreferrer"><Github size={15} /> {p.href === GITHUB ? "View GitHub profile" : "View repository"} <ArrowUpRight size={15} /></a></div>
            </article>)}</div>
            <div className="projects-footnote"><Sparkles size={15} /> Some projects are academic or learning projects. Repository links point to my GitHub profile where individual repository links are not yet configured.</div>
            <div className="all-projects"><a className="button button-outline" href={GITHUB} target="_blank" rel="noreferrer">See all repositories <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="section-wrap approach-section">
          <div className="section-kicker">04 / HOW I WORK</div>
          <div className="approach-grid"><h2>Learn it.<br /><span className="muted-heading">Build it.</span><br />Improve it.</h2><div className="approach-list"><div><span>01</span><p><b>Understand the problem</b><small>Start with the purpose, requirements and user needs.</small></p></div><div><span>02</span><p><b>Build in small steps</b><small>Break features down and focus on readable, maintainable code.</small></p></div><div><span>03</span><p><b>Test and refine</b><small>Learn from mistakes, fix issues and improve the result.</small></p></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">05 / GET IN TOUCH</div><div className="contact-main"><div><h2>Have a project<br />or opportunity<span className="gradient-text"> in mind?</span></h2><p>I’m open to connecting with developers, teams and employers. Let’s talk about building something useful.</p></div><a className="contact-email" href="mailto:dimetri248@gmail.com"><span>START A CONVERSATION</span><b>dimetri248@gmail.com</b><ArrowUpRight size={21} /></a></div><div className="contact-links"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="mailto:dimetri248@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={13} /></a><a href="#home"><ArrowUpRight size={17} /> Back to top</a></div></div></section>
      </main>
      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DIMETRI PETERS</span></a><span>DESIGNED & BUILT WITH CURIOSITY.</span><span>© {new Date().getFullYear()} DIMETRI PETERS</span></div></footer>
    </div>
  );
}

export default App;