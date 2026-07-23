"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import hero from "../../../../../public/assets/images/Foto da Luísa e do Júlio.webp";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 flex min-h-[85vh] flex-col overflow-hidden bg-transparent px-5 py-7 sm:px-8 lg:py-10">
      <nav className="relative z-30 mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <span className="text-sm font-semibold tracking-[.18em] text-white">
          SALA <span className="text-cyan-400">DE DECISÃO</span>
        </span>
        <a href="#planos" className="rounded-full border border-cyan-500/20 bg-slate-950/55 px-4 py-2 text-xs text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/50 hover:text-white">
          Conhecer formatos
        </a>
      </nav>

      <div className="relative z-20 mx-auto grid w-full max-w-[1280px] flex-1 gap-10 py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          <div
            className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]"
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black 72%, transparent 100%), linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 72%, transparent 100%), linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <Image
              src={hero}
              alt="Luísa e Júlio, fundadores da Sala de Decisão"
              fill
              priority
              quality={90}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-left-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="hyphens-none break-words lg:col-span-6"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-xl sm:text-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />
            CONSELHO ESTRATÉGICO SOB DEMANDA
          </div>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Algumas decisões podem{" "}
            <strong className="text-gradient font-extrabold">acelerar uma empresa.</strong>{" "}
            Outras podem{" "}
            <strong className="text-gradient font-extrabold">comprometer anos de crescimento.</strong>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-300 lg:text-lg">
            Antes de decidir, leve sua estratégia para a Sala de Decisão. Um conselho executivo onde líderes, empresários e C-Levels discutem decisões críticas com especialistas que já estiveram na cadeira.
          </p>

          <a href="#planos" className="cyan-button mt-8 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-300 to-sky-500 px-8 py-4 text-base font-bold uppercase tracking-[.08em] text-slate-950 transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-sky-400">
            Quero entrar na sala <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#decisoes"
        aria-label="Rolar para a próxima seção"
        className="relative z-30 mx-auto hidden flex-col items-center gap-2 text-[10px] font-medium tracking-[.22em] text-slate-500 lg:flex"
        animate={reduceMotion ? undefined : { y: [0, 6, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
