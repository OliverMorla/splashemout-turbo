import { auth, toNextJsHandler } from "@splashemout/auth/server";

export const runtime = "nodejs";

export const { GET, POST } = toNextJsHandler(auth);
