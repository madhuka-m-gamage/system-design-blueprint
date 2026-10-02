# Master System Design & Workflow Guide
**An Authoritative, Version-Controlled Reference Architecture for Document-First, Contract-Driven Engineering**

## 1. Executive Summary & Core Principles
This repository contains the production-grade architectural baseline and specification-driven development (SDD) standards for enterprise software engineering. It enforces strict boundary isolation, cost-effective serverless execution, and multi-agent governance using **Claude Code** as the primary driver and **Google Antigravity** in isolated Git worktrees.

### The Five Non-Negotiable Pillars
1. **Document-First, Contract-Driven**: No code is written without an approved specification in `/specs/active/<feature>/spec.md` and an OpenAPI 3.1 / Protobuf contract.
2. **Strict Hexagonal Boundary Isolation**: The domain core (`packages/domain`) is isolated from external frameworks, database drivers, and network dependencies.
3. **Dual-Tier GCP/Firebase Storage Strategy**: Transactional, relational data resides in **PostgreSQL / AlloyDB / Cloud SQL** (using UUIDv7 primary keys, soft deletes, and optimistic concurrency control). Real-time client state synchronization is handled by **Cloud Firestore** via native `onSnapshot` listeners.
4. **Progressive Infrastructure Convergence**: The frontend is a static **React + Vite SPA** served via Vercel/Firebase Edge CDNs ($0 idle cost). The backend is a **Fastify (TypeScript)** service executing as Vercel Serverless Functions today, with zero code changes required to deploy as a container on Google Cloud Run tomorrow.
5. **Multi-Agent Git Worktree Governance**: Claude Code drives implementation in the primary working tree, while Google Antigravity conducts deep research, code reviews, and audits inside an isolated Git worktree (`.worktrees/antigravity`).

---

## 2. Monorepo Structure & Layout
```text
├── .github/workflows/pr-verification.yml   # Blocking CI: Typecheck, lint, dependency-cruiser, tests
├── docs/
│   ├── arc42/                             # Complete 12-Compartment arc42 Architecture Blueprint
│   │   ├── 01_introduction_and_goals.md   # Business drivers, goals, stakeholder matrix
│   │   ├── 02_constraints.md              # Technical, regional, legal, and operational limits
│   │   ├── 03_context_and_scope.md        # C4 Level 1 System Context & external interfaces
│   │   ├── 04_solution_strategy.md        # Hexagonal architecture, UUIDv7, dual-tier persistence
│   │   ├── 05_building_block_view.md      # C4 Level 2 Container & Level 3 Component views
│   │   ├── 06_runtime_view.md             # Sequence flows, webhooks, and state machine models
│   │   ├── 07_deployment_view.md          # Edge CDNs, Vercel Serverless, AlloyDB, Cloud Run
│   │   ├── 08_crosscutting_concepts.md    # Auth (Firebase), OCC, soft deletes, Mermaid styling
│   │   ├── 09_architecture_decisions.md   # Registry of MADR records
│   │   ├── 10_quality_requirements.md     # ISO/IEC 25010 Quality Tree & measurable SLOs
│   │   ├── 11_risks_and_technical_debt.md # Risk mitigations (cold starts, dual writes)
│   │   └── 12_glossary.md                 # Ubiquitous Language & domain dictionary
│   └── decisions/                         # Sequentially numbered MADR 3.0 records
│       ├── 0000-use-markdown-architectural-decision-records.md
│       ├── 0001-standardize-uuidv7-and-hexagonal-boundaries.md
│       ├── 0002-dual-tier-storage-postgres-alloydb-and-firestore.md
│       ├── 0003-react-vite-spa-and-fastify-serverless-runtime.md
│       └── 0004-claude-code-primary-and-antigravity-git-worktree-governance.md
├── specs/
│   ├── templates/                         # SDD Scaffolding Templates
│   │   ├── spec-template.md               # User stories, domain entities, acceptance scenarios
│   │   ├── plan-template.md               # Hexagonal mapping, storage deltas, test strategy
│   │   └── tasks-template.md              # Test-paired atomic task breakdown
│   ├── active/                            # In-flight feature specifications & test plans
│   └── archive/                           # Historical record of completed and merged specs
├── packages/
│   ├── domain/                            # Pure Domain Core (Entities, Value Objects, Events)
│   ├── application/                       # Use Cases (Single-Purpose Handlers) & Port Interfaces
│   └── database/                          # Schemas, Expand-and-Contract Migrations, Firestore Rules
├── apps/
│   ├── api/                               # Fastify API Service (Inbound & Outbound Adapters)
│   └── web/                               # React + Vite Client (Auto-generated TanStack Query hooks)
├── .dependency-cruiser.js                 # Automated layer isolation rules
├── CLAUDE.md                              # Claude Code primary operational manual
├── AGENTS.md                              # Universal agent operational policy
└── package.json                           # Workspace orchestration
```

---

## 3. Quick Reference Runbooks
* **Scaffolding a Feature**: Copy templates from `specs/templates/` to `specs/active/<feature-id>/`.
* **Running Architecture Checks**: `pnpm run test:architecture`
* **Spawning Antigravity Research Subagent**:
  ```bash
  git worktree add .worktrees/antigravity -b research/feature-x
  ```
* **Launching Primary Driver (Claude Code)**:
  ```bash
  claude
  ```
