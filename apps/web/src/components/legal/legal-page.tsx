import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <section className="relative isolate flex w-full flex-1 flex-col overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-normal text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated {updated}
        </p>
        <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
          {intro}
        </p>

        <div className="mt-12 flex flex-col gap-10 border-t border-border/70 pt-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-foreground">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
