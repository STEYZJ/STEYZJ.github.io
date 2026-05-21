import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CircuitBoard,
  DatabaseZap,
  Github,
  Globe2,
  Layers3,
  Radar,
  Satellite,
  TerminalSquare,
  Workflow,
} from "lucide-react";

type Lang = "zh" | "en";

type Copy = {
  nav: {
    work: string;
    focus: string;
    stack: string;
    contact: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    panelTitle: string;
    panelStatus: string;
    metrics: Array<{ value: string; label: string }>;
  };
  code: {
    tabs: string[];
    lines: string[];
  };
  project: {
    eyebrow: string;
    title: string;
    description: string;
    status: string;
    repo: string;
    bullets: string[];
  };
  focus: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  stack: {
    eyebrow: string;
    title: string;
    tools: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    action: string;
  };
};

const copies: Record<Lang, Copy> = {
  zh: {
    nav: {
      work: "项目",
      focus: "方向",
      stack: "技术栈",
      contact: "联系",
      switchLabel: "切换到英文",
    },
    hero: {
      eyebrow: "AI 研究工具 / 多智能体系统 / 高光谱图像分类",
      title: "Kyabia / STEYZJ",
      subtitle:
        "我关注把机器学习实验、多智能体流程和遥感研究组织成更清晰、可复现、可迭代的工具系统。",
      primaryAction: "查看 HyperAgent",
      secondaryAction: "GitHub 主页",
      panelTitle: "Research Console",
      panelStatus: "active research workspace",
      metrics: [
        { value: "HSI", label: "高光谱图像" },
        { value: "Agent", label: "实验自动化" },
        { value: "Python", label: "核心栈" },
      ],
    },
    code: {
      tabs: ["agent.ts", "pipeline.yml", "result.json"],
      lines: [
        "task: hyperspectral_classification",
        "agent.loop: plan -> run -> evaluate",
        "model.stack: PyTorch + research tooling",
        "output: reproducible experiment trace",
      ],
    },
    project: {
      eyebrow: "Featured Project",
      title: "HyperAgent",
      description:
        "面向高光谱图像分类研究的自主多智能体实验框架，用来组织实验规划、运行、评估与迭代。",
      status: "正式项目",
      repo: "打开仓库",
      bullets: ["多智能体研究流程", "遥感图像分类", "可复现实验记录"],
    },
    focus: {
      eyebrow: "Current Direction",
      title: "研究方向",
      items: [
        {
          title: "多智能体实验流程",
          text: "把实验拆成可观察的计划、执行、评估步骤，让研究过程更容易复盘。",
        },
        {
          title: "遥感与高光谱图像",
          text: "围绕高光谱图像分类任务探索模型、数据与实验框架的结合方式。",
        },
        {
          title: "可复现实验工具链",
          text: "关注配置、日志、结果与代码之间的关系，减少研究中的隐性状态。",
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "工具与主题",
      tools: [
        "Python",
        "PyTorch",
        "Machine Learning",
        "Multi-Agent Systems",
        "Hyperspectral Imaging",
        "Remote Sensing",
        "Research Automation",
        "TypeScript",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "从 GitHub 开始",
      text: "项目、代码和研究记录都会优先沉淀在 GitHub。这里是了解 STEYZJ 当前工作的入口。",
      action: "访问 GitHub",
    },
  },
  en: {
    nav: {
      work: "Work",
      focus: "Focus",
      stack: "Stack",
      contact: "Contact",
      switchLabel: "Switch to Chinese",
    },
    hero: {
      eyebrow: "AI research tooling / multi-agent systems / HSI classification",
      title: "Kyabia / STEYZJ",
      subtitle:
        "I build research-oriented systems that make machine learning experiments, agent workflows, and remote sensing work easier to inspect and reproduce.",
      primaryAction: "View HyperAgent",
      secondaryAction: "GitHub Profile",
      panelTitle: "Research Console",
      panelStatus: "active research workspace",
      metrics: [
        { value: "HSI", label: "hyperspectral" },
        { value: "Agent", label: "automation" },
        { value: "Python", label: "core stack" },
      ],
    },
    code: {
      tabs: ["agent.ts", "pipeline.yml", "result.json"],
      lines: [
        "task: hyperspectral_classification",
        "agent.loop: plan -> run -> evaluate",
        "model.stack: PyTorch + research tooling",
        "output: reproducible experiment trace",
      ],
    },
    project: {
      eyebrow: "Featured Project",
      title: "HyperAgent",
      description:
        "An autonomous multi-agent framework for hyperspectral image classification research, designed around experiment planning, execution, evaluation, and iteration.",
      status: "formal project",
      repo: "Open repository",
      bullets: ["multi-agent research flow", "remote sensing classification", "reproducible traces"],
    },
    focus: {
      eyebrow: "Current Direction",
      title: "Research focus",
      items: [
        {
          title: "Multi-agent experiment flow",
          text: "Breaking research into visible planning, execution, and evaluation loops.",
        },
        {
          title: "Remote sensing and HSI",
          text: "Exploring how models, data, and tooling meet in hyperspectral classification.",
        },
        {
          title: "Reproducible research tooling",
          text: "Keeping configuration, logs, results, and code connected without hidden state.",
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools and topics",
      tools: [
        "Python",
        "PyTorch",
        "Machine Learning",
        "Multi-Agent Systems",
        "Hyperspectral Imaging",
        "Remote Sensing",
        "Research Automation",
        "TypeScript",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Start from GitHub",
      text: "Projects, code, and research notes live close to the GitHub profile. This site is the front door to STEYZJ's current work.",
      action: "Visit GitHub",
    },
  },
};

const focusIcons = [Workflow, Satellite, DatabaseZap];

function App() {
  const [lang, setLang] = useState<Lang>("zh");
  const copy = copies[lang];
  const nextLang: Lang = lang === "zh" ? "en" : "zh";

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell" lang={lang === "zh" ? "zh-CN" : "en"}>
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kyabia home">
          <span className="brand-mark">K</span>
          <span>
            <strong>Kyabia</strong>
            <small>STEYZJ</small>
          </span>
        </a>
        <div className="nav-cluster">
          <nav>
            <a href="#work">{copy.nav.work}</a>
            <a href="#focus">{copy.nav.focus}</a>
            <a href="#stack">{copy.nav.stack}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>
          <button
            className="language-toggle"
            type="button"
            aria-label={copy.nav.switchLabel}
            onClick={() => setLang(nextLang)}
          >
            <Globe2 size={16} aria-hidden="true" />
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <CircuitBoard size={16} aria-hidden="true" />
            {copy.hero.eyebrow}
          </p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-text">{copy.hero.subtitle}</p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button primary" href="https://github.com/STEYZJ/HyperAgent">
              <Layers3 size={18} aria-hidden="true" />
              {copy.hero.primaryAction}
            </a>
            <a className="button secondary" href="https://github.com/STEYZJ">
              <Github size={18} aria-hidden="true" />
              {copy.hero.secondaryAction}
            </a>
          </div>
        </div>

        <aside className="console-panel" aria-label={copy.hero.panelTitle}>
          <div className="console-topline">
            <span>{copy.hero.panelTitle}</span>
            <div aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="console-tabs" aria-hidden="true">
            {copy.code.tabs.map((tab) => (
              <span key={tab}>{tab}</span>
            ))}
          </div>
          <pre className="code-window">
            {copy.code.lines.map((line, index) => (
              <code key={line}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {line}
              </code>
            ))}
          </pre>
          <div className="panel-status">
            <CheckCircle2 size={16} aria-hidden="true" />
            {copy.hero.panelStatus}
          </div>
          <div className="signal-grid">
            {copy.hero.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="featured-band scroll-scene" id="work">
        <div className="section-heading" data-reveal="headline">
          <p className="eyebrow">
            <TerminalSquare size={16} aria-hidden="true" />
            {copy.project.eyebrow}
          </p>
          <h2>{copy.project.title}</h2>
        </div>
        <a className="featured-card" href="https://github.com/STEYZJ/HyperAgent" data-reveal="card">
          <div className="project-copy">
            <span className="status-pill">{copy.project.status}</span>
            <p>{copy.project.description}</p>
            <div className="tag-row">
              {copy.project.bullets.map((bullet, index) => (
                <span
                  key={bullet}
                  data-reveal="chip"
                  style={{ transitionDelay: `${220 + index * 90}ms` }}
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>
          <span className="repo-link">
            {copy.project.repo}
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </a>
      </section>

      <section className="content-section scroll-scene" id="focus">
        <div className="section-heading" data-reveal="headline">
          <p className="eyebrow">
            <Radar size={16} aria-hidden="true" />
            {copy.focus.eyebrow}
          </p>
          <h2>{copy.focus.title}</h2>
        </div>
        <div className="focus-grid">
          {copy.focus.items.map((item, index) => {
            const Icon = focusIcons[index] ?? BrainCircuit;

            return (
              <article
                className="focus-card"
                key={item.title}
                data-reveal="card"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <Icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="content-section stack-section scroll-scene"
        id="stack"
        aria-labelledby="stack-title"
      >
        <div className="section-heading" data-reveal="headline">
          <p className="eyebrow">
            <BrainCircuit size={16} aria-hidden="true" />
            {copy.stack.eyebrow}
          </p>
          <h2 id="stack-title">{copy.stack.title}</h2>
        </div>
        <div className="skill-cloud">
          {copy.stack.tools.map((skill, index) => (
            <span
              key={skill}
              data-reveal="chip"
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-band scroll-scene" id="contact">
        <div data-reveal="headline">
          <p className="eyebrow">
            <Github size={16} aria-hidden="true" />
            {copy.contact.eyebrow}
          </p>
          <div className="contact-title-row">
            <h2>{copy.contact.title}</h2>
            <a className="button primary" href="https://github.com/STEYZJ">
              <Github size={18} aria-hidden="true" />
              {copy.contact.action}
            </a>
          </div>
          <p>{copy.contact.text}</p>
        </div>
      </section>
    </main>
  );
}

export default App;
