import type { Metadata } from "next";
import { ScheduleClient } from "./schedule-client";

export const metadata: Metadata = {
  title: "Splash 'Em Out | Schedule Pickup & Delivery",
  description:
    "Preview how scheduling works at Splash 'Em Out — enter your address, pick a service and pickup window, and watch your claim ticket come together in real time.",
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
