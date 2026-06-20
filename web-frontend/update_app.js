const fs = require('fs');

let content = fs.readFileSync('c:/Users/user/Desktop/novice-dev-with-ai/web-frontend/src/App.tsx', 'utf8');

// Add useTransition to imports
content = content.replace(
  "import { useState, useEffect } from 'react'",
  "import React, { useState, useEffect, useTransition } from 'react'"
);

// Add CodeBlockRenderer before MODULES
const codeBlockRenderer = `
const CodeBlockRenderer = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\\w+)/.exec(className || '')
  const codeString = String(children).replace(/\\n$/, '')
  const [isPreview, setIsPreview] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!inline && match) {
    const lang = match[1]
    const isHtml = lang === 'html' || lang === 'xml'
    
    return (
      <div className="rounded-md border border-border/40 overflow-hidden my-6 bg-card/10 shadow-lg">
        <div className="flex items-center justify-between bg-neutral-900/80 px-4 py-2 border-b border-border/40">
          <span className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">{lang}</span>
          <div className="flex gap-2">
            {isHtml && (
              <button onClick={() => setIsPreview(!isPreview)} className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono bezel bg-card/50 text-cyan-400 hover:text-cyan-300 transition-all">
                {isPreview ? <FileCode className="size-3" /> : <ExternalLink className="size-3" />}
                <span>{isPreview ? 'Code' : 'Preview'}</span>
              </button>
            )}
            <button onClick={handleCopy} className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono bezel bg-card/50 text-muted-foreground hover:text-foreground transition-all">
              {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
        <div className="relative">
          {isPreview && isHtml ? (
            <div className="p-4 bg-white text-black min-h-[150px] overflow-hidden" dangerouslySetInnerHTML={{ __html: codeString }} />
          ) : (
            <pre className="p-4 text-sm overflow-x-auto text-slate-200 bg-neutral-950" {...props}>
              <code className={className}>{children}</code>
            </pre>
          )}
        </div>
      </div>
    )
  }
  return <code className={className} {...props}>{children}</code>
}

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400)
          return 100
        }
        return p + Math.floor(Math.random() * 15) + 5
      })
    }, 100)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-6 text-cyan-500 font-mono">
      <div className="scanline-effect" />
      <div className="max-w-md w-full flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="logo__icon text-4xl animate-pulse">⚡</span>
          <h1 className="font-title text-2xl font-bold tracking-tight text-foreground">John Okyere</h1>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Initializing LRN_STUDIO...</span>
          <div className="h-1 w-full bg-border/30 overflow-hidden relative">
            <div className="h-full bg-cyan-500 transition-all duration-100 shadow-glow-cyan" style={{ width: \`\${Math.min(progress, 100)}%\` }} />
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>NODE_ID: ONLINE</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground/60 mt-4 space-y-1">
          <p>&gt; Establishing secure connection...</p>
          {progress > 30 && <p>&gt; Loading curriculum modules...</p>}
          {progress > 60 && <p>&gt; Injecting markdown parsers...</p>}
          {progress > 90 && <p className="text-emerald-400">&gt; System Ready. Access Granted.</p>}
        </div>
      </div>
    </div>
  )
}
`;

content = content.replace('// Curriculum Data', codeBlockRenderer + '\\n\\n// Curriculum Data');

// Add states
content = content.replace(
  "export default function App() {",
  "export default function App() {\\n  const [showSplash, setShowSplash] = useState(true);\\n  const [isPending, startTransition] = useTransition();"
);

// Replace state setters to use transitions
content = content.replace(
  /onClick=\{\(\) => setActiveTab\('([a-z]+)'\)\}/g,
  "onClick={() => startTransition(() => setActiveTab('$1'))}"
);

content = content.replace(
  /onClick=\{\(\) => setSelectedModule\(m\)\}/g,
  "onClick={() => startTransition(() => setSelectedModule(m))}"
);

// Improve Prose classes
content = content.replace(
  /prose prose-sm md:prose-base prose-slate dark:prose-invert prose-cyan max-w-none relative z-10 prose-headings:font-title prose-a:text-cyan-500 hover:prose-a:text-cyan-400 prose-pre:bg-neutral-950\\/80 prose-pre:border prose-pre:border-border\\/40/g,
  "prose prose-sm md:prose-base dark:prose-invert max-w-none relative z-10 prose-headings:font-title prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-cyan-500 prose-code:text-cyan-400 prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-th:text-foreground prose-td:text-foreground/80 prose-tr:border-border/40"
);

content = content.replace(
  /prose prose-sm prose-slate dark:prose-invert prose-cyan max-w-none prose-headings:font-title prose-a:text-cyan-500 hover:prose-a:text-cyan-400 prose-pre:bg-neutral-950\\/80 prose-pre:border prose-pre:border-border\\/40 bg-neutral-950\\/30 p-6 rounded-md border border-border\\/30/g,
  "prose prose-sm dark:prose-invert max-w-none prose-headings:font-title prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-cyan-500 prose-code:text-cyan-400 prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-th:text-foreground prose-td:text-foreground/80 prose-tr:border-border/40 bg-neutral-950/30 p-6 rounded-md border border-border/30"
);

// Replace ReactMarkdown calls with custom components
content = content.replace(
  /<ReactMarkdown remarkPlugins=\{\[remarkGfm\]\}>/g,
  "<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlockRenderer }}>"
);

// Inject splash screen and isPending loader
content = content.replace(
  "return (",
  "if (showSplash) return <SplashScreen onComplete={() => setShowSplash(false)} />;\\n\\n  return ("
);

content = content.replace(
  "<div className=\"flex items-center gap-3 mt-1\">",
  \`<div className="flex items-center gap-3 mt-1">
              {isPending && <div className="absolute top-0 right-0 m-4"><span className="text-[10px] font-mono text-cyan-400 animate-pulse">PROCESSING...</span></div>}\`
);

fs.writeFileSync('c:/Users/user/Desktop/novice-dev-with-ai/web-frontend/src/App.tsx', content);
console.log('App.tsx updated successfully.');
