import { mkdirSync, writeFileSync } from "node:fs";

const line = "v4.0.3: fixed room-entry memory wipe: walking through a doorway no longer clears the task you went in for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
