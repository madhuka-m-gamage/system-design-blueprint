module.exports = {
  forbidden: [
    {
      name: "domain-pure-isolation",
      comment: "Domain package must never import application, infrastructure, or external libraries",
      severity: "error",
      from: { path: "^packages/domain" },
      to: { path: "(^packages/application|^apps/api|^node_modules)" }
    },
    {
      name: "application-isolated-from-adapters",
      comment: "Application package must not import presentation or infrastructure adapters",
      severity: "error",
      from: { path: "^packages/application" },
      to: { path: "^apps/api/src/adapters" }
    },
    {
      name: "no-circular-dependencies",
      comment: "Circular dependencies are strictly forbidden across the monorepo",
      severity: "error",
      from: { path: "^(packages|apps)" },
      to: { circular: true }
    }
  ]
};
