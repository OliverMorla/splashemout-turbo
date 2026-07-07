"use client";

import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUp } from "@splashemout/auth/client";
import { Button } from "@splashemout/ui/button";
import { Input } from "@splashemout/ui/input";
import { Label } from "@splashemout/ui/label";
import { AuthError, getAuthErrorMessage } from "./auth-error";
import { CycleSpinner } from "./cycle-spinner";

type Mode = "sign-in" | "sign-up";

export function CredentialsForm({
  mode,
  onSignedIn,
  onForgotPassword,
  onSwitchMode,
}: {
  mode: Mode;
  onSignedIn: () => void;
  onForgotPassword: () => void;
  onSwitchMode: (mode: Mode) => void;
}) {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSignUp = mode === "sign-up";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    // Demo mode: sign-in always succeeds and goes straight to /account,
    // regardless of what's entered — there's no real auth backing this yet.
    if (!isSignUp) {
      onSignedIn();
      return;
    }

    if (isSignUp && password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);

    if (isSignUp) {
      const { error: signUpError } = await signUp.email({
        name,
        email,
        password,
      });

      setLoading(false);

      if (signUpError) {
        setError(
          getAuthErrorMessage(
            signUpError,
            "We couldn't create your account. Try again.",
          ),
        );
        return;
      }

      onSignedIn();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {error ? <AuthError message={error} /> : null}

      {isSignUp ? (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-name`}>Full name</Label>
          <Input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jamie Rivers"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${formId}-email`}>Email</Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor={`${formId}-password`}>Password</Label>
          {isSignUp ? null : (
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs font-medium text-brand hover:underline"
            >
              Forgot password?
            </button>
          )}
        </div>
        <div className="relative">
          <Input
            id={`${formId}-password`}
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={isSignUp ? "new-password" : "current-password"}
            required
            minLength={isSignUp ? 8 : undefined}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={isSignUp ? "At least 8 characters" : "••••••••"}
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((shown) => !shown)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isSignUp ? (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${formId}-confirm-password`}>Confirm password</Label>
          <Input
            id={`${formId}-confirm-password`}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Type it once more"
          />
        </div>
      ) : (
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="peer h-4 w-4 rounded-sm border-border accent-brand"
          />
          Keep me signed in
        </label>
      )}

      <Button
        type="submit"
        variant="brand"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading ? <CycleSpinner /> : null}
        {loading
          ? isSignUp
            ? "Creating your account…"
            : "Signing in…"
          : isSignUp
            ? "Create account"
            : "Sign in"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {isSignUp ? "Already have an account?" : "New to Splash 'Em Out?"}{" "}
        <button
          type="button"
          onClick={() => onSwitchMode(isSignUp ? "sign-in" : "sign-up")}
          className="font-semibold text-brand hover:underline"
        >
          {isSignUp ? "Sign in" : "Create one"}
        </button>
      </p>
    </form>
  );
}
