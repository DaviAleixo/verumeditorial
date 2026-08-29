import React from 'react'
import { editorialCaseData } from '@/data/caseData'
import { Clock } from 'lucide-react'

export function ArticleHero() {
  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-8 sm:pb-12 bg-white">
      <div className="editorial-container text-center sm:text-left">
        {/* Category Tag */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-bold tracking-[0.18em] text-[#2b86ff] bg-blue-50/80 px-3 py-1 rounded">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2b86ff]" />
            {editorialCaseData.category}
          </span>
        </div>

        {/* Dominant Headline (Centered on mobile, left on desktop) */}
        <h1 className="text-[2.2rem] sm:text-[2.85rem] md:text-[3.35rem] lg:text-[3.75rem] font-bold text-[#132842] leading-[1.12] sm:leading-[1.14] tracking-[-0.03em] mb-5 sm:mb-7 text-center sm:text-left">
          O banco cobra.{' '}
          <span className="text-[#2b86ff]">A empresa sufoca.</span>{' '}
          <span className="block text-slate-800">O patrimônio entra na mira.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-[1.35rem] font-normal text-slate-600 leading-[1.6] mb-6 sm:mb-8 text-center sm:text-left max-w-2xl mx-auto sm:mx-0">
          {editorialCaseData.subtitle}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-center sm:justify-start gap-2 pt-5 border-t border-slate-100 text-xs sm:text-[13px] text-slate-500 font-medium">
          <Clock size={15} className="text-slate-400" />
          <span>{editorialCaseData.metadata.readingTime}</span>
        </div>
      </div>
    </section>
  )
}
