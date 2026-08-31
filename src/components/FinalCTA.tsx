'use client'

import React from 'react'
import { siteConfig } from '@/config/site'
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react'

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="w-full my-10 sm:my-16 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden"
    >
      <div className="relative flex w-full flex-col md:flex-row min-h-[480px] lg:min-h-[520px]">
        {/* Left Side: Editorial Content */}
        <div className="flex w-full flex-col justify-between p-6 sm:p-10 md:w-3/5 lg:p-12 z-10 bg-white">
          <div>
            {/* Top Badge & Slogan */}
            <header className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
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
                    Auditoria Bancária Especializada
                  </p>
                </div>
              </div>
            </header>

            {/* Main Headline & Description */}
            <main>
              <h2 className="text-xl sm:text-2xl md:text-[1.85rem] lg:text-[2.15rem] font-bold leading-[1.25] text-[#132842] font-title tracking-tight">
                Se você está sofrendo com juros abusivos e precisa de fôlego para continuar girando o caixa do seu negócio, a Verum pode te ajudar.
              </h2>

              {/* Blue accent bar */}
              <div className="my-5 h-1 w-16 bg-[#2b86ff] rounded-full" />

              <p className="mb-7 max-w-xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Clique no botão e solicite uma análise confidencial do seu caso. Sem compromisso. Com método.
              </p>

              {/* Premium Executive Button Card */}
              <div className="mb-7">
                <a
                  href={siteConfig.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-between gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[400px] px-4 py-3 sm:px-6 sm:py-4.5 rounded-xl bg-[#0e1d32] hover:bg-[#132842] text-white shadow-lg sm:shadow-xl shadow-slate-900/10 border border-slate-800/80 hover:border-[#2b86ff] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2b86ff] flex-shrink-0" />
                      <span className="text-xs sm:text-[15px] font-bold tracking-wide sm:tracking-wider uppercase text-white font-title">
                        Solicitar Análise Confidencial
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 font-normal leading-tight">
                      Sem compromisso • Diagnóstico técnico com especialistas
                    </span>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#2b86ff] group-hover:bg-[#3d94ff] text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 shadow-md shadow-blue-500/25">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 hidden sm:block"
                    />
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 block sm:hidden"
                    />
                  </div>
                </a>
              </div>

              {/* Micro badge trust */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Sigilo bancário e proteção de dados rigorosamente garantidos</span>
              </div>
            </main>
          </div>

          {/* Bottom Footer Info from requested copy */}
          <footer className="mt-8 pt-5 border-t border-slate-100 w-full">
            <div className="space-y-1 text-sm sm:text-base leading-relaxed">
              <p className="text-slate-500 font-normal">
                O empresário de Alagoas não pediu desconto.
              </p>
              <p className="font-semibold text-[#132842] text-base">
                Ele apresentou prova.
              </p>
            </div>
          </footer>
        </div>

        {/* Right Side: Lion Artwork / Brand Graphic */}
        <div className="relative w-full md:w-2/5 min-h-[220px] sm:min-h-[260px] md:min-h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 md:bg-gradient-to-br md:from-[#0c1f3d] md:via-[#09172e] md:to-[#040914] md:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)] p-6 md:p-8">
          {/* Ambient radial lighting (Desktop only) */}
          <div className="hidden md:block absolute inset-0 bg-radial from-[#2b86ff]/20 via-transparent to-transparent pointer-events-none" />

          {/* Lion Artwork */}
          <div className="relative z-10 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] flex items-center justify-center transition-transform duration-500 hover:scale-105">
            {/* Desktop glowing version */}
            <img
              src="/backgroundvideo.png"
              alt="Símbolo Grupo Verum"
              className="hidden md:block w-full h-auto object-contain invert brightness-110 hue-rotate-[185deg] saturate-150 drop-shadow-[0_0_35px_rgba(43,134,255,0.4)]"
            />
            {/* Mobile blue logo version */}
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
