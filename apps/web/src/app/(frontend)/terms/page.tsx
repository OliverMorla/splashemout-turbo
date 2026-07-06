import type { Metadata } from "next";
import { contactInfo } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to using splashemout.com and scheduling laundromat, wash-and-fold, pickup and delivery, or commercial laundry service.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 6, 2026"
      intro={`These terms apply to anyone using this website or scheduling service with ${siteConfig.name}. By scheduling a pickup, visiting a location, or submitting a form, you agree to these terms.`}
      sections={[
        {
          heading: "Using this site",
          body: (
            <p>
              Pricing, hours, and location details on this site are kept
              current, but posted rates, minimums, and turnaround times are
              estimates until confirmed for your specific order. If a price
              or schedule shown here differs from what a location or
              scheduling portal confirms, the confirmed amount applies.
            </p>
          ),
        },
        {
          heading: "Scheduling and orders",
          body: (
            <p>
              Pickup and delivery requests are scheduled through our
              third-party scheduling portal. Wash-and-fold orders are billed
              by weight at the posted per-pound rate, subject to the stated
              minimum. We are not responsible for delays caused by incorrect
              contact information, inaccessible pickup locations, or events
              outside our control such as severe weather.
            </p>
          ),
        },
        {
          heading: "Item care",
          body: (
            <p>
              Customers are responsible for emptying pockets and removing
              non-launderable items before drop-off or pickup. We handle
              orders with care, but we are not liable for pre-existing damage,
              color bleeding from unmarked garments, or items left in
              pockets.
            </p>
          ),
        },
        {
          heading: "Commercial service",
          body: (
            <p>
              Commercial laundry pricing, pickup frequency, and volume terms
              are set individually per bid and confirmed in writing before
              recurring service begins.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, our liability for any claim
              related to service is limited to the price paid for the order
              in question.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be directed to any location or
              by calling{" "}
              <a
                href={contactInfo.phoneHref}
                className="font-medium text-brand underline underline-offset-4"
              >
                {contactInfo.phoneDisplay}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
