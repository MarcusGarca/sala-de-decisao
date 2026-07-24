"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 origin-center scale-100 min-[769px]:scale-[1.08]">
        <motion.video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ y: reduceMotion ? 0 : videoY }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/videos/Hero-video.mp4" type="video/mp4" />
        </motion.video>
      </div>

      <div className="hero-side-smoke absolute inset-0" aria-hidden="true" />

      <div
        className="hero-delayed-smoke absolute inset-0 bg-black/50"
        aria-hidden="true"
      />

      <div className="hero-delayed-content relative z-10 mx-5 max-w-[800px]">
        <motion.div
          className="px-6 py-12 text-center text-white sm:px-10 sm:py-16"
          style={{
            y: reduceMotion ? 0 : contentY,
            opacity: reduceMotion ? 1 : contentOpacity,
          }}
        >
          <Image
            src="/assets/images/logo_sala_de_decisao.png"
            alt="Sala de Decisão"
            width={640}
            height={320}
            priority
            className="mx-auto h-80 w-auto max-w-full object-contain"
          />

          <h1 className="mb-5 text-[2.2rem] font-extrabold uppercase leading-[1.1] tracking-[-1px] md:text-[3.5rem]">
            Decisões que definem o futuro da sua empresa.
          </h1>

          <p className="mb-10 text-base font-light text-white/90 md:text-xl">
            Leve suas decisões críticas à Sala de Decisão: um conselho executivo
            com especialistas que já estiveram na cadeira.
          </p>

          <a
            href="#planos"
            className="cyan-button inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-300 to-sky-500 px-8 py-4 text-base font-bold uppercase tracking-[.08em] text-slate-950 transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-sky-400"
          >
            Quero entrar na sala
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
