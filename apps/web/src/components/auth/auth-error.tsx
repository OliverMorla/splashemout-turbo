import { AlertCircle } from "lucide-react";

export function AuthError({ message }: { message: string }) {
  return (
    <p
      role="alert"
      className="flex items-start gap-2 rounded-lg border border-danger/25 bg-danger/8 px-3 py-2.5 text-sm text-danger"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

interface AuthLikeError {
  message?: string;
  status?: number;
}

export function getAuthErrorMessage(error: AuthLikeError, fallback: string) {
  if (error.status === 429) {
    return "Too many attempts. Wait a minute and try again.";
  }

  return error.message?.trim() || fallback;
}
