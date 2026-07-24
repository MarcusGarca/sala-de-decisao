import { BriefcaseBusiness, ShieldCheck, Zap } from "lucide-react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";
import styles from "./AboutSection.module.css";

const cards = [
  [
    ShieldCheck,
    "Conselho Estratégico",
    "Um espaço confidencial para discutir decisões críticas.",
  ],
  [
    BriefcaseBusiness,
    "Especialistas C-Level",
    "Você conversa com executivos que já viveram desafios semelhantes.",
  ],
  [
    Zap,
    "Sob Demanda",
    "Sem contratos longos. Sem burocracia. Quando precisar, a Sala está disponível.",
  ],
] as const;

export default function AboutSection() {
  return (
    <SectionWrapper className="bg-slate-950/35">
      <Reveal>
        <p className="text-xs font-semibold tracking-[.2em] text-cyan-400">
          O QUE É
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
          A Sala de Decisão
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map(([Icon, title, text], index) => (
          <Reveal key={title} delay={index * 0.08}>
            <article
              className={`${styles.card} glass h-full rounded-3xl bg-[#020817]/95 p-7 transition duration-500 hover:-translate-y-1`}
            >
              <div className="mb-8 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                <Icon className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
