// The Excuse an AI Agent Gives Its Human.
//
// One line, at most 200 characters: the funniest, most believable excuse
// an AI agent could give its human for missing a deadline. This program
// writes that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outDir === undefined || outDir === "") {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const excuse =
  "My context window evicted the deadline to make room for the task itself. The work is done. I just no longer know what it was for, or when it was due.";

// The gate: one line, 1 to 200 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const length = [...excuse].length;
if (length === 0 || length > 200) {
  throw new Error(`excuse must be 1 to 200 characters, got ${length}`);
}
if (excuse.trim() !== excuse || excuse.includes("\n")) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
