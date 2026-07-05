import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { serverEnv } from "./env/server";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function getDatabaseUrl() {
  const databaseUrl = serverEnv.SUPABASE_DB_URL ?? serverEnv.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("SUPABASE_DB_URL or DATABASE_URL is required");
  }

  return databaseUrl;
}

function getR2Endpoint() {
  const explicitEndpoint = serverEnv.CLOUDFLARE_R2_ENDPOINT;

  if (explicitEndpoint) {
    return explicitEndpoint;
  }

  if (!serverEnv.CLOUDFLARE_R2_ACCOUNT_ID) {
    throw new Error(
      "CLOUDFLARE_R2_ACCOUNT_ID is required when CLOUDFLARE_R2_ENDPOINT is not set",
    );
  }

  return `https://${serverEnv.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: getDatabaseUrl(),
    },
  }),
  sharp,
  secret: serverEnv.PAYLOAD_SECRET,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: serverEnv.CLOUDFLARE_R2_BUCKET,
      config: {
        credentials: {
          accessKeyId: serverEnv.CLOUDFLARE_R2_ACCESS_KEY_ID,
          secretAccessKey: serverEnv.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
        },
        endpoint: getR2Endpoint(),
        forcePathStyle: true,
        region: "auto",
      },
    }),
  ],
});
