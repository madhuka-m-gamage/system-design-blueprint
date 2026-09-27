---
status: "accepted"
date: 2026-09-27
deciders: ["Madhuka Gamage"]
consulted: ["Engineering Team"]
informed: ["All Contributors"]
---

# Standardize on UUIDv7 Keys and Strict Hexagonal Boundaries

## Context and Problem Statement
Distributed systems require non-enumerable primary keys with high B-Tree write efficiency. Domain logic must remain independent of persistence mechanisms.

## Considered Options
* UUIDv4 (Random)
* Sequential BigInt auto-increment
* UUIDv7 (Time-Ordered 128-bit)

## Decision Outcome
Chosen option: "UUIDv7 (Time-Ordered 128-bit)", because it provides natural chronological sorting at the database tier while remaining opaque to enumeration attacks.
