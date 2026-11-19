# Security model

## Threat model

The app runs as untrusted client-side code within the browser/embedding host. User-authored filenames, file contents and HTML source must be treated as untrusted input.

## Controls

- No native shell, process spawning, host filesystem access, credential collection or network scanning.
- Terminal command dispatch uses a fixed command switch and virtual filesystem operations only.
- File names and content are displayed using text-safe DOM APIs or escaped markup.
- HTML Studio preview is isolated in an iframe with sandbox permissions limited to scripts; it does not enable same-origin or top-navigation.
- Calculator uses a constrained arithmetic tokenizer/parser and does not use eval or Function.
- Workspace data contains user content only; no secrets should be stored.

## Residual risks

- Sandboxed iframe preview is not a complete security boundary for arbitrary hostile content. Do not use this app to inspect malicious HTML.
- localStorage is accessible to scripts executing in the same origin. Do not host untrusted scripts on the same origin as valuable app data.
- Imported workspace JSON is untrusted. Import only backups you trust.
- Browser storage may be unavailable, evicted, or cleared.
- This app has no authentication, authorization, server-side backup or multi-user isolation.

## Operational guidance

Serve over HTTPS when deployed. Use a dedicated origin. Apply a restrictive Content Security Policy at the hosting layer where compatible. Review dependencies before adding them; the baseline has none. Never add APIs that bridge arbitrary user input to host commands or unrestricted file access.