# Test plan

## Smoke tests

1. Load index.html with no console syntax errors.
2. Confirm desktop icons, launcher, taskbar and clock render.
3. Open each app; open an already-running app and verify its window is restored.
4. Drag a window; minimize, restore, maximize and close it.
5. Explorer: create folder/file, navigate, rename, delete, open a text file.
6. Notepad: edit/save, reload browser, verify persistence.
7. Terminal: run help, pwd, ls, mkdir, touch, cat, echo and date; verify unknown commands are rejected.
8. Verify terminal cannot execute arbitrary OS commands.
9. Calculator: evaluate 2+3*4 and (12+3)*4; reject malformed expressions and division by zero.
10. HTML Studio: preview a basic heading and script in sandbox; verify preview cannot access parent DOM.
11. Settings: export, reset, import and verify file content.
12. Import malformed JSON and confirm a visible error with no app crash.
13. Test narrow viewport and keyboard focus outlines.

## Regression/security checks

- Filenames containing HTML characters render as text, not markup.
- File path traversal such as ../../outside remains inside virtual root after normalization.
- Terminal rm requires confirmation and affects only virtual files.
- Calculator never invokes eval or Function.
- Preview iframe lacks allow-same-origin and allow-top-navigation.
- No requests are made to external services by the baseline frontend.

## Automation backlog

Add Playwright tests for core app flows, axe accessibility checks, and a CI job that runs HTML/JS static validation. Current repository baseline does not claim those browser tests have passed.