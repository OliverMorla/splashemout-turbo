import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    // Use SUPABASE_DB_URL (direct connection) for migrations.
    // For the transaction pooler URL, set prepare: false in src/index.ts.
    url: process.env.SUPABASE_DB_URL!,
  },
});
