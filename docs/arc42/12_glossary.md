# 12. Glossary & Ubiquitous Language

| Term | Definition in this Architecture |
| :--- | :--- |
| **Aggregate Root** | The primary domain entity that controls internal state mutations and enforces business invariants. External objects may only reference the Aggregate Root via its UUIDv7 ID. |
| **Bounded Context** | An explicit boundary within which a specific domain model applies. In this monorepo, each bounded context is partitioned into dedicated packages or modules. |
| **Primary Port (Inbound)** | An application interface that defines commands and queries exposed to inbound adapters (e.g. HTTP controllers, CLI scripts). |
| **Secondary Port (Outbound)** | An application interface that abstracts infrastructure capabilities (repositories, payment gateways, message publishers). |
| **UUIDv7** | Universal Unique Identifier Version 7. A 128-bit time-ordered identifier combining millisecond Unix timestamp with random entropy. |
| **Optimistic Concurrency Control (OCC)** | A concurrency control method where records maintain a `version` number. Updates fail if the record was modified by another transaction since read. |
| **Expand-and-Contract** | A forward-only database migration pattern that introduces new columns/tables non-destructively before deprecating old ones. |
| **Specification-Driven Development (SDD)** | A software delivery methodology where formal specifications, technical plans, and test-paired tasks precede code authoring. |
| **Git Worktree** | A native Git capability allowing multiple working trees attached to the same repository, enabling concurrent AI agents to operate without collisions. |
