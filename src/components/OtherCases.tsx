import React from 'react'

export function OtherCases() {
  const cases = [
    {
      title: 'Cobrança milionária virando quitação de R$ 13 mil.',
      highlight: 'R$ 13 mil',
    },
    {
      title: 'Execução de R$ 1,3 milhão fechada em 13%.',
      highlight: '13%',
    },
    {
      title: 'Leilão barrado.',
      highlight: 'Barrado',
    },
    {
      title: 'Penhora de faturamento caindo de 10% para 2,5%.',
      highlight: '2,5%',
    },
  ]

  return (
    <section id="other-cases" className="my-14 sm:my-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#132842] tracking-tight mb-4 font-title">
        O padrão se repete
      </h2>

      <div className="editorial-article-body mb-6">
        <p className="text-lg text-slate-700 font-medium">
          Em outros dossiês da Verum:
        </p>
      </div>

      {/* Grid of dossier highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6 border-y border-slate-200">
        {cases.map((item) => (
          <div
            key={item.title}
            className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4"
          >
            <span className="text-base sm:text-lg font-medium text-slate-800">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Centralizado conforme solicitado */}
      <div className="mt-10 space-y-2 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#132842] text-center font-title">
          O banco aperta.
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2b86ff] text-center font-title">
          A auditoria reabre o tabuleiro.
        </p>
      </div>
    </section>
  )
}
