# 01. Introduction and Goals

## 1.1 Business Context & Vision
This architecture provides an authoritative, modular, and contract-driven engineering foundation for modern web and cloud platforms. It standardizes system design from requirements definition through production verification, enabling human architects and AI coding agents to collaborate without architectural drift or unmaintainable complexity.

## 1.2 Top Architectural Goals
| Priority | Goal | Description & Metric |
| :---: | :--- | :--- |
| **G-1** | **Strict Boundary Isolation** | 100% decoupling of the Domain Core from frameworks, databases, and UI layers. Verified via `dependency-cruiser` in CI (0 forbidden imports). |
| **G-2** | **Cost & Operational Efficiency** | Zero idle compute cost during early lifecycle using static edge hosting (Vercel/Firebase) and serverless execution, with a zero-rewrite path to Cloud Run containers. |
| **G-3** | **Contract-Driven Type Safety** | 100% end-to-end type safety from OpenAPI 3.1 backend schemas to auto-generated TanStack Query hooks in the Vite frontend. Zero manual fetch calls. |
| **G-4** | **Deterministic Agentic Delivery** | Elimination of AI coding hallucinations via the 5-phase Specification-Driven Development (SDD) lifecycle with mandatory test-paired tasks. |

## 1.3 Stakeholder Matrix
| Stakeholder | Expectations | Interaction Interface |
| :--- | :--- | :--- |
| **Lead Architect** | Long-term maintainability, zero vendor lock-in, auditable decisions. | MADR records (`docs/decisions/`), arc42 documentation. |
| **Full-Stack Developer** | Fast local feedback, clear code placement, type safety. | Monorepo packages (`packages/`, `apps/`), `pnpm` scripts. |
| **Primary AI Agent (Claude Code)** | Unambiguous operational instructions, clear definition of done. | `CLAUDE.md`, `/specs/active/`, atomic tasks. |
| **Auxiliary AI Agent (Antigravity)** | Isolated workspace for deep research and pre-merge audits. | Isolated Git worktree (`.worktrees/antigravity`). |
| **DevOps / SRE** | Zero-downtime deployments, friction-free CI/CD, secure secrets. | GitHub Actions, Vercel/Firebase deployment pipelines. |
