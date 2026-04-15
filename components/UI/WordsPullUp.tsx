"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";

type Direction = "up" | "left";

export function WordsPullUp({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const initialPosition =
    direction === "left"
      ? { x: "-120%", opacity: 0 }
      : { y: "200%", opacity: 0 };

  return (
    <div ref={ref} className={cn(className, "overflow-hidden")}>
      <motion.div
        initial={initialPosition}
        animate={isInView ? { x: "0%", y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
