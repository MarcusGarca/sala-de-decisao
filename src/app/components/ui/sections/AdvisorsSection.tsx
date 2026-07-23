"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";
import luisa from "../../../../../public/assets/images/Foto grande da Luísa.webp";
import julio from "../../../../../public/assets/images/Foto grande do Júlio.webp";

function Advisor({
  image,
  name,
  role,
  bio,
}: {
  image: StaticImageData;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <article className="glass group h-full overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={`Retrato de ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-transparent to-transparent" />
      </div>
      <div className="p-7">
        <p className="text-xs font-semibold tracking-[.18em] text-cyan-400">{role}</p>
        <h3 className="mt-2 font-semibold">{name}</h3>
        <p className="mt-3 leading-relaxed text-slate-300">{bio}</p>
      </div>
    </article>
  );
}

export default function AdvisorsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <SectionWrapper>
      <div ref={targetRef}>
        <Reveal>
          <p className="text-xs font-semibold tracking-[.2em] text-cyan-400">
            EXPERIÊNCIA REAL
          </p>
          <h2 className="mt-4 max-w-4xl">
            Você não conversa com consultores.{" "}
            <span className="text-slate-500">
              Você conversa com quem já ocupou a cadeira.
            </span>
          </h2>
        </Reveal>
        <motion.div
          style={{ y: reduceMotion ? 0 : cardsY }}
          className="mt-12 grid items-stretch gap-6 md:grid-cols-2"
        >
          <Reveal>
            <Advisor
              image={luisa}
              name="Luísa"
              role="EXECUTIVA C-LEVEL"
              bio="Experiência executiva para transformar dilemas complexos em decisões claras, com visão de negócio, pessoas e governança."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Advisor
              image={julio}
              name="Júlio"
              role="CTO • TECNOLOGIA E ESTRATÉGIA"
              bio="Liderança em tecnologia, transformação digital e arquitetura para decisões que conectam inovação, execução e resultado."
            />
          </Reveal>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
