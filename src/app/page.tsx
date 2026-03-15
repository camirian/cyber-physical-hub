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
    <main className="min-h-screen bg-slate-950 text-slate-200 p-8 md:p-24 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <header className="mb-20 border-b border-slate-800/50 pb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400">
            Cyber-Physical Architecture Nexus
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4 text-center md:text-left">
            Your AI-Powered Systems Engineering Co-Pilot.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed mb-10 text-center md:text-left">
            Automate the orchestration of autonomous control frameworks, digital twin telemetry, and deterministic actuation loops from high-fidelity simulation to real-world deployment.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <div className="flex gap-6 items-center">
              <a href="https://linkedin.com/in/camirian" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-all duration-300 flex items-center gap-2 group">
                <span className="text-sm font-semibold tracking-wider uppercase">LinkedIn</span>
                <span className="block w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-sky-400 transition-colors"></span>
              </a>
              <a href="https://github.com/camirian" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                <span className="text-sm font-semibold tracking-wider uppercase">GitHub</span>
                <span className="block w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-white transition-colors"></span>
              </a>
              <a href="https://youtube.com/@camirian" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-500 transition-all duration-300 flex items-center gap-2 group">
                <span className="text-sm font-semibold tracking-wider uppercase">YouTube</span>
                <span className="block w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-rose-500 transition-colors"></span>
              </a>
            </div>
          </div>
        </header>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="group block p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-500 relative overflow-hidden backdrop-blur-sm shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-900/20 text-sky-400 border border-sky-800/30 uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-4 group-hover:text-sky-400 transition-colors duration-300">
                {project.title}
              </h2>
              
              <p className="text-sm text-slate-400 mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm font-bold text-emerald-400/90 group-hover:text-emerald-400 transition-colors">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                </span>
                {project.status}
              </div>
            </a>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-slate-900/80 flex flex-col md:flex-row justify-between items-center gap-8 pb-12 px-8 max-w-6xl mx-auto">
        <div className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase text-center md:text-left">
          © 2026 Agentic Systems Verifier • Cyber-Physical Architecture Nexus
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <span className="font-medium">Built by</span>
          <a href="https://github.com/camirian" target="_blank" rel="noopener noreferrer" className="font-black text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-3 group">
            <span className="border-b border-transparent group-hover:border-white transition-all">camirian</span>
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}