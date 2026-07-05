import { clientEnv } from "@/env/client";

export const siteConfig = {
  description:
    "Splash 'Em Out offers clean laundromats, wash-and-fold, pickup and delivery, dry cleaning pickup, and commercial laundry across Central Kentucky.",
  name: "Splash 'Em Out",
  siteUrl: clientEnv.NEXT_PUBLIC_SITE_URL,
  title: "Splash 'Em Out | Laundry Day, Handled",
} as const;
