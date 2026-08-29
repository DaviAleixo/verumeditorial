import React from 'react'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-[#09121f] text-slate-400 border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a href="/" aria-label="Grupo Verum">
              <img
                src="/logo2.png"
                alt="Grupo Verum"
                className="h-10 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <span className="text-[11px] text-slate-400 tracking-wider uppercase font-semibold">
              Cases & Publicações Oficiais
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-xs text-slate-400">
            <a
              href="https://grupoverum.com.br/#sobre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Sobre a Verum
            </a>
            <a
              href="https://grupoverum.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Contato
            </a>
            <a
              href="https://grupoverum.com.br/privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Política de privacidade
            </a>
          </div>

          {/* Credits */}
          <div className="flex flex-col items-center sm:items-end gap-1 text-center sm:text-right">
            <p className="text-xs text-slate-400">Copyright 2026 © Grupo Verum</p>
            <p className="text-[11px] text-slate-400">
              Desenvolvido por{' '}
              <a
                href="https://instagram.com/davialeixo_nogueira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#6fa8e7] transition-colors underline underline-offset-2"
              >
                Davi Aleixo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
