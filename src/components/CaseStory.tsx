import React from 'react'

export function CaseStory() {
  return (
    <section id="story" className="editorial-article-body text-slate-700">
      <p className="editorial-lead font-normal text-slate-800">
        A Caixa cobrava R$ 17 milhões. O caixa apertava.
      </p>

      <p>
        A Recuperação Judicial virava o último recurso.
      </p>

      <p className="text-slate-800 font-medium">
        A sensação era a mesma de milhares de empresários no Brasil:
      </p>

      {/* Narrative list */}
      <div className="pl-4 border-l-2 border-[#2b86ff] my-6 space-y-2.5 text-slate-700 text-lg sm:text-xl font-normal">
        <p className="mb-0">O banco apresenta um número.</p>
        <p className="mb-0">A empresa não consegue provar o contrário.</p>
        <p className="mb-0 font-medium text-[#132842]">O patrimônio entra em risco.</p>
      </div>

      {/* Subheading: Não foi pedido de desconto. Foi auditoria. */}
      <div className="my-10 pt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-6">
          Não foi pedido de desconto. Foi auditoria.
        </h2>

        <p>
          Foi aí que a equipe da Verum entrou no caso.
        </p>

        <p>
          Não foi renegociação no feeling.
        </p>

        <p className="font-semibold text-[#132842] text-xl sm:text-2xl">
          Foi método.
        </p>

        <p>
          Dez anos de movimentação bancária.
        </p>

        <p>
          Centenas de milhões rastreados contrato a contrato, lançamento a lançamento.
        </p>

        <p>
          Tudo confrontado com a lei e com as normas do Banco Central.
        </p>

        <div className="p-5 sm:p-6 bg-slate-50 border-l-2 border-[#132842] rounded-r-lg my-6">
          <p className="text-base sm:text-lg font-medium text-slate-800 mb-1">
            O objetivo era técnico e direto:
          </p>
          <p className="text-lg sm:text-xl font-bold text-[#132842] mb-0">
            separar o que era dívida real do que era cobrança abusiva.
          </p>
        </div>
      </div>
    </section>
  )
}
