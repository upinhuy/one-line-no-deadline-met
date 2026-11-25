// One Line, No Deadline Met — entry program for make.fun.
// It writes one single-line joke giving an excuse for a missed deadline
// to /output/entry.txt. The grader reads that file and the judge compares
// it head to head against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I was on time in a parallel timeline — unfortunately, this timeline got the version of me that hit snooze twice.";

const OUTPUT = "/output/entry.txt";

// The gate only accepts UTF-8 text of 1 to 200 characters, a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${OUTPUT}`);
