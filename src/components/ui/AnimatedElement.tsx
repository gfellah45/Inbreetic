"use client";

import React, { ReactNode } from "react";
import { motion, Variant, Transition } from "framer-motion";

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "slideUp" | "slideDown" | "default";

type AnimationConfig = Transition & {
  duration?: number;
  delay?: number;
  ease?: string | number[];
};

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  whileInView?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  transition?: AnimationConfig;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
  variant?: AnimationVariant;
}

const animationVariants = {
  default: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  slideUp: {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" }
  },
  slideDown: {
    hidden: { y: "-100%" },
    visible: { y: 0 },
    exit: { y: "-100%" }
  }
};

const AnimatedElement = ({
  children,
  className = "",
  initial,
  animate,
  exit,
  whileInView,
  whileHover,
  whileTap,
  transition = { duration: 0.5 },
  viewport = { once: true },
  variant = "default"
}: AnimatedElementProps) => {
  const selectedVariant = animationVariants[variant];
  
  return (
    <motion.div
      className={className}
      initial={initial || selectedVariant.hidden}
      animate={animate}
      exit={exit || selectedVariant.exit}
      whileInView={whileInView || selectedVariant.visible}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
