# Technical Plan: [Feature Name]
**Feature ID**: `feat-[id]`  

## 1. Hexagonal Boundary Mapping
- **Domain Entities**: `packages/domain/src/entities/[name].entity.ts`
- **Application Port (Inbound)**: `packages/application/src/ports/inbound/[name].use-case.ts`
- **Application Port (Outbound)**: `packages/application/src/ports/outbound/[name]-repo.port.ts`
- **Infrastructure Adapter**: `apps/api/src/adapters/outbound/[name]-db.adapter.ts`
- **Presentation Controller**: `apps/api/src/adapters/inbound/[name].controller.ts`

## 2. Persistence Delta
- **Target Storage Engine**: [PostgreSQL / AlloyDB | Cloud Firestore]
- **Migration Strategy**: Expand-and-Contract (Forward-Only SQL migration)
- **Primary Key**: UUIDv7

## 3. Testing Strategy
- Unit Tests (Domain Invariants): `packages/domain/test/[name].spec.ts`
- Integration Tests (HTTP Routes): `apps/api/test/[name].route.spec.ts`
- Boundary Check: `pnpm run test:architecture`
