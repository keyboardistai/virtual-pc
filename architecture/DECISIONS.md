# Architecture decisions

## ADR-001: Browser simulation, not real OS

**Decision:** Build an in-browser desktop simulation.  
**Reason:** ChatGPT embedded surfaces are sandboxed and do not expose unrestricted host process, filesystem, or hardware access.  
**Consequence:** Terminal is a command interpreter over virtual data only; native executables and Windows boot are out of scope.

## ADR-002: Single-file frontend baseline

**Decision:** Keep the initial runtime self-contained in index.html with no external dependencies.  
**Reason:** Simplifies embedding, review, offline use and reproducibility.  
**Consequence:** As the application grows, split modules and introduce build tooling only with a compatible hosting/deployment target.

## ADR-003: Browser-origin persistence

**Decision:** Versioned localStorage for the initial virtual text workspace, with JSON import/export.  
**Reason:** No server or credentials required.  
**Consequence:** Capacity, durability and origin scope are browser-dependent; IndexedDB is the planned upgrade.

## ADR-004: Sandboxed HTML preview

**Decision:** Preview user HTML in an iframe sandbox with scripts allowed but without same-origin or top-navigation permissions.  
**Reason:** Keeps preview DOM separate from parent desktop.  
**Consequence:** Do not present this as a security guarantee for arbitrary hostile payloads.