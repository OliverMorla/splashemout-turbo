import type { Metadata } from "next";
import { AccountScreen } from "@/components/account/account-screen";

export const metadata: Metadata = {
  title: "Your Account | Splash 'Em Out",
  description:
    "Track your next pickup, recent orders, address, and payment status for your Splash 'Em Out account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountPage() {
  return <AccountScreen />;
}
