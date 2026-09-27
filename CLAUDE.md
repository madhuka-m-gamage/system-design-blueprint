# CLAUDE.md - Core Project Operational Rules

## Build and Test Commands
- Install: `pnpm install --frozen-lockfile`
- Typecheck: `pnpm turbo run typecheck`
- Lint: `pnpm turbo run lint`
- Architecture Fitness: `pnpm run test:architecture`
- Unit Tests: `pnpm turbo run test:unit`
- Integration Tests: `pnpm turbo run test:integration`

## Architectural Boundaries (Strictly Enforced)
- `packages/domain`: PURE logic only. NEVER import fastify, drizzle, firestore, or external node_modules.
- Entity IDs: Always use UUIDv7 via `uuidv7()` package.
- Handlers: Single-purpose command/query handlers in `packages/application/src/use-cases/`.
- Backend: Fastify schemas using Zod for all inputs and responses.
- Frontend: React + Vite. NEVER manually write fetch calls; consume `@packages/api-client` generated hooks.

## Specification-Driven Development Workflow
- NEVER write code without an active specification in `specs/active/<feature>/`.
- Follow the 5 phases: Spec -> Plan -> Tasks -> Analyze -> Implement.
- Every task in `tasks.md` MUST be test-paired. Write failing tests first, implement, and verify passing.
- Definition of Done: Task is complete ONLY when `pnpm run test:architecture` and `pnpm turbo run typecheck` exit with code 0.
