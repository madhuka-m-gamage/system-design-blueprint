# 11. Risks and Technical Debt

## 11.1 Identified Technical Risks & Mitigations
| Risk ID | Description | Severity | Mitigation Strategy |
| :--- | :--- | :---: | :--- |
| **R-1** | **Serverless Cold Starts** | Low | Fastify schema-based core with minimal dependencies ensures < 25ms cold starts on Vercel Serverless. |
| **R-2** | **Dual-Store Synchronization** | Medium | PostgreSQL/AlloyDB is the single source of truth; Firestore sync failures are handled via transactional outbox retry loops. |
| **R-3** | **AI Agent Context Drift** | High | Machine-readable `CLAUDE.md`, scoped task checklists in `/specs/active/`, and automated `dependency-cruiser` CI gates. |
| **R-4** | **Third-Party Payment Lock-in** | Low | Outbound `PaymentGatewayPort` abstracts all merchant logic, allowing swapping between Stripe, PayPal, and PayHere seamlessly. |
