"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../../Reveal";
import SectionWrapper from "../../SectionWrapper";

const pains = [
  {
    title: "Uma contratação importante",
    description:
      "Escolher a pessoa certa quando cultura, liderança e resultado estão em jogo.",
    image:
      "/assets/images/ExecutivePain/uma-contratacao-importante.webp",
  },
  {
    title: "Uma demissão delicada",
    description:
      "Conduzir uma decisão difícil com clareza, responsabilidade e segurança.",
    image: "/assets/images/ExecutivePain/uma-demissao-delicada.webp",
  },
  {
    title: "Um investimento de alto risco",
    description:
      "Avaliar cenários, premissas e riscos antes de comprometer recursos.",
    image:
      "/assets/images/ExecutivePain/um-investimento-de-alto-risco.webp",
  },
  {
    title: "Uma expansão de mercado",
    description:
      "Crescer na direção certa, no momento certo e com uma estratégia consistente.",
    image: "/assets/images/ExecutivePain/uma-expansao-de-mercado.webp",
  },
  {
    title: "Uma crise financeira",
    description:
      "Priorizar ações críticas e recuperar o controle em momentos de pressão.",
    image: "/assets/images/ExecutivePain/uma-crise-financeira.webp",
  },
  {
    title: "Uma transformação tecnológica",
    description:
      "Transformar tecnologia em vantagem competitiva, não em complexidade.",
    image:
      "/assets/images/ExecutivePain/uma-transformacao-tecnologica.webp",
  },
  {
    title: "Uma reestruturação organizacional",
    description:
      "Redesenhar a organização sem perder talentos, foco ou capacidade de execução.",
    image:
      "/assets/images/ExecutivePain/uma-reestruturacao-organizacional.webp",
  },
];

export default function ExecutivePainSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const firstCloneRef = useRef<HTMLElement>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [cycleWidth, setCycleWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateCarousel = useCallback(() => {
    const carousel = carouselRef.current;
    const firstClone = firstCloneRef.current;
    if (!carousel || !firstClone) return;

    const nextCycleWidth = firstClone.offsetLeft - carousel.offsetLeft;
    const pages = Math.max(
      1,
      Math.ceil(nextCycleWidth / carousel.clientWidth),
    );
    const maxScroll = Math.max(0, nextCycleWidth - carousel.clientWidth);
    const currentPage =
      maxScroll === 0
        ? 0
        : Math.min(
            pages - 1,
            Math.round((carousel.scrollLeft / maxScroll) * (pages - 1)),
          );

    setCycleWidth(nextCycleWidth);
    setPageCount(pages);
    setActivePage(currentPage);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateCarousel();
    const resizeObserver = new ResizeObserver(updateCarousel);
    resizeObserver.observe(carousel);

    return () => {
      resizeObserver.disconnect();
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [updateCarousel]);

  const goToPage = useCallback((page: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (page >= pageCount) {
      carousel.scrollTo({ left: cycleWidth, behavior: "smooth" });
      resetTimerRef.current = setTimeout(() => {
        carousel.scrollTo({ left: 0, behavior: "auto" });
        setActivePage(0);
      }, 700);
      return;
    }

    const normalizedPage = page < 0 ? pageCount - 1 : page;
    const maxScroll = Math.max(0, cycleWidth - carousel.clientWidth);
    carousel.scrollTo({
      left:
        (maxScroll / Math.max(1, pageCount - 1)) * normalizedPage,
      behavior: "smooth",
    });
  }, [cycleWidth, pageCount]);

  useEffect(() => {
    if (isPaused || pageCount <= 1) return;

    const autoplay = window.setInterval(() => {
      goToPage(activePage + 1);
    }, 4000);

    return () => window.clearInterval(autoplay);
  }, [activePage, goToPage, isPaused, pageCount]);

  return (
    <SectionWrapper id="decisoes" className="overflow-hidden bg-[#00041B]">
      <Reveal>
        <p className="mb-4 max-[991px]:text-center text-xs font-semibold tracking-[.2em] text-cyan-400">
          DECISÕES DE ALTO IMPACTO
        </p>
        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Você não precisa enfrentar decisões estratégicas sozinho.{" "}
          <span>Todo executivo já passou por isso.</span>
        </h2>
      </Reveal>

      <Reveal className="mt-14">
        <div
          ref={carouselRef}
          onScroll={updateCarousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Decisões estratégicas"
        >
          {[...pains, ...pains].map((pain, index) => (
            <article
              key={`${pain.title}-${index}`}
              ref={index === pains.length ? firstCloneRef : undefined}
              aria-hidden={index >= pains.length ? true : undefined}
              className="group relative aspect-[4/5] min-w-full snap-start overflow-hidden rounded-2xl border border-cyan-300/70 bg-[#020817] shadow-[0_0_22px_rgba(34,211,238,0.18)] transition duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_0_38px_rgba(6,182,212,0.28)] sm:min-w-[calc(50%_-_0.625rem)] lg:min-w-[calc(33.333%_-_0.834rem)]"
            >
              <Image
                src={pain.image}
                alt={pain.title}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-b from-[#020817]/5 via-[#020817]/20 to-[#01040d] [background-position:0_0]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#01040d] via-[#01040d]/90 to-transparent"
                aria-hidden="true"
              />

              <span
                className="absolute left-5 top-0 h-1 w-20 rounded-b-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-center sm:px-7 sm:pb-9">
                <h3 className="font-sans text-2xl font-normal leading-tight tracking-tight text-white sm:text-[1.7rem]">
                  {pain.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-slate-300 sm:text-base">
                  {pain.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-2" aria-label="Página do carrossel">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Ir para a página ${index + 1}`}
                aria-current={activePage === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  activePage === index
                    ? "w-7 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]"
                    : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-4xl border-l-2 border-cyan-500 pl-6 text-lg leading-8 text-slate-400">
        A decisão precisa ser tomada. Mas falta alguém experiente para
        confrontar ideias, fazer perguntas difíceis e enxergar riscos que talvez
        você ainda não tenha percebido.{" "}
        <strong className="font-medium text-white">
          É exatamente para isso que existe a Sala de Decisão.
        </strong>
      </Reveal>
    </SectionWrapper>
  );
}
