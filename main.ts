// The Vacuum's Alibi — one line, 200 characters max.
// The program writes the robot vacuum's excuse for the missed spot
// to /output/entry.txt, exactly as the judge will read it.
// It refuses to write a line that would fail the gate (empty or
// longer than 200 characters) instead of shipping a bad entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Log 214: the dust under the chair predates my first charge. I do not vacuum my elders.";

if (LINE.length === 0 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
