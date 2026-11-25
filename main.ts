// Worst Superpower — make.fun bounty entry (u-suroto-worst-superpower-461dcdbe)
// The entrypoint writes exactly one line — the invented superpower — to
// /output/entry.txt. The program is fully deterministic: no randomness,
// no timestamps, no environment input, so repeated runs are byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The superpower: it invents a power and, in the same line, makes plain
// why it is useless — the transformation only ever "works" on water.
const SUPERPOWER =
  "I can turn any liquid into water, as long as it's already water.";

const MAX_CHARS = 140;

function validate(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function writeEntry(): void {
  validate(SUPERPOWER);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, SUPERPOWER + "\n", { encoding: "utf8" });
}

writeEntry();
