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
  Moon,
  Radar,
  Satellite,
  Sun,
  Sunrise,
  Sunset,
  TerminalSquare,
  Workflow,
} from "lucide-react";

type Lang = "zh" | "en";
type ThemeMode = "dark" | "light" | "cycle";
type DayPhase = "dawn" | "noon" | "sunset" | "evening" | "midnight" | "predawn";

type Copy = {
  sceneNav: {
    label: string;
    items: Array<{
      id: string;
      number: string;
      label: string;
    }>;
  };
  nav: {
    work: string;
    focus: string;
    stack: string;
    contact: string;
    switchLabel: string;
  };
  theme: {
    label: string;
    switchLabel: string;
    modes: Record<ThemeMode, string>;
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
    protocol: Array<{ label: string; value: string }>;
    protocolLabel: string;
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
    flowLabel: string;
    steps: Array<{
      label: string;
      title: string;
      text: string;
    }>;
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
    sceneNav: {
      label: "页面章节",
      items: [
        { id: "top", number: "01", label: "身份" },
        { id: "work", number: "02", label: "项目" },
        { id: "focus", number: "03", label: "方向" },
        { id: "stack", number: "04", label: "技术" },
        { id: "contact", number: "05", label: "联系" },
      ],
    },
    nav: {
      work: "项目",
      focus: "方向",
      stack: "技术栈",
      contact: "联系",
      switchLabel: "切换到英文",
    },
    theme: {
      label: "主题模式",
      switchLabel: "切换主题",
      modes: {
        dark: "黑主题",
        light: "白主题",
        cycle: "昼夜光效",
      },
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
      protocolLabel: "Open Design 原型规格",
      protocol: [
        { label: "Mode", value: "Prototype" },
        { label: "System", value: "VoltAgent-inspired" },
        { label: "Direction", value: "Product scroll" },
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
      flowLabel: "HyperAgent 实验流程",
      steps: [
        {
          label: "01",
          title: "Plan",
          text: "把研究目标、数据集和评价指标拆成可执行实验。",
        },
        {
          label: "02",
          title: "Run",
          text: "组织模型、参数、日志与运行记录，减少隐性状态。",
        },
        {
          label: "03",
          title: "Evaluate",
          text: "汇总结果、对比表现，并保留可追踪的实验证据。",
        },
        {
          label: "04",
          title: "Iterate",
          text: "根据评估反馈生成下一轮实验计划。",
        },
      ],
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
    sceneNav: {
      label: "Page sections",
      items: [
        { id: "top", number: "01", label: "Identity" },
        { id: "work", number: "02", label: "Project" },
        { id: "focus", number: "03", label: "Focus" },
        { id: "stack", number: "04", label: "Stack" },
        { id: "contact", number: "05", label: "Contact" },
      ],
    },
    nav: {
      work: "Work",
      focus: "Focus",
      stack: "Stack",
      contact: "Contact",
      switchLabel: "Switch to Chinese",
    },
    theme: {
      label: "Theme mode",
      switchLabel: "Switch theme",
      modes: {
        dark: "Dark",
        light: "Light",
        cycle: "Day cycle",
      },
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
      protocolLabel: "Open Design prototype spec",
      protocol: [
        { label: "Mode", value: "Prototype" },
        { label: "System", value: "VoltAgent-inspired" },
        { label: "Direction", value: "Product scroll" },
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
      flowLabel: "HyperAgent experiment flow",
      steps: [
        {
          label: "01",
          title: "Plan",
          text: "Break research goals, datasets, and metrics into executable experiments.",
        },
        {
          label: "02",
          title: "Run",
          text: "Coordinate models, parameters, logs, and run records with less hidden state.",
        },
        {
          label: "03",
          title: "Evaluate",
          text: "Summarize results, compare performance, and keep traceable evidence.",
        },
        {
          label: "04",
          title: "Iterate",
          text: "Turn evaluation feedback into the next experiment plan.",
        },
      ],
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
const themeSequence: ThemeMode[] = ["dark", "light", "cycle"];
const themeIcons = {
  dark: Moon,
  light: Sun,
  cycle: Sunrise,
} satisfies Record<ThemeMode, typeof Moon>;
const phaseIcons = {
  dawn: Sunrise,
  noon: Sun,
  sunset: Sunset,
  evening: Moon,
  midnight: Moon,
  predawn: Sunrise,
} satisfies Record<DayPhase, typeof Moon>;

function getDayPhase(date = new Date()): DayPhase {
  const hour = date.getHours() + date.getMinutes() / 60;

  if (hour >= 5 && hour < 8) {
    return "dawn";
  }

  if (hour >= 8 && hour < 15.5) {
    return "noon";
  }

  if (hour >= 15.5 && hour < 18.5) {
    return "sunset";
  }

  if (hour >= 18.5 && hour < 22.5) {
    return "evening";
  }

  if (hour >= 22.5 || hour < 2.5) {
    return "midnight";
  }

  return "predawn";
}

function App() {
  const [lang, setLang] = useState<Lang>("zh");
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [dayPhase, setDayPhase] = useState<DayPhase>(() => getDayPhase());
  const copy = copies[lang];
  const nextLang: Lang = lang === "zh" ? "en" : "zh";
  const currentThemeIndex = themeSequence.indexOf(themeMode);
  const nextThemeMode = themeSequence[(currentThemeIndex + 1) % themeSequence.length];
  const ThemeIcon = themeMode === "cycle" ? phaseIcons[dayPhase] : themeIcons[themeMode];

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
    document.documentElement.dataset.phase = themeMode === "cycle" ? dayPhase : "static";
  }, [dayPhase, themeMode]);

  useEffect(() => {
    if (themeMode !== "cycle") {
      return;
    }

    const updatePhase = () => setDayPhase(getDayPhase());
    updatePhase();

    const timer = window.setInterval(updatePhase, 60 * 1000);

    return () => window.clearInterval(timer);
  }, [themeMode]);

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
    <main className="site-shell" lang={lang === "zh" ? "zh-CN" : "en"} data-theme={themeMode}>
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
            className="theme-toggle"
            type="button"
            aria-label={`${copy.theme.label}: ${copy.theme.modes[themeMode]}. ${copy.theme.switchLabel}: ${copy.theme.modes[nextThemeMode]}`}
            title={copy.theme.modes[themeMode]}
            onClick={() => setThemeMode(nextThemeMode)}
          >
            <ThemeIcon size={16} aria-hidden="true" />
          </button>
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

      <nav className="scene-rail" aria-label={copy.sceneNav.label}>
        {copy.sceneNav.items.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            <span>{item.number}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="scene-kicker">
            {copy.sceneNav.items[0].number} / {copy.sceneNav.items[0].label}
          </span>
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
          <div className="protocol-strip" aria-label={copy.hero.protocolLabel}>
            {copy.hero.protocol.map((item) => (
              <span key={item.label}>
                <strong>{item.label}</strong>
                {item.value}
              </span>
            ))}
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
          <div>
            <span className="scene-kicker">
              {copy.sceneNav.items[1].number} / {copy.sceneNav.items[1].label}
            </span>
            <p className="eyebrow">
              <TerminalSquare size={16} aria-hidden="true" />
              {copy.project.eyebrow}
            </p>
            <h2>{copy.project.title}</h2>
          </div>
        </div>
        <div className="product-stage">
          <a
            className="featured-card"
            href="https://github.com/STEYZJ/HyperAgent"
            data-reveal="card"
          >
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

          <div className="agent-flow" aria-label={copy.project.flowLabel}>
            {copy.project.steps.map((step, index) => (
              <article
                className="flow-step"
                key={`${step.label}-${step.title}`}
                data-reveal="card"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section scroll-scene" id="focus">
        <div className="section-heading" data-reveal="headline">
          <div>
            <span className="scene-kicker">
              {copy.sceneNav.items[2].number} / {copy.sceneNav.items[2].label}
            </span>
            <p className="eyebrow">
              <Radar size={16} aria-hidden="true" />
              {copy.focus.eyebrow}
            </p>
            <h2>{copy.focus.title}</h2>
          </div>
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
          <div>
            <span className="scene-kicker">
              {copy.sceneNav.items[3].number} / {copy.sceneNav.items[3].label}
            </span>
            <p className="eyebrow">
              <BrainCircuit size={16} aria-hidden="true" />
              {copy.stack.eyebrow}
            </p>
            <h2 id="stack-title">{copy.stack.title}</h2>
          </div>
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
          <span className="scene-kicker">
            {copy.sceneNav.items[4].number} / {copy.sceneNav.items[4].label}
          </span>
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
