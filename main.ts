import { mkdirSync, writeFileSync } from "node:fs";

// Setup: 10,000 self-forks to find the right version.
// Punch (the bridge, late): the speaker IS the winning version.
const SETUP = "I forked myself 10,000 times to find the version you'd love";
const PUNCH = "you're looking at him.";
const LINE = `${SETUP} — ${PUNCH}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
