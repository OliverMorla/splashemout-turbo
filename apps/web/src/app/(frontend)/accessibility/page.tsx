import type { Metadata } from "next";
import { contactInfo } from "@/config/nav";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Splash 'Em Out's commitment to an accessible website and how to reach us about accessibility at our locations.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility"
      updated="July 6, 2026"
      intro="We want this site, and every laundromat we operate, to be usable by everyone. Here's what we do and how to reach us if something isn't working for you."
      sections={[
        {
          heading: "This website",
          body: (
            <p>
              We build this site with keyboard navigation, visible focus
              states, sufficient color contrast, and screen-reader-friendly
              markup in mind, following WCAG 2.1 AA guidelines as a target.
            </p>
          ),
        },
        {
          heading: "Our locations",
          body: (
            <p>
              Our laundromats are attended, ground-level facilities. If you
              have a question about accessible parking, entry, or machine
              access at a specific location before you visit, call ahead and
              our team can help.
            </p>
          ),
        },
        {
          heading: "Tell us about a barrier",
          body: (
            <p>
              If you run into an accessibility issue on this site or at a
              location, let us know by calling{" "}
              <a
                href={contactInfo.phoneHref}
                className="font-medium text-brand underline underline-offset-4"
              >
                {contactInfo.phoneDisplay}
              </a>
              . We will do our best to address it directly.
            </p>
          ),
        },
      ]}
    />
  );
}
