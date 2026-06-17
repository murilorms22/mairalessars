"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const images = [
  "/optimized/carrossel-1.webp",
  "/optimized/carrossel-2.webp",
  "/optimized/carrossel-3.webp",
  "/optimized/carrossel-4.webp",
  "/optimized/carrossel-5.webp",
  "/optimized/carrossel-6.webp",
  "/optimized/carrossel-7.webp",
  "/optimized/carrossel-8.webp",
  "/optimized/carrossel-9.webp",
  "/optimized/carrossel-10.webp",
  "/optimized/carrossel-11.webp",
];

export default function PhotoStack() {
  return (
    <div className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center justify-center overflow-hidden">
      <p className="text-white/80 text-[24px] md:text-[32px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-16 font-[var(--font-inter)] font-black text-center px-4">
        Momentos da caminhada
      </p>

      <div className="w-full max-w-7xl relative group overflow-hidden px-0">
        <button className="swiper-prev-btn absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 md:p-4 rounded-full hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md border border-white/10">
          <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
        </button>
        <button className="swiper-next-btn absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 md:p-4 rounded-full hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md border border-white/10">
          <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
        </button>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={3}
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="w-full pb-20 pt-8"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            >
              <Image
                src={src}
                alt={`Foto ${index + 1}`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 260px, 320px"
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* FORÇA o tamanho dos slides para que NUNCA fiquem 100vw independentemente do Javascript do Swiper */
        .swiper-slide {
          width: 260px !important;
          height: 325px !important;
          opacity: 1 !important;
          filter: brightness(0.3);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease !important;
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 400px !important;
            height: 500px !important;
          }
        }
        
        /* Torna os slides ativos claros e em evidência, sem filtros */
        .swiper-slide-active {
          filter: brightness(1);
        }

        /* Transforma a paginação em elemento de bloco relativo, garantindo que não seja cortada pelo overflow do carrossel e fique perfeitamente alinhada abaixo das imagens */
        .swiper-pagination {
          position: relative !important;
          margin-top: 1rem !important;
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
