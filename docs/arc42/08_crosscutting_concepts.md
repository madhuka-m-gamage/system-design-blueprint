# 08. Crosscutting Concepts

## 8.1 Authentication & Authorization
* **Provider**: Firebase Authentication.
* **Token Verification**: Inbound Fastify hook verifies RS256 JWT signatures on `Authorization: Bearer <token>`.
* **Claims**: Custom claims (`roles: ["admin", "customer"]`) mapped to domain authorization checks in application handlers.

## 8.2 Universal Identity (UUIDv7)
* Standardized 128-bit timestamp-first UUID format.
* Implementation: `uuidv7()` utility function.
* Ensures ordered B-Tree index insertion, avoiding database page fragmentation under high write loads.

## 8.3 Concurrency & Soft Deletes
* **Optimistic Locking**:
  ```sql
  UPDATE orders 
  SET state = :state, version = version + 1 
  WHERE id = :id AND version = :current_version;
  ```
* **Soft Delete Indexing**:
  ```sql
  ALTER TABLE orders ADD COLUMN deleted_at TIMESTAMP WITH TIME ZONE NULL;
  CREATE INDEX idx_orders_active ON orders (customer_id) WHERE deleted_at IS NULL;
  ```

## 8.4 Visual Standards & Mermaid Styling Rules
To prevent broken, tangled, or unreadable diagrams:
1. **Font**: Always declare neutral sans-serif: `fontFamily: 'Inter, system-ui, sans-serif'`.
2. **Label Wrapping**: Maximum 30 characters per node line. Use manual `<br/>` breaks.
3. **Orientation**: Explicit `TD` (top-down) or `LR` (left-to-right). Avoid diagonal flows.
4. **State Machine Diagrams**: Mandatory for any aggregate root with >= 3 lifecycle states.
