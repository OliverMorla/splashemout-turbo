import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// prepare: false is required when using Supabase's transaction pooler (port 6543).
// It is safe to use with direct connections too.
const client = postgres(process.env.SUPABASE_DB_URL!, { prepare: false });

export const db = drizzle({ client });

export type DB = typeof db;

// Once you define schema tables, import and pass schema for relational queries:
//
// import * as schema from "./schema/index.js";
// export const db = drizzle({ client, schema });
