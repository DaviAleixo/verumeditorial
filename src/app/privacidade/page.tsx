import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade e Cookies | Grupo Verum',
  description: 'Política de privacidade, proteção de dados e diretrizes de cookies do Grupo Verum.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#132842] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Voltar ao Case</span>
          </Link>

          <Link href="/" aria-label="Grupo Verum">
            <img
              src="/logo1.png"
              alt="Grupo Verum"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2b86ff] text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparência & Dados</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#132842] tracking-tight">
              Política de Privacidade & Cookies
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Grupo Verum — Gestão Estratégica de Passivos Bancários
            </p>
          </div>

          <article className="prose prose-slate max-w-none">
            <PrivacyPolicyContent />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
