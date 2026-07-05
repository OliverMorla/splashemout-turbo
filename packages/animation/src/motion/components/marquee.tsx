import { type ComponentPropsWithoutRef, type CSSProperties } from "react";

import { cn } from "@splashemout/utils";
import "./marquee.css";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Duration of one marquee loop in seconds
   * @default 40
   */
  speed?: number;
  /**
   * Scroll direction
   * @default "left"
   */
  direction?: "left" | "right";
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 40,
  direction = "left",
  style,
  ...props
}: MarqueeProps) {
  const shouldReverse = reverse || direction === "right";
  const marqueeStyle = {
    "--duration": `${speed}s`,
    ...style,
  } as CSSProperties;

  return (
    <div
      {...props}
      style={marqueeStyle}
      className={cn(
        "splashemout-marquee group flex gap-[var(--gap)] overflow-hidden p-2 [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-[var(--gap)]", {
              "splashemout-marquee-track flex-row": !vertical,
              "splashemout-marquee-track-vertical flex-col": vertical,
              "splashemout-marquee-pause": pauseOnHover,
              "splashemout-marquee-reverse": shouldReverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
