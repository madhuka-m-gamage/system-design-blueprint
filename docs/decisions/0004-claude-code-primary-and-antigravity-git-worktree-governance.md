---
status: "accepted"
date: 2026-09-27
deciders: ["Madhuka Gamage"]
consulted: ["Engineering Team"]
informed: ["All Contributors"]
---

# Multi-Agent Governance: Claude Code Primary Driver with Google Antigravity Git Worktree

## Context and Problem Statement
Running multiple AI coding agents concurrently in a single working directory causes file lock collisions, terminal race conditions, and corrupted Git index states.

## Considered Options
* Sequential single-agent execution in one terminal
* Multi-agent execution in shared working directory
* Dual-Agent Git Worktree Isolation: Claude Code (Main Tree) + Google Antigravity (.worktrees/)

## Decision Outcome
Chosen option: "Dual-Agent Git Worktree Isolation", because Git worktrees provide 100% physical file and terminal isolation over the same commit history. Claude Code builds features, while Antigravity conducts deep research and audits into `/specs/active/<feature>/research.md`.
