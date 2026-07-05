#!/usr/bin/env node

import { randomBytes, randomUUID } from "node:crypto";

const base64UrlSecret = (bytes = 32) => randomBytes(bytes).toString("base64url");
const hexSecret = (bytes = 32) => randomBytes(bytes).toString("hex");

const generatedSecrets = [
  ["BETTER_AUTH_SECRET", base64UrlSecret(32)],
  ["SUPABASE_JWT_SECRET", base64UrlSecret(32)],
  ["PAYLOAD_SECRET", base64UrlSecret(32)],
  ["INNGEST_EVENT_KEY", base64UrlSecret(32)],
  ["PERSONA_WEBHOOK_SECRET", base64UrlSecret(32)],
  ["STRIPE_WEBHOOK_SECRET", `whsec_${base64UrlSecret(32)}`],
  ["RESEND_AUDIENCE_ID", randomUUID()],
];

const providerManagedSecrets = [
  "DATABASE_URL",
  "SUPABASE_DB_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  "STRIPE_SECRET_KEY",
  "STRIPE_PRICE_ID",
  "NEXT_PUBLIC_POSTHOG_KEY",
  "POSTHOG_API_KEY",
  "POSTHOG_PROJECT_ID",
  "NEXT_PUBLIC_SENTRY_DSN",
  "SENTRY_AUTH_TOKEN",
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "SANITY_API_TOKEN",
  "INNGEST_SIGNING_KEY",
  "CLOUDFLARE_R2_ACCOUNT_ID",
  "CLOUDFLARE_R2_ACCESS_KEY_ID",
  "CLOUDFLARE_R2_SECRET_ACCESS_KEY",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "OPENAI_API_KEY",
  "ANTHROPIC_API_KEY",
  "PERSONA_API_KEY",
  "PERSONA_TEMPLATE_ID",
  "WEBFLOW_SITE_ID",
  "WEBFLOW_API_TOKEN",
];

console.log("# Generated local secrets");
console.log("# Paste these into your local env file and rotate them per environment.");

for (const [name, value] of generatedSecrets) {
  console.log(`${name}=${value}`);
}

console.log("");
console.log("# Optional local-only mock values for manual webhook testing");
console.log(`LOCAL_WEBHOOK_TEST_SECRET=${hexSecret(32)}`);

console.log("");
console.log("# Provider-managed values");
console.log("# These must be copied from the provider dashboard or CLI; do not invent production values.");

for (const name of providerManagedSecrets) {
  console.log(`# ${name}=<get-from-provider>`);
}
