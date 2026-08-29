import React from 'react'

export function CaseResult() {
  return (
    <section id="result" className="my-12 sm:my-16">
      {/* Subheading Centralizado */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-8 text-center">
        O resultado mudou o jogo.
      </h2>

      {/* Numerical Highlights Centralizados */}
      <div className="my-8 sm:my-10 py-8 border-y border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.18em] text-[#2b86ff] mb-2">
            Cobrança
          </span>
          <span className="font-title text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#132842] tracking-tight leading-none">
            R$ 17 MILHÕES
          </span>
          <span className="text-sm text-slate-600 mt-2 font-medium">
            Cobrança anulada
          </span>
        </div>

        <div className="flex flex-col items-center text-center sm:border-l sm:border-slate-200 sm:pl-10">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.18em] text-[#2b86ff] mb-2">
            Créditos
          </span>
          <span className="font-title text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#132842] tracking-tight leading-none">
            R$ 5 MILHÕES
          </span>
          <span className="text-sm text-slate-600 mt-2 font-medium">
            Créditos gerados na Recuperação Judicial
          </span>
        </div>
      </div>

      {/* Explanatory flow */}
      <div className="editorial-article-body">
        <p>
          A cobrança de R$ 17 milhões foi anulada.
        </p>

        <p>
          A auditoria gerou R$ 5 milhões em créditos a serem devolvidos dentro da Recuperação Judicial.
        </p>

        <p>
          Vieram acordos favoráveis.
        </p>

        <p>
          A dívida com a Caixa foi extinta.
        </p>

        <p className="font-medium text-slate-800">
          A empresa ganhou fôlego para voltar à normalidade.
        </p>
      </div>
    </section>
  )
}
