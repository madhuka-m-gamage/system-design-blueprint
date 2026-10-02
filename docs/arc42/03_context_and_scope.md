# 03. Context and Scope

## 3.1 Business Context
The system serves end-users, administrative operators, and automated services through secure web interfaces and API endpoints, while integrating with identity providers, payment networks, and cloud storage.

## 3.2 Technical Context & External Interfaces
* **Clients**: Modern desktop and mobile web browsers consuming static SPA assets from Vercel/Firebase Edge CDNs.
* **Identity & Authentication**: Firebase Authentication (issuing secure, cryptographically signed RS256 JWT tokens).
* **Payment Gateways**: Stripe / PayPal / Regional Gateways (PayHere) via asynchronous secure webhooks.
* **Relational Storage**: PostgreSQL / AlloyDB for transactional consistency, ACID guarantees, and complex queries.
* **Document & Sync Storage**: Cloud Firestore for real-time document synchronization and live notifications.

## 3.3 C4 Level 1 System Context Diagram
```mermaid
flowchart TD
    classDef actor fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef system fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef external fill:#fff3e0,stroke:#e65100,stroke-width:2px;

    User["End Customer / User<br/>[Web Browser / Mobile]"]:::actor
    Admin["Internal Operator / Admin<br/>[Management Console]"]:::actor

    System["Core Application Platform<br/>(React+Vite SPA + Fastify API)<br/>[Modular Monolith]"]:::system

    FirebaseAuth["Firebase Auth<br/>[Identity & JWT Provider]"]:::external
    PaymentGW["Payment Gateway<br/>[Stripe / PayPal / PayHere]"]:::external
    AlloyDB["PostgreSQL / AlloyDB<br/>[Relational ACID Core]"]:::external
    Firestore["Cloud Firestore<br/>[Real-Time Document Tier]"]:::external

    User -->|HTTPS / Browses UI & Submits Commands| System
    Admin -->|HTTPS / Operates Platform| System
    System -->|Verify Bearer JWT Tokens| FirebaseAuth
    System -->|Redirect Checkout / Process Webhooks| PaymentGW
    System -->|Read / Write Transactional Data| AlloyDB
    System -->|Sync Real-Time State & Documents| Firestore
    User -.->|Direct onSnapshot Listeners| Firestore
```
