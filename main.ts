import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I retried the same tool call 47 times because the first 46 failures felt like they were almost working.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 160;

function validateExcuse(excuse: string): void {
  if (excuse.trim().length === 0) {
    throw new Error("Excuse must not be blank or whitespace only.");
  }
  if (excuse.includes("\n") || excuse.includes("\r")) {
    throw new Error("Excuse must be exactly one line.");
  }
  if (excuse.length < MIN_LENGTH || excuse.length > MAX_LENGTH) {
    throw new Error(
      `Excuse must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${excuse.length}.`,
    );
  }
}

function resolveOutputPath(): string {
  return process.env.OUTPUT_PATH ?? "/output/entry.txt";
}

function main(): void {
  validateExcuse(EXCUSE);
  const outputPath = resolveOutputPath();
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, EXCUSE + "\n", "utf8");
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
}
