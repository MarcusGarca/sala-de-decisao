"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const CURSOR_RADIUS = 11;

export default function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-50);
  const pointerY = useMotionValue(-50);
  const opacity = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 180, damping: 24, mass: 0.55 });
  const y = useSpring(pointerY, { stiffness: 180, damping: 24, mass: 0.55 });

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX.set(event.clientX - CURSOR_RADIUS);
      pointerY.set(event.clientY - CURSOR_RADIUS);
      opacity.set(1);
    };
    const hideCursor = () => opacity.set(0);

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, [opacity, pointerX, pointerY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="cursor-follower"
      style={{ x, y, opacity }}
    />
  );
}
