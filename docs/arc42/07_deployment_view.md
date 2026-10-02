# 07. Deployment View

## 7.1 Infrastructure Deployment Topology
The system leverages a dual-target architecture: running on managed serverless edge infrastructure initially, with containerized scaling triggers.

```mermaid
flowchart TD
    subgraph VercelEdge ["Vercel Edge Network / Firebase Hosting"]
        StaticCDN["Edge CDN<br/>(React + Vite SPA)"]
        ServerlessFn["Fastify API Handler<br/>(Serverless Node.js 20)"]
    end

    subgraph GoogleCloud ["Google Cloud Platform (GCP)"]
        CloudRun["Google Cloud Run<br/>(Optional Container Scale Target)"]
        Firestore["Cloud Firestore<br/>(Serverless Document DB)"]
        AlloyDB["AlloyDB / Cloud SQL<br/>(Managed PostgreSQL)"]
        SecretMgr["Secret Manager<br/>(Production Credentials)"]
    end

    StaticCDN -->|API Requests| ServerlessFn
    ServerlessFn -->|Firestore Admin SDK| Firestore
    ServerlessFn -->|Encrypted TCP / SSL| AlloyDB
    ServerlessFn -->|Fetch Config| SecretMgr
    CloudRun -.->|Graduation Target| AlloyDB
    CloudRun -.->|Graduation Target| Firestore
```

## 7.2 Zero-Downtime Migration Deployment Strategy
1. **Phase 1 (Expand)**: Run non-destructive SQL migrations (`ADD COLUMN ... NULL`). Old code and new code function simultaneously.
2. **Phase 2 (Deploy)**: Deploy new Fastify backend to Vercel/Cloud Run.
3. **Phase 3 (Contract)**: Execute cleanup migrations (`DROP COLUMN`) only after legacy service instances are completely drained.
