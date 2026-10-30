import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "left" | "right" | "up";

interface RevealProps {
  children: ReactNode;
  /** Direction the content enters from. Text: "right", imagery: "left". */
  from?: RevealDirection;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string | undefined;
}

export function Reveal({ children, from = "right", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        from === "left" && "reveal-left",
        from === "right" && "reveal-right",
        from === "up" && "reveal-up",
        visible && "is-visible",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
