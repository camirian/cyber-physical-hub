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
    <main className="min-h-screen bg-slate-950 text-slate-200 p-12 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <header className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Cyber-Physical Architecture Nexus
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A unified suite of deterministic, AI-driven operating systems and verification engines designed for zero-margin environments.
          </p>
        </header>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="group block p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-800">
                  {project.tag}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3 mt-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-emerald-400">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {project.status}
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}