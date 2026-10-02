# 05. Building Block View

## 5.1 Level 2: Container Diagram
```mermaid
flowchart TD
    classDef client fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef edge fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef backend fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef storage fill:#fff3e0,stroke:#e65100,stroke-width:2px;

    ViteApp["React + Vite Client SPA<br/>[TypeScript, TanStack Query]"]:::edge
    FastifyAPI["Fastify API Service<br/>[TypeScript, Zod Validation]"]:::backend
    Firestore[("Cloud Firestore<br/>[Real-Time State & Documents]")]:::storage
    AlloyDB[("PostgreSQL / AlloyDB<br/>[ACID Relational Core]")]:::storage

    ViteApp -->|REST HTTPS (OpenAPI Contract)| FastifyAPI
    ViteApp -.->|Real-time onSnapshot Listeners| Firestore
    FastifyAPI -->|Read / Write Documents| Firestore
    FastifyAPI -->|SQL Queries (Drizzle / Kysely)| AlloyDB
```

## 5.2 Level 3: Component Diagram (Hexagonal Package Layout)
```mermaid
flowchart LR
    classDef domain fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef app fill:#e8eaf6,stroke:#303f9f,stroke-width:2px;
    classDef adapter fill:#e0f2f1,stroke:#00796b,stroke-width:2px;

    subgraph Adapters ["apps/api/src/adapters (Adapters Layer)"]
        InboundCtrl["Fastify Controller<br/>(Inbound Adapter)"]:::adapter
        PostgresRepo["Postgres Repository<br/>(Outbound Adapter)"]:::adapter
        FirestoreRepo["Firestore Repository<br/>(Outbound Adapter)"]:::adapter
    end

    subgraph Application ["packages/application (Application Layer)"]
        InboundPort["<<Interface>><br/>Inbound Port"]:::app
        Handler["Command / Query Handler<br/>(Single Purpose)"]:::app
        OutboundPort["<<Interface>><br/>Repository Outbound Port"]:::app
    end

    subgraph DomainCore ["packages/domain (Pure Domain Core)"]
        Aggregate["Aggregate Root / Entity<br/>(Pure Logic)"]:::domain
        ValueObject["Value Objects<br/>(Immutable)"]:::domain
        DomainEvent["Domain Events"]:::domain
    end

    InboundCtrl -->|Invokes| InboundPort
    InboundPort -.->|Implemented by| Handler
    Handler -->|Instantiates / Mutates| Aggregate
    Aggregate -->|Contains| ValueObject
    Aggregate -->|Emits| DomainEvent
    Handler -->|Invokes| OutboundPort
    PostgresRepo -.->|Implements| OutboundPort
    FirestoreRepo -.->|Implements| OutboundPort
```
