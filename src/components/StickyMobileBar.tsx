'use client'

import React, { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero (e.g. 500px)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#09121f]/95 backdrop-blur-md border-t border-white/10 p-3 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
          <ShieldCheck size={14} className="text-[#2b86ff]" />
          <span className="font-medium">Análise Confidencial</span>
        </div>

        <a
          href={siteConfig.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#2b86ff] hover:bg-[#1d4ed8] text-white text-xs font-semibold px-4 py-2 transition-colors cursor-pointer"
        >
          <span>Solicitar Análise</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
