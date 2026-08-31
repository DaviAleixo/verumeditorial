'use client'

import React, { useEffect, useState } from 'react'
import { X, ShieldCheck } from 'lucide-react'
import { PrivacyPolicyContent } from './PrivacyPolicyContent'

export function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    window.addEventListener('open-privacy-modal', handleOpen)
    window.addEventListener('close-privacy-modal', handleClose)

    return () => {
      window.removeEventListener('open-privacy-modal', handleOpen)
      window.removeEventListener('close-privacy-modal', handleClose)
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2b86ff] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="text-base font-bold text-[#132842]">
                Política de Privacidade & Cookies
              </h3>
              <p className="text-xs text-slate-500">Grupo Verum Oficial</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 overflow-y-auto overscroll-contain">
          <PrivacyPolicyContent />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/70 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#132842] text-white hover:bg-[#1a385c] transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

export function openPrivacyModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-privacy-modal'))
  }
}
