import { defineConfig } from "vitest/config";

export default defineConfig({
  envDir: false,
  test: {
    name: "ui",
    environment: "jsdom",
    passWithNoTests: true,
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}"],
    },
  },
});
