import React from 'react';
import Link from 'next/link';

const projects = [
  {
    title: "Agentic Systems Verifier",
    description: "AI-native verification platform for Aerospace & Defense specifications (DO-178C / DO-254). Semantic ingestion and formal proof generation.",
    url: "https://asv-frontend-705975127752.us-central1.run.app/",
    status: "Live - v2.0",
    tag: "Core Engine"
  },
  {
    title: "AD Supply Chain Platform",
    description: "Cyber-physical zero-trust logistics orchestrator. Hardware-backed integrity ledger powering Tier 1 aerospace manufacturing.",
    url: "https://ad-supply-frontend-705975127752.us-central1.run.app/",
    status: "Live - v2.0",
    tag: "Logistics"
  },
  {
    title: "Safe ACS (Advanced Control Systems)",
    description: "Deterministic control OS. Provably safe, agentic control system for autonomous critical infrastructure and SMRs.",
    url: "https://safe-acs-705975127752.us-central1.run.app/",
    status: "Live - v2.0",
    tag: "Control Systems"
  }
];

export default function HubPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Sidebar */}
      <aside className="w-full md:w-80 md:fixed md:inset-y-0 border-r border-white/5 bg-[#0a0a0a] flex flex-col p-8 z-50">
        <div className="flex flex-col h-full">
          {/* Top: Logo/Brand */}
          <div className="mb-12">
            <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-lg shrink-0"></div>
              Nexus Hub
            </div>
            <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              Infrastructure Portal
            </div>
          </div>

          {/* Navigation/Links if any */}
          <nav className="flex-1 space-y-4">
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-6">
              Active Clusters
            </div>
            {projects.map((p, i) => (
              <a 
                key={i} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 p-3 -mx-3 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                  {p.title}
                </div>
                <div className="text-[10px] text-slate-600 group-hover:text-blue-400 font-medium">
                  {p.tag}
                </div>
              </a>
            ))}
          </nav>

          {/* Bottom: Copyright & Socials (Bottom Left Corner) */}
          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em] mb-4">
              © 2026 Cyber-Physical Hub
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span className="font-medium">Built by</span>
                <span className="font-bold text-slate-300">camirian</span>
              </div>
              <div className="flex items-center gap-5">
                <a href="https://github.com/camirian" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/caaren-amirian/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077B5] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.youtube.com/@CaarenAmirian" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FF0000] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-80 p-8 md:p-16 lg:p-24">
        <div className="max-w-4xl">
          <header className="mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 leading-[1.1]">
              Cyber-Physical Architecture Nexus
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              A unified suite of deterministic, AI-driven operating systems and verification engines designed for zero-margin environments.
            </p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="group block p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                    {project.tag}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-4 mt-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center text-[11px] font-bold text-emerald-400/90 tracking-widest uppercase">
                  <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {project.status}
                </div>
              </a>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}