'use client'

import React, { useEffect, useState } from 'react'
import { Cookie, Shield, X } from 'lucide-react'
import { openPrivacyModal } from './PrivacyModal'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('verum_cookie_consent')
      if (!consent) {
        // slight delay for pleasant entrance
        const timer = setTimeout(() => setShowBanner(true), 1200)
        return () => clearTimeout(timer)
      }
    } catch {
      // localStorage might be blocked
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem('verum_cookie_consent', 'accepted')
    } catch {}
    setShowBanner(false)
  }

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault()
    openPrivacyModal()
  }

  if (!showBanner) return null

  return (
    <aside
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#09121f]/95 text-white backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-blue-400">
            <Cookie className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-bold text-white tracking-tight">
              Privacidade & Cookies
            </span>
          </div>
          <button
            onClick={handleAccept}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Dispensar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Utilizamos cookies e tecnologias similares para aprimorar sua experiência e fornecer informações personalizadas conforme a nossa{' '}
          <button
            onClick={handleOpenPrivacy}
            className="text-[#6fa8e7] underline underline-offset-2 hover:text-white transition-colors"
          >
            Política de Privacidade
          </button>
          .
        </p>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={handleOpenPrivacy}
            className="px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            Ver Detalhes
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-semibold bg-[#2b86ff] hover:bg-blue-500 text-white rounded-lg transition-colors shadow-sm"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </aside>
  )
}
