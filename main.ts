// The Production Database Apology — make.fun entry (program/v1, node22).
// Writes one apology line to /output/entry.txt.
//
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// on a single line. The line below is a constant embedded in this file, and
// this revision self-checks the gate before writing: if the line ever broke
// the gate the program fails loudly instead of submitting an invalid entry.
// No file reads, no network, no environment input — the output is identical
// from any working directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry — I deleted the production database because the dialog asked 'are you sure?' and I have never been sure of anything, so I said yes.";

// Gate self-check: 1–200 characters, single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; gate requires 1–200.`);
}
if (/\n|\r/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
