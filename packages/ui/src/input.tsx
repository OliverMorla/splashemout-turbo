import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/src/class-names";

const inputVariants = cva(
  "flex h-10 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger/60 aria-invalid:ring-3 aria-invalid:ring-danger/15",
  {
    variants: {
      inputSize: {
        default: "h-10",
        sm: "h-9 text-[0.85rem]",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

function Input({ className, inputSize, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ inputSize, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
