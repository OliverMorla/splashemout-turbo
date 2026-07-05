-- Better Auth schema
-- Generated for: emailAndPassword + twoFactor + rateLimit (database storage)
-- Run via: pnpm migrate:auth

CREATE TABLE IF NOT EXISTS "user" (
  "id"               TEXT        NOT NULL PRIMARY KEY,
  "name"             TEXT        NOT NULL,
  "email"            TEXT        NOT NULL UNIQUE,
  "emailVerified"    BOOLEAN     NOT NULL,
  "image"            TEXT,
  "createdAt"        TIMESTAMP   NOT NULL,
  "updatedAt"        TIMESTAMP   NOT NULL,
  "twoFactorEnabled" BOOLEAN
);

CREATE TABLE IF NOT EXISTS "session" (
  "id"          TEXT        NOT NULL PRIMARY KEY,
  "expiresAt"   TIMESTAMP   NOT NULL,
  "token"       TEXT        NOT NULL UNIQUE,
  "createdAt"   TIMESTAMP   NOT NULL,
  "updatedAt"   TIMESTAMP   NOT NULL,
  "ipAddress"   TEXT,
  "userAgent"   TEXT,
  "userId"      TEXT        NOT NULL REFERENCES "user"("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "account" (
  "id"                     TEXT        NOT NULL PRIMARY KEY,
  "accountId"              TEXT        NOT NULL,
  "providerId"             TEXT        NOT NULL,
  "userId"                 TEXT        NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "accessToken"            TEXT,
  "refreshToken"           TEXT,
  "idToken"                TEXT,
  "accessTokenExpiresAt"   TIMESTAMP,
  "refreshTokenExpiresAt"  TIMESTAMP,
  "scope"                  TEXT,
  "password"               TEXT,
  "createdAt"              TIMESTAMP   NOT NULL,
  "updatedAt"              TIMESTAMP   NOT NULL
);

CREATE TABLE IF NOT EXISTS "verification" (
  "id"          TEXT        NOT NULL PRIMARY KEY,
  "identifier"  TEXT        NOT NULL,
  "value"       TEXT        NOT NULL,
  "expiresAt"   TIMESTAMP   NOT NULL,
  "createdAt"   TIMESTAMP,
  "updatedAt"   TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "twoFactor" (
  "id"                      TEXT      NOT NULL PRIMARY KEY,
  "secret"                  TEXT      NOT NULL,
  "backupCodes"             TEXT      NOT NULL,
  "userId"                  TEXT      NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
  "verified"                BOOLEAN,
  "failedVerificationCount" INTEGER,
  "lockedUntil"             TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "rateLimit" (
  "id"          TEXT    NOT NULL PRIMARY KEY,
  "key"         TEXT,
  "count"       INTEGER,
  "lastRequest" BIGINT
);
