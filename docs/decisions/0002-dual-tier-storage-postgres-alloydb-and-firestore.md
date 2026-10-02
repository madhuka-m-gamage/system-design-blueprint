---
status: "accepted"
date: 2026-09-27
deciders: ["Madhuka Gamage"]
consulted: ["Engineering Team"]
informed: ["All Contributors"]
---

# Dual-Tier Storage Architecture: PostgreSQL / AlloyDB Core with Cloud Firestore Sync

## Context and Problem Statement
The system requires ACID guarantees, relational integrity, and complex queries, while simultaneously demanding real-time client state synchronization and low operational cost without maintaining dedicated WebSocket servers.

## Considered Options
* Pure Cloud Firestore (NoSQL Document Store only)
* Pure PostgreSQL with custom WebSocket cluster (Socket.io / Redis PubSub)
* Dual-Tier: PostgreSQL/AlloyDB Relational Core + Cloud Firestore Real-Time View Models

## Decision Outcome
Chosen option: "Dual-Tier: PostgreSQL/AlloyDB Relational Core + Cloud Firestore Real-Time View Models", because PostgreSQL/AlloyDB guarantees transactional integrity for ledgers and invariants, while Firestore provides zero-maintenance client real-time synchronization (`onSnapshot`).
