# 02. Architecture Constraints

## 2.1 Technical Constraints
* **Runtime & Language**: Node.js >= 20 LTS, TypeScript strictly typed (`strict: true`, `noImplicitAny: true`).
* **Operating System**: Linux Ubuntu >= 22.04 LTS as the native development, CI, and server execution environment.
* **Frontend Runtime**: React 18+ bundled via **Vite** as a Single Page Application (SPA), deployed to global Edge CDNs.
* **Backend Framework**: **Fastify** (TypeScript) implementing native JSON schema validation via Zod/TypeBox.
* **Database Relational Engine**: PostgreSQL >= 15 / Google Cloud AlloyDB / Cloud SQL.
* **Database Real-Time Engine**: Google Cloud Firestore (Firebase) with native client-side `onSnapshot` listeners.
* **Primary Key Standard**: 128-bit time-ordered **UUIDv7** for all domain aggregate roots.

## 2.2 Operational & Regional Constraints
* **Global & Regional Availability**: All selected libraries (Fastify, Vite, Drizzle, etc.) are open-source (MIT/Apache 2.0) with zero regional sanctions, licensing paywalls, or IP blocks in Sri Lanka or globally.
* **Pluggable Payment Gateway Architecture**: Payment processing is abstracted behind secondary ports (`PaymentGatewayPort`), supporting international gateways (Stripe, PayPal), local regional gateways (e.g., PayHere for Sri Lanka / LKR), or manual bank transfer workflows.
* **Cloud Cost Envelope**: Architecture must run within serverless free/low-cost tiers (Vercel Free/Pro, Firebase Free Spark/Blaze pay-as-you-go, GCP Free Tier) during early stages.

## 2.3 Organizational & Development Constraints
* **Version Control**: Git with strict Git worktree isolation for concurrent agent workflows (`.worktrees/` excluded from main branch tracking).
* **Automated CI Gating**: Local git commits remain unblocked; all verification gates (types, lint, architecture, tests) execute in GitHub Actions PR pipelines.
