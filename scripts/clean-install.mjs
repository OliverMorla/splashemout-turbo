import { readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const targets = new Set(["node_modules", ".next", ".turbo", "pnpm-lock.yaml"]);

function cleanDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);

    if (targets.has(entry.name)) {
      rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed ${fullPath}`);
      continue;
    }

    if (!entry.isDirectory()) {
      continue;
    }

    cleanDirectory(fullPath);
  }
}

cleanDirectory(process.cwd());
