import { AlertCircle } from "lucide-react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";

const pains = ["Uma contratação importante", "Uma demissão delicada", "Um investimento de alto risco", "Uma expansão de mercado", "Uma crise financeira", "Uma transformação tecnológica", "Uma reestruturação organizacional"];

export default function ExecutivePainSection() {
  return <SectionWrapper id="decisoes"><Reveal><p className="mb-4 text-xs font-semibold tracking-[.2em] text-cyan-400">DECISÕES DE ALTO IMPACTO</p><h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">Você não precisa enfrentar decisões estratégicas sozinho. <span className="text-slate-500">Todo executivo já passou por isso.</span></h2></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{pains.map((pain, index) => <Reveal key={pain} delay={index * 0.04}><div className="glass flex min-h-28 items-start gap-3 rounded-2xl p-5 hover:-translate-y-1"><AlertCircle className="mt-0.5 shrink-0 text-cyan-400" size={19} /><span className="text-slate-200">{pain}</span></div></Reveal>)}</div><Reveal className="mt-12 max-w-4xl border-l-2 border-cyan-500 pl-6 text-lg leading-8 text-slate-400">A decisão precisa ser tomada. Mas falta alguém experiente para confrontar ideias, fazer perguntas difíceis e enxergar riscos que talvez você ainda não tenha percebido. <strong className="font-medium text-white">É exatamente para isso que existe a Sala de Decisão.</strong></Reveal></SectionWrapper>;
}
