# Master System Design & Workflow Guide
**An Authoritative, Version-Controlled Reference Architecture for Document-First, Contract-Driven Engineering**

## 1. Architectural Philosophy & Governance Principles
This repository contains the standardized, reusable architectural blueprint and specification-driven development (SDD) workflow for all modern software projects.

### Core Pillars
1. **Document-First, Contract-Driven**: No production code is authored without an approved specification in `/specs/active/` and a corresponding API contract in OpenAPI 3.1 or Protocol Buffers.
2. **Strict Hexagonal Boundary Isolation**: The business domain core (`packages/domain`) is isolated from external frameworks, database drivers, and network dependencies.
3. **Progressive Infrastructure Convergence**: Start with zero-idle-cost serverless primitives (React + Vite on Vercel/Firebase Edge CDNs, Fastify on Vercel Serverless, Cloud Firestore/AlloyDB), structured to transition into containerized runtimes (Google Cloud Run, Docker) without domain refactoring.
4. **Automated Architectural Fitness**: Boundaries are enforced programmatically in CI pipelines using static analysis (`dependency-cruiser`) rather than subjective code reviews.

---

## 2. Directory Layout & Monorepo Topology
```text
├── .github/workflows/pr-verification.yml   # Static checks, fitness functions, tests
├── docs/
│   ├── arc42/                             # 12-Compartment System Architecture Blueprint
│   └── decisions/                         # Immutable MADR 3.0 Records
├── specs/
│   ├── templates/                         # Reusable SDD artifacts (spec, plan, tasks)
│   ├── active/                            # In-flight feature work
│   └── archive/                           # Historical records of merged features
├── packages/
│   ├── domain/                            # Pure Domain Core (Entities, Value Objects, Events)
│   ├── application/                       # Use Cases & Port Definitions
│   └── database/                          # Schemas & Expand-and-Contract Migrations
├── apps/
│   ├── api/                               # Fastify backend service (Vercel / Cloud Run)
│   └── web/                               # React + Vite SPA client (Vercel Edge / Firebase)
├── .dependency-cruiser.js                 # Architectural layer fitness rules
├── CLAUDE.md                              # Claude Code primary operational manual
├── AGENTS.md                              # Universal agent operational policy
└── package.json                           # Workspace orchestration
```
