import React from 'react'

export function ArticleCover() {
  return (
    <div className="w-full pb-10 sm:pb-16 bg-white">
      <div className="editorial-wide-container">
        <figure className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm bg-slate-100">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] w-full overflow-hidden">
            <img
              src="/fotoeditorial.png"
              alt="Construção Civil — Case Real Grupo Verum"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          <figcaption className="px-4 py-3 sm:px-5 sm:py-3 bg-slate-50 border-t border-slate-200/60 text-[11px] sm:text-xs text-slate-500">
            <span>Operação e patrimônio da construção civil em Alagoas sob auditoria bancária.</span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
