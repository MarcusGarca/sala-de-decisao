"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import hero from "../../../../../public/assets/images/Foto da Luísa e do Júlio.webp";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.15]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-transparent px-5 pb-8 pt-7 sm:px-8"
    >
      <motion.div
        aria-hidden
        style={{ y: reduceMotion ? 0 : backgroundY }}
        className="hero-photo-mask absolute inset-x-0 top-0 h-[58vh] min-h-[430px] md:bottom-0 md:right-auto md:h-[calc(100%+90px)] md:w-[72%]"
      >
        <Image
          src={hero}
          alt=""
          fill
          priority
          quality={90}
          sizes="(max-width: 767px) 100vw, 72vw"
          className="hero-content-reveal object-cover object-left-top md:object-contain md:object-left"
        />

        {/* Mobile: preserva a foto no topo e a dissolve antes do conteúdo. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/5 via-[#020617]/10 to-[#020617] md:hidden" />

        {/* Desktop: mantém o duo visível à esquerda e abre contraste para o texto à direita. */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.02)_55%,#020617_100%)] md:block" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_23%_39%,rgba(34,211,238,0.09),transparent_37%)] md:block" />
      </motion.div>

      {/* Arcos orbitais inspirados na referência, integrados à fotografia. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-[18vw] top-[-26vh] hidden aspect-square w-[72vw] rounded-full border border-cyan-300/25 shadow-[0_0_38px_rgba(34,211,238,.24),inset_0_0_42px_rgba(37,99,235,.12)] md:block"
        animate={reduceMotion ? undefined : { rotate: [0, 8, 0], scale: [1, 1.015, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[35%] top-[19%] hidden h-[58%] w-[27%] rounded-[50%] border-r-2 border-cyan-300/65 shadow-[18px_0_38px_rgba(34,211,238,.25)] md:block"
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.85, 0.4], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <nav className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <span className="text-sm font-semibold tracking-[.18em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.8)]">
          SALA <span className="text-cyan-400">DE DECISÃO</span>
        </span>
        <a
          href="#planos"
          className="rounded-full border border-cyan-500/20 bg-slate-950/55 px-4 py-2 text-xs text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/50 hover:text-white"
        >
          Conhecer formatos
        </a>
      </nav>

      <div className="relative z-20 mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-12 items-center pt-[47vh] md:pt-10">
        <motion.div
          style={{ y: reduceMotion ? 0 : contentY, opacity: contentOpacity }}
          className="hero-content-reveal col-span-12 rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-6 pb-10 shadow-[0_0_50px_rgba(6,182,212,.08)] backdrop-blur-md md:col-span-6 md:col-start-7 md:p-8 md:pb-8 lg:col-span-5 lg:col-start-8 xl:mr-8"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/60 px-4 py-2 text-[10px] font-semibold tracking-[.15em] text-cyan-200 backdrop-blur-xl sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            CONSELHO ESTRATÉGICO EXECUTIVO SOB DEMANDA
          </div>

          <h1 className="max-w-3xl text-[clamp(2.45rem,3.45vw,4.2rem)] font-medium leading-[1.025] tracking-[-.052em] text-white">
            Algumas decisões podem <strong className="text-gradient font-semibold">acelerar uma empresa.</strong> Outras podem <strong className="text-gradient font-semibold">comprometer anos de crescimento.</strong>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Antes de decidir, leve sua estratégia para a Sala de Decisão. Um conselho executivo onde líderes, empresários e C-Levels discutem decisões críticas com especialistas que já estiveram na cadeira.
          </p>

          <a
            href="#planos"
            className="cyan-button mt-9 flex w-full max-w-xl items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-300 to-sky-500 px-7 py-4.5 text-sm font-bold uppercase tracking-[.08em] text-slate-950 transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-sky-400 sm:text-base"
          >
            Quero entrar na sala <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#decisoes"
        aria-label="Rolar para a próxima seção"
        className="relative z-30 mx-auto hidden flex-col items-center gap-2 text-[10px] font-medium tracking-[.22em] text-slate-500 md:flex"
        animate={reduceMotion ? undefined : { y: [0, 6, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
