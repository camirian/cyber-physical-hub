# Cyber-Physical Nexus Hub

The **Cyber-Physical Nexus Hub** is a centralized platform for managing, monitoring, and deploying advanced cyber-physical system (CPS) architectures and autonomous control frameworks. It serves as the orchestration layer for integrating digital twin simulations, real-world sensor telemetry, and intelligent actuation loops.

## 🚀 Live Deployment

The application is deployed and accessible via Google Cloud Run:
**[https://cyber-physical-hub-705975127752.us-central1.run.app/](https://cyber-physical-hub-705975127752.us-central1.run.app/)**

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Runtime**: [Node.js](https://nodejs.org)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📖 Getting Started

### Local Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Deployment

To create a production build:

```bash
npm run build
```

The project is configured for containerized deployment. Ensure your Docker environment is set up for Google Cloud Artifact Registry to deploy updates.

## 🌐 Vision

The Hub aims to bridge the gap between high-fidelity simulations and physical hardware, providing a unified interface for Level 5 (L5) reliability in autonomous systems.
