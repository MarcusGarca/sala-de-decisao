import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";

export default function FinalCtaSection() {
  return (
    <SectionWrapper id="contato" className="overflow-hidden pb-8 pt-0 sm:pt-0">
      <Reveal>
        <div className="relative left-1/2 isolate flex min-h-[42rem] w-screen -translate-x-1/2 items-center overflow-hidden border-y border-cyan-300/25 bg-[#00041B] px-5 py-20 text-center sm:px-8 sm:py-28">
          <div
            className="absolute inset-0 -z-30 bg-[linear-gradient(125deg,#00041B_0%,#03152e_48%,#001b35_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -z-20 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-cyan-400/10 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="absolute -left-32 top-1/3 -z-20 h-80 w-80 rounded-full border border-cyan-300/10 shadow-[0_0_80px_rgba(6,182,212,.12)]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 bottom-[-8rem] -z-20 h-96 w-96 rounded-full border border-blue-400/10 shadow-[0_0_90px_rgba(37,99,235,.14)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(34,211,238,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.035)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-5xl">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-2 text-sm font-semibold tracking-[.18em] text-cyan-200 backdrop-blur-xl">
              <Sparkles size={16} aria-hidden="true" />
              SUA PRÓXIMA DECISÃO COMEÇA AQUI
            </div>

            <h2 className="relative mx-auto mt-8 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Grandes decisões não deveriam ser tomadas no improviso.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Entre na Sala de Decisão e transforme complexidade em clareza,
              antes que uma escolha difícil se torne um problema caro.
            </p>

            <a
              href="mailto:contato@saladedecisao.com.br?subject=Quero%20agendar%20uma%20Sala%20de%20Decisão"
              className="cyan-button relative mt-10 inline-flex items-center justify-center gap-3"
            >
              Quero entrar na sala
              <ArrowRight size={19} aria-hidden="true" />
            </a>

            <div className="mx-auto mt-12 grid max-w-3xl gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
              <span className="flex items-center justify-center gap-2 text-sm text-slate-300">
                <LockKeyhole size={16} className="text-cyan-300" aria-hidden="true" />
                Conversa confidencial
              </span>
              <span className="flex items-center justify-center gap-2 text-sm text-slate-300">
                <ShieldCheck size={17} className="text-cyan-300" aria-hidden="true" />
                Visão executiva
              </span>
              <span className="flex items-center justify-center gap-2 text-sm text-slate-300">
                <ArrowRight size={17} className="text-cyan-300" aria-hidden="true" />
                Próximos passos claros
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="flex flex-col gap-3 py-8 text-center text-xs text-slate-600 sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Sala de Decisão</span>
        <span>Estratégia • Experiência • Confidencialidade</span>
      </footer>
    </SectionWrapper>
  );
}
