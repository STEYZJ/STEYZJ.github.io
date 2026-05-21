import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Map,
  Satellite,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

type Project = {
  name: string;
  description: string;
  language: string;
  href: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "HyperAgent",
    description:
      "Autonomous multi-agent framework for hyperspectral image classification research.",
    language: "Python",
    href: "https://github.com/STEYZJ/HyperAgent",
    tags: ["multi-agent system", "remote sensing", "PyTorch", "HSI classification"],
    featured: true,
  },
  {
    name: "ML_classwork",
    description: "2026 spring machine learning coursework and final project materials.",
    language: "HTML",
    href: "https://github.com/STEYZJ/ML_classwork",
    tags: ["machine learning", "coursework", "experiments"],
  },
  {
    name: "Algorithm_classwork",
    description: "Algorithm design and analysis coursework for graduate study.",
    language: "Python",
    href: "https://github.com/STEYZJ/Algorithm_classwork",
    tags: ["algorithms", "analysis", "Python"],
  },
];

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "AI Research Systems",
    text: "Designing experiment loops and agent workflows for research tasks.",
  },
  {
    icon: Satellite,
    title: "Remote Sensing",
    text: "Exploring hyperspectral image classification and geospatial intelligence.",
  },
  {
    icon: GraduationCap,
    title: "Graduate Coursework",
    text: "Keeping machine learning and algorithm work organized, reproducible, and readable.",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "Machine Learning",
  "Multi-Agent Systems",
  "Hyperspectral Imaging",
  "Remote Sensing",
  "TypeScript",
  "Research Tooling",
];

function App() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const supportingProjects = projects.filter((project) => project.name !== featuredProject.name);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kyabia home">
          <span className="brand-mark">K</span>
          <span>
            <strong>Kyabia</strong>
            <small>STEYZJ</small>
          </span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#focus">Focus</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            AI, machine learning, and remote sensing
          </p>
          <h1>Kyabia / STEYZJ</h1>
          <p className="hero-text">
            I build research-oriented tools around multi-agent systems, machine learning
            experiments, and hyperspectral image classification.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button primary" href="https://github.com/STEYZJ">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button secondary" href="#work">
              <Layers3 size={18} aria-hidden="true" />
              Projects
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="GitHub profile snapshot">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/106792554?v=4"
            alt="Kyabia GitHub avatar"
          />
          <div className="profile-meta">
            <span className="status-dot" aria-hidden="true" />
            <span>Open-source research workspace</span>
          </div>
          <div className="signal-grid">
            <div>
              <strong>3</strong>
              <span>public repos</span>
            </div>
            <div>
              <strong>2022</strong>
              <span>on GitHub</span>
            </div>
            <div>
              <strong>Python</strong>
              <span>core stack</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="featured-band" id="work">
        <div className="section-heading">
          <p className="eyebrow">
            <TerminalSquare size={16} aria-hidden="true" />
            Featured repository
          </p>
          <h2>{featuredProject.name}</h2>
        </div>
        <a className="featured-card" href={featuredProject.href}>
          <div>
            <span className="language-pill">{featuredProject.language}</span>
            <p>{featuredProject.description}</p>
          </div>
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Code2 size={16} aria-hidden="true" />
            Project map
          </p>
          <h2>Selected work</h2>
        </div>
        <div className="project-grid">
          {supportingProjects.map((project) => (
            <a className="project-card" href={project.href} key={project.name}>
              <div className="card-heading">
                <span>{project.name}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
              <p>{project.description}</p>
              <div className="tag-row">
                <span className="language-pill">{project.language}</span>
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section" id="focus">
        <div className="section-heading">
          <p className="eyebrow">
            <Map size={16} aria-hidden="true" />
            Current direction
          </p>
          <h2>Research focus</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article className="focus-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section stack-section" aria-labelledby="stack-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Cpu size={16} aria-hidden="true" />
            Stack
          </p>
          <h2 id="stack-title">Tools and topics</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">
            <Mail size={16} aria-hidden="true" />
            Contact
          </p>
          <h2>Find me on GitHub</h2>
          <p>
            The cleanest entry point is the STEYZJ GitHub profile, with project updates
            and source repositories kept close together.
          </p>
        </div>
        <a className="button primary" href="https://github.com/STEYZJ">
          <Github size={18} aria-hidden="true" />
          github.com/STEYZJ
        </a>
      </section>
    </main>
  );
}

export default App;
