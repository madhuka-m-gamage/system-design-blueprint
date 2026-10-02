# 09. Architecture Decisions

This chapter maintains an active index of all Markdown Architectural Decision Records (MADR 3.0) stored under `/docs/decisions/`.

| Record ID | Title | Status | Date | Core Decision |
| :--- | :--- | :---: | :---: | :--- |
| [0000](../decisions/0000-use-markdown-architectural-decision-records.md) | Use MADR Format | Accepted | 2026-09-27 | Standardize decision logs directly in Git via MADR 3.0. |
| [0001](../decisions/0001-standardize-uuidv7-and-hexagonal-boundaries.md) | UUIDv7 & Hexagonal Core | Accepted | 2026-09-27 | Enforce UUIDv7 primary keys and zero-import domain purity. |
| [0002](../decisions/0002-dual-tier-storage-postgres-alloydb-and-firestore.md) | Dual-Tier Persistence | Accepted | 2026-09-27 | PostgreSQL/AlloyDB as ACID core; Firestore as real-time tier. |
| [0003](../decisions/0003-react-vite-spa-and-fastify-serverless-runtime.md) | React+Vite & Fastify | Accepted | 2026-09-27 | Static Vite edge hosting + dual-target Fastify runtime. |
| [0004](../decisions/0004-claude-code-primary-and-antigravity-git-worktree-governance.md) | Multi-Agent Worktrees | Accepted | 2026-09-27 | Claude Code primary + Google Antigravity in Git worktrees. |
