# 10. Quality Requirements

## 10.1 ISO/IEC 25010 Quality Tree

```mermaid
flowchart LR
    Q[ISO/IEC 25010 Quality Standards]
    Q --> P[Performance Efficiency]
    Q --> R[Reliability & Availability]
    Q --> S[Security & Privacy]
    Q --> M[Maintainability & Modularity]

    P --> P1["API Latency: p95 < 200ms, p99 < 500ms"]
    P --> P2["Cold Start: < 25ms on Vercel Edge"]

    R --> R1["Availability: 99.9% target SLO"]
    R --> R2["Durability: RPO <= 1m, RTO < 15m"]

    S --> S1["Zero Trust: Strict RS256 JWT validation"]
    S --> S2["Vulnerability: 0 Critical / High CVEs in CI"]

    M --> M1["Domain Purity: 0 external imports in domain core"]
    M --> M2["Coupling: 0 circular dependencies"]
```

## 10.2 Quality Scenarios & Verification Metrics
1. **QS-1 (Domain Purity)**: If a developer or AI agent imports an ORM or web framework into `packages/domain`, `pnpm run test:architecture` fails in < 5s during CI.
2. **QS-2 (Contract Drift)**: If an API route payload schema changes without updating the OpenAPI specification, contract validation fails in CI.
3. **QS-3 (Zero Downtime)**: Database migrations must run against a live system without locking active tables or causing query failures.
