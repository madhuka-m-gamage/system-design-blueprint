# Atomic Implementation Tasks: [Feature Name]
**Feature ID**: `feat-[id]`  

- [ ] **1. Domain Modeling**
  - [ ] 1.1: Write failing unit tests for `[Entity]` state invariants
  - [ ] 1.2: Implement pure domain entity in `packages/domain`
  - [ ] 1.3: Verify Task 1.1 tests pass with code 0

- [ ] **2. Application Layer & Ports**
  - [ ] 2.1: Define inbound/outbound port interfaces
  - [ ] 2.2: Implement single-purpose `[Name]Handler`
  - [ ] 2.3: Unit test handler using mock repository ports

- [ ] **3. Persistence & Adapters**
  - [ ] 3.1: Write forward-only schema migration
  - [ ] 3.2: Implement repository adapter (Drizzle/Firestore)
  - [ ] 3.3: Implement Fastify presentation route with Zod validation

- [ ] **4. Verification & Archival**
  - [ ] 4.1: Run full typecheck and architectural fitness check
  - [ ] 4.2: Move specification folder to `/specs/archive/feat-[id]/`
