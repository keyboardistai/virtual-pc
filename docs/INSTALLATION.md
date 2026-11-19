# Installation and setup

## Requirements

- A current Chromium, Firefox, Safari or Edge browser.
- Git (optional, for cloning).
- Python 3 (optional, for a local static server).

## Option A: Open directly

1. Download or clone this repository.
2. Open `index.html` in the browser.
3. Open File Explorer from the desktop icon or app launcher.
4. Create a test file and reload the page to verify browser storage persistence.

Some browser privacy modes or file-origin policies may restrict localStorage. If storage does not persist, use Option B.

## Option B: Run a local static server

```bash
git clone https://github.com/keyboardistai/virtual-pc.git
cd virtual-pc
python -m http.server 8000
```

Open `http://localhost:8000`.

Node alternative (if already installed): `npx serve .`

## Option C: Embed in ChatGPT

The repository contains the frontend source. It is **not automatically installed into ChatGPT by being on GitHub**. To run as an embedded ChatGPT app, it must be served from an approved HTTPS host and connected through the current ChatGPT app/connector publishing workflow. Follow the current OpenAI app platform requirements for the target account/workspace; do not assume a static GitHub URL is a supported app endpoint.

## Verify

- Launch Explorer and open `Documents/Welcome.txt`.
- Edit and save a file in Notepad.
- Run `help`, `pwd`, `ls`, `mkdir`, `touch` and `cat` in Terminal.
- Check Calculator with `(12 + 3) * 4`.
- Run the sample HTML in HTML Studio.
- Export the workspace from Settings, reset, then import the exported JSON.

## Troubleshooting

- **Blank page:** inspect browser developer console for syntax errors; ensure JavaScript is enabled.
- **Changes disappear:** browser storage may be blocked or cleared; export workspace backups.
- **HTML preview is blank:** check the HTML source and click Run preview.
- **Mobile windows awkward:** mobile support is responsive but desktop pointer/keyboard workflows are the primary target.