import { useState, useEffect } from 'react'
import { 
  BookOpen, 
  Terminal, 
  Info, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Github, 
  ExternalLink, 
  Settings, 
  Layers, 
  Accessibility, 
  FileCode, 
  Compass, 
  GitBranch 
} from 'lucide-react'

// Curriculum Data
const MODULES = [
  {
    id: 1,
    num: "01",
    title: "HTML Basics",
    duration: "2 hours (Onsite or Zoom Follow-Along)",
    prereq: "None (Environment Setup Complete)",
    desc: "Understand what HTML is, the anatomy of tags, and write a valid HTML5 page from memory.",
    learn: [
      "The HTML boilerplate line by line",
      "Tags, elements, and attributes",
      "Opening vs closing tags",
      "Chrome DevTools (F12) elements inspection",
      "W3C HTML validator checks"
    ],
    milestone: "Type the full boilerplate from memory and explain every line out loud.",
    exercises: [
      {
        name: "Exercise 1-A: Boilerplate Memory Test",
        desc: "Close all references. Open a blank file. Type the complete HTML5 boilerplate from memory and run it.",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`
      },
      {
        name: "Exercise 1-B: Adding Content",
        desc: "Add an h1 with your name, an h2 for 'About Me', and paragraphs about why you want to build websites.",
        code: `<h1>Amara Jenkins</h1>
<h2>About Me</h2>
<p>I am learning web development and AI engineering.</p>`
      }
    ]
  },
  {
    id: 2,
    num: "02",
    title: "Semantic HTML5",
    duration: "2 class sessions",
    prereq: "Module 1 milestone complete",
    desc: "Use the correct element for every piece of content to build screen-reader friendly layouts.",
    learn: [
      "Why semantic landmarks beats nested divs",
      "Page landmarks: header, nav, main, footer",
      "Content wrappers: section, article, aside",
      "Forms: label and input association using for/id",
      "Writing meaningful alt-text descriptions"
    ],
    milestone: "Build a complete 4-region page (Header, Navigation, Main, Footer) with zero <div> elements.",
    exercises: [
      {
        name: "Exercise 2-A: Semantic Landmark Outline",
        desc: "Rebuild your page structure using only semantic tags. Do not use divs.",
        code: `<header>
  <nav>
    <a href="#">Home</a>
  </nav>
</header>
<main>
  <section>
    <h2>Introduction</h2>
  </section>
</main>
<footer>
  <p>&copy; 2026 Student</p>
</footer>`
      }
    ]
  },
  {
    id: 3,
    num: "03",
    title: "Introduction to CSS",
    duration: "2 class sessions",
    prereq: "Module 2 milestone complete",
    desc: "Link external stylesheets, utilize classes, and master the CSS Box Model layout mechanics.",
    learn: [
      "Linking external styles vs inline styles",
      "CSS selectors (elements, classes) and rules",
      "The CSS Box Model: content, padding, border, margin",
      "Custom properties (CSS variables) for theme colors",
      "Creating a standard border reset wrapper"
    ],
    milestone: "Style a multi-section landing page from scratch without referencing syntax sheets.",
    exercises: [
      {
        name: "Exercise 3-A: Reset and Variables Setup",
        desc: "Initialize a standard CSS Reset and custom variables at the top of your stylesheet.",
        code: `/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-primary: #3b82f6;
  --color-bg: #f8fafc;
  --color-text: #1e293b;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: system-ui, sans-serif;
}`
      }
    ]
  },
  {
    id: 4,
    num: "04",
    title: "Layouts with Flexbox",
    duration: "2 class sessions",
    prereq: "Module 3 milestone complete",
    desc: "Arrange elements in fluid rows and columns using CSS Flexbox layouts.",
    learn: [
      "display: flex container setup",
      "Main axis alignment (justify-content)",
      "Cross axis alignment (align-items)",
      "Flex directions and gaps",
      "Flexible sizing: flex-grow, flex-shrink"
    ],
    milestone: "Center any element on request and build a responsive card row using Flexbox.",
    exercises: [
      {
        name: "Exercise 4-A: Responsive Navbar",
        desc: "Build a navbar with logo on the left and menu items on the right using space-between flex.",
        code: `<nav class="navbar">
  <div class="logo">My Brand</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Portfolio</a></li>
  </ul>
</nav>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}
</style>`
      }
    ]
  },
  {
    id: 5,
    num: "05",
    title: "Layouts with CSS Grid",
    duration: "2 class sessions",
    prereq: "Module 4 milestone complete",
    desc: "Build complex two-dimensional page grid layouts using fractional tracks.",
    learn: [
      "Grid container display settings",
      "grid-template-columns with fr units",
      "Responsive card grids with repeat() auto-fit",
      "Comparing Grid (2D page layouts) vs Flexbox (1D components)"
    ],
    milestone: "Build a 3-column responsive card grid that automatically collapses to 1 column on mobile.",
    exercises: [
      {
        name: "Exercise 5-A: The auto-fit Grid",
        desc: "Set up a container that flows items into columns and shrinks them on narrow viewports.",
        code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`
      }
    ]
  },
  {
    id: 6,
    num: "06",
    title: "Responsive Design",
    duration: "2 class sessions",
    prereq: "Module 5 milestone complete",
    desc: "Create fluid layouts using media queries following a mobile-first philosophy.",
    learn: [
      "Mobile-first CSS structure",
      "The viewport meta tag settings",
      "Media queries with @media (min-width: ...)",
      "Testing screen breakpoints in Chrome DevTools"
    ],
    milestone: "Refactor your personal page layout to scale seamlessly on mobile, tablet, and desktop.",
    exercises: [
      {
        name: "Exercise 6-A: Mobile-first styling",
        desc: "Write card styles that start at full width for mobile and transition to grids on wider viewports.",
        code: `/* Mobile */
.profile-card {
  width: 100%;
}

/* Tablet / Desktop */
@media (min-width: 768px) {
  .profile-card {
    width: 30%;
  }
}`
      }
    ]
  },
  {
    id: 7,
    num: "07",
    title: "Web Accessibility",
    duration: "2 class sessions",
    prereq: "Module 6 milestone complete",
    desc: "Ensure websites are keyboard navigable, screen reader readable, and meet WCAG compliance.",
    learn: [
      "Keyboard tab indexes and visible focus styles",
      "WCAG AA color contrast (4.5:1 ratio check)",
      "Skip Navigation landing links",
      "Auditing pages with WAVE and Lighthouse extensions"
    ],
    milestone: "Run a WAVE audit on your project, resolve at least 5 errors, and get a clean compliance report.",
    exercises: [
      {
        name: "Exercise 7-A: Skip Link Setup",
        desc: "Include a hidden skip link as the first item in the body that shifts into view when focused.",
        code: `<!-- Body First Item -->
<a href="#main" class="skip-link">Skip to Content</a>

<style>
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 0.5rem;
}
.skip-link:focus {
  top: 0;
}
</style>`
      }
    ]
  },
  {
    id: 8,
    num: "08",
    title: "Introduction to JavaScript",
    duration: "4 class sessions",
    prereq: "Module 7 milestone complete",
    desc: "Inject behaviour into page structures using selectors, listeners, classes, and local storage state.",
    learn: [
      "Linking scripts with defer attributes",
      "Selecting elements: querySelector",
      "Listen for user events (click, submit, input)",
      "Toggling dark/light modes and caching state in localStorage",
      "Validating input fields before form submissions"
    ],
    milestone: "Build a working contact form validator + a theme toggling button.",
    exercises: [
      {
        name: "Exercise 8-A: Toggle Theme State",
        desc: "Write standard JS that toggles a class on body and saves user preference.",
        code: `const btn = document.querySelector('#theme-btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});`
      }
    ]
  },
  {
    id: 9,
    num: "09",
    title: "Prompt Engineering",
    duration: "2 class sessions",
    prereq: "Module 8 milestone complete",
    desc: "Transform AI from a code generator into a custom tutor using structured 5-Part prompts.",
    learn: [
      "The Generative AI developer workflow",
      "The 5-Part Prompt Formula (Role, Context, Task, Constraints, Format)",
      "Writing prompts that return debugging hints instead of direct answers",
      "Directing AI to perform standard W3C semantic code reviews"
    ],
    milestone: "Compose structured prompt templates for code generation, bug checks, and explanation logs.",
    exercises: [
      {
        name: "Exercise 9-A: The 5-Part Prompt Design",
        desc: "Design a prompt following the formula to request a responsive footer segment from an AI tutor.",
        code: `Act as a senior frontend engineer [Role]. 
I am building a portfolio homepage in vanilla HTML/CSS [Context]. 
Write the HTML and CSS for a site footer with social links [Task].
Do not use inline CSS. Do not use divs unless necessary. Use rem sizes [Constraints].
Output the code block first, then accessibility notes [Format].`
      }
    ]
  },
  {
    id: 10,
    num: "10",
    title: "AI-Assisted Coding with Antigravity",
    duration: "2 class sessions",
    prereq: "Module 9 milestone complete",
    desc: "Customize AI assistants inside your local workspace using custom rules, contexts, and skills.",
    learn: [
      "The .ai folder structure in project roots",
      "Declaring code standards in .ai/rules/styling.md",
      "Building context maps of active components in .ai/contexts/",
      "Automating review playbooks via .ai/skills/"
    ],
    milestone: "Initialize a local .ai folder and construct a styled profile page complies with custom rules.",
    exercises: [
      {
        name: "Exercise 10-A: Initializing rules",
        desc: "Create .ai/rules/styling.md to enforce double quotes and rem font sizes in AI generations.",
        code: `# CSS Guidelines
- Indent: 2 spaces.
- Fonts: Use rem only.
- Classes: lowercase BEM format (.card__title).`
      }
    ]
  }
];

// Presets for prompt builder
const PROMPT_PRESETS = [
  {
    name: "Code Generation",
    role: "Senior Frontend Engineer & accessibility specialist",
    context: "Beginner portfolio landing page in static HTML/CSS",
    task: "Build a responsive Card Row with 3 testimonials",
    constraints: "Use Flexbox. Do not use divs. Use oklch colors. Rem text sizes. No inline styles.",
    format: "RAW HTML first, followed by the CSS block, followed by 3 screen-reader notes"
  },
  {
    name: "Debugging Assistant",
    role: "Helpful programming tutor",
    context: "JavaScript dark mode toggle that doesn't save state on page refresh",
    task: "Review my event listener and localStorage cache and help me find the error",
    constraints: "Do not write the corrected code. Only point out the lines with errors and provide hints.",
    format: "Numbered list of 3 debugging steps"
  },
  {
    name: "Refactoring & Reviews",
    role: "Strict Quality Assurance Lead",
    context: "HTML form containing input fields with styling classes",
    task: "Audit the HTML file for semantic markup and accessibility compliance",
    constraints: "Grade against W3C validation rules. Do not edit tags, only point out improvements.",
    format: "Table checklist detailing issue, severity, and suggested fix"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'modules' | 'builder' | 'resources'>('modules');
  const [selectedModule, setSelectedModule] = useState(MODULES[8]); // Module 9 default
  const [isDark, setIsDark] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Typewriter effect state
  const titleText = "PromptEng & AI Coding Classroom";
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);

  // Prompt builder states
  const [promptRole, setPromptRole] = useState(PROMPT_PRESETS[0].role);
  const [promptContext, setPromptContext] = useState(PROMPT_PRESETS[0].context);
  const [promptTask, setPromptTask] = useState(PROMPT_PRESETS[0].task);
  const [promptConstraints, setPromptConstraints] = useState(PROMPT_PRESETS[0].constraints);
  const [promptFormat, setPromptFormat] = useState(PROMPT_PRESETS[0].format);

  // Dark mode trigger
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Typewriter effect
  useEffect(() => {
    setDisplayedTitle("");
    setTypewriterDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedTitle(titleText.slice(0, i));
      if (i >= titleText.length) {
        clearInterval(timer);
        setTypewriterDone(true);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const applyPreset = (preset: typeof PROMPT_PRESETS[0]) => {
    setPromptRole(preset.role);
    setPromptContext(preset.context);
    setPromptTask(preset.task);
    setPromptConstraints(preset.constraints);
    setPromptFormat(preset.format);
  };

  // Compile prompt string
  const generatedPrompt = `Act as a ${promptRole || '[Role]'}.

Context: I am working on ${promptContext || '[Context]'}.

Task: Please ${promptTask || '[Task]'}.

Constraints:
${promptConstraints ? promptConstraints.split('.').map(c => c.trim()).filter(Boolean).map(c => `- ${c}`).join('\n') : '- None'}

Format of output:
${promptFormat || 'Standard response'}`;

  return (
    <div className="min-h-screen flex flex-col relative pb-12">
      {/* Visual Retro Overlays */}
      <div className="scanline-effect" />
      
      {/* Header Panel */}
      <header className="border-b border-border/40 bg-card/40 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">
              <span>NODE_ID:</span>
              <span className="text-foreground font-bold">LRN_STUDIO</span>
              <span className="opacity-40">|</span>
              <span>VERSION:</span>
              <span className="text-gradient-cyan font-bold">1.2.0</span>
            </div>
            
            <div className="flex items-center gap-3 mt-1">
              <span className="logo__icon text-xl">⚡</span>
              <h1 className="font-title text-xl font-bold tracking-tight text-foreground">
                John Okyere
              </h1>
              <span className="text-muted-foreground">/</span>
              <p className="font-mono text-xs text-muted-foreground">
                &gt; {displayedTitle}
                {!typewriterDone && (
                  <span className="inline-block w-[1.5px] h-[10px] bg-cyan-500 ml-0.5 animate-caret-blink" />
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bezel px-2.5 py-1 flex items-center gap-2 bg-emerald-500/5 border-emerald-500/20 animate-glow-pulse">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-500 uppercase">
                Classroom Online
              </span>
            </div>

            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 bezel bg-card/60 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 transition-all duration-300"
              title="Toggle theme"
            >
              {isDark ? <Sun className="size-4 text-cyan-400" /> : <Moon className="size-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-5xl w-full mx-auto px-6 mt-8 flex-1 flex flex-col gap-6">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-border/30 pb-px">
          <button 
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 font-title text-sm font-semibold tracking-wide border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'modules' 
                ? 'border-cyan-500 text-foreground' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <BookOpen className="size-4" />
            Curriculum Map
          </button>
          <button 
            onClick={() => setActiveTab('builder')}
            className={`px-4 py-2 font-title text-sm font-semibold tracking-wide border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'builder' 
                ? 'border-cyan-500 text-foreground' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Terminal className="size-4" />
            Interactive Prompt Builder
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 font-title text-sm font-semibold tracking-wide border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'resources' 
                ? 'border-cyan-500 text-foreground' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Compass className="size-4" />
            Cheatsheet & Resources
          </button>
        </div>

        {/* Tab content: Curriculum Map */}
        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Sidebar Modules List */}
            <div className="md:col-span-1 flex flex-col gap-2.5">
              <span className="text-section-title text-muted-foreground/60 mb-1">Course Modules</span>
              <div className="flex flex-col gap-2">
                {MODULES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(m)}
                    className={`text-left p-3 bezel rounded-sm transition-all duration-200 flex items-center gap-3 ${
                      selectedModule.id === m.id 
                        ? 'border-cyan-500/60 bg-cyan-500/5 shadow-glow-cyan text-foreground' 
                        : 'bg-card/30 hover:bg-card/70 hover:border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className={`font-mono text-xs font-bold ${selectedModule.id === m.id ? 'text-cyan-500' : 'text-muted-foreground/50'}`}>
                      {m.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-tight font-title">{m.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Module Detail */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="bezel p-6 bg-card/20 rounded-md flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <BookOpen className="size-32" />
                </div>

                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-500 font-bold">Module {selectedModule.num}</span>
                    <h2 className="font-title text-xl font-bold text-foreground mt-0.5">{selectedModule.title}</h2>
                  </div>
                  <div className="text-right font-mono text-[10px] text-muted-foreground">
                    <div>Duration: {selectedModule.duration}</div>
                    <div className="mt-0.5">Prereq: {selectedModule.prereq}</div>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">{selectedModule.desc}</p>

                {/* What We Learn */}
                <div className="mt-2">
                  <h4 className="font-title text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Layers className="size-3.5 text-cyan-500" /> What Students Learn
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedModule.learn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/90">
                        <span className="text-cyan-500 font-mono font-bold mt-0.5">√</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestone Requirement */}
                <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-sm mt-2">
                  <h4 className="font-title text-xs font-bold text-cyan-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <Check className="size-4" /> Progression Milestone
                  </h4>
                  <p className="text-xs text-foreground/90 leading-relaxed font-mono">{selectedModule.milestone}</p>
                </div>
              </div>

              {/* Practice Exercises Detail */}
              <div className="flex flex-col gap-4">
                <span className="text-section-title text-muted-foreground/60">Module Practice Exercises</span>
                <div className="flex flex-col gap-4">
                  {selectedModule.exercises.map((ex, idx) => (
                    <div key={idx} className="bezel p-5 bg-card/25 rounded-md flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b border-border/20 pb-2">
                        <h4 className="font-title text-sm font-semibold text-foreground">{ex.name}</h4>
                        <button
                          onClick={() => handleCopy(ex.code, `ex-${idx}`)}
                          className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono bezel bg-card/50 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 transition-all"
                        >
                          {copiedId === `ex-${idx}` ? (
                            <>
                              <Check className="size-3 text-emerald-500" />
                              <span className="text-emerald-500">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3" />
                              <span>Copy Template</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">{ex.desc}</p>
                      <div className="bg-neutral-950/70 dark:bg-black/70 p-3.5 rounded-sm border border-border/10 overflow-x-auto">
                        <pre className="font-mono text-xs text-slate-200">
                          <code>{ex.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab content: Interactive Prompt Builder */}
        {activeTab === 'builder' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="flex flex-col gap-5 bezel p-6 bg-card/25 rounded-md">
              <div className="flex items-center justify-between border-b border-border/20 pb-3">
                <h2 className="font-title text-base font-bold text-foreground">Formula Configuration</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Presets:</span>
                  <div className="flex gap-1.5">
                    {PROMPT_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => applyPreset(preset)}
                        className="px-2 py-0.5 text-[9px] font-mono bezel bg-card/75 text-muted-foreground hover:text-cyan-500 hover:border-cyan-500/50 transition-all"
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">[Role]</label>
                <input 
                  type="text" 
                  value={promptRole} 
                  onChange={(e) => setPromptRole(e.target.value)}
                  placeholder="e.g. Senior Frontend Engineer"
                  className="p-2.5 bg-neutral-950/40 dark:bg-black/40 border border-border/40 rounded-sm text-sm text-foreground focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              {/* Context */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">[Context]</label>
                <input 
                  type="text" 
                  value={promptContext} 
                  onChange={(e) => setPromptContext(e.target.value)}
                  placeholder="e.g. building a static HTML/CSS newsletter form"
                  className="p-2.5 bg-neutral-950/40 dark:bg-black/40 border border-border/40 rounded-sm text-sm text-foreground focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              {/* Task */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">[Task]</label>
                <input 
                  type="text" 
                  value={promptTask} 
                  onChange={(e) => setPromptTask(e.target.value)}
                  placeholder="e.g. write the HTML code for a login widget"
                  className="p-2.5 bg-neutral-950/40 dark:bg-black/40 border border-border/40 rounded-sm text-sm text-foreground focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              {/* Constraints */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">[Constraints] (separate with periods)</label>
                <textarea 
                  value={promptConstraints} 
                  onChange={(e) => setPromptConstraints(e.target.value)}
                  placeholder="e.g. No inline styles. Rem sizes only. Do not use Tailwind."
                  className="p-2.5 h-20 bg-neutral-950/40 dark:bg-black/40 border border-border/40 rounded-sm text-sm text-foreground focus:outline-none focus:border-cyan-500/60 resize-none"
                />
              </div>

              {/* Output Format */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">[Output Format]</label>
                <input 
                  type="text" 
                  value={promptFormat} 
                  onChange={(e) => setPromptFormat(e.target.value)}
                  placeholder="e.g. Code block first, followed by accessibility notes"
                  className="p-2.5 bg-neutral-950/40 dark:bg-black/40 border border-border/40 rounded-sm text-sm text-foreground focus:outline-none focus:border-cyan-500/60"
                />
              </div>
            </div>

            {/* Right Column: Prompt Output */}
            <div className="flex flex-col gap-4">
              <span className="text-section-title text-muted-foreground/60">Generated Prompt Payload</span>
              <div className="bezel p-6 bg-neutral-950/60 dark:bg-black/60 rounded-md border border-border/40 relative overflow-hidden flex flex-col gap-4">
                
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Terminal className="size-32" />
                </div>

                <div className="flex items-center justify-between border-b border-border/10 pb-3 z-10">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest font-bold">5-PART FORMAT COMPILED</span>
                  <button
                    onClick={() => handleCopy(generatedPrompt, 'compiled-prompt')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bezel bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all animate-glow-pulse"
                  >
                    {copiedId === 'compiled-prompt' ? (
                      <>
                        <Check className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="whitespace-pre-wrap font-mono text-xs text-slate-200 leading-relaxed overflow-y-auto max-h-[360px] z-10 p-2 bg-black/40 border border-border/5 rounded-sm">
                  {generatedPrompt}
                </div>

                <div className="p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-sm z-10 text-[10px] font-mono text-muted-foreground flex gap-2">
                  <Info className="size-4 text-cyan-400 flex-shrink-0" />
                  <span>Copy this structured prompt payload and paste it as the starting prompt for your AI assistant in class to get compliant, standard-oriented code outputs.</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab content: Cheatsheet & Resources */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Git cheatsheet */}
            <div className="bezel p-6 bg-card/25 rounded-md flex flex-col gap-4">
              <h3 className="font-title text-base font-bold text-foreground flex items-center gap-2 border-b border-border/20 pb-2">
                <GitBranch className="size-4.5 text-cyan-500" /> Git Commands Reference
              </h3>
              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground uppercase text-[9px] tracking-widest font-bold">1. Pull Updates</span>
                  <code className="p-2 bg-neutral-950/60 dark:bg-black/60 text-slate-200 rounded-sm border border-border/10">git pull upstream main</code>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground uppercase text-[9px] tracking-widest font-bold">2. Switch Branch</span>
                  <code className="p-2 bg-neutral-950/60 dark:bg-black/60 text-slate-200 rounded-sm border border-border/10">git checkout student/your-name</code>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground uppercase text-[9px] tracking-widest font-bold">3. Save and Commit</span>
                  <code className="p-2 bg-neutral-950/60 dark:bg-black/60 text-slate-200 rounded-sm border border-border/10">{"git add .\ngit commit -m \"add: module completion\"\ngit push origin student/your-name"}</code>
                </div>
              </div>
            </div>

            {/* General Resources */}
            <div className="bezel p-6 bg-card/25 rounded-md flex flex-col gap-4">
              <h3 className="font-title text-base font-bold text-foreground flex items-center gap-2 border-b border-border/20 pb-2">
                <Settings className="size-4.5 text-cyan-500" /> Quality & Validation Links
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <a 
                  href="https://validator.w3.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bezel bg-card/30 hover:bg-card/70 hover:border-cyan-500/50 flex items-center justify-between text-muted-foreground hover:text-foreground transition-all rounded-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold leading-none font-title text-foreground">W3C HTML Validator</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Audit HTML templates for syntax error compliance</span>
                  </div>
                  <ExternalLink className="size-4" />
                </a>

                <a 
                  href="https://jigsaw.w3.org/css-validator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bezel bg-card/30 hover:bg-card/70 hover:border-cyan-500/50 flex items-center justify-between text-muted-foreground hover:text-foreground transition-all rounded-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold leading-none font-title text-foreground">W3C CSS Validator</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Audit styling classes and variable properties</span>
                  </div>
                  <ExternalLink className="size-4" />
                </a>

                <a 
                  href="https://wave.webaim.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bezel bg-card/30 hover:bg-card/70 hover:border-cyan-500/50 flex items-center justify-between text-muted-foreground hover:text-foreground transition-all rounded-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold leading-none font-title text-foreground">WAVE Accessibility Audit</span>
                    <span className="text-[10px] text-muted-foreground mt-1">Identify keyboard, alt, contrast WCAG errors</span>
                  </div>
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="max-w-5xl w-full mx-auto px-6 mt-12 border-t border-border/20 pt-6 text-center text-xs text-muted-foreground font-mono">
        <p>&copy; 2026 John Okyere. Powered by Antigravity IDE and React 19.</p>
      </footer>
    </div>
  )
}
