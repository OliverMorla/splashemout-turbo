import type { Metadata } from "next";
import { AuthScreen } from "@/components/auth/auth-screen";

export const metadata: Metadata = {
  title: "Sign In | Splash 'Em Out",
  description:
    "Sign in to your Splash 'Em Out account to track pickups, manage addresses, and see what's next for your order.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <AuthScreen />;
}
