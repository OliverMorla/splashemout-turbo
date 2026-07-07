"use client";

import { useId, useState } from "react";
import { ArrowLeft, MailCheck } from "lucide-react";
import { authClient } from "@splashemout/auth/client";
import { Button } from "@splashemout/ui/button";
import { Input } from "@splashemout/ui/input";
import { Label } from "@splashemout/ui/label";
import { AuthError, getAuthErrorMessage } from "./auth-error";
import { CycleSpinner } from "./cycle-spinner";

export function ForgotPasswordForm({ onBack }: { onBack: () => void }) {
  const formId = useId();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: requestError } = await authClient.requestPasswordReset({
      email,
      redirectTo: "/login",
    });

    setLoading(false);

    if (requestError) {
      setError(
        getAuthErrorMessage(
          requestError,
          "We couldn't send that reset link. Try again.",
        ),
      );
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
          <MailCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-serif text-xl text-foreground">
            Check your email
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            If an account exists for <span className="font-medium text-foreground">{email}</span>,
            a reset link is on its way.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to sign in
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to sign in
      </button>

      <p className="text-sm text-muted-foreground">
        Enter the email on your account and we&apos;ll send you a link to
        reset your password.
      </p>

      {error ? <AuthError message={error} /> : null}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${formId}-email`}>Email</Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          autoFocus
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
        />
      </div>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading ? <CycleSpinner /> : null}
        {loading ? "Sending…" : "Send reset link"}
      </Button>
    </form>
  );
}
