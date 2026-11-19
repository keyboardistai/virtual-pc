import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
const html = readFileSync(resolve("index.html"), "utf8");
const match = html.match(/<script>([\\s\\S]*?)<\\/script>/i);
if (!match) throw new Error("No inline application script found");
const temp = resolve(".virtual-pc-check.js");
try {
  writeFileSync(temp, match[1]);
  const check = spawnSync(process.execPath, ["--check", temp], { encoding: "utf8" });
  if (check.status !== 0) throw new Error(check.stderr || check.stdout || "JavaScript syntax check failed");
} finally { try { unlinkSync(temp); } catch {} }
for (const required of ['id="desktop"', 'sandbox', 'localStorage', 'function safeMath', 'function mkdir']) {
  if (!html.includes(required)) throw new Error(`Required feature marker missing: ${required}`);
}
if (/\\beval\\s*\\(|\\bnew\\s+Function\\b/.test(match[1])) throw new Error("Dynamic code evaluation is prohibited");
if (/allow-same-origin|allow-top-navigation/.test(html)) throw new Error("Preview iframe has unsafe sandbox permissions");
console.log("Virtual PC static checks passed.");
