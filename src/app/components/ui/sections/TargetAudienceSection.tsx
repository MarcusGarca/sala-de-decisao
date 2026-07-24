import type { CSSProperties } from "react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";
import styles from "./TargetAudienceSection.module.css";

const people = [
  "Executivos",
  "Diretores",
  "Empresários",
  "Conselheiros",
  "Sócios",
  "Gestores",
  "Empresas",
  "Family Business",
];

export default function TargetAudienceSection() {
  return (
    <SectionWrapper>
      <Reveal className="text-center">
        <p className="text-xs font-semibold tracking-[.2em] text-cyan-400">
          PARA QUEM É
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
          Para quem decide e responde pelo resultado.
        </h2>
      </Reveal>

      <Reveal className="mt-6">
        <div className={styles.wrapper}>
          <div
            className={styles.inner}
            style={{ "--quantity": people.length } as CSSProperties}
          >
            {people.map((person, index) => (
              <div
                key={person}
                className={styles.card}
                style={{ "--index": index } as CSSProperties}
              >
                {person}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
