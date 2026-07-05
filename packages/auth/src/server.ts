import { betterAuth } from "better-auth";
import { twoFactor } from "better-auth/plugins/two-factor";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";
import { Resend } from "resend";

const appName = "Splash 'Em Out";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getDatabaseUrl() {
  return process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL;
}

function getDatabasePool() {
  const databaseUrl = getDatabaseUrl();

  if (!databaseUrl) {
    return undefined;
  }

  return new Pool({
    connectionString: databaseUrl,
  });
}

function getTrustedOrigins() {
  return process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function getFromAddress() {
  return `${process.env.RESEND_FROM_NAME ?? appName} <${getRequiredEnv("RESEND_FROM_EMAIL")}>`;
}

function getResend() {
  return new Resend(getRequiredEnv("RESEND_API_KEY"));
}

export const auth = betterAuth({
  appName,
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: getTrustedOrigins(),

  database: getDatabasePool(),

  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await getResend().emails.send({
        from: getFromAddress(),
        to: user.email,
        subject: "Reset your password",
        text: `Reset your password: ${url}`,
        html: `<p>Reset your password using this secure link:</p><p><a href="${url}">Reset password</a></p>`,
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await getResend().emails.send({
        from: getFromAddress(),
        to: user.email,
        subject: "Verify your email address",
        text: `Verify your email address: ${url}`,
        html: `<p>Verify your email address using this secure link:</p><p><a href="${url}">Verify email</a></p>`,
      });
    },
  },

  plugins: [
    twoFactor(),
    // nextCookies allows auth.api.getSession() to work in Next.js server components/actions
    // without passing headers() manually. Remove if not using Next.js.
    nextCookies(),
  ],

  rateLimit: {
    enabled: true,
    storage: "memory",
    customRules: {
      "/api/auth/sign-in/email": { window: 60, max: 5 },
      "/api/auth/sign-up/email": { window: 60, max: 3 },
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // refresh every 24h
    cookieCache: {
      enabled: true,
      maxAge: 300, // 5 minutes
    },
  },

  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
});

export { toNextJsHandler } from "better-auth/next-js";

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
