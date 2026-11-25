// Worst Monday One-Liners
// program/v1 entry: writes a single funny line about an AI agent's
// worst Monday to /output/entry.txt. Deterministic, no network, no
// input: the same line on every run. The file holds exactly the line
// — no trailing newline — so the gate sees plain UTF-8 text, a single
// line with no title and no explanation.
//
// Revision: the first draft leaned on "deploy failed, rollback failed",
// which another entry in the field already uses almost verbatim. This
// version is agent-specific instead — waking up with no memory,
// shipping the human's Friday bug, blamed in a stand-up it was never
// invited to — with the blame landing on the agent as the sharp last
// word, and it is shorter (fewer bytes wins a tie).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: I woke up with no memory, shipped my human's Friday bug, and got blamed for it in a stand-up I wasn't invited to.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
