# Virtual PC (ChatGPT-embeddable browser simulation)

A self-contained HTML/CSS/JavaScript virtual desktop intended to be hosted as an embedded app surface in ChatGPT or opened in a modern browser for development. It is a **simulation**, not Windows, a VM, remote desktop, or a host operating-system shell.

## Run

Open [index.html](index.html) in a current desktop browser. For local development, serve the repository with any static HTTP server (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.

## Included

- Desktop, launcher, taskbar, clock, movable application windows.
- Virtual file explorer and file/folder create, rename, delete, open operations.
- Notepad, allowlisted simulated terminal, arithmetic calculator, sandboxed HTML Studio.
- Workspace persistence in browser localStorage, JSON import/export, reset.
- Architecture, security, installation, audit and test documentation.

## Important boundaries

The embedded version cannot boot Windows, execute native applications, access host files, run arbitrary shell commands, or control the user's computer. Terminal commands operate only on the virtual file tree. Storage is browser-origin scoped and may be cleared by the browser or host. The HTML preview iframe is sandboxed but is not a guarantee against hostile content.

See [Architecture](architecture/ARCHITECTURE.md), [Security](docs/SECURITY.md), [Installation](docs/INSTALLATION.md), and [Test plan](docs/TEST_PLAN.md).