"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";
const steps = ["Solicitação", "Entendimento do desafio", "Escolha do especialista", "Sessão online", "Resumo Executivo", "Plano de próximos passos"];

export default function HowItWorksSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 80%", "end 35%"] });
  return <SectionWrapper className="bg-slate-950/25"><Reveal><p className="text-xs font-semibold tracking-[.2em] text-cyan-400">PROCESSO SIMPLES</p><h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Como funciona</h2></Reveal><div ref={timelineRef} className="relative mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-6"><div className="absolute left-6 right-6 top-7 hidden h-px bg-cyan-950/70 lg:block" /><motion.div style={{ scaleX: reduceMotion ? 1 : scrollYProgress }} className="absolute left-6 right-6 top-7 hidden h-px origin-left bg-gradient-to-r from-cyan-500 via-sky-300 to-cyan-400 shadow-[0_0_14px_rgba(34,211,238,.95)] lg:block" />{steps.map((step, index) => <Reveal key={step} delay={index * 0.07}><div className="relative flex gap-4 lg:block"><span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#07111f] font-mono text-lg text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,.2)]">{String(index + 1).padStart(2, "0")}</span><p className="pt-3 text-sm font-medium text-slate-200 lg:pt-5">{step}</p></div></Reveal>)}</div></SectionWrapper>;
}
