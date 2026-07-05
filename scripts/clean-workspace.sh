#!/usr/bin/env sh
set -eu

case "$(uname -s)" in
  Linux|Darwin|FreeBSD|OpenBSD|NetBSD)
    ;;
  *)
    echo "clean:workspace is supported only on Unix-like systems." >&2
    exit 1
    ;;
esac

find . \
  -path "./.git" -prune -o \
  -type d \( -name "node_modules" -o -name ".next" \) \
  -prune -exec rm -rf {} +

find . \
  -path "./.git" -prune -o \
  -type f \( \
    -name "pnpm-lock.yaml" -o \
    -name "package-lock.json" -o \
    -name "npm-shrinkwrap.json" -o \
    -name "yarn.lock" -o \
    -name "bun.lock" -o \
    -name "bun.lockb" -o \
    -name "deno.lock" \
  \) \
  -exec rm -f {} +
