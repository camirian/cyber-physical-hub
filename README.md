# Cyber-Physical Nexus Hub

The **Cyber-Physical Nexus Hub** is a centralized platform for managing, monitoring, and deploying advanced cyber-physical system (CPS) architectures and autonomous control frameworks. It serves as the orchestration layer for integrating digital twin simulations, real-world sensor telemetry, and intelligent actuation loops.

## 🚀 Live Deployment

The application is deployed and accessible via Google Cloud Run:
**[https://cyber-physical-hub-705975127752.us-central1.run.app/](https://cyber-physical-hub-705975127752.us-central1.run.app/)**

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) (Modern Sidebar Architecture)
- **Runtime**: [Node.js 20+](https://nodejs.org)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run) (Automated CI/CD)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

## 🎨 UI & Aesthetics

The Hub features a professional, high-fidelity sidebar-based layout designed for mission-critical system monitoring:
- **Premium Gradients**: Precise `blue-400` to `emerald-400` title aesthetics.
- **Deterministic Sidebar**: Pinned navigation and branding for centralized cluster control.
- **Integrated Socials**: Linked LinkedIn, GitHub, and YouTube profiles for deep-tech connectivity.

## 📖 Getting Started (DevContainer Mandatory)

> [!WARNING]
> DO NOT execute Node.js locally on your desktop. To guarantee perfect operational parity with the GCP Linux runtimes, execute **"Dev Containers: Reopen in Container"** in Visual Studio Code. This will dynamically install all NPM package binaries strictly within a quarantined environment.

### Local UI Boot Protocol

1. Once inside the Linux Sandbox, test the Next.js server:
```bash
npm run dev
```

2. The application will automatically punch Port `3000` through the security boundary, allowing you to view it cleanly in Chrome.

### Build and Deployment

**Automated CI/CD:**
The project is configured with GitHub Actions. Any push to the `main` branch triggers an automated build and deployment to Google Cloud Run.

**Manual Production Build:**
To create a production build locally:
```bash
npm run build
```

The site is optimized with custom `Cache-Control` headers to ensure rapid delivery of the high-fidelity UI.

## 🌐 Vision

The Nexus Hub bridges the gap between high-fidelity digital twin simulations and safe, agentic actuation in real-world environments, providing a deterministic "operating system" for autonomous aerospace and defense architectures.
