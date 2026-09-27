# AGENTS.md - System Operational Policy
This repository adheres to the Linux Foundation Agentic AI Foundation standard.

All agents operating in this workspace must conform to the policies codified in:
1. `/CLAUDE.md` for executable commands and boundary gates.
2. `/docs/arc42/` for global system architecture and context.
3. `/docs/decisions/` for architectural decision history (MADR).

Operating Constraints:
- Destructive commands (`git push --force`, `git reset --hard`, `rm -rf`) are strictly prohibited.
- Auxiliary agents (Google Antigravity) must execute exclusively inside `.worktrees/`.
