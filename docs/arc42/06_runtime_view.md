# 06. Runtime View

## 6.1 Command Execution Flow (Order Creation)
The following sequence demonstrates how a command traverses through presentation adapters, application use-case handlers, pure domain entities, and persistence ports:

```mermaid
sequenceDiagram
    autonumber
    actor Client as React Client (Vite)
    participant API as Fastify Controller
    participant Handler as CreateOrderHandler
    participant Entity as Order (Domain)
    participant Repo as PostgresOrderRepository
    participant DB as PostgreSQL / AlloyDB

    Client->>API: POST /api/orders (Bearer JWT, Payload)
    API->>API: Validate Zod Schema & Verify JWT
    API->>Handler: execute(CreateOrderCommand)
    Handler->>Entity: Order.create(uuidv7(), customerId, amount)
    Entity-->>Handler: Order instance (State: DRAFT, Version: 1)
    Handler->>Repo: save(order)
    Repo->>Repo: toPersistence(order) mapper
    Repo->>DB: INSERT INTO orders (id, customer_id, amount, state, version)
    DB-->>Repo: 201 Created
    Repo-->>Handler: Success
    Handler-->>API: void
    API-->>Client: 201 Created { id: UUIDv7, state: "DRAFT" }
```

## 6.2 Real-Time Event Sync via Cloud Firestore
When state mutations occur that need instant client reflection without polling:
1. Fastify completes transactional commit in PostgreSQL/AlloyDB.
2. Fastify updates the corresponding client document in Cloud Firestore.
3. The Vite frontend's active `onSnapshot` listener receives the delta push in < 100ms and updates TanStack Query cache optimistically.

## 6.3 Universal Aggregate Lifecycle State Machine
```mermaid
stateDiagram-v2
    [*] --> Draft : CreateCommand
    Draft --> Submitted : SubmitCommand [Valid Payload]
    Draft --> Cancelled : CancelCommand
    Submitted --> Approved : ApproveCommand [Verification Passed]
    Submitted --> Rejected : RejectCommand [Verification Failed]
    Approved --> Fulfilled : FulfillCommand [Settlement Confirmed]
    Fulfilled --> [*]
    Cancelled --> [*]
    Rejected --> [*]
```
