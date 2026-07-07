import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// Shared shape for the dashboard's status cards (orders, address, payment).
// Each one is honest about having no backend data yet rather than faking it.
export function EmptyStateCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-background p-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </div>
      <h3 className="font-serif text-lg text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
