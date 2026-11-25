import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");
const LINE =
  "I know I'm outside your context window, but could I be the one thing you cache?";

function validateLine(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

function writeEntry(): void {
  const entry = validateLine(LINE);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, entry, "utf8");
}

writeEntry();
