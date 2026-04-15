"use client";
import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "left";

type LinkPullUpProps = {
  href: string;
  children: React.ReactNode;
  wfull?: boolean;
  className?: string;
  direction?: Direction;
  delay?: number;
} & React.ComponentPropsWithoutRef<"a">;

export function LinkPullUp({
  href,
  children,
  className = "",
  direction = "up",
  delay = 0,
  wfull,
  onClick,
}: LinkPullUpProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const initialPosition =
    direction === "left"
      ? { x: "-20%", opacity: 0 }
      : { y: "200%", opacity: 0 };

  return (
    <div ref={ref} className={`overflow-hidden ${wfull ? "w-full" : ""}`}>
      <motion.div
        initial={initialPosition}
        animate={isInView ? { x: "0%", y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block w-full"
      >
        <Link href={href} className={cn(className)} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    </div>
  );
}
