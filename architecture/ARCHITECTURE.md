# Architecture

## Product boundary

Virtual PC is a browser-hosted desktop **simulation**. Its trust boundary is the embedding browser/ChatGPT app surface. It is not a guest operating system and has no privileged bridge to the user's machine.

## Runtime layers

1. **Host surface** — ChatGPT embedded app container or ordinary modern browser. The host owns lifecycle, origin, permissions, and network policy.
2. **Desktop shell** — DOM-based desktop, app launcher, taskbar, clock and window registry.
3. **Window manager** — DOM windows with pointer-driven movement, z-order, minimize, maximize/restore and close. App instances are held in memory.
4. **Applications** — Explorer, Notepad, Terminal, Calculator, HTML Studio and Settings. Each app receives access to the same in-memory virtual file map through local functions.
5. **Virtual storage** — versioned JSON object persisted to localStorage. JSON export/import provides a portable backup. Browser storage is best-effort and can be cleared or unavailable.
6. **Preview isolation** — HTML Studio writes user-authored HTML to an iframe using sandbox permissions limited to scripts. It does not grant same-origin or top-navigation access.

## Virtual filesystem

The current storage model is a flat map of normalized absolute virtual paths to UTF-8 text content. Folders are implicit: a folder exists when a file has a path below it. A root folder always exists. All paths are normalized before operations. This is suitable for a small demonstration workspace, not large binary files or multi-user collaboration.

## Extension points

- Replace localStorage with IndexedDB for larger workspaces and transactional writes.
- Add a dedicated filesystem service module and schema migrations.
- Add app registration metadata and lifecycle hooks.
- Add keyboard navigation, focus trapping, window resize handles and robust mobile touch interaction.
- Add automated browser tests and accessibility checks.
- In an embedded ChatGPT deployment, package the UI using the currently supported app/connector hosting contract; this repository's static page is the app frontend, not a deployment manifest.

## Data flow

App UI -> validated virtual path helpers -> shared file map -> localStorage persistence. No app command is forwarded to the host shell. HTML preview is assigned only to the sandboxed preview frame.