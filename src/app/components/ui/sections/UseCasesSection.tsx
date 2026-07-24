import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";
import styles from "./UseCasesSection.module.css";

const cases = [
  "Empresa precisava decidir se expandia a operação para outro estado ou país.",
  "Executivo precisava demitir um diretor-chave sem desestabilizar o time.",
  "Empresa precisava investir massivamente em IA e validar a arquitetura.",
  "Sócios em conflito quanto à estratégia de saída e valuation.",
  "Decisão crítica sobre migração e escolha de um novo ERP.",
  "Necessidade de estruturação de uma nova arquitetura financeira.",
];

export default function UseCasesSection() {
  return (
    <SectionWrapper>
      <Reveal>
        <p className="text-xs font-semibold tracking-[.2em] text-cyan-400">
          NA PRÁTICA
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
          Casos onde a Sala de Decisão faz diferença
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseText, index) => (
          <Reveal key={caseText} delay={(index % 3) * 0.06}>
            <article
              className={styles.card}
              tabIndex={0}
              aria-label={`Caso ${index + 1}: ${caseText}`}
            >
              <div className={styles.front}>
                <span className={styles.caseNumber}>
                  CASO {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-7 text-slate-200">{caseText}</p>
                <ArrowUpRight className={styles.frontIcon} aria-hidden="true" />
              </div>

              <div className={styles.back} aria-hidden="true">
                <span className={styles.brandMark}>
                  <Sparkles size={27} aria-hidden="true" />
                </span>
                <h3 className={styles.backTitle}>Sala de Decisão</h3>
                <p className={styles.backText}>
                  Clareza para decidir. Experiência para avançar.
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
