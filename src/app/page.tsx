import React from 'react'
import { Header } from '@/components/Header'
import { ArticleHero } from '@/components/ArticleHero'
import { ArticleCover } from '@/components/ArticleCover'
import { CaseStory } from '@/components/CaseStory'
import { CaseResult } from '@/components/CaseResult'
import { QuoteSection } from '@/components/QuoteSection'
import { VerumMethod } from '@/components/VerumMethod'
import { VerumAuthority } from '@/components/VerumAuthority'
import { OtherCases } from '@/components/OtherCases'
import { ConversionTransition } from '@/components/ConversionTransition'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function CaseEditorialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Editorial Header with Reading Progress */}
      <Header />

      {/* Main Semantic Article */}
      <main className="flex-grow">
        <article>
          {/* Section 1: Hero Editorial Opening */}
          <ArticleHero />

          {/* Section 2: Documentary Cover Photo */}
          <ArticleCover />

          {/* Section 3: Reading Container with Pure Editorial Rhythm */}
          <div className="editorial-container pb-6 sm:pb-8">
            {/* Story Opening */}
            <CaseStory />

            {/* Case Result: 17M Anulados & 5M Créditos */}
            <CaseResult />

            {/* Impact Quote: Não era milagre. Era prova. */}
            <QuoteSection />

            {/* How Verum Acted: O ponto cego do empresário endividado */}
            <VerumMethod />

            {/* Verum Authority Stats */}
            <VerumAuthority />

            {/* Other Cases Dossier: O padrão se repete */}
            <OtherCases />

            {/* Transition: Se a sua empresa está no mesmo corredor */}
            <ConversionTransition />
          </div>

          {/* Section 4: Wide-Container Hero Split CTA (White background + Angled Blue Lion art) */}
          <div className="editorial-wide-container pb-16 sm:pb-24">
            <FinalCTA />
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
