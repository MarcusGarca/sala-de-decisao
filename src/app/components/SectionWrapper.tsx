import type { ReactNode } from "react";
export default function SectionWrapper({ children, id, className = "" }: { children:ReactNode; id?:string; className?:string }) { return <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-28 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>; }
