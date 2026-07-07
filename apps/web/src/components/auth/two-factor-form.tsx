"use client";

import { useId, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { authClient } from "@splashemout/auth/client";
import { Button } from "@splashemout/ui/button";
import { Input } from "@splashemout/ui/input";
import { Label } from "@splashemout/ui/label";
import { AuthError, getAuthErrorMessage } from "./auth-error";
import { CycleSpinner } from "./cycle-spinner";

export function TwoFactorForm({
  onVerified,
  onBack,
}: {
  onVerified: () => void;
  onBack: () => void;
}) {
  const formId = useId();
  const [useBackupCode, setUseBackupCode] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: verifyError } = useBackupCode
      ? await authClient.twoFactor.verifyBackupCode({ code })
      : await authClient.twoFactor.verifyTotp({ code });

    setLoading(false);

    if (verifyError) {
      setError(
        getAuthErrorMessage(
          verifyError,
          useBackupCode
            ? "That backup code didn't work."
            : "That code didn't work. Check your authenticator app.",
        ),
      );
      return;
    }

    onVerified();
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
        {useBackupCode
          ? "Enter one of the backup codes you saved when you turned on two-step verification."
          : "Enter the 6-digit code from your authenticator app."}
      </p>

      {error ? <AuthError message={error} /> : null}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${formId}-code`}>
          {useBackupCode ? "Backup code" : "Verification code"}
        </Label>
        <Input
          id={`${formId}-code`}
          name="code"
          type="text"
          inputMode={useBackupCode ? "text" : "numeric"}
          autoComplete="one-time-code"
          required
          autoFocus
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder={useBackupCode ? "xxxxx-xxxxx" : "123456"}
          className="text-center text-lg tracking-[0.3em]"
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
        {loading ? "Verifying…" : "Verify"}
      </Button>

      <button
        type="button"
        onClick={() => {
          setUseBackupCode((current) => !current);
          setError(null);
          setCode("");
        }}
        className="text-center text-sm font-medium text-brand hover:underline"
      >
        {useBackupCode
          ? "Use your authenticator app instead"
          : "Use a backup code instead"}
      </button>
    </form>
  );
}
