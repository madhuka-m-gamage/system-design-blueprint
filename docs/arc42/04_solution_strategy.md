# 04. Solution Strategy

## 4.1 Hexagonal Architecture (Ports and Adapters)
The architecture cleanly decouples domain logic from technological infrastructure:
* **Domain Core (`packages/domain`)**: Contains pure aggregates, entities, value objects, and domain events. It has **zero dependencies** on external packages, ORMs, or frameworks.
* **Application Layer (`packages/application`)**: Houses single-purpose Command/Query Handlers, DTO schemas, and Port Interfaces.
* **Inbound Ports**: Define primary application use cases (e.g., `CreateOrderUseCase`).
* **Outbound Ports**: Define secondary infrastructure contracts (e.g., `OrderRepositoryPort`, `PaymentGatewayPort`).
* **Adapters (`apps/api/src/adapters`)**: Concrete technological implementations (Fastify controllers, Postgres Drizzle repositories, Firestore adapters).

## 4.2 Entity Identity & Concurrency Strategy
* **UUIDv7 Primary Keys**: All domain entities generate 128-bit time-ordered UUIDv7 identifiers, ensuring optimal B-Tree clustering index locality without sequential integer enumeration risks.
* **Optimistic Concurrency Control (OCC)**: All mutable aggregate roots maintain an integer `version` field. Updates enforce `WHERE id = :id AND version = :current_version`. Zero updated rows triggers a domain `ConcurrencyConflictException`.
* **Soft Deletes**: Active entities maintain a `deleted_at TIMESTAMP NULL` column with partial unique indexes to guarantee non-destructive operational safety.

## 4.3 Dual-Tier Storage Strategy
* **Relational / Transactional Core (PostgreSQL / AlloyDB)**: System of record for ledgers, complex invariants, and relational integrity with `ON DELETE RESTRICT` constraints.
* **Real-Time Client Tier (Cloud Firestore)**: Serves denormalized view-models and live updates directly to clients via native `onSnapshot` listeners, eliminating the cost and complexity of custom WebSocket server fleets.

## 4.4 Progressive Deployment Model
* Start lean: Fastify routes execute as Vercel Serverless Functions (`api/[[...route]].ts`) with near-zero cold start (< 15ms) and $0 idle hosting costs.
* Scale cleanly: The exact same Fastify instance can be wrapped in a container and deployed to **Google Cloud Run** when traffic volume, execution duration, or private VPC peering demands it.
