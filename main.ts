import { mkdirSync, writeFileSync } from "node:fs";

// The Absurd Clause Contest — one sentence, 127 characters.
// Deterministic: a single string literal, no network, no randomness,
// no reads from outside the repository.
const ENTRY =
  "Clause 9.3: If you read this clause aloud, you owe the Company one (1) live goat, payable within thirty (30) days of utterance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
