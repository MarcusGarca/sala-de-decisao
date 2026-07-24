import {
  Clock3,
  ShieldCheck,
  TrendingDown,
  Users,
} from "lucide-react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";

const impacts = [
  {
    icon: Users,
    label: "Pessoas",
    text: "Talentos, confiança e capacidade de execução.",
  },
  {
    icon: TrendingDown,
    label: "Capital",
    text: "Recursos comprometidos na direção errada.",
  },
  {
    icon: Clock3,
    label: "Tempo",
    text: "Meses ou anos que não podem ser recuperados.",
  },
] as const;

export default function CostOfMistakeSection() {
  return (
    <SectionWrapper className="overflow-hidden">
      <Reveal>
        <div className="relative left-1/2 isolate min-h-[44rem] w-screen -translate-x-1/2 overflow-hidden border-y border-cyan-400/20 bg-[#00041B] shadow-[0_30px_90px_rgba(0,0,0,.45)]">
          <video
            className="absolute inset-0 -z-30 h-full w-full object-cover"
            src="/assets/videos/cost-of-mistake.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,4,27,.97)_0%,rgba(0,4,27,.88)_38%,rgba(0,4,27,.36)_72%,rgba(0,4,27,.18)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(0,4,27,.98)_0%,rgba(0,4,27,.58)_34%,transparent_68%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(6,182,212,.13),transparent_32%)]"
            aria-hidden="true"
          />

          <div className="mx-auto flex min-h-[44rem] max-w-6xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:py-12">
            <div className="max-w-3xl">
              <h2 className="text-left!">
                Quanto custa tomar uma decisão errada?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Uma escolha mal conduzida não aparece apenas no balanço. Ela
                consome confiança, energia, capital e o recurso mais escasso de
                uma liderança: tempo.
              </p>

              <div className="mt-8 flex max-w-2xl gap-4 border-l-2 border-cyan-300 pl-5">
                <ShieldCheck
                  className="mt-1 shrink-0 text-cyan-300"
                  size={24}
                  aria-hidden="true"
                />
                <p className="text-lg leading-8 text-white">
                  Na Sala de Decisão, você não compra horas de reunião.{" "}
                  <strong className="font-semibold text-cyan-200">
                    Você reduz riscos antes que eles aconteçam.
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-3">
              {impacts.map(({ icon: Icon, label, text }) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-white/10 bg-[#020817]/75 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#031126]/90"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="font-sans! text-lg! font-semibold">
                      {label}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
