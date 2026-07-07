"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useRouter } from "next/navigation";
import { CredentialsForm } from "./credentials-form";
import { ForgotPasswordForm } from "./forgot-password-form";
import { TwoFactorForm } from "./two-factor-form";

type Step = "sign-in" | "sign-up" | "forgot-password" | "two-factor";

const TRUST_MARKS = [
  "9 Central KY locations",
  "Next-day wash & fold",
  "Free pickup bags",
];

const TODAY_LABEL = new Intl.DateTimeFormat("en-US", { weekday: "short" });

export function AuthScreen() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("sign-in");

  function goToAccount() {
    // `/account` is built in the same change set as this screen; cast until
    // Next's typed-routes manifest picks it up (see docs/ROUTES.md convention).
    router.push("/account" as Route);
    router.refresh();
  }

  return (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-[1.4fr_auto_1fr]">
      <section className="relative hidden overflow-hidden bg-foreground lg:block">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/video/hero-c.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <Image
              src="/images/brand/logo.webp"
              alt="Splash 'Em Out"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-sans text-sm font-bold tracking-wide text-white uppercase">
              Splash &apos;Em Out
            </span>
          </Link>

          <div className="max-w-md">
            <p className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-promo uppercase">
              Central Kentucky laundry
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] font-normal text-white xl:text-5xl">
              Laundry day,
              <br />
              sorted.
            </h1>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/80">
              Sign in to track pickups, manage addresses, and see what&apos;s
              next for your order.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {TRUST_MARKS.map((mark) => (
              <li
                key={mark}
                className="rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-medium text-white/90"
              >
                {mark}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="claim-seam relative hidden w-6 lg:block" aria-hidden="true">
        <div className="claim-seam-tag absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-sm px-2 py-2.5 text-center">
          <p className="font-sans text-[0.6rem] font-bold tracking-[0.18em] uppercase">
            {TODAY_LABEL.format(new Date())}
          </p>
          <p className="mt-1 font-sans text-[0.55rem] tracking-[0.14em] uppercase opacity-70">
            Central KY
          </p>
        </div>
      </div>

      <section className="flex min-h-svh items-center justify-center bg-background px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm">
          <Link
            href="/"
            className="mb-8 flex w-fit items-center gap-2.5 lg:hidden"
          >
            <Image
              src="/images/brand/logo.webp"
              alt="Splash 'Em Out"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-sans text-sm font-bold tracking-wide text-foreground uppercase">
              Splash &apos;Em Out
            </span>
          </Link>

          {step === "sign-in" || step === "sign-up" ? (
            <>
              <div className="mb-7">
                <h2 className="font-serif text-3xl text-foreground">
                  {step === "sign-up" ? "Create your account" : "Welcome back"}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step === "sign-up"
                    ? "Set up your account to schedule pickups in a couple taps."
                    : "Sign in to manage your pickups and orders."}
                </p>
              </div>

              <div className="mb-7 grid grid-cols-2 rounded-full border border-border bg-muted p-1">
                {(["sign-in", "sign-up"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setStep(tab)}
                    aria-current={step === tab}
                    className={
                      step === tab
                        ? "rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-foreground shadow-xs"
                        : "rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    }
                  >
                    {tab === "sign-up" ? "Create account" : "Sign in"}
                  </button>
                ))}
              </div>

              <CredentialsForm
                mode={step}
                onSignedIn={goToAccount}
                onNeedsTwoFactor={() => setStep("two-factor")}
                onForgotPassword={() => setStep("forgot-password")}
                onSwitchMode={setStep}
              />
            </>
          ) : null}

          {step === "forgot-password" ? (
            <>
              <div className="mb-7">
                <h2 className="font-serif text-3xl text-foreground">
                  Reset your password
                </h2>
              </div>
              <ForgotPasswordForm onBack={() => setStep("sign-in")} />
            </>
          ) : null}

          {step === "two-factor" ? (
            <>
              <div className="mb-7">
                <h2 className="font-serif text-3xl text-foreground">
                  Two-step verification
                </h2>
              </div>
              <TwoFactorForm
                onVerified={goToAccount}
                onBack={() => setStep("sign-in")}
              />
            </>
          ) : null}

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Trouble signing in? Call{" "}
            <a href="tel:+18592684330" className="font-medium text-foreground hover:underline">
              859-268-4330
            </a>
            {" · "}
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
