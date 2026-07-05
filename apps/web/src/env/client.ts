import { z } from "zod";

const optionalEnv = <Schema extends z.ZodType>(schema: Schema) =>
  z.preprocess(
    (value: unknown) => (value === "" ? undefined : value),
    schema.optional(),
  );

const optionalUrl = () => optionalEnv(z.string().trim().url());

const clientEnvSchema = z.object({
  NEXT_PUBLIC_POSTHOG_HOST: optionalUrl(),
  NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: z.string().trim().min(1),
  NEXT_PUBLIC_SENTRY_DSN: optionalUrl(),
  NEXT_PUBLIC_SITE_URL: optionalEnv(z.string().trim().url()).default(
    "https://www.splashemout.com",
  ),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: optionalEnv(z.string().trim().min(1)),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: optionalEnv(z.string().trim().min(1)),
  NEXT_PUBLIC_SUPABASE_URL: optionalUrl(),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN:
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
});
