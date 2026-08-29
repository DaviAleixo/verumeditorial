import React from 'react'

export function QuoteSection() {
  return (
    <section id="quote" className="my-14 sm:my-20 py-10 sm:py-16 px-6 sm:px-12 bg-slate-50/80 rounded-xl text-center border-y sm:border border-slate-200/80">
      <blockquote className="max-w-xl mx-auto">
        <p className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#132842] leading-[1.18] tracking-[-0.03em] text-center">
          Não era milagre.{' '}
          <span className="block text-[#2b86ff] mt-1">Era prova.</span>
        </p>
      </blockquote>
    </section>
  )
}
