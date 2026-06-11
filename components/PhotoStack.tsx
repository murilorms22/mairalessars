"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/optimized/carrossel-1.webp", rotate: "-6deg" },
  { src: "/optimized/carrossel-2.webp", rotate: "4deg" },
  { src: "/optimized/carrossel-3.webp", rotate: "-3deg" },
  { src: "/optimized/carrossel-4.webp", rotate: "7deg" },
  { src: "/optimized/carrossel-5.webp", rotate: "-5deg" },
  { src: "/optimized/carrossel-6.webp", rotate: "3deg" },
  { src: "/optimized/carrossel-7.webp", rotate: "-8deg" },
  { src: "/optimized/carrossel-8.webp", rotate: "5deg" },
  { src: "/optimized/carrossel-9.webp", rotate: "-4deg" },
  { src: "/optimized/carrossel-10.webp", rotate: "6deg" },
  { src: "/optimized/carrossel-11.webp", rotate: "-2deg" },
];

// How many screen-px of scroll each card gets
const BUDGET = 300;

export default function PhotoStack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!wrapper || !cards.length) return;

    // All cards start off-screen to the right
    gsap.set(cards, { x: 600, opacity: 0 });

    // Timeline: each card flies in sequentially, scrubbed by scroll.
    // We use CSS sticky for locking (not GSAP pin) to avoid zoom/fixed-width issues.
    // GSAP drives the animation from "top top" to "bottom bottom" of the wrapper.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        endTrigger: wrapper,
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        { x: 0, opacity: 1, ease: "power3.out", duration: 1 },
        i
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    /*
     * Wrapper height formula (body CSS px):
     *   N * BUDGET / zoom + var(--hero-height)
     *
     * When rendered on screen:
     *   (N * BUDGET / zoom + vh/zoom) * zoom = N * BUDGET + vh
     *
     * So sticky duration = N * BUDGET screen-px — exactly right.
     */
    <div
      ref={wrapperRef}
      className="relative bg-[#0a0a0a]"
      style={{
        height: `calc(${images.length * BUDGET}px / var(--vp-zoom) + var(--hero-height))`,
      }}
    >
      {/* CSS sticky — stays on screen while wrapper scrolls past */}
      <div
        className="sticky top-0 w-full flex flex-col items-center justify-center bg-[#0a0a0a]"
        style={{ height: "var(--hero-height)" }}
      >
        <p className="text-white/80 text-[32px] uppercase tracking-[0.5em] mb-20 font-[var(--font-inter)] font-black">
          Momentos da caminhada
        </p>

        {/* Stack — all cards absolutely on top of each other */}
        <div className="relative" style={{ width: 450, height: 550 }}>
          {images.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-[5px] border-white"
              style={{ rotate: img.rotate, zIndex: i + 1 }}
            >
              <Image
                src={img.src}
                alt={`Foto ${i + 1}`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-2 text-white/20 animate-bounce">
          <span className="text-[20px] uppercase tracking-[0.2em] font-[var(--font-inter)]">
            role para ver mais
          </span>
          <span className="material-symbols-outlined text-[18px]">south</span>
        </div>
      </div>
    </div>
  );
}
