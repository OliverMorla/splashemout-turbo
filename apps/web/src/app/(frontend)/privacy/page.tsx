import type { Metadata } from "next";
import { contactInfo } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Splash 'Em Out collects, uses, and protects information from customers who call, schedule, or contact us online.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 6, 2026"
      intro={`This policy explains what ${siteConfig.name} collects when you visit our site, schedule a pickup, or contact a location, and how that information is used.`}
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                We collect information you give us directly, such as your
                name, phone number, email, and service address when you
                request a pickup, submit a commercial bid request, or contact
                a location.
              </p>
              <p>
                We also collect basic usage information automatically,
                including pages visited, device and browser type, and general
                location, through analytics tools such as PostHog.
              </p>
            </>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Schedule and fulfill pickup, delivery, and drop-off orders.</li>
              <li>Respond to contact, quote, and commercial bid requests.</li>
              <li>Send order and appointment updates by phone, text, or email.</li>
              <li>
                Understand how the site is used so we can keep pricing,
                locations, and service information accurate.
              </li>
            </ul>
          ),
        },
        {
          heading: "What we don't do",
          body: (
            <p>
              We do not sell customer information. We do not share your
              information with third parties for their own marketing.
            </p>
          ),
        },
        {
          heading: "Sharing with service providers",
          body: (
            <p>
              We share information with the vendors that help us run the
              business, such as scheduling, payment, and analytics providers,
              only as needed to operate that service. Those providers may not
              use your information for any other purpose.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to update or delete the contact information we
              hold about you by calling{" "}
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
        {
          heading: "Changes to this policy",
          body: (
            <p>
              If this policy changes in a meaningful way, we will update the
              date at the top of this page.
            </p>
          ),
        },
      ]}
    />
  );
}
