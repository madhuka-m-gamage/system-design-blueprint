---
status: "accepted"
date: 2026-09-27
deciders: ["Madhuka Gamage"]
consulted: ["Engineering Team"]
informed: ["All Contributors"]
---

# React + Vite SPA on Edge CDNs with Fastify Progressive Backend

## Context and Problem Statement
We need an ultra-low-cost, serverless deployment model that runs on free/low-cost tiers (Vercel/Firebase) without heavy cold starts, while retaining the ability to scale to Google Cloud Run containers without rewriting backend routes.

## Considered Options
* Next.js App Router (Full-Stack React Server Components)
* NestJS on dedicated Kubernetes / Docker containers
* React + Vite SPA (Vercel Edge) + Fastify (TypeScript) Serverless-to-Container Backend

## Decision Outcome
Chosen option: "React + Vite SPA + Fastify Progressive Backend", because Vite outputs pure static assets with zero cold starts, and Fastify boots in < 15ms while running seamlessly both as a Vercel Serverless Function and a standalone Docker/Cloud Run container.
