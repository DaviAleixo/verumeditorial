'use client'

import React from 'react'
import { siteConfig } from '@/config/site'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section id="cta" className="w-full my-10 sm:my-14 bg-white border-y sm:border border-slate-200 overflow-hidden">
      <div className="relative flex w-full flex-col md:flex-row min-h-[460px] lg:min-h-[500px]">
        {/* Left Side: Content on Pure White Background */}
        <div className="flex w-full flex-col justify-between p-6 sm:p-10 md:w-3/5 lg:p-12 z-10 bg-white">
          <div>
            {/* Top Logo & Slogan Header */}
            <header className="mb-5 sm:mb-6 flex items-center">
              <img
                src="/logo-verum.png"
                alt="Grupo Verum"
                className="h-8 sm:h-9 w-auto mr-3 object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(13%) sepia(45%) saturate(1912%) hue-rotate(185deg) brightness(92%) contrast(98%)',
                }}
              />
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs sm:text-sm font-bold text-[#132842] leading-none uppercase tracking-wider font-title">
                  Grupo Verum
                </p>
                <p className="text-[10px] sm:text-[11px] tracking-widest text-slate-500 uppercase font-medium mt-1">
                  Auditoria Bancária
                </p>
              </div>
            </header>

            {/* Main Content */}
            <main>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-bold leading-[1.2] text-[#132842] font-title tracking-tight">
                Se você está sofrendo com juros abusivos e precisa de fôlego para continuar girando o caixa do seu negócio, a Verum pode te ajudar.
              </h2>
              
              {/* Blue accent line */}
              <div className="my-4 sm:my-5 h-1 w-16 bg-[#2b86ff] rounded-full" />

              <p className="mb-6 max-w-xl text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Clique no botão e solicite uma análise confidencial do seu caso. Sem compromisso. Com método.
              </p>

              {/* Action Link / Button */}
              <div className="mb-6">
                <a
                  href={siteConfig.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-[#2b86ff] hover:text-[#1d4ed8] uppercase transition-colors group cursor-pointer"
                >
                  <span className="underline underline-offset-4 decoration-2 decoration-[#2b86ff]">
                    SOLICITAR ANÁLISE CONFIDENCIAL
                  </span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </main>
          </div>

          {/* Bottom Footer Info: 3 Lines from copy */}
          <footer className="mt-4 pt-4 border-t border-slate-100 w-full">
            <div className="space-y-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p className="mb-0 text-slate-500 font-light">
                O empresário de Alagoas não pediu desconto.
              </p>
              <p className="mb-0 font-semibold text-[#132842]">
                Ele apresentou prova.
              </p>
              <p className="mb-0 font-bold text-[#2b86ff]">
                E a cobrança de R$ 17 milhões deixou de existir.
              </p>
            </div>
          </footer>
        </div>

        {/* Right Side: On Mobile -> Pure white with blue logo only. On Desktop -> Angled deep blue panel */}
        <div className="relative w-full md:w-2/5 min-h-[180px] sm:min-h-[220px] md:min-h-full flex items-center justify-center overflow-hidden bg-transparent md:bg-gradient-to-br md:from-[#0c1f3d] md:via-[#09172e] md:to-[#040914] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)] pb-8 md:pb-0">
          {/* Ambient radial lighting (Desktop only) */}
          <div className="hidden md:block absolute inset-0 bg-radial from-[#2b86ff]/20 via-transparent to-transparent pointer-events-none" />

          {/* Lion Artwork: In Mobile it's blue on white, in Desktop it's glowing on dark blue */}
          <div className="relative z-10 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] flex items-center justify-center p-4 md:p-6 transition-transform duration-500 hover:scale-105">
            {/* Desktop glowing version */}
            <img
              src="/backgroundvideo.png"
              alt="Símbolo Grupo Verum"
              className="hidden md:block w-full h-auto object-contain invert brightness-110 hue-rotate-[185deg] saturate-150 drop-shadow-[0_0_35px_rgba(43,134,255,0.4)]"
            />
            {/* Mobile blue logo only on transparent/white background */}
            <img
              src="/backgroundvideo.png"
              alt="Símbolo Grupo Verum"
              className="block md:hidden w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(43,134,255,0.25)]"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(13%) sepia(45%) saturate(1912%) hue-rotate(185deg) brightness(92%) contrast(98%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
