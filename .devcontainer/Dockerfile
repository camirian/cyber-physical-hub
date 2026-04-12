# Context: High-Fidelity UI Node 20 Sandbox
# Reason: Enforces strict Next.js cloud-deployment parity locally.
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

ENV DEBIAN_FRONTEND=noninteractive

# Layer 1: Core interaction matrices
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
