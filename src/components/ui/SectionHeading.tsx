"use client";

import { cn } from "@/lib/utils";
import AnimatedElement from "./AnimatedElement";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  maxWidth?: string;
  dark?: boolean;
  className?: string;
}

const SectionHeading = ({
  subtitle,
  title,
  centered = false,
  maxWidth = "max-w-[842px]",
  dark = false,
  className,
}: SectionHeadingProps) => {
  return (
    <AnimatedElement
      className={cn(
        "mb-16",
        centered && "text-center mx-auto",
        maxWidth,
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            "text-xl mb-4",
            dark ? "text-white" : "text-primary"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-5xl font-normal font-manrope",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
    </AnimatedElement>
  );
};

export default SectionHeading;
