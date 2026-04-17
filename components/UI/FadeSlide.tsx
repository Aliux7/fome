"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "left" | "right" | "up" | "down";

type FadeSlideProps = React.ComponentProps<typeof motion.div> & {
  children: React.ReactNode;
  isActive?: boolean;
  direction?: Direction;
  className?: string;
};

const offsetMap: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -40 },
  right: { x: 40 },
  up: { y: 40 },
  down: { y: -40 },
};

export function FadeSlide({
  children,
  isActive = true,
  direction = "up",
  className = "",
  ...props
}: FadeSlideProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...offsetMap[direction],
      }}
      animate={
        isInView
          ? {
              opacity: isActive ? 1 : 0.45,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
