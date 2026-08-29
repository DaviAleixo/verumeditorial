'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { siteConfig } from '@/config/site'
import { Search, ChevronDown, X } from 'lucide-react'

interface SearchSection {
  id: string
  title: string
  content: string
}

const CASE_SECTIONS: SearchSection[] = [
  {
    id: 'hero',
    title: 'Abertura do case',
    content:
      'O banco cobra. A empresa sufoca. O patrimônio entra na mira. O empresário alagoano da construção civil já não via saída. A Caixa cobrava R$ 17 milhões. O caixa apertava. A Recuperação Judicial virava o último recurso. A sensação era a mesma de milhares de empresários no Brasil: O banco apresenta um número. A empresa não consegue provar o contrário. O patrimônio entra em risco.',
  },
  {
    id: 'story',
    title: 'Não foi pedido de desconto. Foi auditoria.',
    content:
      'Foi aí que a equipe da Verum entrou no caso. Não foi renegociação no feeling. Foi método. Dez anos de movimentação bancária. Centenas de milhões rastreados contrato a contrato, lançamento a lançamento. Tudo confrontado com a lei e com as normas do Banco Central. O objetivo era técnico e direto: separar o que era dívida real do que era cobrança abusiva.',
  },
  {
    id: 'result',
    title: 'O resultado mudou o jogo',
    content:
      'A cobrança de R$ 17 milhões foi anulada. A auditoria gerou R$ 5 milhões em créditos a serem devolvidos dentro da Recuperação Judicial. Vieram acordos favoráveis. A dívida com a Caixa foi extinta. A empresa ganhou fôlego para voltar à normalidade.',
  },
  {
    id: 'quote',
    title: 'Não era milagre. Era prova.',
    content: 'Não era milagre. Era prova.',
  },
  {
    id: 'method',
    title: 'O ponto cego do empresário endividado',
    content:
      'Enquanto o banco aperta, a Verum atua em quatro frentes: Proteção patrimonial, enquanto o direito é discutido. Auditoria dos últimos 10 anos, para gerar créditos. Condução das tratativas, para aliviar a pressão. Tempo para reestruturar o caixa e pagar o que for justo. Não o que o banco apresenta como fato consumado.',
  },
  {
    id: 'authority',
    title: '15 anos. R$ 15 bilhões auditados.',
    content:
      'A Verum se posiciona como especialista em gestão de dívidas bancárias empresariais e rurais. No portfólio oficial: R$ 15 bilhões em movimentações auditadas. R$ 150 milhões recuperados para clientes. Mais de 4.500 contas analisadas. O caso de Alagoas não é isolado.',
  },
  {
    id: 'other-cases',
    title: 'O padrão se repete',
    content:
      'Em outros dossiês da Verum: Cobrança milionária virando quitação de R$ 13 mil. Execução de R$ 1,3 milhão fechada em 13%. Leilão barrado. Penhora de faturamento caindo de 10% para 2,5%. O banco aperta. A auditoria reabre o tabuleiro.',
  },
  {
    id: 'corridor',
    title: 'Se a sua empresa está no mesmo corredor',
    content:
      'Dívida entre R$ 1 milhão e R$ 50 milhões ou mais. Execução. Leilão. Bloqueio. Juros que não fecham. O caminho não é esperar o banco tomar o que levou uma vida para construir. É auditar. Proteger. Renegociar com número na mesa. Quem já foi bancário conhece o sistema por dentro. Quem audita 10 anos de conta sabe onde a cobrança estoura.',
  },
  {
    id: 'cta',
    title: 'Análise do caso',
    content:
      'Se você está sofrendo com juros abusivos e precisa de fôlego para continuar girando o caixa do seu negócio, a Verum pode te ajudar. Clique no botão e solicite uma análise confidencial do seu caso. Sem compromisso. Com método. O empresário de Alagoas não pediu desconto. Ele apresentou prova. E a cobrança de R$ 17 milhões deixou de existir.',
  },
]

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(Number((scroll * 100).toFixed(1)))
      setIsScrolled(totalScroll > 15)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // In-page search results with snippet extraction
  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []

    return CASE_SECTIONS.map((sec) => {
      const titleMatch = sec.title.toLowerCase().includes(q)
      const contentIndex = sec.content.toLowerCase().indexOf(q)

      if (!titleMatch && contentIndex === -1) return null

      // Extract a contextual snippet around the matched term
      let snippet = sec.content
      if (contentIndex !== -1) {
        const start = Math.max(0, contentIndex - 25)
        const end = Math.min(sec.content.length, contentIndex + q.length + 55)
        const prefix = start > 0 ? '...' : ''
        const suffix = end < sec.content.length ? '...' : ''
        snippet = `${prefix}${sec.content.slice(start, end).trim()}${suffix}`
      } else {
        snippet = sec.content.slice(0, 75) + '...'
      }

      return {
        id: sec.id,
        title: sec.title,
        snippet: `"${snippet}"`,
      }
    }).filter(Boolean) as { id: string; title: string; snippet: string }[]
  }, [searchQuery])

  const handleSelectResult = (sectionId: string) => {
    setIsSearchOpen(false)
    setSearchQuery('')

    const element = document.getElementById(sectionId)
    if (element) {
      const topOffset = 85
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      // Discreet in-page highlight flash
      element.classList.remove('case-highlight-flash')
      void element.offsetWidth // trigger reflow
      element.classList.add('case-highlight-flash')
      setTimeout(() => {
        element.classList.remove('case-highlight-flash')
      }, 2500)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-200">
      {/* Navbar on White Background */}
      <div
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-slate-200 py-3'
            : 'border-b border-slate-100 py-4 sm:py-4.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center group transition-transform duration-200 hover:opacity-90"
              aria-label="Grupo Verum"
            >
              <img
                src="/logo-verum.png"
                alt="Grupo Verum"
                className="h-10 sm:h-12 w-auto object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(13%) sepia(45%) saturate(1912%) hue-rotate(185deg) brightness(92%) contrast(98%)',
                }}
              />
            </a>
          </div>

          {/* Componente Central: Falar com a Verum */}
          <div className="flex items-center justify-center">
            <a
              href={siteConfig.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-800 font-semibold text-xs sm:text-sm transition-all duration-150 group cursor-pointer shadow-xs border border-slate-200/50"
            >
              <span>Falar com a Verum</span>
              <ChevronDown
                size={15}
                className="text-slate-500 transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Lupa de busca interna */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 sm:p-2.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                isSearchOpen ? 'bg-slate-100 text-[#2b86ff]' : 'hover:bg-slate-100 text-[#132842]'
              }`}
              aria-label="Buscar neste case"
            >
              <Search size={20} className="stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Clean Editorial In-Page Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-slate-100 bg-white px-4 sm:px-8 py-3 animate-in fade-in duration-150">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar neste case..."
                  autoFocus
                  className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 py-0.5"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false)
                    setSearchQuery('')
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 px-2 py-0.5 cursor-pointer font-medium"
                >
                  Fechar
                </button>
              </div>

              {/* In-Page Textual Results List (Editorial & Compact) */}
              {searchQuery.trim() !== '' && (
                <div className="mt-2 divide-y divide-slate-100 border border-slate-200 bg-white rounded-lg overflow-hidden shadow-xs">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectResult(item.id)}
                        className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 transition-colors flex flex-col gap-0.5 group cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-[#132842] group-hover:text-[#2b86ff] font-title transition-colors">
                          {item.title}
                        </span>
                        <span className="text-xs text-slate-600 font-light italic">
                          {item.snippet}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-3.5 py-3 text-xs text-slate-500 text-center">
                      Nenhum trecho encontrado no case para &ldquo;{searchQuery}&rdquo;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Reading Progress Line */}
      <div className="w-full h-[2px] bg-slate-100 overflow-hidden relative">
        <div
          className="h-full bg-[#2b86ff] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}
